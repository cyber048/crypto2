"use strict";
// Demo trading ledger. All money here is virtual. Every state change runs inside one SQL transaction.
const ALLOWED=["BTC","ETH","SOL","XRP","ADA","DOGE","LTC"];
const LIM={minNotional:1,minQty:1e-5,maxNotional:1e6,maxOpenOrders:50,startBalance:10000};
class LedgerError extends Error{constructor(code,message){super(message||code);this.code=code}}
const M=v=>Math.round((v+Number.EPSILON)*100)/100,Q=v=>Math.round(v*1e8)/1e8;

function migrate(db){
  db.exec(`CREATE TABLE IF NOT EXISTS positions(user_id INTEGER,symbol TEXT,quantity REAL,avg_price REAL,PRIMARY KEY(user_id,symbol));
CREATE TABLE IF NOT EXISTS orders(id INTEGER PRIMARY KEY,user_id INTEGER,client_id TEXT,symbol TEXT,side TEXT,type TEXT,quantity REAL,price REAL,fill_price REAL,status TEXT,reason TEXT,created_at TEXT DEFAULT CURRENT_TIMESTAMP,filled_at TEXT,UNIQUE(user_id,client_id));
CREATE INDEX IF NOT EXISTS idx_orders_open ON orders(status,symbol);
CREATE TABLE IF NOT EXISTS journal_entries(id INTEGER PRIMARY KEY,user_id INTEGER,trade_id INTEGER,symbol TEXT,title TEXT,notes TEXT,strategy TEXT,emotion TEXT,rating INTEGER DEFAULT 3,created_at TEXT DEFAULT CURRENT_TIMESTAMP);
CREATE TABLE IF NOT EXISTS alerts(id INTEGER PRIMARY KEY,user_id INTEGER,symbol TEXT,target_price REAL,condition TEXT,triggered INTEGER DEFAULT 0,created_at TEXT DEFAULT CURRENT_TIMESTAMP,triggered_at TEXT);
CREATE TABLE IF NOT EXISTS gamification(user_id INTEGER PRIMARY KEY,xp INTEGER DEFAULT 0,lvl INTEGER DEFAULT 1,streak INTEGER DEFAULT 0,mp INTEGER DEFAULT 0,boxes TEXT DEFAULT '[]',claimed TEXT DEFAULT '{}',flags TEXT DEFAULT '{}',updated_at TEXT DEFAULT CURRENT_TIMESTAMP);
CREATE TABLE IF NOT EXISTS chat_messages(id INTEGER PRIMARY KEY,user_id INTEGER,username TEXT,message TEXT,created_at TEXT DEFAULT CURRENT_TIMESTAMP);
CREATE TABLE IF NOT EXISTS dca_bots(id INTEGER PRIMARY KEY,user_id INTEGER,name TEXT,symbol TEXT,base_order REAL,take_profit REAL,avg_order REAL,dev REAL,max_orders INTEGER,size_mult REAL DEFAULT 1,step_mult REAL DEFAULT 1,status TEXT DEFAULT 'running',entries TEXT DEFAULT '[]',profit REAL DEFAULT 0,cycles INTEGER DEFAULT 0,created_at TEXT DEFAULT CURRENT_TIMESTAMP);`);
  db.exec(`CREATE TABLE IF NOT EXISTS notifications(id INTEGER PRIMARY KEY,user_id INTEGER,kind TEXT,symbol TEXT,condition TEXT,target REAL,price REAL,side TEXT,order_type TEXT,quantity REAL,pnl REAL,seen INTEGER DEFAULT 0,created_at TEXT DEFAULT CURRENT_TIMESTAMP);CREATE INDEX IF NOT EXISTS idx_notes_user ON notifications(user_id,id);`);
  for(const c of ["repeat INTEGER DEFAULT 0","armed INTEGER DEFAULT 1","enabled INTEGER DEFAULT 1","trigger_count INTEGER DEFAULT 0","triggered_price REAL"]){try{db.exec("ALTER TABLE alerts ADD COLUMN "+c)}catch{}}
  for(const c of ["fee REAL DEFAULT 0","pnl REAL DEFAULT 0","order_id INTEGER"]){try{db.exec("ALTER TABLE trades ADD COLUMN "+c)}catch{}}
  if(!db.prepare("SELECT 1 FROM positions LIMIT 1").get()&&db.prepare("SELECT 1 FROM trades LIMIT 1").get())rebuildPositions(db);
}
// Rebuild average-cost positions (and realised P/L per sell) from the trade history. Used once for pre-existing data.
function rebuildPositions(db){db.transaction(()=>{const pos=new Map();
  for(const t of db.prepare("SELECT id,user_id,symbol,side,quantity,price,total FROM trades ORDER BY id").all()){
    const k=t.user_id+":"+t.symbol,p=pos.get(k)||{u:t.user_id,s:t.symbol,q:0,a:0};
    if(t.side==="buy"){const nq=p.q+t.quantity;p.a=(p.q*p.a+t.total)/nq;p.q=nq}
    else{db.prepare("UPDATE trades SET pnl=? WHERE id=?").run(M(t.total-p.a*t.quantity),t.id);p.q=Math.max(0,p.q-t.quantity)}
    pos.set(k,p)}
  for(const p of pos.values())if(p.q>1e-9)db.prepare("INSERT OR REPLACE INTO positions VALUES(?,?,?,?)").run(p.u,p.s,Q(p.q),p.a)})()}

