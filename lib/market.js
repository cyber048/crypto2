"use strict";
// Real market data from Kraken's public REST API (no API key needed). Nothing here ever invents a price.
const PAIRS={BTC:{pair:"XBTUSD",keys:["XXBTZUSD","XBTUSD"]},ETH:{pair:"ETHUSD",keys:["XETHZUSD","ETHUSD"]},SOL:{pair:"SOLUSD",keys:["SOLUSD"]},XRP:{pair:"XRPUSD",keys:["XXRPZUSD","XRPUSD"]},ADA:{pair:"ADAUSD",keys:["ADAUSD"]},DOGE:{pair:"XDGUSD",keys:["XDGUSD","XXDGZUSD","DOGEUSD"]},LTC:{pair:"LTCUSD",keys:["XLTCZUSD","LTCUSD"]}};
const TF={"1m":1,"5m":5,"15m":15,"1h":60,"4h":240,"1D":1440,"1W":10080};
const OHLC_TTL={"1m":15e3,"5m":30e3,"15m":60e3,"1h":120e3,"4h":300e3,"1D":600e3,"1W":600e3};
const pick=(res,keys)=>{for(const k of keys)if(res&&res[k])return res[k];return null};
function parseTicker(result){const out={};for(const[sym,d]of Object.entries(PAIRS)){const t=pick(result,d.keys);if(!t)continue;const last=+t.c[0],open=+t.o;if(!(last>0))continue;
  out[sym]={last,open,change:open>0?(last/open-1)*100:0,high:+t.h[1],low:+t.l[1],volume:+t.v[1]*(+t.p[1]||last)}}return out}
function parseOhlc(result,keys){const rows=pick(result,keys);if(!Array.isArray(rows))return[];return rows.map(r=>({t:r[0]*1000,o:+r[1],h:+r[2],l:+r[3],c:+r[4],v:+r[6]})).filter(c=>c.c>0).slice(-120)}
function parseDepth(result,keys){const d=pick(result,keys);if(!d)return{asks:[],bids:[]};const f=a=>(a||[]).map(x=>[+x[0],+x[1]]);return{asks:f(d.asks),bids:f(d.bids)}}
function parseTrades(result,keys){const rows=pick(result,keys);if(!Array.isArray(rows))return[];return rows.slice(-14).reverse().map(r=>({p:+r[0],q:+r[1],t:r[2]*1000,side:r[3]==="b"?"buy":"sell"}))}

function createMarket(opts={}){
  const fetchImpl=opts.fetch||globalThis.fetch,now=opts.now||Date.now,base=opts.base||"https://api.kraken.com/0/public",STALE=opts.staleMs||30e3;
  const st={ticker:{},updatedAt:0,error:null,blockedUntil:0},cache=new Map(),listeners=[];
  async function call(path){
    if(now()<st.blockedUntil)throw new Error("Rate limited, backing off");
    const ac=new AbortController(),to=setTimeout(()=>ac.abort(),6000);
    try{const r=await fetchImpl(base+path,{signal:ac.signal,headers:{accept:"application/json"}});
      if(r.status===429){st.blockedUntil=now()+15e3;throw new Error("Rate limited (HTTP 429)")}
      if(!r.ok)throw new Error("HTTP "+r.status);const j=await r.json();
      if(j.error&&j.error.length){if(/rate limit/i.test(j.error.join()))st.blockedUntil=now()+15e3;throw new Error(j.error.join("; "))}
      return j.result}finally{clearTimeout(to)}}
  async function refreshTicker(){
    try{const res=await call("/Ticker?pair="+Object.values(PAIRS).map(p=>p.pair).join(","));const t=parseTicker(res);if(!Object.keys(t).length)throw new Error("Empty ticker response");
      st.ticker=t;st.updatedAt=now();st.error=null;listeners.forEach(f=>{try{f()}catch{}});return true}
    catch(e){st.error=String(e.message||e);return false}}
  async function cached(key,ttl,loader,empty){const c=cache.get(key);if(c&&now()-c.at<ttl)return{data:c.data,stale:false};
    try{const data=await loader();cache.set(key,{at:now(),data});return{data,stale:false}}catch(e){st.error=String(e.message||e);return c?{data:c.data,stale:true}:{data:empty,stale:true}}}
  const m={
    PAIRS,TF,parseTicker,parseOhlc,parseDepth,parseTrades,
    onTick:f=>listeners.push(f),
    refreshTicker,
    price(sym){const t=st.ticker[sym];return t&&now()-st.updatedAt<=STALE?t.last:null},
    status(){const age=st.updatedAt?now()-st.updatedAt:null;return{source:"Kraken public API",updatedAt:st.updatedAt||null,ageMs:age,stale:age==null||age>STALE,error:st.error}},
    prices(){return Object.fromEntries(Object.entries(st.ticker).map(([k,v])=>[k,v.last]))},
    stats(){return st.ticker},
    ohlc(sym,tf){const p=PAIRS[sym];if(!p||!TF[tf])return Promise.resolve({data:[],stale:true});return cached("o:"+sym+tf,OHLC_TTL[tf],async()=>parseOhlc(await call(`/OHLC?pair=${p.pair}&interval=${TF[tf]}`),p.keys),[])},
    depth(sym){const p=PAIRS[sym];if(!p)return Promise.resolve({data:{asks:[],bids:[]},stale:true});return cached("d:"+sym,4e3,async()=>parseDepth(await call(`/Depth?pair=${p.pair}&count=200`),p.keys),{asks:[],bids:[]})},
    trades(sym){const p=PAIRS[sym];if(!p)return Promise.resolve({data:[],stale:true});return cached("t:"+sym,5e3,async()=>parseTrades(await call(`/Trades?pair=${p.pair}&count=30`),p.keys),[])},
    spark(){return Object.fromEntries(Object.keys(PAIRS).map(s=>{const c=cache.get("o:"+s+"15m");return[s,c?c.data.slice(-30).map(x=>x.c):[]]}))},
    async warmSpark(){for(const s of Object.keys(PAIRS))await m.ohlc(s,"15m")},
    start(){refreshTicker();m.warmSpark();const a=setInterval(refreshTicker,5000),b=setInterval(()=>m.warmSpark(),120e3);a.unref?.();b.unref?.();return()=>{clearInterval(a);clearInterval(b)}}
  };
  return m;
}
module.exports={createMarket,PAIRS,TF,parseTicker,parseOhlc,parseDepth,parseTrades};
