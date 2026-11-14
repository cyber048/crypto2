"use strict";
const test=require("node:test"),assert=require("node:assert/strict"),L=require("../lib/ledger"),{makeDb}=require("./helpers");
const FEE=0.001;
function setup(){const db=makeDb();db.prepare("INSERT INTO users(id,username) VALUES(1,'a'),(2,'b')").run();L.migrate(db);let px={BTC:100,ETH:50};const ctx={price:s=>px[s]??null,feeRate:FEE};return{db,ctx,set:o=>Object.assign(px,o),clear:()=>{px={}}}}
const buy=(e,q,id,s="BTC")=>L.placeOrder(e.db,1,{symbol:s,side:"buy",type:"market",quantity:q,clientId:id},e.ctx);
const sell=(e,q,id,s="BTC")=>L.placeOrder(e.db,1,{symbol:s,side:"sell",type:"market",quantity:q,clientId:id},e.ctx);

test("buy deducts cost + fee and records position with fee in cost basis",()=>{const e=setup();const r=buy(e,10,"c1");
  assert.equal(r.balance,8999);assert.equal(r.trade.fee,1);const p=e.db.prepare("SELECT * FROM positions WHERE user_id=1").get();assert.equal(p.quantity,10);assert.equal(+p.avg_price.toFixed(6),100.1)});
test("sell realises P/L net of fees against average cost",()=>{const e=setup();buy(e,10,"c1");e.set({BTC:120});const r=sell(e,10,"c2");
  assert.equal(r.trade.pnl,M2(1200-1.2-1001));assert.equal(r.balance,M2(8999+1198.8));assert.equal(e.db.prepare("SELECT COUNT(*) n FROM positions").get().n,0)});
const M2=v=>Math.round(v*100)/100;
test("average entry price across two buys",()=>{const e=setup();buy(e,10,"c1");e.set({BTC:200});buy(e,10,"c2");const p=e.db.prepare("SELECT * FROM positions WHERE user_id=1").get();
  assert.equal(p.quantity,20);assert.equal(+p.avg_price.toFixed(4),+((1001+2002)/20).toFixed(4))});
test("rejects insufficient funds and insufficient holdings without changing state",()=>{const e=setup();
  assert.throws(()=>buy(e,1000,"x"),{code:"FUNDS"});assert.throws(()=>sell(e,1,"y"),{code:"ASSET"});
  assert.equal(L.balanceOf(e.db,1),10000);assert.equal(e.db.prepare("SELECT COUNT(*) n FROM trades").get().n,0);assert.equal(e.db.prepare("SELECT COUNT(*) n FROM orders").get().n,0)});
test("duplicate clientId is idempotent (no second fill)",()=>{const e=setup();buy(e,1,"same");const r=buy(e,1,"same");assert.equal(r.duplicate,true);assert.equal(e.db.prepare("SELECT COUNT(*) n FROM trades").get().n,1);assert.equal(L.balanceOf(e.db,1),M2(10000-100.1))});
test("validation: bad symbol, side, quantity, min notional, missing price",()=>{const e=setup();
  for(const [o,c] of [[{symbol:"XXX",side:"buy",quantity:1},"SYMBOL"],[{symbol:"BTC",side:"hold",quantity:1},"SIDE"],[{symbol:"BTC",side:"buy",quantity:-1},"QTY"],[{symbol:"BTC",side:"buy",quantity:NaN},"QTY"],[{symbol:"BTC",side:"buy",type:"limit",quantity:1},"PRICE"],[{symbol:"BTC",side:"buy",quantity:0.001},"MIN"]])
    assert.throws(()=>L.placeOrder(e.db,1,o,e.ctx),{code:c})});
test("market order is refused when the price is unavailable or stale",()=>{const e=setup();e.clear();assert.throws(()=>buy(e,1,"s"),{code:"STALE"})});
test("limit buy fills only when price falls to the limit, at the market price",()=>{const e=setup();
  L.placeOrder(e.db,1,{symbol:"BTC",side:"buy",type:"limit",quantity:5,price:90,clientId:"l1"},e.ctx);
  assert.equal(L.matchOrders(e.db,e.ctx.price,FEE).length,0);e.set({BTC:89});const f=L.matchOrders(e.db,e.ctx.price,FEE);
  assert.equal(f.length,1);assert.equal(f[0].price,89);assert.equal(L.balanceOf(e.db,1),M2(10000-445-0.45))});