const balanceOf=(db,uid)=>{const u=db.prepare("SELECT balance FROM users WHERE id=?").get(uid);if(!u)throw new LedgerError("USER","Unknown user");return u.balance};
const position=(db,uid,s)=>db.prepare("SELECT quantity,avg_price FROM positions WHERE user_id=? AND symbol=?").get(uid,s)||{quantity:0,avg_price:0};

// Applies one fill. MUST be called inside a transaction. Fee is part of the cost basis on buys and is deducted from proceeds on sells.
function applyTrade(db,uid,t){
  const q=Q(t.quantity),p=t.price,gross=M(q*p),fee=M(gross*t.feeRate),bal=balanceOf(db,uid),pos=position(db,uid,t.symbol);
  if(!(q>0)||!(p>0))throw new LedgerError("INVALID","Invalid quantity or price");
  if(t.side==="sell"&&pos.quantity+1e-9<q)throw new LedgerError("ASSET","Not enough of this asset to sell");
  const closing=t.side==="sell"&&Math.abs(pos.quantity-q)<1e-9;
  if(!closing&&(q<LIM.minQty||gross<LIM.minNotional))throw new LedgerError("MIN","Order is below the minimum size ("+LIM.minNotional+" USD)");
  if(gross>LIM.maxNotional)throw new LedgerError("MAX","Order is above the maximum size");
  let newBal,pnl=0;
  if(t.side==="buy"){
    const cost=M(gross+fee);if(bal+1e-9<cost)throw new LedgerError("FUNDS","Not enough virtual USD");
    newBal=M(bal-cost);const nq=Q(pos.quantity+q),avg=(pos.quantity*pos.avg_price+gross+fee)/nq;
    db.prepare("INSERT INTO positions(user_id,symbol,quantity,avg_price) VALUES(?,?,?,?) ON CONFLICT(user_id,symbol) DO UPDATE SET quantity=excluded.quantity,avg_price=excluded.avg_price").run(uid,t.symbol,nq,avg);
  }else{
    if(pos.quantity+1e-9<q)throw new LedgerError("ASSET","Not enough of this asset to sell");
    const proceeds=M(gross-fee);newBal=M(bal+proceeds);pnl=M(proceeds-pos.avg_price*q);const nq=Q(pos.quantity-q);
    if(nq<1e-9)db.prepare("DELETE FROM positions WHERE user_id=? AND symbol=?").run(uid,t.symbol);
    else db.prepare("UPDATE positions SET quantity=? WHERE user_id=? AND symbol=?").run(nq,uid,t.symbol);
  }
  db.prepare("UPDATE users SET balance=? WHERE id=?").run(newBal,uid);
  const r=db.prepare("INSERT INTO trades(user_id,symbol,side,quantity,price,total,fee,pnl,order_id) VALUES(?,?,?,?,?,?,?,?,?)").run(uid,t.symbol,t.side,q,p,gross,fee,pnl,t.orderId||null);
  return{balance:newBal,fee,pnl,total:gross,tradeId:Number(r.lastInsertRowid)};
}

