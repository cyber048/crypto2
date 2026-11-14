"use strict";
// Tests use better-sqlite3 when installed, otherwise Node's built-in node:sqlite with a tiny compatible wrapper.
function makeDb(){
  let db;
  try{const D=require("better-sqlite3");db=new D(":memory:")}catch{
    const{DatabaseSync}=require("node:sqlite");const d=new DatabaseSync(":memory:");
    db={exec:s=>d.exec(s),pragma:()=>{},prepare:s=>{const st=d.prepare(s);return{get:(...a)=>st.get(...a),all:(...a)=>st.all(...a),run:(...a)=>st.run(...a)}},
      transaction:fn=>(...a)=>{d.exec("SAVEPOINT t"+(db._n=(db._n||0)+1));const n=db._n;try{const r=fn(...a);d.exec("RELEASE t"+n);return r}catch(e){d.exec("ROLLBACK TO t"+n);d.exec("RELEASE t"+n);throw e}}};
  }
  db.exec(`CREATE TABLE users(id INTEGER PRIMARY KEY,username TEXT,email TEXT,password_hash TEXT,balance REAL DEFAULT 10000);
CREATE TABLE trades(id INTEGER PRIMARY KEY,user_id INTEGER,symbol TEXT,side TEXT,quantity REAL,price REAL,total REAL,created_at TEXT DEFAULT CURRENT_TIMESTAMP);`);
  return db;
}
module.exports={makeDb};