test("stop-loss triggers on a fall and take-profit on a rise; trigger sanity is enforced",()=>{const e=setup();buy(e,10,"b");
  assert.throws(()=>L.placeOrder(e.db,1,{symbol:"BTC",side:"sell",type:"stop",quantity:5,price:110,clientId:"s0"},e.ctx),{code:"TRIGGER"});
  assert.throws(()=>L.placeOrder(e.db,1,{symbol:"BTC",side:"sell",type:"tp",quantity:5,price:90,clientId:"t0"},e.ctx),{code:"TRIGGER"});
  assert.throws(()=>L.placeOrder(e.db,1,{symbol:"BTC",side:"buy",type:"stop",quantity:5,price:90,clientId:"t1"},e.ctx),{code:"SIDE"});
  L.placeOrder(e.db,1,{symbol:"BTC",side:"sell",type:"stop",quantity:5,price:90,clientId:"sl"},e.ctx);L.placeOrder(e.db,1,{symbol:"BTC",side:"sell",type:"tp",quantity:5,price:130,clientId:"tp"},e.ctx);
  e.set({BTC:95});assert.equal(L.matchOrders(e.db,e.ctx.price,FEE).length,0);
  e.set({BTC:89});let f=L.matchOrders(e.db,e.ctx.price,FEE);assert.deepEqual(f.map(x=>x.type),["stop"]);
  e.set({BTC:131});f=L.matchOrders(e.db,e.ctx.price,FEE);assert.deepEqual(f.map(x=>x.type),["tp"]);assert.equal(e.db.prepare("SELECT COUNT(*) n FROM positions").get().n,0)});
test("open sell orders reserve holdings; open buy orders reserve funds",()=>{const e=setup();buy(e,10,"b");
  L.placeOrder(e.db,1,{symbol:"BTC",side:"sell",type:"limit",quantity:8,price:150,clientId:"a"},e.ctx);
  assert.throws(()=>L.placeOrder(e.db,1,{symbol:"BTC",side:"sell",type:"limit",quantity:3,price:160,clientId:"b2"},e.ctx),{code:"ASSET"});
  assert.throws(()=>L.placeOrder(e.db,1,{symbol:"ETH",side:"buy",type:"limit",quantity:1000,price:49,clientId:"big"},e.ctx),{code:"FUNDS"})});
test("cancel works only for the owner's open orders",()=>{const e=setup();const o=L.placeOrder(e.db,1,{symbol:"BTC",side:"buy",type:"limit",quantity:1,price:50,clientId:"k"},e.ctx).order;
  assert.throws(()=>L.cancelOrder(e.db,2,o.id),{code:"NOTFOUND"});assert.equal(L.cancelOrder(e.db,1,o.id).status,"cancelled");assert.throws(()=>L.cancelOrder(e.db,1,o.id),{code:"CLOSED"});assert.equal(L.matchOrders(e.db,e.ctx.price,FEE).length,0)});
test("a fill that becomes impossible is rejected, not applied",()=>{const e=setup();L.placeOrder(e.db,1,{symbol:"BTC",side:"buy",type:"limit",quantity:50,price:90,clientId:"z"},e.ctx);
  e.db.prepare("UPDATE users SET balance=10 WHERE id=1").run();e.set({BTC:80});assert.equal(L.matchOrders(e.db,e.ctx.price,FEE).length,0);
  assert.equal(e.db.prepare("SELECT status,reason FROM orders").get().status,"rejected");assert.equal(L.balanceOf(e.db,1),10)});
test("users cannot touch each other's data",()=>{const e=setup();buy(e,2,"u1");assert.equal(L.portfolio(e.db,2,e.ctx.price).positions.length,0);assert.equal(L.portfolio(e.db,1,e.ctx.price).positions.length,1)});
test("portfolio reports unrealized/realized P/L, fees and equity",()=>{const e=setup();buy(e,10,"b");e.set({BTC:110});const p=L.portfolio(e.db,1,e.ctx.price);
  assert.equal(p.positions[0].unrealized,M2((110-100.1)*10));assert.equal(p.fees,1);assert.equal(p.equity,M2(8999+1100))});