function validate(o){
  const symbol=String(o.symbol||"").toUpperCase(),side=String(o.side||""),type=String(o.type||"market"),q=Number(o.quantity),price=o.price==null||o.price===""?null:Number(o.price),clientId=o.clientId?String(o.clientId).slice(0,64):null;
  if(!ALLOWED.includes(symbol))throw new LedgerError("SYMBOL","Unknown asset");
  if(!["buy","sell"].includes(side))throw new LedgerError("SIDE","Side must be buy or sell");
  if(!["market","limit","stop","tp"].includes(type))throw new LedgerError("TYPE","Unknown order type");
  if(!Number.isFinite(q)||q<=0||q>1e6)throw new LedgerError("QTY","Invalid quantity");
  if(type!=="market"&&!(Number.isFinite(price)&&price>0))throw new LedgerError("PRICE","A valid price is required");
  if((type==="stop"||type==="tp")&&side!=="sell")throw new LedgerError("SIDE","Stop-loss and take-profit orders are sell orders");
  return{symbol,side,type,quantity:Q(q),price:type==="market"?null:price,clientId};
}
const getOrder=(db,id)=>db.prepare("SELECT id,symbol,side,type,quantity,price,fill_price,status,reason,created_at,filled_at FROM orders WHERE id=?").get(id);

// ctx: {price:(symbol)=>fresh price or null, feeRate}. Idempotent per (user, clientId).
function placeOrder(db,uid,input,ctx){
  const v=validate(input);
  if(v.clientId){const d=db.prepare("SELECT id FROM orders WHERE user_id=? AND client_id=?").get(uid,v.clientId);if(d)return{order:getOrder(db,d.id),duplicate:true,balance:balanceOf(db,uid)}}
  return db.transaction(()=>{
    const cur=ctx.price(v.symbol);if(!cur)throw new LedgerError("STALE","Market data is unavailable or stale. Try again in a moment.");
    if(v.type==="market"){
      const id=Number(db.prepare("INSERT INTO orders(user_id,client_id,symbol,side,type,quantity,status) VALUES(?,?,?,?,?,?,'open')").run(uid,v.clientId,v.symbol,v.side,"market",v.quantity).lastInsertRowid);
      const r=applyTrade(db,uid,{symbol:v.symbol,side:v.side,quantity:v.quantity,price:cur,feeRate:ctx.feeRate,orderId:id});
      db.prepare("UPDATE orders SET status='filled',fill_price=?,filled_at=CURRENT_TIMESTAMP WHERE id=?").run(cur,id);
      return{order:getOrder(db,id),balance:r.balance,trade:r};
    }
    if(v.type==="stop"&&!(v.price<cur))throw new LedgerError("TRIGGER","A stop-loss trigger must be below the current price");
    if(v.type==="tp"&&!(v.price>cur))throw new LedgerError("TRIGGER","A take-profit trigger must be above the current price");
    if(db.prepare("SELECT COUNT(*) n FROM orders WHERE user_id=? AND status='open'").get(uid).n>=LIM.maxOpenOrders)throw new LedgerError("LIMIT","Too many open orders");
    if(v.side==="sell"){
      const held=position(db,uid,v.symbol).quantity,res=db.prepare("SELECT COALESCE(SUM(quantity),0) q FROM orders WHERE user_id=? AND symbol=? AND side='sell' AND status='open'").get(uid,v.symbol).q;
      if(held-res+1e-9<v.quantity)throw new LedgerError("ASSET","Not enough free asset (part of it is reserved by other open sell orders)");
    }else{
      const res=db.prepare("SELECT COALESCE(SUM(quantity*price),0) c FROM orders WHERE user_id=? AND side='buy' AND status='open'").get(uid).c*(1+ctx.feeRate);
      if(balanceOf(db,uid)-res+1e-9<v.quantity*v.price*(1+ctx.feeRate))throw new LedgerError("FUNDS","Not enough free virtual USD (part of it is reserved by other open buy orders)");
    }
    const id=Number(db.prepare("INSERT INTO orders(user_id,client_id,symbol,side,type,quantity,price,status) VALUES(?,?,?,?,?,?,?,'open')").run(uid,v.clientId,v.symbol,v.side,v.type,v.quantity,v.price).lastInsertRowid);
    return{order:getOrder(db,id),balance:balanceOf(db,uid)};
  })();
}
function cancelOrder(db,uid,id){return db.transaction(()=>{const o=db.prepare("SELECT status FROM orders WHERE id=? AND user_id=?").get(id,uid);if(!o)throw new LedgerError("NOTFOUND","Order not found");if(o.status!=="open")throw new LedgerError("CLOSED","Only open orders can be cancelled");db.prepare("UPDATE orders SET status='cancelled' WHERE id=?").run(id);return getOrder(db,id)})()}

// Fills every open limit / stop-loss / take-profit order whose condition is met at the current fresh price.
function matchOrders(db,price,feeRate){
  const fills=[];
  for(const o of db.prepare("SELECT * FROM orders WHERE status='open' ORDER BY id").all()){
    const p=price(o.symbol);if(!p)continue;
    const hit=o.type==="limit"?(o.side==="buy"?p<=o.price:p>=o.price):o.type==="stop"?p<=o.price:o.type==="tp"?p>=o.price:false;
    if(!hit)continue;
    try{db.transaction(()=>{const r=applyTrade(db,o.user_id,{symbol:o.symbol,side:o.side,quantity:o.quantity,price:p,feeRate,orderId:o.id});
      db.prepare("UPDATE orders SET status='filled',fill_price=?,filled_at=CURRENT_TIMESTAMP WHERE id=?").run(p,o.id);fills.push({orderId:o.id,userId:o.user_id,symbol:o.symbol,side:o.side,type:o.type,price:p,quantity:o.quantity,pnl:r.pnl});addNotification(db,o.user_id,{kind:"fill",symbol:o.symbol,side:o.side,order_type:o.type,price:p,quantity:o.quantity,pnl:r.pnl})})()}
    catch(e){db.prepare("UPDATE orders SET status='rejected',reason=? WHERE id=?").run(e.code||"ERROR",o.id)}
  }
  return fills;
}