test("CSV export escapes quotes and neutralises formula injection",()=>{const e=setup();buy(e,1,"c");e.db.prepare("UPDATE trades SET symbol='=cmd|calc' WHERE id=1").run();const csv=L.tradesCsv(e.db,1);
  assert.match(csv.split("\n")[0],/^id,time_utc,symbol/);assert.match(csv,/'=cmd\|calc/);assert.ok(!/,=cmd/.test(csv))});
test("demo reset restores balance and clears trades, orders and positions",()=>{const e=setup();buy(e,3,"b");L.placeOrder(e.db,1,{symbol:"BTC",side:"buy",type:"limit",quantity:1,price:50,clientId:"o"},e.ctx);L.resetDemo(e.db,1);
  assert.equal(L.balanceOf(e.db,1),10000);for(const t of["trades","orders","positions"])assert.equal(e.db.prepare(`SELECT COUNT(*) n FROM ${t}`).get().n,0)});
test("migration rebuilds positions and sell P/L from legacy trades",()=>{const db=makeDb();db.prepare("INSERT INTO users(id,username) VALUES(1,'a')").run();
  db.prepare("INSERT INTO trades(user_id,symbol,side,quantity,price,total) VALUES(1,'BTC','buy',2,100,200),(1,'BTC','buy',2,200,400),(1,'BTC','sell',1,300,300)").run();L.migrate(db);
  const p=db.prepare("SELECT * FROM positions").get();assert.equal(p.quantity,3);assert.equal(p.avg_price,150);assert.equal(db.prepare("SELECT pnl FROM trades WHERE side='sell'").get().pnl,150)});

test("journal entries: create, list, delete, and user isolation",()=>{const e=setup();
  const j1=L.addJournalEntry(e.db,1,{symbol:"BTC",title:"Breakout trade",notes:"Strong volume",strategy:"Breakout",rating:4});
  assert.equal(j1.title,"Breakout trade");assert.equal(j1.rating,4);assert.equal(j1.symbol,"BTC");
  const list1=L.getJournalEntries(e.db,1);assert.equal(list1.length,1);
  const list2=L.getJournalEntries(e.db,2);assert.equal(list2.length,0);
  assert.equal(L.deleteJournalEntry(e.db,1,j1.id),true);
  assert.equal(L.getJournalEntries(e.db,1).length,0)});

test("price alerts: create, match on price threshold, and clear",()=>{const e=setup();
  const a1=L.createAlert(e.db,1,{symbol:"BTC",targetPrice:120,condition:"gte"},100);
  const a2=L.createAlert(e.db,1,{symbol:"BTC",targetPrice:80,condition:"lte"},100);
  assert.equal(L.matchAlerts(e.db,e.ctx.price).length,0);
  e.set({BTC:125});
  const trg=L.matchAlerts(e.db,e.ctx.price);
  assert.equal(trg.length,1);assert.equal(trg[0].id,a1.id);
  assert.equal(L.matchAlerts(e.db,e.ctx.price).length,0); // already triggered
  assert.equal(L.deleteAlert(e.db,1,a2.id),true)});

test("server-side DCA bot: base buy and take-profit cycle",()=>{const e=setup();
  const bot=L.createBot(e.db,1,{name:"BTC Scalp",symbol:"BTC",base:100,tp:5,avgSz:100,dev:2,max:2});
  assert.equal(bot.status,"running");
  // Market at 100 -> base order fills
  const f1=L.matchBots(e.db,e.ctx.price,FEE);
  assert.equal(f1.length,1);assert.equal(f1[0].action,"base_buy");
  const bList=L.getBots(e.db,1);assert.equal(bList[0].entries.length,1);
  // Market rises to 106 (> 5% TP) -> take profit fills
  e.set({BTC:106});
  const f2=L.matchBots(e.db,e.ctx.price,FEE);
  assert.equal(f2.length,1);assert.equal(f2[0].action,"take_profit");
  assert.ok(f2[0].profit>0);
  const bDone=L.getBots(e.db,1);assert.equal(bDone[0].cycles,1);assert.equal(bDone[0].entries.length,0)});

test("gamification state: save and retrieve",()=>{const e=setup();
  const saved=L.saveGamification(e.db,1,{xp:350,lvl:3,streak:5,mp:40,boxes:["Magic"],claimed:{"2026w42:freq":1}});
  assert.equal(saved.xp,350);assert.equal(saved.lvl,3);assert.equal(saved.streak,5);assert.deepEqual(saved.boxes,["Magic"]);
  const got=L.getGamification(e.db,1);assert.equal(got.xp,350);assert.equal(got.lvl,3);
  const empty=L.getGamification(e.db,2);assert.equal(empty.xp,0);assert.equal(empty.lvl,1)});

test("community chat: persist and retrieve messages",()=>{const e=setup();
  const m1=L.addChatMessage(e.db,1,"alice","Hello world!");
  const m2=L.addChatMessage(e.db,2,"bob","Welcome to trading!");
  const msgs=L.getChatMessages(e.db,10);
  assert.equal(msgs.length,2);assert.equal(msgs[0].username,"alice");assert.equal(msgs[1].username,"bob");
  assert.throws(()=>L.addChatMessage(e.db,1,"alice",""),{code:"INVALID"})});