function portfolio(db,uid,price){
  const bal=balanceOf(db,uid);
  const rawPositions=db.prepare("SELECT symbol,quantity,avg_price FROM positions WHERE user_id=? AND quantity>1e-9 ORDER BY symbol").all(uid);
  const cryptoValue=M(rawPositions.reduce((a,p)=>{const pr=price(p.symbol);return a+(pr?pr*p.quantity:0)},0));
  const equity=M(bal+cryptoValue);
  const positions=rawPositions.map(p=>{
    const pr=price(p.symbol);
    const val=pr?M(pr*p.quantity):null;
    const un=pr?M((pr-p.avg_price)*p.quantity):null;
    const unPct=pr&&p.avg_price>0?M((pr/p.avg_price-1)*100):0;
    const share=equity>0&&val?M((val/equity)*100):0;
    return{symbol:p.symbol,quantity:p.quantity,avg_price:p.avg_price,price:pr||null,value:val,unrealized:un,unrealized_pct:unPct,share};
  });
  const totalUnrealized=M(positions.reduce((a,p)=>a+(p.unrealized||0),0));
  const agg=db.prepare("SELECT COALESCE(SUM(pnl),0) realized,COALESCE(SUM(fee),0) fees,COUNT(*) n FROM trades WHERE user_id=?").get(uid);
  return{
    balance:bal,cryptoValue,equity,totalUnrealized,
    positions,holdings:positions.map(p=>({symbol:p.symbol,quantity:p.quantity,value:p.value,avg_price:p.avg_price,unrealized:p.unrealized,unrealized_pct:p.unrealized_pct,share:p.share})),
    realized:M(agg.realized),fees:M(agg.fees),tradeCount:agg.n,
    orders:db.prepare("SELECT id,symbol,side,type,quantity,price,status,created_at FROM orders WHERE user_id=? AND status='open' ORDER BY id DESC").all(uid),
    trades:db.prepare("SELECT * FROM trades WHERE user_id=? ORDER BY id DESC LIMIT 100").all(uid)
  };
}
const cell=v=>{if(v==null)return"";let s=String(v);if(typeof v==="string"&&/^[=+\-@\t\r]/.test(s))s="'"+s;return/[",\n\r]/.test(s)?'"'+s.replace(/"/g,'""')+'"':s};
function tradesCsv(db,uid){const rows=db.prepare("SELECT id,created_at,symbol,side,quantity,price,total,fee,pnl FROM trades WHERE user_id=? ORDER BY id").all(uid);
  return["id,time_utc,symbol,side,quantity,price,total_usd,fee_usd,realized_pnl_usd",...rows.map(r=>[r.id,r.created_at,r.symbol,r.side,r.quantity,r.price,r.total,r.fee,r.pnl].map(cell).join(","))].join("\n")+"\n"}
function resetDemo(db,uid){db.transaction(()=>{for(const t of["trades","orders","positions"])db.prepare(`DELETE FROM ${t} WHERE user_id=?`).run(uid);db.prepare("UPDATE users SET balance=? WHERE id=?").run(LIM.startBalance,uid)})()}

function addJournalEntry(db,uid,entry){
  const symbol=String(entry.symbol||"BTC").toUpperCase(),title=String(entry.title||"").trim().slice(0,100),notes=String(entry.notes||"").trim().slice(0,2000),strategy=String(entry.strategy||"General").trim().slice(0,50),emotion=String(entry.emotion||"Neutral").trim().slice(0,50),rating=Math.max(1,Math.min(5,Math.floor(Number(entry.rating)||3))),tradeId=entry.tradeId?Number(entry.tradeId):null;
  const r=db.prepare("INSERT INTO journal_entries(user_id,trade_id,symbol,title,notes,strategy,emotion,rating) VALUES(?,?,?,?,?,?,?,?)").run(uid,tradeId,symbol,title,notes,strategy,emotion,rating);
  return db.prepare("SELECT * FROM journal_entries WHERE id=?").get(r.lastInsertRowid);
}
function getJournalEntries(db,uid){return db.prepare("SELECT * FROM journal_entries WHERE user_id=? ORDER BY id DESC").all(uid)}
function deleteJournalEntry(db,uid,id){return db.prepare("DELETE FROM journal_entries WHERE id=? AND user_id=?").run(id,uid).changes>0}

// ---- notifications (price alerts and order fills) ----
function addNotification(db,uid,n){
  const r=db.prepare("INSERT INTO notifications(user_id,kind,symbol,condition,target,price,side,order_type,quantity,pnl) VALUES(?,?,?,?,?,?,?,?,?,?)").run(uid,n.kind,n.symbol||null,n.condition||null,n.target??null,n.price??null,n.side||null,n.order_type||null,n.quantity??null,n.pnl??null);
  db.prepare("DELETE FROM notifications WHERE user_id=? AND id<COALESCE((SELECT id FROM notifications WHERE user_id=? ORDER BY id DESC LIMIT 1 OFFSET 199),0)").run(uid,uid);
  return Number(r.lastInsertRowid);
}
function getNotifications(db,uid,after){
  const rows=db.prepare("SELECT id,kind,symbol,condition,target,price,side,order_type,quantity,pnl,seen,created_at FROM notifications WHERE user_id=? AND id>? ORDER BY id DESC LIMIT 50").all(uid,Math.max(0,Number(after)||0)).reverse();
  return{notifications:rows,unseen:db.prepare("SELECT COUNT(*) n FROM notifications WHERE user_id=? AND seen=0").get(uid).n};
}
const markNotificationsSeen=(db,uid)=>db.prepare("UPDATE notifications SET seen=1 WHERE user_id=?").run(uid).changes;
const clearNotifications=(db,uid)=>db.prepare("DELETE FROM notifications WHERE user_id=?").run(uid).changes;

// ---- price alerts ----
const alertView=a=>({...a,status:!a.enabled?"paused":(a.triggered&&!a.repeat?"triggered":"active")});
const checkSide=(cond,target,cur)=>{if(cur&&((cond==="gte"&&target<=cur)||(cond==="lte"&&target>=cur)))throw new LedgerError("TRIGGER",cond==="gte"?"The price is already above this target":"The price is already below this target")};
function createAlert(db,uid,alert,currentPrice){
  const symbol=String(alert.symbol||"").toUpperCase();if(!ALLOWED.includes(symbol))throw new LedgerError("SYMBOL","Unknown asset");
  const target=Number(alert.targetPrice??alert.target_price);if(!Number.isFinite(target)||target<=0)throw new LedgerError("PRICE","Invalid target price");
  const condition=alert.condition?String(alert.condition):(currentPrice&&target>=currentPrice?"gte":"lte");
  if(!["gte","lte"].includes(condition))throw new LedgerError("COND","Condition must be gte or lte");
  checkSide(condition,target,currentPrice);
  if(db.prepare("SELECT COUNT(*) n FROM alerts WHERE user_id=?").get(uid).n>=50)throw new LedgerError("LIMIT","Too many alerts (maximum 50)");
  const r=db.prepare("INSERT INTO alerts(user_id,symbol,target_price,condition,repeat) VALUES(?,?,?,?,?)").run(uid,symbol,target,condition,alert.repeat?1:0);
  return alertView(db.prepare("SELECT * FROM alerts WHERE id=?").get(r.lastInsertRowid));
}
const getAlerts=(db,uid)=>db.prepare("SELECT * FROM alerts WHERE user_id=? ORDER BY id DESC").all(uid).map(alertView);
const deleteAlert=(db,uid,id)=>db.prepare("DELETE FROM alerts WHERE id=? AND user_id=?").run(id,uid).changes>0;
function updateAlert(db,uid,id,p,priceFn){
  const a=db.prepare("SELECT * FROM alerts WHERE id=? AND user_id=?").get(id,uid);if(!a)throw new LedgerError("NOTFOUND","Alert not found");
  let target=a.target_price,cond=a.condition,rep=a.repeat,en=a.enabled,reset=false;
  if(p.target_price!==undefined||p.targetPrice!==undefined){const t=Number(p.target_price??p.targetPrice);if(!Number.isFinite(t)||t<=0)throw new LedgerError("PRICE","Invalid target price");target=t;reset=true}
  if(p.condition!==undefined){if(!["gte","lte"].includes(p.condition))throw new LedgerError("COND","Condition must be gte or lte");cond=p.condition;reset=true}
  if(p.repeat!==undefined)rep=p.repeat?1:0;
  if(p.enabled!==undefined){en=p.enabled?1:0;if(en&&!a.enabled)reset=true}
  if(reset&&en)checkSide(cond,target,priceFn&&priceFn(a.symbol));
  db.prepare("UPDATE alerts SET target_price=?,condition=?,repeat=?,enabled=?,triggered=CASE WHEN ? THEN 0 ELSE triggered END,armed=CASE WHEN ? THEN 1 ELSE armed END WHERE id=?").run(target,cond,rep,en,reset?1:0,reset?1:0,id);
  return alertView(db.prepare("SELECT * FROM alerts WHERE id=?").get(id));
}
// One-shot alerts fire once. Repeating alerts fire again only after the price has crossed back (re-armed). Every hit stores a notification.
function matchAlerts(db,price){
  const out=[];
  db.transaction(()=>{for(const a of db.prepare("SELECT * FROM alerts WHERE enabled=1").all()){
    const p=price(a.symbol);if(!p)continue;
    const hit=a.condition==="gte"?p>=a.target_price:p<=a.target_price;
    if(a.repeat){if(!hit){if(!a.armed)db.prepare("UPDATE alerts SET armed=1 WHERE id=?").run(a.id);continue}if(!a.armed)continue}
    else if(a.triggered||!hit)continue;
    db.prepare("UPDATE alerts SET triggered=1,triggered_at=CURRENT_TIMESTAMP,triggered_price=?,trigger_count=COALESCE(trigger_count,0)+1,armed=0 WHERE id=?").run(p,a.id);
    addNotification(db,a.user_id,{kind:"alert",symbol:a.symbol,condition:a.condition,target:a.target_price,price:p});
    out.push({...a,triggered:1,currentPrice:p});
  }})();
  return out;
}

function getGamification(db,uid){
  const row=db.prepare("SELECT * FROM gamification WHERE user_id=?").get(uid);if(!row)return{xp:0,lvl:1,streak:0,mp:0,boxes:[],claimed:{},flags:{}};
  return{xp:row.xp,lvl:row.lvl,streak:row.streak,mp:row.mp,boxes:JSON.parse(row.boxes||"[]"),claimed:JSON.parse(row.claimed||"{}"),flags:JSON.parse(row.flags||"{}")};
}
function saveGamification(db,uid,data){
  const xp=Math.max(0,Math.floor(Number(data.xp)||0)),lvl=Math.max(1,Math.floor(Number(data.lvl)||1)),streak=Math.max(0,Math.floor(Number(data.streak)||0)),mp=Math.max(0,Math.floor(Number(data.mp)||0));
  const boxes=JSON.stringify(Array.isArray(data.boxes)?data.boxes:[]),claimed=JSON.stringify(data.claimed&&typeof data.claimed==="object"?data.claimed:{}),flags=JSON.stringify(data.flags&&typeof data.flags==="object"?data.flags:{});
  db.prepare("INSERT INTO gamification(user_id,xp,lvl,streak,mp,boxes,claimed,flags,updated_at) VALUES(?,?,?,?,?,?,?,?,CURRENT_TIMESTAMP) ON CONFLICT(user_id) DO UPDATE SET xp=excluded.xp,lvl=excluded.lvl,streak=excluded.streak,mp=excluded.mp,boxes=excluded.boxes,claimed=excluded.claimed,flags=excluded.flags,updated_at=CURRENT_TIMESTAMP").run(uid,xp,lvl,streak,mp,boxes,claimed,flags);
  return getGamification(db,uid);
}

function getChatMessages(db,limit=50){const rows=db.prepare("SELECT * FROM chat_messages ORDER BY id DESC LIMIT ?").all(limit);return rows.reverse()}
function addChatMessage(db,uid,username,message){
  const msg=String(message||"").trim().slice(0,500);if(!msg)throw new LedgerError("INVALID","Message cannot be empty");
  const uname=String(username||"User").slice(0,30);const r=db.prepare("INSERT INTO chat_messages(user_id,username,message) VALUES(?,?,?)").run(uid,uname,msg);
  return db.prepare("SELECT * FROM chat_messages WHERE id=?").get(r.lastInsertRowid);
}

function createBot(db,uid,cfg){
  const name=String(cfg.name||"DCA Bot").trim().slice(0,50),symbol=String(cfg.symbol||"BTC").toUpperCase();
  if(!ALLOWED.includes(symbol))throw new LedgerError("SYMBOL","Unknown asset");
  const base_order=Math.max(1,Number(cfg.base_order||cfg.base)||100),take_profit=Math.max(0.1,Number(cfg.take_profit||cfg.tp)||1.5),avg_order=Math.max(1,Number(cfg.avg_order||cfg.avgSz)||100);
  const dev=Math.max(0.1,Number(cfg.dev)||1.0),max_orders=Math.max(0,Math.min(10,Math.floor(Number(cfg.max_orders??cfg.max)??3))),size_mult=Math.max(1,Number(cfg.size_mult||cfg.szM)||1.5),step_mult=Math.max(1,Number(cfg.step_mult||cfg.stM)||1.5);
  const r=db.prepare("INSERT INTO dca_bots(user_id,name,symbol,base_order,take_profit,avg_order,dev,max_orders,size_mult,step_mult,status) VALUES(?,?,?,?,?,?,?,?,?,?,'running')").run(uid,name,symbol,base_order,take_profit,avg_order,dev,max_orders,size_mult,step_mult);
  return db.prepare("SELECT * FROM dca_bots WHERE id=?").get(r.lastInsertRowid);
}
function getBots(db,uid){const rows=db.prepare("SELECT * FROM dca_bots WHERE user_id=? ORDER BY id DESC").all(uid);return rows.map(b=>({...b,entries:JSON.parse(b.entries||"[]")}))}
function toggleBot(db,uid,id){
  const b=db.prepare("SELECT status FROM dca_bots WHERE id=? AND user_id=?").get(id,uid);if(!b)throw new LedgerError("NOTFOUND","Bot not found");
  const next=b.status==="running"?"stopped":"running";db.prepare("UPDATE dca_bots SET status=? WHERE id=?").run(next,id);return{id,status:next};
}
function deleteBot(db,uid,id){return db.prepare("DELETE FROM dca_bots WHERE id=? AND user_id=?").run(id,uid).changes>0}
function matchBots(db,price,feeRate){
  const fills=[];const running=db.prepare("SELECT * FROM dca_bots WHERE status='running'").all();
  for(const bot of running){
    const p=price(bot.symbol);if(!p)continue;
    let entries=JSON.parse(bot.entries||"[]");
    try{
      if(entries.length===0){
        const q=Q(bot.base_order/p);
        if(q>0){db.transaction(()=>{const r=applyTrade(db,bot.user_id,{symbol:bot.symbol,side:"buy",quantity:q,price:p,feeRate});entries.push({p,q,total:r.total});db.prepare("UPDATE dca_bots SET entries=? WHERE id=?").run(JSON.stringify(entries),bot.id);fills.push({botId:bot.id,action:"base_buy",price:p,quantity:q})})()}
      }else{
        const totQ=entries.reduce((s,e)=>s+e.q,0),totCost=entries.reduce((s,e)=>s+e.p*e.q,0),avgP=totCost/totQ;
        if(p>=avgP*(1+bot.take_profit/100)){
          db.transaction(()=>{const sq=Math.floor(totQ*1e6)/1e6;applyTrade(db,bot.user_id,{symbol:bot.symbol,side:"sell",quantity:sq,price:p,feeRate});const profit=M(p*sq-totCost);db.prepare("UPDATE dca_bots SET entries='[]',profit=profit+?,cycles=cycles+1 WHERE id=?").run(profit,bot.id);fills.push({botId:bot.id,action:"take_profit",price:p,profit})})()}
        else{
          const f=entries.length-1,lastP=entries[entries.length-1].p,targetDip=lastP*(1-bot.dev*(bot.step_mult**f)/100);
          if(entries.length<=bot.max_orders&&p<=targetDip){
            const usd=bot.avg_order*(bot.size_mult**f),q=Q(usd/p);
            if(q>0){db.transaction(()=>{const r=applyTrade(db,bot.user_id,{symbol:bot.symbol,side:"buy",quantity:q,price:p,feeRate});entries.push({p,q,total:r.total});db.prepare("UPDATE dca_bots SET entries=? WHERE id=?").run(JSON.stringify(entries),bot.id);fills.push({botId:bot.id,action:"avg_buy",price:p,quantity:q})})()}
          }
        }
      }
    }catch(e){db.prepare("UPDATE dca_bots SET status='error' WHERE id=?").run(bot.id)}
  }
  return fills;
}

module.exports={
  ALLOWED,LIM,LedgerError,migrate,rebuildPositions,applyTrade,placeOrder,cancelOrder,matchOrders,portfolio,tradesCsv,resetDemo,balanceOf,
  addJournalEntry,getJournalEntries,deleteJournalEntry,
  createAlert,getAlerts,deleteAlert,updateAlert,matchAlerts,addNotification,getNotifications,markNotificationsSeen,clearNotifications,
  getGamification,saveGamification,
  getChatMessages,addChatMessage,
  createBot,getBots,toggleBot,deleteBot,matchBots
};
