const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const each=(sel,m,...a)=>$$(sel).forEach(x=>x.classList[m](...a));
const coins=[["BTC","Bitcoin","₿",0,0],["ETH","Ethereum","Ξ",0,0],["SOL","Solana","◎",0,0],["XRP","XRP","X",0,0],["ADA","Cardano","A",0,0],["DOGE","Dogecoin","Ð",0,0],["LTC","Litecoin","Ł",0,0]];
const tr={
hy:{market:"Շուկայի տվյալներ",login:"Մուտք",signup:"Ստեղծել հաշիվ",eyebrow:"ԿՐԻՊՏՈՅԻ ԱՇԽԱՐՀ՝ ԱՎԵԼԻ ՊԱՐԶ",headline:"Շուկան շարժվում է։<br><span>Դու պահպանում ես վերահսկողությունը։</span>",description:"Ուսումնասիրիր թվային ակտիվները և փորձարկիր ռազմավարությունդ մաքուր միջավայրում։",start:"Սկսել առևտուրը ↗",explore:"Դիտել շուկան",notice:"Վիրտուալ միջոցներ։ Իրական գումար չի օգտագործվում։",chart:"Պայմանական գրաֆիկ",features:"ՍՏԵՂԾՎԱԾ Է ՊԱՐԶՈՒԹՅԱՆ ՀԱՄԱՐ",featureTitle:"Ավելի քիչ աղմուկ։ Ավելի շատ պատկերացում։",f1:"Շուկայի պատկերը",f1d:"Հետևիր ակտիվների գներին մեկ էջում։",f2:"Փորձնական առևտուր",f2d:"Սովորիր վիրտուալ մնացորդով։",f3:"Ուսումնական օգնական",f3d:"Հասկացիր կրիպտոյի հիմնական տերմինները։",back:"Գլխավոր էջ",username:"Օգտանուն",email:"Email",emailOrUsername:"Email կամ օգտանուն",password:"Գաղտնաբառ",passwordHint:"Առնվազն 10 նիշ։ Մի օգտագործիր իրական գաղտնաբառդ։",continue:"Շարունակել ↗",authNote:"Դեմո հարթակ է։ Իրական գումար չի օգտագործվում։",overview:"Ամփոփում",markets:"Շուկաներ",trade:"Առևտուր",portfolio:"Պորտֆել",community:"Համայնք",assistant:"Ուսումնական օգնական",settings:"Կարգավորումներ",logout:"Դուրս գալ",hello:"Ուրախ եմ տեսնել քեզ,",overviewSub:"Քո demo պորտֆելի և շուկայի հստակ պատկերը։",balance:"Դեմո մնացորդ",assetCount:"Հետևվող ակտիվներ",trades:"Գործարքների քանակ",marketOverview:"Շուկայի ամփոփում",viewAll:"Տեսնել բոլորը ↗",quickTrade:"Արագ գործարք",asset:"Ակտիվ",amount:"Գումար (USD)",buy:"Գնել",sell:"Վաճառել",disclaimer:"Դեմո գործարքներ․ իրական պատվեր չի ուղարկվում։",recent:"Վերջին գործարքները",marketsSub:"Թվային ակտիվների ընտրանի։",priceDisclaimer:"Գները Kraken-ի հանրային API-ից են և կարող են մի քանի վայրկյան ուշանալ։ Գործարքները կատարվում են միայն վիրտուալ փողով. սիմուլյացիոն արդյունքները չեն երաշխավորում իրական առևտրի արդյունք։",demoTrade:"Դեմո առևտուր",tradeSub:"Սովորիր վիրտուալ մնացորդով։",placeOrder:"Դեմո պատվեր",quantity:"Քանակ",estimated:"Մոտավոր գումար",reset:"Վերականգնել demo հաշիվը",holdings:"Քո ակտիվները",history:"Գործարքների պատմություն",nftSub:"Ցուցադրական NFT պատկերասրահ, գնումներ հնարավոր չեն։",chatDisclaimer:"Այս chat-ը տեղային demo է։",send:"Ուղարկել",assistantSub:"Նախապես պատրաստված ուսումնական պատասխաններ, ոչ թե իրական AI։",profile:"Պրոֆիլ",save:"Պահպանել",plans:"Բաժանորդագրություններ",plansNote:"Վճարում չի կատարվում։ Միայն դիզայնի նախատիպ։",security:"Անվտանգություն",securityNote:"Գաղտնաբառերը hash են արվում սերվերում։ Արտադրական օգտագործման համար պետք են HTTPS, CSRF պաշտպանություն, email հաստատում և անվտանգության աուդիտ։",footer:"Ուսումնական demo · Իրական առևտուր չկա",
journal:"Օրագիր",navJournal:"Առևտրային օրագիր",journalSub:"Գրանցիր ռազմավարությունդ, սխալներդ և հույզերդ՝ ավելի լավ թրեյդեր դառնալու համար։",totalEquity:"Ընդհանուր կապիտալ",cashBalance:"Կանխիկ մնացորդ",cryptoValue:"Կրիպտո ակտիվներ",unrealizedPnl:"Չիրացված P&L",realizedPnl:"Իրացված P&L",totalFees:"Միջնորդավճար",assetAllocation:"Ակտիվների բաշխում",portfolioHealth:"Պորտֆելի վիճակագրություն",openOrdersTitle:"Բաց պատվերներ",portfolioSub:"Իրական ժամանակում ակտիվների հաշվեկշիռ և P&L"},
ru:{market:"Данные рынка",login:"Войти",signup:"Создать аккаунт",eyebrow:"КРИПТОМИР — ПРОЩЕ",headline:"Рынок движется.<br><span>Ты сохраняешь контроль.</span>",description:"Изучай цифровые активы и проверяй стратегии в спокойном интерфейсе.",start:"Начать торговлю ↗",explore:"Обзор рынка",notice:"Виртуальные средства. Реальных денег нет.",chart:"Иллюстративный график",features:"СОЗДАНО ДЛЯ ЯСНОСТИ",featureTitle:"Меньше шума. Больше понимания.",f1:"Обзор рынка",f1d:"Следи за ценами активов на одной странице.",f2:"Демо-торговля",f2d:"Учись с виртуальным балансом.",f3:"Учебный помощник",f3d:"Изучай основные термины криптовалют.",back:"На главную",username:"Имя пользователя",email:"Email",emailOrUsername:"Email или имя пользователя",password:"Пароль",passwordHint:"Не менее 10 символов. Не используй настоящий пароль.",continue:"Продолжить ↗",authNote:"Демо-платформа. Реальных денег нет.",overview:"Обзор",markets:"Рынки",trade:"Торговля",portfolio:"Портфель",community:"Сообщество",assistant:"Учебный помощник",settings:"Настройки",logout:"Выйти",hello:"Рад тебя видеть,",overviewSub:"Обзор демо-портфеля и рынка.",balance:"Демо-баланс",assetCount:"Активы",trades:"Количество сделок",marketOverview:"Обзор рынка",viewAll:"Все активы ↗",quickTrade:"Быстрая сделка",asset:"Актив",amount:"Сумма (USD)",buy:"Купить",sell:"Продать",disclaimer:"Демо-сделки. Реальные ордера не отправляются.",recent:"Последние сделки",marketsSub:"Выбранные цифровые активы.",priceDisclaimer:"Цены берутся из публичного API Kraken и могут запаздывать на несколько секунд. Сделки совершаются только виртуальными деньгами; результаты симуляции не гарантируют реальных результатов.",demoTrade:"Демо-торговля",tradeSub:"Учись на виртуальном балансе.",placeOrder:"Демо-ордер",quantity:"Количество",estimated:"Примерная сумма",reset:"Сбросить демо-счёт",holdings:"Твои активы",history:"История сделок",nftSub:"Демонстрационная NFT-галерея, покупки недоступны.",chatDisclaimer:"Это локальный макет чата.",send:"Отправить",assistantSub:"Подготовленные учебные ответы, не настоящий AI.",profile:"Профиль",save:"Сохранить",plans:"Подписки",plansNote:"Оплата не взимается. Только макет дизайна.",security:"Безопасность",securityNote:"Пароли хешируются на сервере. Для production нужны HTTPS, CSRF-защита, подтверждение email и аудит.",footer:"Учебное демо · Без реальной торговли",
journal:"Дневник",navJournal:"Торговый дневник",journalSub:"Записывайте стратегию, ошибки и эмоции, чтобы расти как трейдер.",totalEquity:"Общий капитал",cashBalance:"Свободный баланс",cryptoValue:"Стоимость крипто",unrealizedPnl:"Нереализованный P&L",realizedPnl:"Реализованный P&L",totalFees:"Комиссии",assetAllocation:"Распределение активов",portfolioHealth:"Статистика портфеля",openOrdersTitle:"Открытые ордера",portfolioSub:"Баланс, средняя цена входа и P&L в реальном времени"},
en:{market:"Market data",login:"Log in",signup:"Create account",eyebrow:"A CALMER CRYPTO EXPERIENCE",headline:"The market moves.<br><span>You stay in control.</span>",description:"Explore digital assets and practice your strategy in a thoughtful, minimal space.",start:"Start trading ↗",explore:"Explore markets",notice:"Virtual funds. No real money involved.",chart:"Illustrative chart",features:"BUILT FOR CLARITY",featureTitle:"Less noise. More perspective.",f1:"Market overview",f1d:"Track asset prices in one clean view.",f2:"Practice trading",f2d:"Learn with a virtual balance.",f3:"Learning assistant",f3d:"Understand common crypto terms.",back:"Back home",username:"Username",email:"Email",emailOrUsername:"Email or username",password:"Password",passwordHint:"At least 10 characters. Never use your real password.",continue:"Continue ↗",authNote:"Demo platform only. No real money involved.",overview:"Overview",markets:"Markets",trade:"Trade",portfolio:"Portfolio",community:"Community",assistant:"Learning assistant",settings:"Settings",logout:"Log out",hello:"Good to see you,",overviewSub:"A clear view of your demo portfolio and the market.",balance:"Demo balance",assetCount:"Assets tracked",trades:"Total trades",marketOverview:"Market overview",viewAll:"View all ↗",quickTrade:"Quick trade",asset:"Asset",amount:"Amount (USD)",buy:"Buy",sell:"Sell",disclaimer:"Demo trades only. No real orders are placed.",recent:"Recent trades",marketsSub:"Explore selected digital assets.",priceDisclaimer:"Prices come from the Kraken public API and may be a few seconds delayed. Trades use virtual money only; simulated results do not guarantee real-world performance.",demoTrade:"Demo trading",tradeSub:"Learn with a virtual balance.",placeOrder:"Demo order",quantity:"Quantity",estimated:"Estimated total",reset:"Reset demo account",holdings:"Your holdings",history:"Transaction history",nftSub:"Demo NFT gallery; purchases are disabled.",chatDisclaimer:"This is a local chat mockup.",send:"Send",assistantSub:"Prepared educational answers, not a live AI.",profile:"Profile",save:"Save changes",plans:"Membership plans",plansNote:"No payment is collected. UI prototype only.",security:"Security",securityNote:"Passwords are hashed server-side. Production needs HTTPS, CSRF protection, email verification, and a security audit.",footer:"Educational demo · No real-money trading",
journal:"Journal",navJournal:"Trading Journal",journalSub:"Record your setups, emotions, and lessons learned to improve trading discipline.",totalEquity:"Total Equity",cashBalance:"Cash Balance",cryptoValue:"Crypto Assets",unrealizedPnl:"Unrealized P&L",realizedPnl:"Realized P&L",totalFees:"Total Fees",assetAllocation:"Asset Allocation",portfolioHealth:"Portfolio Overview",openOrdersTitle:"Open Orders",portfolioSub:"Real-time asset balance, average cost, unrealized & realized P&L."}
};
let lang=localStorage.getItem("mb-lang")||"hy",user=null,portfolio={balance:10000,trades:[],holdings:[],watchlist:[]},side="buy",prices={};
const money=n=>n==null||Number.isNaN(n)?"—":new Intl.NumberFormat(undefined,{style:"currency",currency:"USD",maximumFractionDigits:2}).format(n);
const errTr={
  STALE:{hy:"Շուկայի տվյալները հասանելի չեն կամ հնացել են։ Փորձիր մի փոքր ուշ։",ru:"Рыночные данные недоступны или устарели. Попробуйте позже.",en:"Market data is unavailable or stale. Try again in a moment."},
  FUNDS:{hy:"Անբավարար վիրտուալ USD մնացորդ։",ru:"Недостаточно виртуальных USD.",en:"Not enough virtual USD."},
  ASSET:{hy:"Անբավարար ակտիվ վաճառելու համար (կամ ամրագրված է բաց պատվերներով)։",ru:"Недостаточно актива для продажи (или зарезервирован ордерами).",en:"Not enough of this asset to sell (part may be reserved by open orders)."},
  MIN:{hy:"Պատվերի նվազագույն արժեքը 1 USD է։",ru:"Минимальный размер ордера — 1 USD.",en:"Order is below the minimum size (1 USD)."},
  MAX:{hy:"Պատվերը գերազանցում է առավելագույն չափը (1,000,000 USD)։",ru:"Ордер превышает максимальный размер (1,000,000 USD).",en:"Order is above the maximum size."},
  TRIGGER:{hy:"Trigger գինը սխալ է (Stop-loss-ը պետք է լինի ցածր, իսկ Take-profit-ը՝ բարձր)։",ru:"Некорректная цена триггера (Stop-loss ниже, Take-profit выше текущей цены).",en:"Invalid trigger price."},
  LIMIT:{hy:"Չափազանց շատ բաց պատվերներ (առավելագույնը 50)։",ru:"Слишком много открытых ордеров (макс. 50).",en:"Too many open orders (max 50)."},
  NOTFOUND:{hy:"Պատվերը չի գտնվել։",ru:"Ордер не найден.",en:"Order not found."},
  CLOSED:{hy:"Միայն բաց պատվերները կարող են չեղարկվել։",ru:"Только открытые ордера можно отменить.",en:"Only open orders can be cancelled."},
  QTY:{hy:"Սխալ քանակ։",ru:"Неверное количество.",en:"Invalid quantity."},
  PRICE:{hy:"Սխալ գին։",ru:"Неверная цена.",en:"Invalid price."},
  SIDE:{hy:"Սխալ ուղղություն (buy կամ sell)։",ru:"Неверная сторона (buy или sell).",en:"Invalid side."},
  SYMBOL:{hy:"Անհայտ ակտիվ։",ru:"Неизвестный актив.",en:"Unknown asset."}
};
const localizeErr=(err,code)=>{if(code&&errTr[code]&&errTr[code][lang])return errTr[code][lang];return err||"Request failed"};
async function api(url,opts={}){let r=await fetch(url,{credentials:"same-origin",headers:{"Content-Type":"application/json"},...opts}),d=await r.json().catch(()=>({error:"Server error"}));if(!r.ok){const msg=localizeErr(d.error,d.code);const err=new Error(msg);err.code=d.code;throw err;}return d}
function toast(s){let el=$("#toast");el.textContent=s;el.classList.remove("hidden");setTimeout(()=>el.classList.add("hidden"),2600)}
function applyLang(){document.documentElement.lang=lang;$$("[data-i]").forEach(el=>{let k=el.dataset.i;if(tr[lang][k])el.innerHTML=tr[lang][k]});$("#lang").value=lang}
function authMode(reg){$("#auth").classList.remove("hidden");each("#landing,#dashboard","add","hidden");$("#loginTab").classList.toggle("selected",!reg);$("#registerTab").classList.toggle("selected",reg);each("#username,#email","toggle","hidden",!reg);each("#usernameLabel,#emailLabel","toggle","hidden",!reg);$("#loginLabel").textContent=reg?tr[lang].username:tr[lang].emailOrUsername;each("#login,#loginLabel","toggle","hidden",reg);$("#login").required=!reg;$("#username").required=reg;$("#email").required=reg;$("#authTitle").textContent=reg?tr[lang].signup:(lang==="hy"?"Բարի վերադարձ։":lang==="ru"?"С возвращением.":"Welcome back.");$("#authSub").textContent=tr[lang].overviewSub;$("#authError").classList.add("hidden")}
function showLanding(){$("#landing").classList.remove("hidden");each("#auth,#dashboard","add","hidden")}
let mSort="rank",histFilter="all",journalList=[],serverAlerts=[];
function setPage(p){
  each("#landing,#auth","add","hidden");
  $("#dashboard").classList.remove("hidden");
  $$(".page").forEach(x=>x.classList.toggle("active",x.id==="page-"+p));
  $$(".nav").forEach(x=>x.classList.toggle("active",x.dataset.page===p));
  $("#mobileNav").value=p;
  if(p==="portfolio"||p==="overview")loadPortfolio();
  if(p==="journal")loadJournal();
  if(p==="community")loadChat();
  if(p==="trade"){loadAlerts();initRiskCalc()}
  window.scrollTo(0,0);
}
function renderCoins(){let opts=coins.map(c=>`<option value="${c[0]}">${c[0]} — ${c[1]}</option>`).join("");$("#quickSymbol").innerHTML=opts;$("#tradeSymbol").innerHTML=opts;$("#ticker").innerHTML=coins.slice(0,4).map(c=>`<div><span>${c[2]} ${c[0]}</span><span>${money(prices[c[0]])}<small class="${c[4]>=0?"green":"negative"}">${c[4]>0?"+":""}${c[4]}%</small></span></div>`).join("");$("#heroPrice").textContent=money(prices.BTC);$("#marketRows").innerHTML=coins.map(c=>`<div class="row"><span class="coin"><i>${c[2]}</i><span>${c[1]}<small>${c[0]}</small></span></span><span>${money(prices[c[0]])}</span><span class="${c[4]>=0?"green":"negative"}">${c[4]>0?"+":""}${c[4]}%</span></div>`).join("");renderMarkets($("#search")?.value||"")}
function spark(sym){let a=spk[sym];if(!a||a.length<2)return"";let lo=Math.min(...a),hi=Math.max(...a),up=a.at(-1)>=a[0];return `<svg viewBox="0 0 100 26" preserveAspectRatio="none"><polyline points="${a.map((v,i)=>`${(i/(a.length-1)*100).toFixed(1)},${(24-(v-lo)/((hi-lo)||1)*22).toFixed(1)}`).join(" ")}" fill="none" stroke="${up?"#2ed38a":"#ff6b7a"}" stroke-width="2" vector-effect="non-scaling-stroke"/></svg>`}
function renderMarkets(q=""){
  let w=mkWatch,list=coins.filter(c=>(c[0]+c[1]).toLowerCase().includes(q.toLowerCase())&&(!w||portfolio.watchlist.includes(c[0])));
  if(mSort==="name")list.sort((a,b)=>a[1].localeCompare(b[1]));
  else if(mSort==="price")list.sort((a,b)=>(prices[b[0]]||0)-(prices[a[0]]||0));
  else if(mSort==="chg")list.sort((a,b)=>b[4]-a[4]);
  else if(mSort==="vol")list.sort((a,b)=>(stat&&stat[b[0]]?stat[b[0]].volume:0)-(stat&&stat[a[0]]?stat[a[0]].volume:0));
  $("#allMarkets").innerHTML=list.map((c,i)=>{
    let v24=stat&&stat[c[0]]?(stat[c[0]].volume/1e6).toFixed(2)+"M USD":"—";
    return `<div class="prow"><span class="rk">${i+1}</span><span class="coin"><i>${c[2]}</i><span>${c[1]}<small>${c[0]}</small></span></span><span class="${fl(c[0])}">${money(prices[c[0]])}</span><span class="sp">${spark(c[0])}</span><span class="${c[4]>=0?"gr":"rd"}">${c[4]>=0?"+":""}${c[4]}%</span><span class="hv">${money((portfolio.holdings||[]).find(x=>x.symbol===c[0])?.quantity*prices[c[0]]||0)}</span><button class="btn light" data-trade="${c[0]}">${tr[lang].trade}</button><button data-watch="${c[0]}">${portfolio.watchlist.includes(c[0])?"★":"☆"}</button></div>`;
  }).join("")||"<p class='tiny' style='padding:16px'>No matches</p>";
  $("#movers").innerHTML=coins.slice().sort((a,b)=>Math.abs(b[4])-Math.abs(a[4])).slice(0,5).map(c=>`<div class="mv"><div><b>${c[1]}</b><small>${c[0]}</small></div><div>${money(prices[c[0]])}<small class="${c[4]>=0?"gr":"rd"}">${c[4]>=0?"+":""}${c[4]}%</small></div></div>`).join("");
}
function renderCandles(){let seed=7,rand=()=>((seed=seed*9301+49297)%233280)/233280;$("#candles").innerHTML=Array.from({length:45},()=>{let a=15+rand()*60,b=15+rand()*60,top=Math.min(a,b)-rand()*15,bottom=Math.max(a,b)+rand()*15;return `<i class="candle ${b>a?"up":"down"}" style="--top:${Math.max(1,top)}%;--wick:${Math.min(95,bottom)-Math.max(1,top)}%;--body:${Math.min(a,b)}%;--height:${Math.max(2,Math.abs(a-b))}%"></i>`}).join("")}

function drawPortAlloc(cash,positions,equity){
  let cv=$("#portAllocCv");if(!cv||!cv.offsetParent)return;
  let d=window.devicePixelRatio||1,W=cv.parentElement?.clientWidth||340,H=220;
  cv.style.width=W+"px";cv.style.height=H+"px";cv.width=Math.round(W*d);cv.height=Math.round(H*d);
  let x=cv.getContext("2d");x.setTransform(d,0,0,d,0,0);x.clearRect(0,0,W,H);
  let items=[{s:"USD Cash",val:cash,col:"#4fc3ff"},...positions.map((p,i)=>({s:p.symbol,val:p.value||0,col:PAL[i%PAL.length]}))].filter(it=>it.val>0.01);
  let tot=items.reduce((a,it)=>a+it.val,0)||1,cx=W/2,cy=H/2,R=Math.min(W,H)/2-14,a0=-Math.PI/2;
  items.forEach(it=>{let slice=(it.val/tot)*2*Math.PI,a1=a0+slice;x.beginPath();x.arc(cx,cy,R,a0,a1);x.arc(cx,cy,R*0.58,a1,a0,true);x.closePath();x.fillStyle=it.col;x.fill();a0=a1;});
  x.fillStyle=cssv("--text");x.textAlign="center";x.font="11px sans-serif";x.fillText("Total Equity",cx,cy-6);x.font="bold 16px sans-serif";x.fillText(money(equity),cx,cy+14);
  let leg=$("#portLegend");if(leg)leg.innerHTML=items.map(it=>`<span class="lg"><i style="background:${it.col}"></i>${it.s} ${Math.round(it.val/tot*100)}% (${money(it.val)})</span>`).join("");
}

function renderPortfolio(){
  let b=portfolio.balance??10000,ps=portfolio.positions||[],cVal=portfolio.cryptoValue??ps.reduce((a,p)=>a+(p.value||0),0);
  let eq=portfolio.equity??(b+cVal),un=portfolio.totalUnrealized??ps.reduce((a,p)=>a+(p.unrealized||0),0);
  let unPct=cVal>0?(un/(cVal-un||1))*100:0,rz=portfolio.realized??0,fees=portfolio.fees??0,trsList=portfolio.trades||[],ords=portfolio.orders||[];
  $("#sideBalance").textContent=$("#balance").textContent=money(b);
  $("#tradeCount").textContent=trsList.length;
  $("#welcome").textContent=user?.username||"trader";
  $("#profileUsername").value=user?.username||"";
  $("#profileEmail").value=user?.email||"";

  const setEl=(id,val)=>{const el=$(id);if(el)el.textContent=val};
  setEl("#portEquity",money(eq));setEl("#portCash",money(b));setEl("#portCryptoVal",money(cVal));
  const elUn=$("#portUnrealized");if(elUn){elUn.textContent=(un>=0?"+":"")+money(un);elUn.className=un>=0?"gr":"rd"}
  const elUnPct=$("#portUnrealizedPct");if(elUnPct){elUnPct.textContent=(un>=0?"+":"")+unPct.toFixed(2)+"%";elUnPct.className=un>=0?"gr":"rd"}
  setEl("#portRealized",(rz>=0?"+":"")+money(rz));
  const elRz=$("#portRealized");if(elRz)elRz.className=rz>=0?"gr":"rd";
  setEl("#portFees",money(fees));
  setEl("#portTradesCount",trsList.length);setEl("#portPositionsCount",ps.length);setEl("#portOpenOrdersCount",ords.length);
  let largest=ps.slice().sort((x,y)=>(y.value||0)-(x.value||0))[0];
  setEl("#portLargestPos",largest?`${largest.symbol} (${money(largest.value)})`:"—");
  let cRatio=eq>0?Math.round(b/eq*100):100;
  setEl("#portRatio",`${cRatio}% / ${100-cRatio}%`);
  drawPortAlloc(b,ps,eq);

  let hTable=$("#holdings");
  if(hTable){
    let hd=`<div class="tr th"><span>Asset</span><span>Holdings</span><span>Avg Price</span><span>Live Price</span><span>Market Value</span><span>Unrealized P&L</span><span>Share</span><span>Action</span></div>`;
    let rows=ps.map(p=>{
      let coin=coins.find(c=>c[0]===p.symbol)||["","","◆"],u=p.unrealized||0,uPct=p.unrealized_pct||0;
      return `<div class="tr"><span class="coin"><i>${coin[2]}</i><b>${p.symbol}</b> <small>${coin[1]}</small></span><span>${Number(p.quantity).toFixed(5)}</span><span>${money(p.avg_price)}</span><span>${money(prices[p.symbol])}</span><span><b>${money(p.value)}</b></span><span class="${u>=0?"gr":"rd"}">${u>=0?"+":""}${money(u)} (${u>=0?"+":""}${uPct.toFixed(2)}%)</span><span>${(p.share||0).toFixed(1)}%</span><span style="display:flex;gap:4px"><button class="btn light" data-trade="${p.symbol}" style="padding:4px 8px">Trade</button><button data-close="${p.symbol}" style="padding:4px 8px">Close</button></span></div>`;
    }).join("");
    hTable.innerHTML=hd+(rows||`<p class="tiny" style="padding:15px">No active crypto holdings yet.</p>`);
  }

  let oTable=$("#portOpenOrders");
  if(oTable){
    let hd=`<div class="tr th"><span>Instrument</span><span>Side</span><span>Type</span><span>Quantity</span><span>Price</span><span>Total</span><span>Action</span></div>`;
    let rows=ords.map(o=>`<div class="tr"><span>${o.symbol}/USD</span><span class="${o.side==="buy"?"gr":"rd"}">${o.side.toUpperCase()}</span><span>${typeLbl(o)}</span><span>${o.quantity}</span><span>${money(o.price)}</span><span>${money(o.quantity*o.price)}</span><button data-cx="${o.id}">Cancel</button></div>`).join("");
    oTable.innerHTML=hd+(rows||`<p class="tiny" style="padding:15px">No open orders.</p>`);
  }

  let histTable=$("#history");
  if(histTable){
    let filtered=trsList.filter(t=>histFilter==="all"||t.side===histFilter);
    let hd=`<div class="tr th"><span>Time</span><span>Instrument</span><span>Side</span><span>Qty</span><span>Price</span><span>Total</span><span>Fee</span><span>Realized P&L</span><span>Journal</span></div>`;
    let rows=filtered.map(t=>{
      let pnl=t.pnl!=null?+t.pnl:0;
      return `<div class="tr"><span style="font-size:11px">${t.created_at}</span><span><b>${t.symbol}</b></span><span class="${t.side==="buy"?"gr":"rd"}">${t.side.toUpperCase()}</span><span>${t.quantity}</span><span>${money(t.price)}</span><span>${money(t.total)}</span><span>${money(t.fee)}</span><span class="${pnl>=0?"gr":"rd"}">${t.side==="sell"?(pnl>=0?"+":"")+money(pnl):"—"}</span><button class="btn" data-jn="${t.id}" data-jsym="${t.symbol}" style="padding:3px 7px;font-size:10px">+ Note</button></div>`;
    }).join("");
    histTable.innerHTML=hd+(rows||`<p class="tiny" style="padding:15px">No transactions found.</p>`);
  }
  $("#recentTrades").innerHTML=trsList.slice(0,5).map(x=>`<div class="row"><span>${x.side.toUpperCase()} ${x.symbol}<small>${x.quantity} units</small></span><strong>${money(x.total)}</strong></div>`).join("")||`<p class="tiny" style="padding:15px">No trades yet.</p>`;
  updateEstimate();
}
async function loadPortfolio(){if(!user)return;try{portfolio=await api("/api/portfolio");renderPortfolio();renderMarkets($("#search").value);syncGamification()}catch(e){toast(e.message)}}
function updateEstimate(){let s=$("#tradeSymbol").value||"BTC",q=Number($("#quantity").value)||0;$("#chartTitle").textContent=s+"/USD";$("#chartPrice").textContent=money(prices[s]);$("#estimate").textContent=money(q*prices[s]);$("#place").textContent=(side==="buy"?tr[lang].buy:tr[lang].sell)+" "+s;initRiskCalc()}
async function tradeRaw(s,q,el){el.classList.add("hidden");try{await api("/api/trades",{method:"POST",body:JSON.stringify({symbol:s,side,quantity:q,clientId:cid()})});await loadPortfolio();toast("Demo trade completed");}catch(e){el.textContent=e.message;el.classList.remove("hidden")}}
async function trade(s,q,el){if(trade.busy)return;trade.busy=true;try{await tradeRaw(s,q,el)}finally{trade.busy=false}}
function assistant(q){let k=q.toLowerCase(),a=k.includes("btc")||k.includes("bitcoin")?"Bitcoin is a digital asset; its price can change sharply.":k.includes("candle")?"Candlesticks show open, close, high and low prices over a period.":k.includes("risk")?"Market risk means prices can move against expectations. No forecast guarantees profit.":k.includes("wallet")?"A crypto wallet manages keys used to authorize transactions. Never share your seed phrase.":"This is a prepared educational assistant, not live AI. Try Bitcoin, candles, risk, or wallets.";$("#answer").textContent=a}
let cd=[],feed=[],fav=new Set();
const sr=n=>()=>((n=(n*9301+49297)%233280)/233280),fx=(p,v)=>v.toFixed(p<1?5:2);
async function poll(){let s=$("#tradeSymbol").value||"BTC";try{let d=await api("/api/market?symbol="+s+"&tf="+tf);mkStatus(d);if(!d.prices||!Object.keys(d.prices).length)return;prevPx={...prices};Object.assign(prices,d.prices);FEE=d.feeRate??FEE;if(!d.stale)alCheck();coins.forEach(c=>c[4]=+((d.change||{})[c[0]]??0).toFixed(2));cd=d.candles||[];stat=d.stat;spk=d.spark||spk;depthD=d.depth;tradesD=d.trades;
$("#ticker").innerHTML=coins.slice(0,4).map(c=>`<div><span>${c[2]} ${c[0]}</span><span>${money(prices[c[0]])} <small style="color:${c[4]>=0?"#4ade9b":"#ff6b7a"}">${c[4]>=0?"+":""}${c[4]}%</small></span></div>`).join("");$("#heroPrice").textContent=money(prices.BTC);document.title="BTC "+money(prices.BTC)+" · Minimal Black";
renderMarkets($("#search").value);updateEstimate();showPlan();drawChart(s);drawBook(s);pairInfo(s);drawHero();drawMon();ordInfo();renderOrders();renderWatch();botTick();renderTape();drawClock();pollNotes()}catch{mkStatus(null)}}
function drawChart(s){const FG=document.documentElement.dataset.theme==="light"?"0,0,0":"255,255,255";let cv=$("#chart"),x=cv.getContext("2d"),W=cv.width,H=cv.height,n=cd.length;x.clearRect(0,0,W,H);if(chartMode==="depth"){drawDepth(x,W,H,s,FG);return}if(!n)return;let hi=Math.max(...cd.map(c=>c.h)),lo=Math.min(...cd.map(c=>c.l)),pad=(hi-lo)*.08||1;hi+=pad;lo-=pad;const HP=Math.round(H*.8),PW=W-86;let Y=v=>HP-10-(v-lo)/(hi-lo)*(HP-20),w=PW/n;x.strokeStyle=`rgba(${FG},.1)`;for(let i=1;i<5;i++){x.beginPath();x.moveTo(0,HP*i/5);x.lineTo(PW,HP*i/5);x.stroke();x.fillStyle=`rgba(${FG},.6)`;x.font="13px monospace";x.fillText(fx(hi,lo+(HP-10-HP*i/5)/(HP-20)*(hi-lo)),PW+6,HP*i/5+4)}
cd.forEach((c,i)=>{let cx=i*w+w/2;x.strokeStyle=x.fillStyle=c.c>=c.o?"#4ade9b":"#ff6b7a";x.beginPath();x.moveTo(cx,Y(c.h));x.lineTo(cx,Y(c.l));x.stroke();x.fillRect(cx-w*.3,Math.min(Y(c.o),Y(c.c)),w*.6,Math.max(2,Math.abs(Y(c.o)-Y(c.c))))});
let vm=Math.max(...cd.map(c=>c.v))||1;cd.forEach((c,i)=>{x.fillStyle=c.c>=c.o?"rgba(74,222,155,.45)":"rgba(255,107,122,.45)";let bh=c.v/vm*(H-HP-14);x.fillRect(i*w+w*.2,H-bh,w*.6,bh)});let p=prices[s],y=Y(p);x.setLineDash([5,5]);x.strokeStyle=`rgba(${FG},.6)`;x.beginPath();x.moveTo(0,y);x.lineTo(PW,y);x.stroke();x.setLineDash([]);x.fillStyle=`rgb(${FG})`;x.font="15px monospace";x.fillStyle=cd.at(-1).c>=cd.at(-1).o?"#2ed38a":"#ff6b7a";x.fillRect(PW,y-11,W-PW,22);x.fillStyle="#fff";x.font="13px monospace";x.fillText(fx(p,p),PW+4,y+5);
if(hv){let i=Math.max(0,Math.min(n-1,Math.floor(hv.x/w))),c=cd[i],cx=i*w+w/2,pr=lo+(HP-10-hv.y)/(HP-20)*(hi-lo);x.setLineDash([3,4]);x.strokeStyle=`rgba(${FG},.7)`;x.beginPath();x.moveTo(cx,0);x.lineTo(cx,H);x.moveTo(0,hv.y);x.lineTo(PW,hv.y);x.stroke();x.setLineDash([]);
let T=[new Date(c.t).toLocaleString(),"O "+money(c.o)+"  H "+money(c.h),"L "+money(c.l)+"  C "+money(c.c),"Vol "+c.v.toFixed(2)],bx=Math.min(Math.max(cx+14,4),W-252),by=Math.min(Math.max(hv.y-80,4),H-92);x.fillStyle="#000d";x.fillRect(bx,by,248,88);x.strokeStyle="#fff5";x.strokeRect(bx,by,248,88);x.fillStyle="#fff";x.font="14px monospace";T.forEach((t,k)=>x.fillText(t,bx+8,by+20+k*20));x.fillRect(PW,hv.y-10,W-PW,20);x.fillStyle="#000";x.fillText(fx(p,pr),PW+4,hv.y+5)}
{let k=hv?cd[Math.max(0,Math.min(n-1,Math.floor(hv.x/w)))]:cd[n-1],u=k.c>=k.o;$("#ohlc").innerHTML=`<span style="color:${u?"#2ed38a":"#ff6b7a"}">O${fx(p,k.o)} H${fx(p,k.h)} L${fx(p,k.l)} C${fx(p,k.c)} ${u?"+":""}${fx(p,k.c-k.o)} (${u?"+":""}${((k.c/k.o-1)*100).toFixed(2)}%)</span>`}
let h24=Math.max(...cd.map(c=>c.h)),l24=Math.min(...cd.map(c=>c.l)),vol=cd.reduce((a,c)=>a+c.v,0)*p,ch=coins.find(c=>c[0]===s)[4];
$("#tStats").innerHTML=[["Last",money(p),(ch>=0?"+":"")+ch+"%"],["High",money(h24),"session"],["Low",money(l24),"session"],["Volume",money(vol),"simulated"]].map(a=>`<article><small>${a[0]}</small><strong>${a[1]}</strong><small>${a[2]}</small></article>`).join("")}
function mkStatus(d){let e=$("#mkStatus"),b=$("#offline");if(!e||!b)return;
if(!d){e.className="mkst bad";e.textContent=tt("Market data: connection problem","Շուկայի տվյալներ՝ կապի խնդիր","Рыночные данные: проблема соединения");b.textContent=tt("Cannot reach the server. Prices are not updating.","Սերվերին հասնել չի հաջողվում։ Գները չեն թարմանում։","Нет связи с сервером. Цены не обновляются.");b.classList.remove("hidden");return}
let ts=d.updatedAt?new Date(d.updatedAt).toLocaleTimeString():"—";
if(d.stale||!d.updatedAt){e.className="mkst bad";e.textContent=`${d.source} · ${tt("delayed / unavailable","ուշացած / անհասանելի","задержка / недоступно")} · ${tt("last update","վերջին թարմացում","последнее обновление")} ${ts}`;b.textContent=tt("Live prices are temporarily unavailable, so trading is paused. ","Կենդանի գները ժամանակավորապես անհասանելի են, ուստի առևտուրը դադարեցված է։ ","Живые цены временно недоступны, торговля приостановлена. ")+(d.error?`(${d.error})`:"");b.classList.remove("hidden")}
else{e.className="mkst ok";e.textContent=`${d.source} · ${tt("updated","թարմացվել է","обновлено")} ${ts}`;b.classList.add("hidden")}}
function drawBook(s){let p=prices[s],D=depthD||{asks:[],bids:[]},st=+$("#prec").value||.01,N=14,sym=$("#tradeSymbol").value||"BTC",grp=(lv,ask)=>{let m=new Map();lv.forEach(([pr,q])=>{let k=(ask?Math.ceil(pr/st-1e-9):Math.floor(pr/st+1e-9))*st;m.set(k,(m.get(k)||0)+q)});return[...m.entries()].sort((a,b)=>ask?a[0]-b[0]:b[0]-a[0]).slice(0,N)},
tot=arr=>{let c=0;return arr.map(([pr,q])=>[pr,q,c+=q])},A=tot(grp(D.asks,true)),B=tot(grp(D.bids,false)),mx=Math.max(1e-9,...A.map(x=>x[2]),...B.map(x=>x[2])),dec=p<1?5:2,row=(r,b)=>`<div class="${b?"b":"a"}" style="--w:${Math.round(r[2]/mx*100)}%"><span>${r[0].toFixed(dec)}</span><span>${r[1].toFixed(5)}</span><span>${r[2].toFixed(5)}</span></div>`,dir=p>=(window.lp||p)?"up":"dn";window.lp=p;
$("#book").innerHTML=!A.length&&!B.length?`<p class="tiny" style="padding:16px">${tt("Order book unavailable right now.","Order book-ը այս պահին անհասանելի է։","Стакан сейчас недоступен.")}</p>`:`<div class="bh"><span>Price (USD)</span><span>Size (${sym})</span><span>Total</span></div>`+A.slice().reverse().map(r=>row(r,0)).join("")+`<div class="mid ${dir}">${fx(p,p)} ${dir==="up"?"↑":"↓"}</div>`+B.map(r=>row(r,1)).join("");
$("#feed").innerHTML=(tradesD||[]).map(f=>`<div class="${f.side==="buy"?"b":"a"}"><span>${new Date(f.t).toLocaleTimeString()}</span><span>${fx(p,f.p)}</span><span>${f.q.toFixed(5)}</span></div>`).join("")||`<p class="tiny" style="padding:12px">—</p>`}
function art(n){let r=sr(n*97+13),h=Math.floor(r()*360),h2=(h+60+r()*120)%360,s=`<svg viewBox="0 0 200 200"><defs><linearGradient id="g${n}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="hsl(${h} 70% 16%)"/><stop offset="1" stop-color="hsl(${h2} 80% 45%)"/></linearGradient></defs><rect width="200" height="200" fill="url(#g${n})"/>`;
for(let i=0;i<7;i++)s+=`<circle cx="${r()*200}" cy="${r()*200}" r="${15+r()*60}" fill="hsl(${(h+i*40)%360} 85% 65%)" opacity=".${2+Math.floor(r()*4)}"/>`;
if(n%2)for(let i=0;i<6;i++)s+=`<path d="M0 ${150+i*8} Q50 ${120+r()*60} 100 ${150+i*8} T200 ${150+i*8}" stroke="#fff" stroke-opacity=".35" fill="none"/>`;else s+=`<polygon points="100,30 170,160 30,160" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="2"/>`;return s+"</svg>"}
const NFTS=[["Quiet Orbit",.08,"Rare"],["Monolith",.12,"Epic"],["Night Signal",.06,"Common"],["Solar Drift",.21,"Legendary"],["Glass Tide",.09,"Rare"],["Ember Gate",.14,"Epic"],["Pale Static",.05,"Common"],["Aurora Loop",.3,"Legendary"]];
function renderNft(){$("#nfts").innerHTML=NFTS.map((n,i)=>`<article>${art(i+3)}<h3>${n[0]}</h3><small>${n[1]} ETH · ${n[2]} · DEMO</small><button class="btn outline" data-fav="${i}">${fav.has(i)?"♥":"♡"}</button></article>`).join("")}
document.addEventListener("click",e=>{let f=e.target.closest("[data-fav]");if(f){let i=+f.dataset.fav;fav.has(i)?fav.delete(i):fav.add(i);renderNft()}});
const X={hy:{ageQ:"Դու 18 տարեկան կամ ավելի մեծ ես՞",ageP:"Կայքը միայն չափահասների համար է։ Սա դեմո միջավայր է, իրական գումար չկա։",ageYes:"Այո, 18+ եմ",ageNo:"Ոչ",ageBlock:"Կներես, այս կայքը միայն 18 և ավելի տարեկանների համար է։",forgot:"Մոռացե՞լ ես գաղտնաբառը",sendCode:"Ուղարկել կոդը",code:"6-նիշ կոդ",newPassword:"Նոր գաղտնաբառ (10+ նիշ)",save2:"Փոխել գաղտնաբառը",resetDone:"Գաղտնաբառը փոխվեց։ Մուտք գործիր։",codeSent:"Կոդը ուղարկված է (դեմո կոդ՝ ",plansT:"Ընտրիր փաթեթ",planFreeD:"Դեմո առևտուր, հիմնական գրաֆիկներ",planProD:"Ծանուցումներ, առաջադեմ գրաֆիկներ, առանց սահմանի",planUltraD:"Ամեն ինչ Pro-ից + առաջնահերթ աջակցություն և NFT-ի վաղ հասանելիություն",choose:"Ընտրել",upgrade:"Բարելավել փաթեթը",demoPay:"Դեմո. վճարում չկա, փաթեթը միայն պիտակ է։"},
ru:{ageQ:"Вам есть 18 лет?",ageP:"Сайт только для взрослых. Это демо-среда, реальных денег нет.",ageYes:"Да, мне 18+",ageNo:"Нет",ageBlock:"Извините, сайт только для лиц от 18 лет.",forgot:"Забыли пароль?",sendCode:"Отправить код",code:"6-значный код",newPassword:"Новый пароль (10+ символов)",save2:"Сменить пароль",resetDone:"Пароль изменён. Войдите.",codeSent:"Код отправлен (демо-код: ",plansT:"Выберите тариф",planFreeD:"Демо-торговля, базовые графики",planProD:"Уведомления, расширенные графики, без лимитов",planUltraD:"Всё из Pro + приоритетная поддержка и ранний доступ к NFT",choose:"Выбрать",upgrade:"Улучшить тариф",demoPay:"Демо: оплаты нет, тариф - только метка."},
en:{ageQ:"Are you 18 or older?",ageP:"Adults only. This is a demo environment with no real money.",ageYes:"Yes, I'm 18+",ageNo:"No",ageBlock:"Sorry, this site is only for people aged 18 and over.",forgot:"Forgot password?",sendCode:"Send code",code:"6-digit code",newPassword:"New password (10+ characters)",save2:"Change password",resetDone:"Password changed. Please log in.",codeSent:"Code sent (demo code: ",plansT:"Choose a plan",planFreeD:"Demo trading, basic charts",planProD:"Alerts, advanced charts, no limits",planUltraD:"Everything in Pro + priority support and NFT early access",choose:"Choose",upgrade:"Upgrade plan",demoPay:"Demo: no payment, the plan is only a label."}};
function showPlan(){let p=user?.plan||"Free",e=$("#planNow");if(e)e.textContent="Plan: "+p;$$("#plans article").forEach(a=>a.classList.toggle("on",a.dataset.p===p))}
function openPlans(){showPlan();$("#plans").classList.remove("hidden")}
function rmsg(t,ok){let e=$("#resetMsg");e.textContent=t;e.classList.toggle("hidden",!t);e.style.color=ok?"#b8f1ce":""}
let hv=null;const tt=(en,hy,ru)=>lang==="hy"?hy:lang==="ru"?ru:en;
const KB=[["bitcoin,btc,բիթկոին,биткоин,bitkoin","Bitcoin is the first and biggest cryptocurrency: digital money with no bank in the middle and a cap of 21 million coins. Its price swings a lot, which is exactly why practicing here is useful.","Bitcoin-ը առաջին և ամենամեծ կրիպտոարժույթն է՝ թվային փող առանց բանկի, առավելագույնը 21 միլիոն մետաղադրամ։ Գինը շատ է տատանվում, դրա համար վարժանքը օգտակար է։"],
["blockchain,բլոկչեյն,блокчейн,blokchein","A blockchain is a shared public ledger copied across many computers. Records are grouped in blocks and linked together, so changing old data is practically impossible.","Blockchain-ը բազմաթիվ համակարգիչների վրա պահվող ընդհանուր հանրային մատյան է։ Գրառումները խմբվում են բլոկների մեջ և կապվում իրար, ուստի հին տվյալը փոխելը գրեթե անհնար է։"],
["candle,chart,graph,մոմ,գրաֆիկ,график,свеч,grafik","Each candle shows one time period: open, high, low and close. Green means the price closed higher than it opened, red means lower. Long wicks mean the price tried to go further but came back. Hover the chart to see exact values.","Յուրաքանչյուր մոմ ցույց է տալիս մեկ ժամանակահատված՝ բացում, ամենաբարձր, ամենացածր և փակում։ Կանաչը նշանակում է գինը փակվել է բացվածից բարձր, կարմիրը՝ ցածր։ Երկար ստվերը նշանակում է գինը փորձեց հեռանալ, բայց վերադարձավ։ Մկնիկը գրաֆիկի վրա պահիր՝ ճշգրիտ արժեքները տեսնելու համար։"],
["order book,orderbook,book,spread,գրքույկ,стакан","The order book lists waiting orders: red are people selling (asks), green are people buying (bids). The gap between the best sell and best buy price is the spread. Here it shows the real order book from Kraken, grouped by the precision you choose.","Order book-ը սպասող պատվերների ցանկն է. կարմիրը վաճառողներն են, կանաչը՝ գնորդները։ Լավագույն վաճառքի և գնման գների տարբերությունը spread-ն է։ Այստեղ ցուցադրվում է Kraken-ի իրական order book-ը՝ ըստ ընտրած ճշգրտության։"],
["buy,sell,trade,gnel,vacharel,գնել,գնում,վաճառ,առևտ,купить,продат","Pick an asset, enter a quantity and press Buy to purchase at the current price, or Sell to sell what you own. In this demo you pay only the price shown, no extra fees.","Ընտրիր ակտիվը, մուտքագրիր քանակը և սեղմիր Buy՝ ընթացիկ գնով գնելու համար, կամ Sell՝ քոնը վաճառելու համար։ Դեմոյում այլ վճար չկա։"],
["risk,loss,stop,ռիսկ,կորուստ,риск","Never risk money you cannot afford to lose; nobody can predict prices. Common habits: small amounts, several assets, and an exit plan decided before you buy. This is education, not financial advice.","Երբեք մի ռիսկի այն գումարով, որը չես կարող կորցնել. գները ոչ ոք չի կարող կանխատեսել։ Օգտակար սովորույթներ՝ փոքր գումար, մի քանի ակտիվ, դուրս գալու պլան՝ գնելուց առաջ։ Սա ուսուցում է, ոչ ֆինանսական խորհուրդ։"],
["nft","An NFT is a unique digital item recorded on a blockchain, so ownership can be proven. Unlike a coin, one NFT is not interchangeable with another. The ones here are generated demo art.","NFT-ն եզակի թվային իր է, գրանցված blockchain-ում, ուստի սեփականությունը կարելի է ապացուցել։ Մետաղադրամից տարբերվում է նրանով, որ մեկ NFT-ն չի կարող փոխարինել մյուսին։ Այստեղինները դեմո նկարներ են։"],
["2fa,password,secur,safe,գաղտնաբառ,անվտանգ,безопас,пароль,paroly","Use a long unique password, turn on two-step login wherever it exists, and never share codes or seed phrases with anyone. You can change your password in Settings.","Օգտագործիր երկար, եզակի գաղտնաբառ, միացրու երկաստիճան մուտքը, որտեղ կա, և երբեք մի տուր կոդերդ կամ seed phrase-դ։ Գաղտնաբառը կարող ես փոխել Կարգավորումներում։"],
["volatil,bull,bear,rise,fall,աճ,անկում,волатил","Volatility is how fast and how far a price moves. In a bull market prices rise, in a bear market they fall. High volatility means bigger possible gains and bigger possible losses.","Volatility-ն ցույց է տալիս՝ գինը որքան արագ և հեռու է շարժվում։ Bull շուկայում գները աճում են, bear շուկայում՝ իջնում։ Բարձր volatility՝ ավելի մեծ հնարավոր շահույթ և կորուստ։"],
["demo,real money,fake,simulat,դեմո,իրական,демо","This site is a practice environment: prices come from Kraken's public API (a few seconds delayed at most), the money is virtual ($10,000 to start) and nothing here is real trading. You can reset the balance in Settings.","Այս կայքը վարժանքային միջավայր է. գները Kraken-ի հանրային API-ից են, փողը վիրտուալ է (սկսում ես $10 000-ով), իրական առևտուր չկա։ Մնացորդը կարող ես վերականգնել Կարգավորումներում։"],
["start,begin,beginner,սկս,начать,sksel","A good way to start: 1) watch the chart for a few minutes, 2) make a few small demo buys, 3) write down why you bought, 4) review the History. Ask me about any term you meet.","Լավ սկիզբ՝ 1) մի քանի րոպե դիտիր գրաֆիկը, 2) արա մի քանի փոքր դեմո գնում, 3) գրիր, թե ինչու գնեցիր, 4) նայիր պատմությունը։ Ցանկացած տերմինի մասին կարող ես հարցնել ինձ։"]];
function botAnswer(q){q=q.toLowerCase();let best=null,sc=0;KB.forEach(e=>{let n=e[0].split(",").filter(k=>q.includes(k)).length;if(n>sc){sc=n;best=e}});return best?best[lang==="hy"?2:1]:tt("I can explain: Bitcoin, blockchain, candles, the order book, buying and selling, risk, NFTs, security, or how this demo works. Try one of those!","Կարող եմ բացատրել՝ Bitcoin, blockchain, մոմեր, order book, գնում և վաճառք, ռիսկ, NFT, անվտանգություն կամ ինչպես է աշխատում այս դեմոն։ Փորձիր մեկը։","Могу объяснить: Bitcoin, блокчейн, свечи, стакан заявок, покупку и продажу, риск, NFT, безопасность или как работает демо.")}
function botAdd(t,me){let d=document.createElement("div");d.textContent=t;if(me)d.className="me";$("#botMsgs").append(d);$("#botMsgs").scrollTop=1e9}
let botHist=[],aiOff=false;
async function botAsk(q){botAdd(q,1);botHist.push({role:"user",content:q});botHist=botHist.slice(-10);let d=document.createElement("div");d.textContent="…";$("#botMsgs").append(d);$("#botMsgs").scrollTop=1e9;let a;
if(!aiOff)try{a=(await api("/api/assistant",{method:"POST",body:JSON.stringify({messages:botHist,lang})})).text}catch(e){if(/no-key/.test(e.message))aiOff=true}
d.remove();a=a||botAnswer(q);botHist.push({role:"assistant",content:a});botAdd(a)}
function botOpen(){$("#bot").classList.remove("hidden");$("#botIn").placeholder=tt("Ask a question…","Տուր հարց…","Задайте вопрос…");$("#botChips").innerHTML="";[["bitcoin","What is Bitcoin?","Ի՞նչ է Bitcoin-ը"],["candle","How do I read the chart?","Ինչպե՞ս կարդալ գրաֆիկը"],["order book","What is the order book?","Ի՞նչ է order book-ը"],["start","How should I start?","Ինչպե՞ս սկսել"]].forEach(c=>{let b=document.createElement("button");b.textContent=lang==="hy"?c[2]:c[1];b.onclick=()=>botAsk(b.textContent);$("#botChips").append(b)});QB();if(!$("#botMsgs").children.length)botAdd(tt("Hi! Ask me anything about crypto or this demo.","Բարև։ Հարցրու ինձ կրիպտոյի կամ այս դեմոյի մասին։","Привет! Спросите о крипте или этом демо."))}
let AL=JSON.parse(localStorage.getItem("mb-al")||"[]");
function beep(){if(localStorage.getItem("mb-snd")==="0")return;try{let a=new(window.AudioContext||window.webkitAudioContext)(),o=a.createOscillator(),g=a.createGain();o.frequency.value=880;g.gain.value=.05;o.connect(g);g.connect(a.destination);o.start();o.stop(a.currentTime+.18)}catch{}}
function alSave(){localStorage.setItem("mb-al",JSON.stringify(AL));alDraw()}
function alDraw(){
  if(user&&serverAlerts.length){renderAlerts();return}
  let c=$("#alertList");if(!c)return;c.innerHTML="";
  AL.forEach((a,i)=>{let b=document.createElement("button");b.textContent=`${a.s} ${a.up?"≥":"≤"} ${money(a.p)} ×`;b.onclick=()=>{AL.splice(i,1);alSave()};c.append(b)});
}
async function loadAlerts(){
  if(!user){alDraw();return}
  try{let d=await api("/api/alerts");serverAlerts=d.alerts||[];renderAlerts();renderAlertRules()}catch{alDraw()}
}
function renderAlerts(){
  let c=$("#alertList"),h=$("#alertHistory");
  if(c){
    c.innerHTML="";
    let act=serverAlerts.filter(a=>a.status==="active");
    act.forEach(a=>{
      let b=document.createElement("button");
      b.textContent=`${a.symbol} ${a.condition==="gte"?"≥":"≤"} ${money(a.target_price)} ×`;
      b.onclick=async()=>{try{await api("/api/alerts/"+a.id,{method:"DELETE"});await loadAlerts()}catch(e){toast(e.message)}};
      c.append(b);
    });
  }
  if(h){
    h.innerHTML="";
    let trg=serverAlerts.filter(a=>a.status==="triggered");
    trg.slice(0,5).forEach(a=>{
      let b=document.createElement("button");
      b.style.opacity="0.75";
      b.textContent=`✓ ${a.symbol} ${a.condition==="gte"?"≥":"≤"} ${money(a.target_price)} (@ ${money(a.triggered_price)}) ×`;
      b.onclick=async()=>{try{await api("/api/alerts/"+a.id,{method:"DELETE"});await loadAlerts()}catch(e){toast(e.message)}};
      h.append(b);
    });
  }
}
function alCheck(){
  let n=AL.length;
  AL=AL.filter(a=>{let p=prices[a.s];if(p&&(a.up?p>=a.p:p<=a.p)){beep();toast(`🔔 ${a.s} ${a.up?"≥":"≤"} ${money(a.p)} (${money(p)})`);return false}return true});
  if(AL.length!==n)alSave();
  
}
const QZ=[[["What does a green candle mean?","Ի՞նչ է նշանակում կանաչ մոմը"],[["Price closed above its open","Գինը փակվել է բացվածից բարձր"],["Price closed below its open","Գինը փակվել է բացվածից ցածր"],["Trading was paused","Առևտուրը դադարեցվել է"]]],
[["In the order book, red rows are…","Order book-ում կարմիր տողերը…"],[["people selling","վաճառողներն են"],["people buying","գնորդներն են"],["fees","վճարներն են"]]],
[["Which is a sensible rule?","Ո՞րն է խելացի կանոն"],[["Only risk money you can afford to lose","Ռիսկի միայն այն գումարով, որը կարող ես կորցնել"],["Put everything in one coin","Ամբողջը դնել մեկ մետաղադրամի վրա"],["Borrow money to buy more","Գումար վերցնել՝ ավելի շատ գնելու համար"]]],
[["An NFT is…","NFT-ն…"],[["a unique digital item","եզակի թվային իր է"],["a cheaper Bitcoin","ավելի էժան Bitcoin է"],["a bank account","բանկային հաշիվ է"]]]];
let qz=null;
function QB(){let q=document.createElement("button");q.textContent=tt("🎯 Quiz me","🎯 Քննիր ինձ","🎯 Проверь меня");q.onclick=()=>{qz={i:0,s:0};quizNext()};$("#botChips").append(q)}
function quizNext(){let c=$("#botChips"),h=lang==="hy"?1:0;c.innerHTML="";if(qz.i>=QZ.length){botAdd(tt("Quiz done! Score: ","Քննությունն ավարտվեց։ Արդյունք՝ ","Готово! Результат: ")+qz.s+"/"+QZ.length);qz=null;return botOpen()}
let q=QZ[qz.i];botAdd((qz.i+1)+"/"+QZ.length+" · "+q[0][h]);q[1].map((o,k)=>[o,k]).sort(()=>Math.random()-.5).forEach(([o,k])=>{let b=document.createElement("button");b.textContent=o[h];b.onclick=()=>{botAdd(o[h],1);if(k===0){qz.s++;botAdd(tt("Correct!","Ճիշտ է։","Верно!"))}else botAdd(tt("Not quite. The right answer: ","Ոչ ճիշտ։ Ճիշտ պատասխանը՝ ","Не совсем. Верный ответ: ")+q[1][0][h]);qz.i++;setTimeout(quizNext,600)};c.append(b)})}
let qm="qr",qrT=null,qrK=null,qrTok=new URLSearchParams(location.search).get("qr");
function qrStop(){clearInterval(qrT);qrT=null}
async function qrStart(){qrStop();try{let d=await api("/api/auth/qr/new",{method:"POST",body:"{}"});qrK=d.token;$("#qrBox").innerHTML=d.svg;qrT=setInterval(async()=>{try{let r=await api("/api/auth/qr/status?token="+qrK);if(r.status==="ok"){qrStop();qrDone(r.user)}else if(r.status==="expired")qrStart()}catch{}},2000)}catch(e){$("#qrBox").textContent=e.message}}
function qrDone(u){user=u;playEntry();$("#auth").classList.add("hidden");each("#loginOpen,#registerOpen","add","hidden");$("#profileOpen").classList.remove("hidden");setPage("overview");loadPortfolio();toast("Welcome to Minimal Black")}
function setMethod(m,keep){if(!keep)qm=m;qrStop();let q=m==="qr";$("#resetForm").classList.add("hidden");$("#qrPane").classList.toggle("hidden",!q);each("#authForm,#forgotLink","toggle","hidden",q);$("#mQr").classList.toggle("selected",q);$("#mEmail").classList.toggle("selected",!q);$("#qrNote").textContent=q&&/^(localhost|127\.)/.test(location.hostname)?tt("Your phone can't open «localhost». Open this site on the computer via the network address shown in the terminal.","Հեռախոսդ չի կարող բացել «localhost»-ը։ Բացիր կայքը համակարգչում տերմինալում երևացող ցանցային հասցեով։","Телефон не откроет «localhost». Откройте сайт на компьютере по сетевому адресу из терминала."):"";if(q&&!$("#auth").classList.contains("hidden"))qrStart()}
async function qrAsk(){let k=qrTok;qrTok=null;history.replaceState(null,"",location.pathname);if(confirm(tt("Approve login on another device?","Թույլատրե՞լ մուտքը մեկ այլ սարքից։","Разрешить вход на другом устройстве?")))try{await api("/api/auth/qr/approve",{method:"POST",body:JSON.stringify({token:k})});toast("✓ "+tt("Approved","Թույլատրվեց","Разрешено"))}catch(e){toast(e.message)}}
let tf="1m",chartMode="chart",ordMode="market",stat=null,LO=[],depthD=null,tradesD=null,FEE=null;
function drawDepth(x,W,H,s,FG){let D=depthD;if(!D||!D.asks.length||!D.bids.length){x.fillStyle=`rgb(${FG})`;x.font="14px sans-serif";x.fillText(tt("Depth data unavailable","Խորության տվյալները անհասանելի են","Данные глубины недоступны"),20,30);return}
let p=prices[s],B=[],A=[],cb=0,ca=0;D.bids.slice(0,80).forEach(([pr,q])=>{cb+=q;B.push([pr,cb])});D.asks.slice(0,80).forEach(([pr,q])=>{ca+=q;A.push([pr,ca])});
let lo=B.at(-1)[0],hi=A.at(-1)[0],mx=Math.max(cb,ca),X=v=>(v-lo)/((hi-lo)||1)*W,Y=v=>H-10-v/mx*(H-40),area=(arr,col)=>{x.beginPath();x.moveTo(X(arr[0][0]),H);arr.forEach(q=>x.lineTo(X(q[0]),Y(q[1])));x.lineTo(X(arr.at(-1)[0]),H);x.closePath();x.fillStyle=col;x.fill()};
area(B,"rgba(74,222,155,.38)");area(A,"rgba(255,107,122,.38)");x.fillStyle=`rgb(${FG})`;x.font="15px monospace";x.fillText(fx(p,p),W/2-45,18);x.strokeStyle=`rgba(${FG},.35)`;x.beginPath();x.moveTo(X(p),26);x.lineTo(X(p),H);x.stroke()}
function drawHero(){let cv=$("#heroChart");if(!cv||!cv.offsetParent||!cd.length)return;let x=cv.getContext("2d"),W=cv.width,H=cv.height,v=cd.map(c=>c.c),lo=Math.min(...v),hi=Math.max(...v),fg=document.documentElement.dataset.theme==="light"?"0,0,0":"255,255,255",Y=y=>H-20-(y-lo)/((hi-lo)||1)*(H-60),X=i=>i/(v.length-1)*W,g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,`rgba(${fg},.28)`);g.addColorStop(1,`rgba(${fg},0)`);x.clearRect(0,0,W,H);x.beginPath();v.forEach((y,i)=>i?x.lineTo(X(i),Y(y)):x.moveTo(X(i),Y(y)));x.strokeStyle=`rgba(${fg},.9)`;x.lineWidth=3;x.stroke();x.lineTo(W,H);x.lineTo(0,H);x.closePath();x.fillStyle=g;x.fill()}
function drawMon(){let cv=$("#monCanvas");if(!cv||!cv.offsetParent||!cd.length)return;let x=cv.getContext("2d"),W=1280,H=720,s=$("#tradeSymbol").value||"BTC",p=prices[s],r=sr(Math.floor(Date.now()/2000)),
R=(a,b,w,h,f="#0f1317")=>{x.fillStyle=f;x.strokeStyle="#1d242b";x.beginPath();x.roundRect?x.roundRect(a,b,w,h,10):x.rect(a,b,w,h);x.fill();x.stroke()},
T=(t,a,b,c="#8f99a3",z=13,al="left")=>{x.fillStyle=c;x.font=z+"px sans-serif";x.textAlign=al;x.fillText(t,a,b)};
x.fillStyle="#06080a";x.fillRect(0,0,W,H);T("Essential  ×   +",44,28,"#e8ecef",14);T("+ Add widget",1250,28,"#e8ecef",13,"right");
R(16,44,236,520);T(s+"/USD",32,82,"#fff",24);T(fx(p,p),32,116,"#2ed38a",26);
[["24h volume",stat?(stat.vol/1e6).toFixed(2)+"M USD":"—"],["Min. order notional","1.0 USD"],["Max. order notional","1,000,000.0 USD"],["Daily notional limit","-- USD"],["Min. qty tick","0.00001 "+s],["Min. price tick","0.01 USD"]].forEach((q,i)=>{T(q[0],32,176+i*38);T(q[1],236,176+i*38,"#e8ecef",13,"right")});
R(262,44,540,520);let hi=Math.max(...cd.map(c=>c.h)),lo=Math.min(...cd.map(c=>c.l)),n=cd.length,cw=450/n,Y=v=>64+(1-(v-lo)/((hi-lo)||1))*330;
cd.forEach((c,i)=>{let cx=274+i*cw+cw/2;x.strokeStyle=x.fillStyle=c.c>=c.o?"#2ed38a":"#ff6b7a";x.beginPath();x.moveTo(cx,Y(c.h));x.lineTo(cx,Y(c.l));x.stroke();x.fillRect(cx-cw*.3,Math.min(Y(c.o),Y(c.c)),cw*.6,Math.max(2,Math.abs(Y(c.o)-Y(c.c))));let vh=Math.min(80,c.v/6*80);x.globalAlpha=.45;x.fillRect(cx-cw*.3,550-vh,cw*.6,vh);x.globalAlpha=1});
T(fx(p,hi),792,74,"#8f99a3",12,"right");T(fx(p,lo),792,398,"#8f99a3",12,"right");T("Volume",276,470,"#8f99a3",12);
R(812,44,200,520);T("Price (USD)",826,70,"#8f99a3",11);T("Size",1000,70,"#8f99a3",11,"right");
{let D=depthD||{asks:[],bids:[]},as=D.asks.slice(0,12).reverse(),bs=D.bids.slice(0,12),mx=Math.max(1e-9,...D.asks.slice(0,12).map(a=>a[1]),...bs.map(a=>a[1]));as.forEach((a,k)=>{let w=a[1]/mx*90+8;x.fillStyle="#ff6b7a33";x.fillRect(1004-w,84+k*17,w,15);T(fx(p,a[0]),826,96+k*17,"#ff8a96",11)});bs.forEach((a,k)=>{let w=a[1]/mx*90+8;x.fillStyle="#2ed38a33";x.fillRect(1004-w,330+k*17,w,15);T(fx(p,a[0]),826,342+k*17,"#5be8a8",11)})}T(fx(p,p)+" ↑",826,320,"#2ed38a",16);
R(1022,44,242,520);T("Available",1038,80);T("0.00 USD",1248,80,"#e8ecef",13,"right");R(1038,100,100,30,"#17313a");T("Buy",1088,120,"#2ed38a",13,"center");T("Sell",1190,120,"#8f99a3",13,"center");R(1038,148,210,34,"#0b0e11");T("Price",1050,170);R(1038,190,210,34,"#0b0e11");T("Quantity",1050,212);R(1038,300,210,40,"#2ed38a");T("Place order",1143,326,"#04140b",14,"center");[["Max buy",372],["Order value",400],["Fee",428]].forEach(q=>T(q[0],1038,q[1]));
R(16,574,1248,130);T("Open orders",32,604,"#e8ecef",13);(portfolio.orders||[]).slice(0,2).map((o,i)=>[o.symbol+"/USD",o.side==="buy"?"Buy":"Sell",o.type,String(o.quantity),String(o.price),640+i*28]).forEach(q=>{[32,200,300,420,640].forEach((px,j)=>T(q[j],px,q[5],j===1?(q[1]==="Buy"?"#2ed38a":"#ff6b7a"):"#cfd6dc",13))});
let l=$("#lapCanvas");if(l&&l.offsetParent)l.getContext("2d").drawImage(cv,0,0,l.width,l.height)}
function scrollAnim(){let s=$("#scrolly");if(!s||!s.offsetParent)return;let r=s.getBoundingClientRect(),p=matchMedia("(prefers-reduced-motion:reduce)").matches?1:Math.max(0,Math.min(1,-r.top/(r.height-innerHeight))),e=p*p*(3-2*p);$("#monitor").style.transform=`perspective(1800px) rotateX(${40*(1-e)}deg) rotateY(${-26*(1-e)}deg) scale(${.7+.3*e}) translateY(${(1-e)*50}px)`;$("#monCap").style.opacity=Math.max(0,Math.min(1,(p-.65)*4))}
function pairInfo(s){let p=prices[s],c=coins.find(x=>x[0]===s),ch=c[4],st=stat||{hi:p,lo:p,vol:0},pos=Math.max(0,Math.min(1,(p-st.lo)/((st.hi-st.lo)||1))),col=ch>=0?"#2ed38a":"#ff6b7a",chs=`<span title="${tt("Change since 00:00 UTC","Փոփոխություն 00:00 UTC-ից","Изменение с 00:00 UTC")}" style="color:${col}">${ch>=0?"↗ +":"↘ -"}${Math.abs(ch).toFixed(2)}%</span>`,idx=depthD&&depthD.bids[0]&&depthD.asks[0]?(depthD.bids[0][0]+depthD.asks[0][0])/2:null,set=(i,t)=>$("#"+i).textContent=t;
["piPair","bkPair","piName","chartTitle"].forEach(i=>set(i,s+"/USD"));set("piPrice",fx(p,p));$("#piPrice").style.color=col;$("#piChg").innerHTML=chs;set("piIdx",idx?"Mid: "+fx(p,idx):"");$("#piBar").style.left=(pos*100)+"%";set("piH","H "+fx(p,st.hi));set("piL","L "+fx(p,st.lo));
set("chartPrice",fx(p,p));$("#chartPrice").style.color=col;$("#chChg").innerHTML=chs;set("chIdx",idx?fx(p,idx):"—");set("chVol",(st.vol/1e6).toFixed(2)+"M");set("chHi",fx(p,st.hi));set("chLo",fx(p,st.lo));set("qtyUnit",s);set("avail",(portfolio.balance??10000).toLocaleString(undefined,{maximumFractionDigits:2})+" USD");
$("#piRows").innerHTML=[[tt("24h volume","24ժ ծավալ","Объём 24ч"),(st.vol/1e6).toFixed(2)+"M USD"],[tt("Min. order notional","Մին. պատվերի արժեք","Мин. сумма ордера"),"1.0 USD"],[tt("Max. order notional","Մաքս. պատվերի արժեք","Макс. сумма ордера"),"1,000,000.0 USD"],[tt("Daily notional limit","Օրական սահման","Дневной лимит"),"-- USD"],[tt("Fee (demo)","Վճար (դեմո)","Комиссия (демо)"),FEE==null?"—":(FEE*100).toFixed(2)+"%"],[tt("Min. qty tick","Մին. քանակի քայլ","Мин. шаг кол-ва"),"0.00001 "+s],[tt("Data source","Տվյալների աղբյուր","Источник данных"),"Kraken"]].map(r=>`<div><span>${r[0]}</span><b>${r[1]}</b></div>`).join("")}
const myH=s=>(portfolio.holdings||[]).find(x=>x.symbol===s)?.quantity||0;
function ordInfo(){$("#buyTab").classList.toggle("selected",side==="buy");$("#sellTab").classList.toggle("selected",side==="sell");if($("#bbo").checked)$("#limitPrice").value=prices[$("#tradeSymbol").value||"BTC"].toFixed(2);$("#place").style.background=side==="buy"?"#2ed38a":"#ff6b7a";$("#place").style.color="#06150d";let s=$("#tradeSymbol").value||"BTC",p=prices[s],q=+$("#quantity").value||0,bal=portfolio.balance??10000,lp=+$("#limitPrice").value;$("#ordInfo").innerHTML=[[tt("Available","Հասանելի","Доступно"),money(bal)],[tt("Holding","Ունես","В наличии"),myH(s).toFixed(5)+" "+s],[tt("Max buy","Առավելագույն գնում","Макс. покупка"),"≈"+(bal/p).toFixed(5)+" "+s],[tt("Order value","Պատվերի արժեք","Сумма ордера"),money(q*(ordMode==="limit"&&lp?lp:p))],[tt("Fee","Վճար","Комиссия"),FEE==null?"—":money(q*(ordMode!=="market"&&lp?lp:p)*FEE)+" ("+(FEE*100).toFixed(2)+"%)"]].map(r=>`<div><span>${r[0]}</span><b>${r[1]}</b></div>`).join("")}
function loSave(){renderOrders()}
const typeLbl=o=>({limit:"Limit",stop:"Stop-loss",tp:"Take-profit"})[o.type]||o.type;
function loDraw(){let c=$("#limitList");c.innerHTML="";(portfolio.orders||[]).forEach(o=>{let b=document.createElement("button");b.textContent=`${typeLbl(o)} ${o.side==="buy"?"B":"S"} ${o.quantity} ${o.symbol} @ ${money(o.price)} ×`;b.onclick=()=>cancelOrd(o.id);c.append(b)})}
async function cancelOrd(id){try{await api("/api/orders/"+id,{method:"DELETE"});await loadPortfolio();toast(tt("Order cancelled","Պատվերը չեղարկվեց","Ордер отменён"))}catch(e){toast(e.message)}}
async function sendOrder(o){if(sendOrder.busy)return;sendOrder.busy=true;try{await api("/api/orders",{method:"POST",body:JSON.stringify({...o,clientId:cid()})});flag("lim");await loadPortfolio();toast(tt("Order placed. The server executes it when the price is reached.","Պատվերը դրվեց։ Սերվերը կկատարի այն, երբ գինը հասնի։","Ордер размещён. Сервер исполнит его при достижении цены."))}catch(e){toast(e.message)}finally{sendOrder.busy=false}}
function cid(){return window.crypto&&crypto.randomUUID?crypto.randomUUID():Date.now()+"-"+Math.random().toString(36).slice(2)}
let ordTab="open";
function renderOrders(){let b=$("#ordBody");if(!b)return;loDraw();let mine=portfolio.orders||[],hd,rows="";$("#ordCnt").textContent=mine.length;
if(ordTab==="open"){hd=["Instrument","Side","Type","Qty","Price","Value",""];rows=mine.map(o=>`<div class="tr"><span>${o.symbol}/USD</span><span class="${o.side==="buy"?"gr":"rd"}">${o.side}</span><span>${typeLbl(o)}</span><span>${o.quantity}</span><span>${money(o.price)}</span><span>${money(o.quantity*o.price)}</span><button data-cx="${o.id}">×</button></div>`).join("")}
else if(ordTab==="pos"){let ps=Object.fromEntries((portfolio.positions||[]).map(p=>[p.symbol,{c:p.avg_price}]));hd=["Instrument","Qty","Entry","Price","Unrealized",""];rows=(portfolio.holdings||[]).filter(x=>x.quantity>1e-9).map(x=>{let en=ps[x.symbol]?.c||prices[x.symbol],u=(prices[x.symbol]-en)*x.quantity;return `<div class="tr"><span>${x.symbol}/USD</span><span>${(+x.quantity).toFixed(5)}</span><span>${money(en)}</span><span>${money(prices[x.symbol])}</span><span class="${u>=0?"gr":"rd"}">${u>=0?"+":""}${money(u)}</span><button data-close="${x.symbol}">Close</button></div>`}).join("")}
else{hd=["Time","Instrument","Side","Qty","Total"];rows=(portfolio.trades||[]).slice(0,20).map(x=>{let t=x.created_at||x.createdAt;return `<div class="tr"><span>${t?new Date(t).toLocaleString():"—"}</span><span>${x.symbol}/USD</span><span class="${x.side==="buy"?"gr":"rd"}">${x.side}</span><span>${x.quantity}</span><span>${money(x.total)}</span></div>`}).join("")}
b.innerHTML=`<div class="tr th">${hd.map(t=>`<span>${t}</span>`).join("")}</div>`+(rows||`<p class="tiny" style="padding:22px">${tt("Nothing here yet.","Այստեղ դեռ ոչինչ չկա։","Пока пусто.")}</p>`)}
function renderWatch(){let cur=$("#tradeSymbol").value||"BTC",up=coins.filter(c=>c[4]>=0).length;$("#mktsBody").innerHTML=coins.map(c=>`<div class="mk${c[0]===cur?" on":""}" data-sym="${c[0]}"><span><b>${c[0]}</b> <small>${c[1]}</small></span><span class="${fl(c[0])}">${fx(prices[c[0]],prices[c[0]])}</span><span class="${c[4]>=0?"gr":"rd"}">${c[4]>=0?"+":""}${c[4]}%</span></div>`).join("");
$("#mood").innerHTML=`${tt("Market mood","Շուկայի տրամադրություն","Настроение рынка")}: <b>${up}/${coins.length} ${tt("rising","աճում է","растут")}</b><div class="bar"><i style="width:${up/coins.length*100}%"></i></div>`}
function playEntry(force){if(!force&&localStorage.getItem("mb-entry")==="0")return;if(matchMedia("(prefers-reduced-motion:reduce)").matches)return;
let e=$("#entry"),c=$("#entryCv"),x=c.getContext("2d"),w=c.width=innerWidth,h=c.height=innerHeight,sz=18,cols=Math.ceil(w/sz),y=Array.from({length:cols},()=>-Math.random()*h/sz/2),t0=performance.now(),th=document.documentElement.dataset.theme,pal=th==="light"?["244,245,246","20,24,28","0,0,0"]:th==="ocean"?["6,14,32","90,170,255","255,255,255"]:["9,10,11","225,228,228","255,255,255"];
e.classList.remove("hidden");e.style.opacity=1;$("#entryTxt").textContent=tt("Welcome, ","Բարի գալուստ, ","Добро пожаловать, ")+(user?.username||"");x.fillStyle=`rgb(${pal[0]})`;x.fillRect(0,0,w,h);
let id=setInterval(()=>{let t=performance.now()-t0;x.fillStyle=`rgba(${pal[0]},.16)`;x.fillRect(0,0,w,h);x.font="16px monospace";for(let i=0;i<cols;i++){y[i]+=1+(i%5)*.18;x.fillStyle=Math.random()<.08?`rgb(${pal[2]})`:`rgba(${pal[1]},.8)`;x.fillText(Math.random()<.5?"1":"0",i*sz,y[i]*sz);if(y[i]*sz>h&&Math.random()>.9)y[i]=0}
if(t>1700)e.style.opacity=Math.max(0,1-(t-1700)/600);if(t>2300){clearInterval(id);e.classList.add("hidden")}},40)}
/*GAME*/let spk={},mkWatch=false,lastLvl=0;
const TS=t=>new Date(String(t).replace(" ","T")+"Z"),dayKey=d=>d.toLocaleDateString("en-CA"),trs=()=>(portfolio.trades||[]).slice().reverse();
const weekKey=()=>{let d=new Date(),y=d.getFullYear();return y+"w"+Math.floor((d-new Date(y,0,1))/6048e5)};
function gameState(){try{return JSON.parse(localStorage.getItem("mb-g-"+user?.username)||"{}")}catch{return{}}}
function gameSave(g){
  if(!user)return;
  localStorage.setItem("mb-g-"+user.username,JSON.stringify(g));
  api("/api/gamification",{method:"POST",body:JSON.stringify(g)}).catch(()=>{});
}
let gameSyncBusy=false;
async function syncGamification(){
  if(!user||gameSyncBusy)return;
  gameSyncBusy=true;
  try{
    let d=await api("/api/gamification");
    if(d&&d.gamification&&Object.keys(d.gamification).length){
      let loc=gameState();
      let m={...loc,...d.gamification,mp:Math.max(loc.mp||0,d.gamification.mp||0),bonus:Math.max(loc.bonus||0,d.gamification.bonus||0),f:{...(loc.f||{}),...(d.gamification.f||{})},c:{...(loc.c||{}),...(d.gamification.c||{})},boxes:[...(d.gamification.boxes||loc.boxes||[])]};
      localStorage.setItem("mb-g-"+user.username,JSON.stringify(m));
      if($("#page-missions").classList.contains("active"))renderMissions();
    } else {
      let loc=gameState();
      if(Object.keys(loc).length) await api("/api/gamification",{method:"POST",body:JSON.stringify(loc)});
    }
  }catch{}finally{gameSyncBusy=false}
}
function flag(n){if(!user)return;let g=gameState();g.f=g.f||{};g.f[weekKey()+":"+n]=1;gameSave(g)}
function gameCalc(){let T=trs(),g=gameState(),days=new Set(T.map(t=>dayKey(TS(t.created_at)))),now=Date.now(),streak=0,i=days.has(dayKey(new Date()))?0:1;while(days.has(dayKey(new Date(now-i*864e5)))){streak++;i++}
let base=T.reduce((a,t)=>a+20+Math.min(50,Math.floor(t.total/200)),0),boost=Math.min(streak,7)*.02,xp=Math.floor((base+(g.bonus||0))*(1+boost)),lvl=1+Math.floor(Math.sqrt(xp/60)),lo=60*(lvl-1)**2,hi=60*lvl**2,wk=T.filter(t=>now-TS(t.created_at)<6048e5),f=g.f||{},k=weekKey();
const M=[["freq",tt("Frequent Trader","Հաճախակի առևտրական","Частый трейдер"),tt("Make 5 trades","Կատարիր 5 գործարք","Совершите 5 сделок"),wk.length,5,20,"Common"],["div",tt("Diversify","Բազմազանություն","Диверсификация"),tt("Trade 3 different coins","Առևտուր արա 3 տարբեր մետաղադրամով","Торгуйте 3 разными монетами"),new Set(wk.map(t=>t.symbol)).size,3,30,"Magic"],["vol",tt("Volume Hunter","Ծավալի որսորդ","Охотник за объёмом"),tt("Trade $5,000 in total","Առևտուր արա $5 000 ընդհանուր","Торгуйте на $5 000"),Math.floor(wk.reduce((a,t)=>a+t.total,0)),5000,40,"Epic"],["lim",tt("Limit Master","Լիմիտի վարպետ","Мастер лимитов"),tt("Place a limit order","Դիր լիմիտ պատվեր","Разместите лимитный ордер"),f[k+":lim"]?1:0,1,25,"Common"],["alr",tt("Alert Setter","Ծանուցում դնող","Установщик уведомлений"),tt("Create a price alert","Ստեղծիր գնի ծանուցում","Создайте уведомление о цене"),f[k+":alr"]?1:0,1,25,"Magic"],["str",tt("Weekly Streak","Շաբաթական շարք","Недельная серия"),tt("Trade 7 days in a row","Առևտուր արա 7 օր անընդմեջ","Торгуйте 7 дней подряд"),streak,7,60,"Legendary"]];
return{T,g,streak,days,xp,lvl,lo,hi,M,wkk:k,boost}}
function showLvl(t,p){$("#lvlT").textContent=t;$("#lvlP").textContent=p;$("#lvl").classList.remove("hidden")}
function claim(id){let c=gameCalc(),m=c.M.find(x=>x[0]===id),g=c.g,k=c.wkk+":"+id;g.c=g.c||{};if(!m||m[3]<m[4]||g.c[k])return;g.c[k]=1;g.mp=(g.mp||0)+m[5];(g.boxes=g.boxes||[]).push(m[6]);gameSave(g);toast("⚡+"+m[5]+" · "+m[6]+" Loot Box");renderMissions()}
function openBox(i){let g=gameState(),r=(g.boxes||[])[i];if(!r)return;let b=gameCalc().lvl,R={Common:[20,50],Magic:[60,120],Epic:[150,300],Legendary:[400,800]}[r],x=R[0]+Math.floor(Math.random()*(R[1]-R[0]));g.boxes.splice(i,1);g.bonus=(g.bonus||0)+x;gameSave(g);let a=gameCalc().lvl;lastLvl=a;showLvl("+"+x+" XP",a>b?"🎉 "+tt("You've reached level ","Դու հասար մակարդակ ","Вы достигли уровня ")+a+"!":r+" Loot Box");renderMissions()}
function renderMissions(){if(!user)return;let c=gameCalc(),g=c.g;
$("#gmHead").innerHTML=`<div class="gem">◆</div><div class="gname"><b>${user.username}</b> <span class="tier">Lv ${c.lvl}</span><div class="xpbar"><i style="width:${Math.min(100,(c.xp-c.lo)/(c.hi-c.lo)*100)}%"></i></div><small>XP ${c.xp} / ${c.hi}</small></div><div class="gstat"><small>Streak boost</small><b>${c.streak}/7</b><small>+${Math.round(c.boost*100)}% XP</small></div><div class="gstat"><small>Mission points</small><b>⚡ ${g.mp||0}</b></div>`;
$("#gmStreak").innerHTML=[...Array(7)].map((_,i)=>{let d=new Date(Date.now()-(6-i)*864e5);return `<div class="dd${c.days.has(dayKey(d))?" on":""}"><i></i>${d.getMonth()+1}/${d.getDate()}</div>`}).join("");
$("#gmMissions").innerHTML=c.M.map(m=>{let done=m[3]>=m[4],got=g.c?.[c.wkk+":"+m[0]];return `<div class="ms"><div><b>${m[1]}</b><small>${m[2]}</small><div class="xpbar"><i style="width:${Math.min(100,m[3]/m[4]*100)}%"></i></div></div><span>${Math.min(m[3],m[4])} / ${m[4]}</span><span class="rw">⚡${m[5]} · ${m[6]}</span><button class="btn ${done&&!got?"light":""}" data-claim="${m[0]}" ${done&&!got?"":"disabled"}>${got?"CLAIMED":done?"CLAIM":"LOCKED"}</button></div>`}).join("");
$("#gmBoxes").innerHTML=(g.boxes||[]).map((r,i)=>`<div class="lb ${r}"><div class="cube"></div><b>${r}</b><small>Loot Box</small><button class="btn" data-open="${i}">Open</button></div>`).join("")||`<p class="tiny">${tt("Claim missions to earn loot boxes.","Պահանջիր առաջադրանքներ՝ տուփեր ստանալու համար։","Выполняйте миссии, чтобы получить боксы.")}</p>`}
function anaCalc(){let T=trs(),pos={},R=[];T.forEach(t=>{let p=pos[t.symbol]||(pos[t.symbol]={q:0,c:0});if(t.side==="buy"){p.c=(p.c*p.q+t.total)/(p.q+t.quantity);p.q+=t.quantity}else{R.push({t:TS(t.created_at),pnl:+t.pnl||0,s:t.symbol});p.q-=t.quantity}});
let W=R.filter(r=>r.pnl>0),L=R.filter(r=>r.pnl<=0),net=R.reduce((a,r)=>a+r.pnl,0),gw=W.reduce((a,r)=>a+r.pnl,0),gl=-L.reduce((a,r)=>a+r.pnl,0),eq=[],e=0,pk=0,dd=0,cur=0,mx=0,run=0;
R.forEach(r=>{e+=r.pnl;eq.push(e);pk=Math.max(pk,e);dd=Math.max(dd,pk-e);run=r.pnl>0?run+1:0;mx=Math.max(mx,run)});for(let i=R.length-1;i>=0&&R[i].pnl>0;i--)cur++;
let day={},hr=Array(24).fill(0);R.forEach(r=>{let k=dayKey(r.t);day[k]=(day[k]||0)+r.pnl;hr[r.t.getHours()]+=r.pnl});
let unreal=(portfolio.positions||[]).reduce((a,p)=>a+(p.unrealized||0),0);
return{pos,T,R,W,L,net,unreal,wr:R.length?W.length/R.length*100:0,pf:gl?gw/gl:(gw?Infinity:0),exp:R.length?net/R.length:0,avgW:W.length?gw/W.length:0,avgL:L.length?gl/L.length:0,big:Math.max(0,...R.map(r=>r.pnl)),small:Math.min(0,...R.map(r=>r.pnl)),eq,dd,cur,mx,day,hr,buys:T.filter(t=>t.side==="buy").length}}
function cBars(id,v){let cv=$(id),x=cv.getContext("2d"),W=cv.width,H=cv.height;x.clearRect(0,0,W,H);if(!v.length)return;let hi=Math.max(0,...v),lo=Math.min(0,...v),y=a=>10+(hi-a)/((hi-lo)||1)*(H-24),bw=W/v.length;v.forEach((a,i)=>{x.fillStyle=a>=0?"#2ed38a":"#ff6b7a";x.fillRect(i*bw+bw*.15,Math.min(y(a),y(0)),bw*.7,Math.max(2,Math.abs(y(a)-y(0))))});x.strokeStyle="#8b929566";x.beginPath();x.moveTo(0,y(0));x.lineTo(W,y(0));x.stroke()}
function cLine(id,v){let cv=$(id),x=cv.getContext("2d"),W=cv.width,H=cv.height;x.clearRect(0,0,W,H);if(v.length<2)return;let lo=Math.min(0,...v),hi=Math.max(0,...v),y=a=>10+(hi-a)/((hi-lo)||1)*(H-24),col=v.at(-1)>=0?"46,211,138":"255,107,122",g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,`rgba(${col},.4)`);g.addColorStop(1,`rgba(${col},0)`);x.beginPath();v.forEach((a,i)=>i?x.lineTo(i/(v.length-1)*W,y(a)):x.moveTo(0,y(a)));x.strokeStyle=`rgb(${col})`;x.lineWidth=3;x.stroke();x.lineTo(W,y(0));x.lineTo(0,y(0));x.closePath();x.fillStyle=g;x.fill()}
function renderAnalytics(){if(!user)return;let a=anaCalc(),hide=$("#anaHide").checked,m=v=>hide?"$•••••":(v<0?"-":"")+money(Math.abs(v)),sg=v=>(v>=0?"+":"")+(hide?"$•••••":money(v)),K=(t,v,c="")=>`<div class="kpi"><small>${t}</small><b class="${c}">${v}</b></div>`;
$("#anaKpi").innerHTML=K("Net P&L",sg(a.net),a.net>=0?"gr":"rd")+K("Win rate",a.wr.toFixed(1)+"%","gr")+K("Profit factor",a.pf===Infinity?"∞":a.pf.toFixed(2))+K("Expectancy",sg(a.exp))+K("Current streak","+"+a.cur+" wins")+K("Max drawdown",m(a.dd),"rd")+K("Trades",a.T.length+" · "+a.R.length+" closed")+K("Unrealized",sg(a.unreal),a.unreal>=0?"gr":"rd");
$("#anaTiles").innerHTML=K("Avg win",m(a.avgW),"gr")+K("Avg loss",m(a.avgL),"rd")+K("Risk:Reward",a.avgL?(a.avgW/a.avgL).toFixed(2):"—")+K("Largest win",m(a.big),"gr")+K("Largest loss",m(a.small),"rd")+K("Max win streak",a.mx);
cLine("#anaEq",a.eq);let days=Object.entries(a.day).sort();cBars("#anaDay",days.map(d=>d[1]));
let lo=Math.min(0,...a.R.map(r=>r.pnl)),hi=Math.max(0,...a.R.map(r=>r.pnl)),bins=Array(10).fill(0);a.R.forEach(r=>bins[Math.min(9,Math.floor((r.pnl-lo)/((hi-lo)||1)*10))]++);cBars("#anaDist",bins);cBars("#anaHr",a.hr);
$("#anaSide").innerHTML=`<div class="orow"><span>LONG</span><b>${a.R.length} ${tt("closed","փակված","закрыто")} · ${a.wr.toFixed(0)}%</b></div><div class="xpbar"><i style="width:${a.wr}%"></i></div><div class="orow"><span>${tt("Buys","Գնումներ","Покупки")}</span><b>${a.buys}</b></div><div class="orow dis"><span>SHORT</span><small>${tt("not available in demo","անհասանելի է դեմոյում","недоступно в демо")}</small></div>`;
$("#anaBest").innerHTML=days.sort((x,y)=>y[1]-x[1]).slice(0,5).map(d=>`<div class="orow"><span>${d[0]}</span><b class="${d[1]>=0?"gr":"rd"}">${sg(d[1])}</b></div>`).join("")||`<p class="tiny">${tt("Sell something to see your stats.","Վաճառիր ինչ-որ բան՝ վիճակագրությունը տեսնելու համար։","Продайте что-нибудь, чтобы увидеть статистику.")}</p>`}
function refreshGame(){if(!user)return;let l=gameCalc().lvl;if(lastLvl&&l>lastLvl)showLvl("🎉 "+tt("Level ","Մակարդակ ","Уровень ")+l,tt("You've reached level ","Դու հասար մակարդակ ","Вы достигли уровня ")+l+"!");lastLvl=l;if($("#page-missions").classList.contains("active"))renderMissions();if($("#page-analytics").classList.contains("active"))renderAnalytics()}
/*ENDGAME*/
/*PRO*/let bots=[],botBusy=false,botsUser=null,OPT=null;
const botKey=()=>"mb-bots-"+user?.username,rowsH=r=>r.map(x=>`<div class="orow"><span>${x[0]}</span><b>${x[1]}</b></div>`).join(""),PAL=["#ffe14d","#4fc3ff","#2ed38a","#ff9f43","#6a8dff","#ff5c5c","#b06aff"];
function ensureBots(){if(user&&botsUser!==user.username){botsUser=user.username;try{bots=JSON.parse(localStorage.getItem(botKey())||"[]")}catch{bots=[]}}}
function botsSave(){localStorage.setItem(botKey(),JSON.stringify(bots))}
function botCfg(){let n=id=>+$(id).value;return{name:$("#bName").value||"DCA",s:$("#bSym").value,base:n("#bBase"),tp:n("#bTp"),avg:$("#bAvg").checked,avgSz:n("#bAvgSz"),dev:n("#bDev"),max:Math.max(0,Math.min(10,Math.floor(n("#bMax")))),szM:n("#bSzM")||1,stM:n("#bStM")||1,rsi:$("#bRsi").checked,rsiL:Math.max(2,Math.floor(n("#bRsiL"))),rsiV:n("#bRsiV")}}
function rsi(a,L){if(!a||a.length<L+1)return 50;let g=0,l=0;for(let i=a.length-L;i<a.length;i++){let d=a[i]-a[i-1];d>0?g+=d:l-=d}return l===0?100:100-100/(1+g/l)}
function ladder(c,p0){let o=[{n:"Base",p:p0,usd:c.base}],prev=p0;if(c.avg)for(let i=0;i<c.max;i++){let pr=prev*(1-c.dev*c.stM**i/100);o.push({n:"Avg "+(i+1),p:pr,usd:c.avgSz*c.szM**i});prev=pr}return o}
function botSummary(){let c=botCfg(),p=prices[c.s],o=ladder(c,p),usd=o.reduce((a,x)=>a+x.usd,0),q=o.reduce((a,x)=>a+x.usd/x.p,0),avg=usd/q;$("#bOut").innerHTML=`<div class="tr th"><span>Order</span><span>Price</span><span>Size (USD)</span></div>`+o.map(x=>`<div class="tr"><span>${x.n}</span><span>${money(x.p)}</span><span>${money(x.usd)}</span></div>`).join("")+rowsH([["Max investment",money(usd)],["Avg entry (all filled)",money(avg)],["Take profit at",money(avg*(1+c.tp/100))]])}
function botBacktest(){let c=botCfg(),a=spk[c.s]||[];if(a.length<10){$("#bOut").innerHTML="<p class='tiny'>No data yet</p>";return}
let ent=[],cyc=0,prof=0,mx=0;for(let i=0;i<a.length;i++){let p=a[i];if(!ent.length){ent.push({p,usd:c.base});continue}let q=ent.reduce((s,e)=>s+e.usd/e.p,0),cost=ent.reduce((s,e)=>s+e.usd,0);if(p>=cost/q*(1+c.tp/100)){prof+=p*q-cost;cyc++;ent=[];continue}let f=ent.length-1;if(c.avg&&f<c.max&&p<=ent.at(-1).p*(1-c.dev*c.stM**f/100)&&(!c.rsi||rsi(a.slice(0,i+1),c.rsiL)<c.rsiV))ent.push({p,usd:c.avgSz*c.szM**f});mx=Math.max(mx,ent.reduce((s,e)=>s+e.usd,0))}
let q=ent.reduce((s,e)=>s+e.usd/e.p,0),cost=ent.reduce((s,e)=>s+e.usd,0);$("#bOut").innerHTML=rowsH([["Cycles completed",cyc],["Realized profit",money(prof)],["Open position P&L",money(q?a.at(-1)*q-cost:0)],["Max invested",money(mx)],["Data",a.length+" x 15m (Kraken closes)"]])}
let serverBots=[];
async function loadBots(){
  if(!user){renderBots();return}
  try{let d=await api("/api/bots");serverBots=d.bots||[];renderBots()}catch{renderBots()}
}
async function botStart(){
  let c=botCfg();
  if(!(c.base>0)||!(c.tp>0))return toast("Check the settings");
  if(user){
    try{
      await api("/api/bots",{method:"POST",body:JSON.stringify(c)});
      toast("▶ Server 24/7 bot started: "+c.name);
      await loadBots();
      return;
    }catch(e){toast(e.message)}
  }
  ensureBots();
  bots.push({id:Date.now(),c,on:true,e:[],profit:0,cycles:0});
  botsSave();
  renderBots();
  toast("▶ "+c.name);
}
function renderBots(){
  let b=$("#bList");if(!b)return;
  if(user&&serverBots.length){
    b.innerHTML=serverBots.map(x=>{
      let c=x.config||{},pl=x.profit||0,statusText=x.is_active?"Running (Server 24/7)":(x.last_error||"Stopped");
      return `<div class="tr"><span><b>${x.name}</b> <small>${x.symbol}/USD</small></span><span class="${x.is_active?"gr":"rd"}">${statusText}</span><span>Base $${c.base||100}</span><span>TP ${c.tp||1.5}%</span><span class="${pl>=0?"gr":"rd"}">${pl>=0?"+":""}${money(pl)}</span><span>${x.cycles} cycles</span><span style="display:flex;gap:4px"><button data-server-bot="${x.id}" data-server-act="toggle">${x.is_active?"Stop":"Resume"}</button><button data-server-bot="${x.id}" data-server-act="delete" style="color:#ff6b7a">×</button></span></div>`;
    }).join("");
    return;
  }
  ensureBots();
  b.innerHTML=bots.map((x,i)=>{let q=x.e.reduce((s,e)=>s+e.q,0),cost=x.e.reduce((s,e)=>s+e.q*e.p,0),pl=q?prices[x.c.s]*q-cost:0;return `<div class="tr"><span><b>${x.c.name}</b> <small>${x.c.s}/USD</small></span><span class="${x.on?"gr":"rd"}">${x.on?"Running":x.err||"Stopped"}</span><span>${x.e.length} orders</span><span>${q?money(cost/q):"—"}</span><span class="${pl>=0?"gr":"rd"}">${pl>=0?"+":""}${money(pl)}</span><span>${x.cycles} cycles · ${money(x.profit)}</span><button data-bt="${i}">${x.on?"Stop":"Delete"}</button></div>`}).join("")||`<p class="tiny">${tt("No bots yet.","Բոտեր դեռ չկան։","Ботов пока нет.")}</p>`}
async function botTick(){
  if(user&&serverBots.length)return;
  ensureBots();if(botBusy||!user)return;let run=bots.filter(b=>b.on);if(!run.length)return;botBusy=true;let traded=false;
  try{for(const b of run){let c=b.c,p=prices[c.s];if(!p)continue;const buy=async usd=>{let q=+(usd/p).toFixed(6);await api("/api/trades",{method:"POST",body:JSON.stringify({symbol:c.s,side:"buy",quantity:q})});b.e.push({p,q});traded=true};
  try{if(!b.e.length)await buy(c.base);else{let q=b.e.reduce((s,e)=>s+e.q,0),cost=b.e.reduce((s,e)=>s+e.q*e.p,0);if(p>=cost/q*(1+c.tp/100)){let sq=Math.floor(q*1e6)/1e6;await api("/api/trades",{method:"POST",body:JSON.stringify({symbol:c.s,side:"sell",quantity:sq})});b.profit+=p*sq-cost;b.cycles++;b.e=[];traded=true}else{let f=b.e.length-1;if(c.avg&&f<c.max&&p<=b.e.at(-1).p*(1-c.dev*c.stM**f/100)&&(!c.rsi||rsi(spk[c.s],c.rsiL)<c.rsiV))await buy(c.avgSz*c.szM**f)}}}catch(e){b.on=false;b.err=e.message}}}finally{botBusy=false}
  botsSave();if(traded)await loadPortfolio();renderBots()}
function pstat(w,R){let n=R[0].length,rs=[];for(let t=0;t<n;t++)rs.push(w.reduce((s,x,i)=>s+x*R[i][t],0));let m=rs.reduce((a,b)=>a+b,0)/n,sd=Math.sqrt(rs.reduce((a,b)=>a+(b-m)**2,0)/n)||1e-9,v=100,pk=100,dd=0,path=[100];rs.forEach(r=>{v*=1+r;path.push(v);pk=Math.max(pk,v);dd=Math.max(dd,(pk-v)/pk)});return{m,sd,sh:m/sd,cum:v/100-1,dd,best:Math.max(...rs),worst:Math.min(...rs),path}}
function capW(w,cap){let s=w.reduce((a,b)=>a+b,0);w=w.map(x=>x/s);for(let k=0;k<20;k++){let ex=0,free=0;w=w.map(x=>{if(x>cap){ex+=x-cap;return cap}free+=x;return x});if(ex<1e-9)break;w=w.map(x=>x<cap?x+(free?x/free*ex:ex/w.length):x)}s=w.reduce((a,b)=>a+b,0);return w.map(x=>x/s)}
let optTok=0,lastOpt={sel:"",w1:null,w2:null};
const cssv=v=>(getComputedStyle(document.documentElement).getPropertyValue(v)||"#fff").trim();
function anim(d,fn){return new Promise(r=>{let t0=performance.now();(function st(n){let t=Math.min(1,(n-t0)/d);fn(1-(1-t)**3);t<1?requestAnimationFrame(st):r()})(t0)})}
function fitCv(cv,w,h){let d=window.devicePixelRatio||1,W=Math.min(w,cv.parentElement?.clientWidth||w),H=W*h/w;cv.style.width=W+"px";cv.style.height=H+"px";cv.width=Math.round(W*d);cv.height=Math.round(H*d);let x=cv.getContext("2d");x.setTransform(d,0,0,d,0,0);return{x,W,H}}
function drawDonut(g,sel,w,prog,ctr){let{x,W,H}=g,cx=W/2,cy=H/2,R=Math.min(W,H)/2-12,a0=-Math.PI/2;x.clearRect(0,0,W,H);w.forEach((v,i)=>{let a1=a0+v*2*Math.PI*prog;if(a1>a0+1e-6){x.beginPath();x.arc(cx,cy,R,a0,a1);x.arc(cx,cy,R*.58,a1,a0,true);x.closePath();x.fillStyle=PAL[i%PAL.length];x.fill();if(v*prog>=.06){let m=(a0+a1)/2;x.fillStyle="#000";x.font="bold 13px sans-serif";x.textAlign="center";x.fillText(sel[i]+" "+Math.round(v*100)+"%",cx+Math.cos(m)*R*.79,cy+Math.sin(m)*R*.79+4)}}a0=a1});
x.fillStyle=cssv("--text");x.textAlign="center";x.font="12px sans-serif";x.fillText(ctr[0],cx,cy-8);x.font="bold 22px sans-serif";x.fillText(ctr[1],cx,cy+16)}
function drawPerf(g,a,b,k){let{x,W,H}=g,all=[...a.path,...b.path],lo=Math.min(...all),hi=Math.max(...all),Y=v=>14+(hi-v)/((hi-lo)||1)*(H-34),pw=W-70;x.clearRect(0,0,W,H);x.setLineDash([4,4]);x.strokeStyle="#8b929566";x.lineWidth=1;x.beginPath();x.moveTo(0,Y(100));x.lineTo(pw,Y(100));x.stroke();x.setLineDash([]);
[[a.path,"#4fc3ff"],[b.path,"#2ed38a"]].forEach(([p,col])=>{let n=(p.length-1)*k,fi=Math.floor(n),fr=n-fi,ev=fi>=p.length-1?p.at(-1):p[fi]+(p[fi+1]-p[fi])*fr;x.beginPath();x.moveTo(0,Y(p[0]));for(let i=1;i<=Math.min(fi,p.length-1);i++)x.lineTo(i/(p.length-1)*pw,Y(p[i]));let ex=Math.min(n,p.length-1)/(p.length-1)*pw;x.lineTo(ex,Y(ev));x.strokeStyle=col;x.lineWidth=3;x.lineJoin="round";x.stroke();x.beginPath();x.arc(ex,Y(ev),5,0,7);x.fillStyle=col;x.shadowColor=col;x.shadowBlur=14;x.fill();x.shadowBlur=0;x.font="13px sans-serif";x.textAlign="left";x.fillText(ev.toFixed(1),ex+9,Y(ev)+4)})}
async function runOpt(){let tok=++optTok,sel=[...$$("#oAssets input")].filter(i=>i.checked).map(i=>i.value),msg=t=>$("#oMsg").innerHTML=t.map(x=>`<p><i></i>${x}</p>`).join("");if(sel.length<2)return msg(["Select at least 2 assets."]);
let R=sel.map(s=>{let a=spk[s]||[];return a.slice(1).map((v,i)=>v/a[i]-1)}),n=Math.min(...R.map(r=>r.length));if(n<5)return msg(["Not enough price data yet, try again in a moment."]);R=R.map(r=>r.slice(-n));
let cap=Math.max(+$("#oMax").value/100,1/sel.length+1e-6),strat=$("#oStrat").value,hv=sel.map(s=>(myH(s)||0)*prices[s]),tot=hv.reduce((a,b)=>a+b,0),cur=tot>0?hv.map(x=>x/tot):sel.map(()=>1/sel.length),best=null,bs=-Infinity;
const score=st=>strat==="sharpe"?st.sh:strat==="vol"?-st.sd:st.m,fmt=v=>strat==="sharpe"?v.toFixed(2):strat==="vol"?(-v*100).toFixed(3)+"%":(v*100).toFixed(3)+"%",lab=strat==="sharpe"?"Sharpe":strat==="vol"?"volatility":"return";
$("#oRun").classList.add("busy");$("#oTable").innerHTML="";
if(strat==="eq")best=capW(sel.map(()=>1),cap);else for(let b=0;b<10;b++){for(let k=0;k<400;k++){let w=capW(sel.map(()=>-Math.log(Math.random()+1e-9)),cap),sc=score(pstat(w,R));if(sc>bs){bs=sc;best=w}}$("#oProg").textContent=`Searching ${(b+1)*400}/4000 portfolios · best ${lab}: ${fmt(bs)}`;$("#oBar").style.width=(b+1)*10+"%";await new Promise(r=>requestAnimationFrame(r));if(tok!==optTok)return}
$("#oRun").classList.remove("busy");$("#oProg").textContent=strat==="eq"?"Equal weights applied":`Done · best ${lab}: ${fmt(bs)}`;$("#oBar").style.width="100%";
OPT={sel,cur,opt:best,sc:pstat(cur,R),so:pstat(best,R)};let a=OPT.sc,b=OPT.so,P=v=>(v*100).toFixed(2)+"%",N=(v,f)=>`<span class="num ${v<0?"rd":"gr"}" data-v="${v}" data-f="${f}">${f==="p"?P(v):v.toFixed(2)}</span>`,
rows=[["Sharpe ratio",a.sh,b.sh,"n",b.sh>=a.sh],["Volatility (per period)",a.sd,b.sd,"p",b.sd<=a.sd],["Max drawdown",a.dd,b.dd,"p",b.dd<=a.dd],["Cumulative return",a.cum,b.cum,"p",b.cum>=a.cum],["Best period",a.best,b.best,"p",b.best>=a.best],["Worst period",a.worst,b.worst,"p",b.worst>=a.worst]];
$("#oTable").innerHTML=`<div class="tr th"><span>Metric</span><span>Current</span><span>Optimized</span><span></span></div>`+rows.map((r,i)=>`<div class="tr" style="animation-delay:${i*90}ms"><span>${r[0]}</span>${N(r[1],r[3])}${N(r[2],r[3])}<span class="${r[4]?"gr":"rd"}">${r[4]?"✔":"✖"}</span></div>`).join("");
$("#oLegend").innerHTML=sel.map((s,i)=>`<span class="lg" style="animation-delay:${i*70}ms"><i style="background:${PAL[i%PAL.length]}"></i>${s} ${Math.round(cur[i]*100)}% → <b>${Math.round(best[i]*100)}%</b></span>`).join("");
msg(["Data window: "+n+" real 15-minute periods per asset (Kraken).",tot>0?"Current portfolio = your real demo holdings.":"You hold none of these assets, so the current portfolio is an equal-weight sample.","Educational tool based on past data: not a prediction or financial advice."]);
let g1=fitCv($("#oD1"),440,340),g2=fitCv($("#oD2"),440,340),g3=fitCv($("#oPerf"),1000,300),same=lastOpt.sel===sel.join(),ctr1=["Sharpe",a.sh.toFixed(2)],ctr2=["Sharpe",b.sh.toFixed(2)];
const mix=(p,q,k)=>q.map((v,i)=>p[i]+(v-p[i])*k);
await Promise.all([anim(1000,k=>{if(tok!==optTok)return;drawDonut(g1,sel,same?mix(lastOpt.w1,cur,k):cur,same?1:k,ctr1);drawDonut(g2,sel,same?mix(lastOpt.w2,best,k):best,same?1:k,ctr2)}),anim(1400,k=>{if(tok===optTok)drawPerf(g3,a,b,k)}),anim(900,k=>{if(tok!==optTok)return;$$("#oTable .num").forEach(e=>{let v=+e.dataset.v*k;e.textContent=e.dataset.f==="p"?(v*100).toFixed(2)+"%":v.toFixed(2)})})]);
lastOpt={sel:sel.join(),w1:cur,w2:best}}
const v2=v=>v.toFixed(1);
function optCsv(){if(!OPT)return;let rows=[["asset","current_weight","optimized_weight"],...OPT.sel.map((s,i)=>[s,(OPT.cur[i]*100).toFixed(2),(OPT.opt[i]*100).toFixed(2)])],a=document.createElement("a");a.href=URL.createObjectURL(new Blob([rows.map(r=>r.join(",")).join("\n")],{type:"text/csv"}));a.download="portfolio-report.csv";a.click()}
function renderTape(){let t=coins.map(c=>`<span class="tp"><b class="${c[4]>=0?"gr":"rd"}">${c[4]>=0?"+":""}${c[4]}%</b>${c[0]}-USD ${c[4]>=0?"↑":"↓"} ${fx(prices[c[0]],prices[c[0]])}</span>`).join("");$("#tapeIn").innerHTML=t+t}
function drawClock(){let cv=$("#clock");if(!cv||!cv.offsetParent)return;let x=cv.getContext("2d"),d=new Date(),c=80,fg=(getComputedStyle(document.documentElement).getPropertyValue("--text")||"#fff").trim();x.clearRect(0,0,160,160);x.strokeStyle=fg;x.lineWidth=2;x.beginPath();x.arc(c,c,70,0,7);x.stroke();x.fillStyle=fg;x.font="12px sans-serif";x.textAlign="center";for(let i=1;i<=12;i++){let a=i/12*2*Math.PI-Math.PI/2;x.fillText(i,c+Math.cos(a)*58,c+Math.sin(a)*58+4)}
const hand=(f,len,w,col)=>{let a=f*2*Math.PI-Math.PI/2;x.strokeStyle=col;x.lineWidth=w;x.beginPath();x.moveTo(c,c);x.lineTo(c+Math.cos(a)*len,c+Math.sin(a)*len);x.stroke()};hand(((d.getHours()%12)+d.getMinutes()/60)/12,38,4,fg);hand((d.getMinutes()+d.getSeconds()/60)/60,54,3,fg);hand(d.getSeconds()/60,60,1.5,"#2ed38a");$("#clockT").textContent=d.toLocaleTimeString()+" · "+d.toLocaleDateString()}
function joinOrder(sd){let s=$("#tradeSymbol").value||"BTC",q=+$("#quantity").value,D=depthD,b=D&&(sd==="buy"?D.bids[0]:D.asks[0]);if(!(q>0)||!user||!b)return toast(tt("Order book unavailable","Order book-ը անհասանելի է","Стакан недоступен"));sendOrder({symbol:s,side:sd,type:"limit",quantity:q,price:b[0]})}

/* RISK CALCULATOR */
function initRiskCalc(){
  let s=$("#tradeSymbol")?.value||"BTC",p=prices[s]||0;
  if(!p)return;
  let bal=portfolio.balance??10000;
  let rPct=+$("#rcRiskPct")?.value||2;
  let riskUsd=bal*(rPct/100);
  let spInput=$("#rcStopPrice"),tpInput=$("#rcTpPrice");
  if(spInput&&!spInput.value){
    spInput.placeholder=(p*(side==="buy"?0.98:1.02)).toFixed(p<1?5:2);
  }
  if(tpInput&&!tpInput.value){
    tpInput.placeholder=(p*(side==="buy"?1.04:0.96)).toFixed(p<1?5:2);
  }
  let sp=spInput?.value?+spInput.value:(p*(side==="buy"?0.98:1.02));
  let tp=tpInput?.value?+tpInput.value:0;
  let dist=Math.abs(p-sp);
  let qty=dist>0?(riskUsd/dist):0;
  let val=qty*p;
  let rewDist=tp>0?Math.abs(tp-p):0;
  let rr=dist>0&&tp>0?(rewDist/dist).toFixed(2):"—";
  let profit=qty*rewDist;

  if($("#rcRiskUsd"))$("#rcRiskUsd").textContent=money(riskUsd);
  if($("#rcQty"))$("#rcQty").textContent=qty>0?(+qty.toFixed(5))+" "+s:"0.00000";
  if($("#rcValue"))$("#rcValue").textContent=money(val);
  if($("#rcRr"))$("#rcRr").textContent=rr!=="—"?`1 : ${rr}`:"—";
  if($("#rcProfit"))$("#rcProfit").textContent=money(profit);
}

/* TRADING JOURNAL */
async function loadJournal(){
  if(!user)return;
  let jSym=$("#jSymbol");
  if(jSym&&!jSym.children.length){
    jSym.innerHTML=coins.map(c=>`<option value="${c[0]}">${c[0]} — ${c[1]}</option>`).join("");
  }
  let jTr=$("#jTradeId");
  if(jTr){
    let curVal=jTr.value;
    let trs=portfolio.trades||[];
    jTr.innerHTML=`<option value="">Independent</option>`+trs.slice(0,30).map(t=>{
      let d=t.created_at?new Date(t.created_at).toLocaleDateString():"";
      return `<option value="${t.id}">#${t.id} ${t.symbol} ${t.side.toUpperCase()} ${money(t.total)} (${d})</option>`;
    }).join("");
    if(curVal)jTr.value=curVal;
  }
  try{
    let d=await api("/api/journal");
    journalList=d.entries||[];
    renderJournal();
  }catch(e){toast(e.message)}
}

function renderJournal(){
  let q=($("#jSearch")?.value||"").toLowerCase().trim();
  let filtered=journalList.filter(e=>{
    if(!q)return true;
    return (e.title||"").toLowerCase().includes(q)||
           (e.notes||"").toLowerCase().includes(q)||
           (e.symbol||"").toLowerCase().includes(q)||
           (e.strategy||"").toLowerCase().includes(q)||
           (e.emotion||"").toLowerCase().includes(q);
  });

  let count=journalList.length,stratCounts={},emotionCounts={},totalRating=0;
  journalList.forEach(e=>{
    if(e.strategy)stratCounts[e.strategy]=(stratCounts[e.strategy]||0)+1;
    if(e.emotion)emotionCounts[e.emotion]=(emotionCounts[e.emotion]||0)+1;
    totalRating+=Number(e.rating)||3;
  });
  let topStrat=Object.entries(stratCounts).sort((a,b)=>b[1]-a[1])[0]?.[0]||"—";
  let topEmotion=Object.entries(emotionCounts).sort((a,b)=>b[1]-a[1])[0]?.[0]||"—";
  let avgRating=count?(totalRating/count).toFixed(1):"0.0";

  if($("#jTotalCount"))$("#jTotalCount").textContent=count;
  if($("#jTopStrat"))$("#jTopStrat").textContent=topStrat;
  if($("#jTopEmotion"))$("#jTopEmotion").textContent=topEmotion;
  if($("#jAvgRating"))$("#jAvgRating").textContent=`★ ${avgRating}`;

  let listEl=$("#journalList");
  if(!listEl)return;
  if(!filtered.length){
    listEl.innerHTML=`<p class="tiny" style="padding:20px;text-align:center;color:var(--muted)">${tt("No journal entries found. Add your first note!","Օրագրի գրառումներ չկան։ Ավելացրու քո առաջին նշումը։","Записей в дневнике пока нет. Добавьте первую!")}</p>`;
    return;
  }

  listEl.innerHTML=filtered.map(e=>{
    let stars="★".repeat(Math.max(1,Math.min(5,e.rating||3)))+"☆".repeat(Math.max(0,5-(e.rating||3)));
    let dt=e.created_at?new Date(e.created_at).toLocaleString():"";
    let emoCol={Disciplined:"#2ed38a",Confident:"#4fc3ff",FOMO:"#ff9f43",Anxious:"#ffe14d",Impulsive:"#ff6b7a","Revenge Trade":"#ff5c5c"}[e.emotion]||"#8b9295";
    return `<div class="panel pad" style="background:rgba(255,255,255,0.02);border:1px solid var(--line);position:relative">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;margin-bottom:6px">
        <div>
          <b style="font-size:14px">${e.title}</b>
          <div style="display:flex;gap:6px;align-items:center;margin-top:4px;flex-wrap:wrap">
            <span class="tag" style="font-weight:700">${e.symbol}/USD</span>
            <span class="tag" style="border-color:${emoCol};color:${emoCol}">${e.emotion}</span>
            <span class="tag">${e.strategy}</span>
            <span style="color:#ffe14d;font-size:11px">${stars}</span>
            ${e.trade_id?`<span class="tag">Trade #${e.trade_id}</span>`:""}
          </div>
        </div>
        <button class="btn outline" data-del-journal="${e.id}" style="padding:2px 8px;font-size:11px;color:#ff6b7a">×</button>
      </div>
      <p style="font-size:12px;line-height:1.5;margin:8px 0;color:#cfd6dc;white-space:pre-wrap">${e.notes||""}</p>
      <small style="color:var(--muted);font-size:10px">${dt}</small>
    </div>`;
  }).join("");
}

/* PERSISTENT COMMUNITY CHAT */
async function loadChat(){
  let el=$("#messages");if(!el)return;
  try{
    let d=await api("/api/chat");
    let msgs=d.messages||[];
    el.innerHTML=msgs.map(m=>{
      let isMe=user&&m.user_id===user.id;
      let dt=m.created_at?new Date(m.created_at).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):"";
      return `<div style="display:flex;flex-direction:column;align-items:${isMe?"flex-end":"flex-start"}">
        <div style="font-size:11px;color:var(--muted);margin-bottom:2px"><b>${m.username}</b> <small>${dt}</small></div>
        <div style="background:${isMe?"rgba(46,211,138,0.15)":"rgba(255,255,255,0.05)"};border:1px solid ${isMe?"rgba(46,211,138,0.3)":"var(--line)"};border-radius:8px;padding:8px 12px;max-width:80%;font-size:13px;color:#f1f2f2;word-break:break-word">
          ${m.message}
        </div>
      </div>`;
    }).join("")||`<p class="tiny" style="color:var(--muted);text-align:center;padding:20px">${tt("No community messages yet. Be the first to say hello!","Հաղորդագրություններ դեռ չկան։ Եղիր առաջինը, ով կողջունի։","Сообщений пока нет. Будьте первым!")}</p>`;
    el.scrollTop=el.scrollHeight;
  }catch(e){console.error("loadChat error:",e)}
}
/*ENDPRO*/
/*VOICE*/let lastNoteId=0,notesReady=false,notesUser=null,notesCache=[],audioCtx=null,prevPx={};
const fl=s=>prevPx[s]==null||prevPx[s]===prices[s]?"":prices[s]>prevPx[s]?"fu":"fd",vget=(k,d)=>{let v=localStorage.getItem(k);return v==null?d:v};
const VS=()=>({on:vget("mb-voice","1")!=="0",alerts:vget("mb-valert","1")!=="0",fills:vget("mb-vfill","1")!=="0",fx:vget("mb-snd","1")!=="0",vol:+vget("mb-vvol",90)/100,rate:+vget("mb-vrate",100)/100,uri:vget("mb-vuri",""),lg:vget("mb-vlang","auto")});
const NAMES={BTC:["Bitcoin","Биткоин","Բիթքոին"],ETH:["Ethereum","Эфириум","Եթերիում"],SOL:["Solana","Солана","Սոլանա"],XRP:["XRP","Икс-Эр-Пи","Էքս-Էր-Փի"],ADA:["Cardano","Кардано","Կարդանո"],DOGE:["Dogecoin","Додж","Դոջկոին"],LTC:["Litecoin","Лайткоин","Լայթքոին"]},LGI={en:0,ru:1,hy:2};
const sn=v=>{v=+v;return String(+v.toFixed(v>=1?2:4))};
function noteText(n,lg){let nm=(NAMES[n.symbol]||[n.symbol,n.symbol,n.symbol])[LGI[lg]];
 if(n.kind==="alert"){let up=n.condition==="gte";return lg==="ru"?`Цена ${nm} ${up?"поднялась выше":"упала ниже"} ${sn(n.target)} долларов. Сейчас ${sn(n.price)}.`:lg==="hy"?`${nm}. գինը ${up?"բարձրացավ":"իջավ"} մինչև ${sn(n.price)} դոլար։ Թիրախը՝ ${sn(n.target)}։`:`${nm} price ${up?"rose above":"fell below"} ${sn(n.target)} dollars. Now ${sn(n.price)}.`}
 let t={limit:["Limit order","Лимитный ордер","Լիմիտ պատվերը"],stop:["Stop-loss","Стоп-лосс","Սթոփ-լոսը"],tp:["Take-profit","Тейк-профит","Թեյք-պրոֆիթը"]}[n.order_type]||["Order","Ордер","Պատվերը"],buy=n.side==="buy",pl=!buy&&n.pnl?Math.abs(n.pnl):0,win=n.pnl>=0;
 return lg==="ru"?`${t[1]} исполнен. ${buy?"Куплено":"Продано"} ${n.quantity} ${nm} по ${sn(n.price)}.${pl?(win?" Прибыль ":" Убыток ")+sn(pl)+" долларов.":""}`:lg==="hy"?`${t[2]} կատարվեց։ ${buy?"Գնվեց":"Վաճառվեց"} ${n.quantity} ${nm}՝ ${sn(n.price)} դոլարով։${pl?(win?" Շահույթ՝ ":" Կորուստ՝ ")+sn(pl)+" դոլար։":""}`:`${t[0]} executed. ${buy?"Bought":"Sold"} ${n.quantity} ${nm} at ${sn(n.price)}.${pl?(win?" Profit ":" Loss ")+sn(pl)+" dollars.":""}`}
function pickVoice(){if(!("speechSynthesis" in window))return null;let vs=speechSynthesis.getVoices(),v=VS();
 if(v.uri){let s=vs.find(x=>x.voiceURI===v.uri);if(s)return{voice:s,lg:["en","ru","hy"].find(c=>s.lang.toLowerCase().startsWith(c))||"en"}}
 for(const c of[v.lg==="auto"?lang:v.lg,"en"]){let s=vs.find(x=>x.lang.toLowerCase().startsWith(c));if(s)return{voice:s,lg:c}}
 return vs.length?{voice:vs[0],lg:"en"}:null}
function speak(text,lg,voice){try{let u=new SpeechSynthesisUtterance(text),v=VS();u.lang=voice?voice.lang:({en:"en-US",ru:"ru-RU",hy:"hy-AM"})[lg];if(voice)u.voice=voice;u.volume=v.vol;u.rate=v.rate;if(speechSynthesis.pending)speechSynthesis.cancel();speechSynthesis.speak(u)}catch{}}
function chime(kind){let v=VS();if(!v.fx)return;try{audioCtx=audioCtx||new(window.AudioContext||window.webkitAudioContext)();if(audioCtx.state==="suspended")audioCtx.resume();let seq={up:[660,880,1100],down:[880,660,440],fill:[784,1047]}[kind]||[880],t=audioCtx.currentTime;seq.forEach((f,i)=>{let o=audioCtx.createOscillator(),g=audioCtx.createGain(),st=t+i*.13;o.type="sine";o.frequency.value=f;g.gain.setValueAtTime(0,st);g.gain.linearRampToValueAtTime(.22*v.vol,st+.02);g.gain.exponentialRampToValueAtTime(.001,st+.2);o.connect(g);g.connect(audioCtx.destination);o.start(st);o.stop(st+.22)})}catch{}}
function bannerNote(n,kind){let b=document.createElement("div");b.className="abn "+kind;b.setAttribute("role","status");b.innerHTML=`<i>${kind==="up"?"↑":kind==="down"?"↓":"✓"}</i><div><b>${n.symbol}</b> ${n.kind==="alert"?(n.condition==="gte"?"≥ ":"≤ ")+money(n.target)+" → "+money(n.price):(n.side==="buy"?"Buy ":"Sell ")+n.quantity+" @ "+money(n.price)}<small>${new Date().toLocaleTimeString()}</small></div>`;document.body.append(b);setTimeout(()=>b.classList.add("out"),5200);setTimeout(()=>b.remove(),5800)}
function announce(n,force){let v=VS(),kind=n.kind==="alert"?(n.condition==="gte"?"up":"down"):"fill";chime(kind);bannerNote(n,kind);let bell=$("#bell");if(bell){bell.classList.remove("ring");void bell.offsetWidth;bell.classList.add("ring")}
 if(!(force||(v.on&&(n.kind==="alert"?v.alerts:v.fills))))return;let pv=pickVoice();if(!pv)return;setTimeout(()=>speak(noteText(n,pv.lg),pv.lg,pv.voice),kind==="fill"?260:420)}
function setBell(n){let e=$("#bellN");if(!e)return;e.textContent=n||0;e.classList.toggle("hidden",!n)}
async function pollNotes(){let bell=$("#bell");if(bell)bell.classList.toggle("hidden",!user);if(!user){notesReady=false;lastNoteId=0;notesUser=null;return}
 if(notesUser!==user.username){notesUser=user.username;notesReady=false;lastNoteId=0}
 try{let d=await api("/api/notifications?after="+lastNoteId),list=d.notifications||[];
  if(!notesReady){notesReady=true;list.forEach(n=>lastNoteId=Math.max(lastNoteId,n.id));setBell(d.unseen);return}
  list.forEach(n=>{lastNoteId=Math.max(lastNoteId,n.id);announce(n)});if(list.length){loadAlerts();loadPortfolio();if($("#s-alerts")&&!$("#s-alerts").classList.contains("hidden"))loadNotes()}setBell(d.unseen)}catch{}}
async function loadNotes(){if(!user)return;try{let d=await api("/api/notifications?after=0");notesCache=d.notifications.slice().reverse();renderNotes()}catch{}}
function renderNotes(){let e=$("#alNotes");if(!e)return;e.innerHTML=notesCache.map(n=>{let k=n.kind==="alert"?(n.condition==="gte"?"up":"down"):"fill";return `<div class="nrow${n.seen?"":" un"}"><i class="${k}">${k==="up"?"↑":k==="down"?"↓":"✓"}</i><div>${noteText(n,lang)}<small>${new Date(String(n.created_at).replace(" ","T")+"Z").toLocaleString()}</small></div></div>`}).join("")||`<p class="tiny">${tt("No notifications yet.","Ծանուցումներ դեռ չկան։","Уведомлений пока нет.")}</p>`}
function renderAlertRules(){let t=$("#alTable");if(!t)return;t.innerHTML=`<div class="tr th"><span>Asset</span><span>Condition</span><span>Target (USD)</span><span>Status</span><span>Fired</span><span></span></div>`+(serverAlerts.map(a=>`<div class="tr"><span>${a.symbol}</span><span>${a.condition==="gte"?"↑ "+tt("rises above","բարձրանում է","выше"):"↓ "+tt("falls below","իջնում է","ниже")}${a.repeat?" ⟳":""}</span><span><input data-id="${a.id}" type="number" step="any" value="${a.target_price}" aria-label="Target"></span><span class="st ${a.status}">${a.status}</span><span>${a.trigger_count||0}</span><span class="ops"><button data-act="save" data-id="${a.id}" title="Save">💾</button><button data-act="toggle" data-id="${a.id}" title="Pause / resume">${a.enabled?"⏸":"▶"}</button><button data-act="del" data-id="${a.id}" title="Delete">×</button></span></div>`).join("")||`<p class="tiny" style="padding:12px 0">${tt("No alerts yet.","Ծանուցումներ դեռ չկան։","Уведомлений пока нет.")}</p>`)}
function fillVoices(){let sel=$("#vcVoice"),h=$("#vcHint");if(!sel)return;let ok="speechSynthesis" in window,vs=ok?speechSynthesis.getVoices():[];sel.innerHTML=`<option value="">${tt("Automatic","Ավտոմատ","Автоматически")}</option>`+vs.map(x=>`<option value="${x.voiceURI.replace(/"/g,"&quot;")}">${x.name} (${x.lang})</option>`).join("");sel.value=VS().uri;
 h.textContent=!ok?tt("This browser has no speech synthesis: sounds and banners only.","Այս բրաուզերը ձայնային սինթեզ չունի՝ միայն ձայներ և պաստառներ։","В этом браузере нет синтеза речи: только звуки и баннеры."):!vs.length?tt("No voices are installed on this system. On Linux install speech-dispatcher or espeak-ng; sounds and banners still work.","Համակարգում ձայներ տեղադրված չեն։ Linux-ում տեղադրիր speech-dispatcher կամ espeak-ng. ձայներն ու պաստառները աշխատում են։","В системе нет голосов. В Linux установите speech-dispatcher или espeak-ng; звуки и баннеры работают."):tt("Armenian voices are rare: if none is installed, English is used automatically. Click anywhere on the page once if the browser blocks sound.","Հայերեն ձայները հազվադեպ են. եթե չկա, ավտոմատ կօգտագործվի անգլերենը։ Եթե բրաուզերը արգելում է ձայնը, մեկ անգամ սեղմիր էջի վրա։","Армянских голосов мало: если нет, автоматически используется английский. Если браузер блокирует звук, один раз кликните по странице.")}
/*ENDVOICE*/
function extra(){for(const l in X)Object.assign(tr[l],X[l]);
[["secAlerts","Alerts & voice","Ծանուցումներ և ձայն","Уведомления и голос"],["vcTitle","Voice and sound effects","Ձայն և ձայնային էֆեկտներ","Голос и звуковые эффекты"],["vcOn","Speak notifications aloud","Ծանուցումները ձայնով հնչեցնել","Озвучивать уведомления"],["vcAlerts","Announce price alerts","Հայտարարել գնի ծանուցումները","Озвучивать ценовые уведомления"],["vcFills","Announce order fills (limit, stop-loss, take-profit)","Հայտարարել կատարված պատվերները (limit, stop-loss, take-profit)","Озвучивать исполненные ордера (limit, stop-loss, take-profit)"],["vcLang","Voice language","Ձայնի լեզու","Язык голоса"],["vcVoice","Voice","Ձայն","Голос"],["vcVol","Volume","Ձայնի ուժգնություն","Громкость"],["vcRate","Speed","Արագություն","Скорость"],["alRules","Alert rules","Ծանուցման կանոններ","Правила уведомлений"],["alRepeat","Repeat (fires again after the price crosses back)","Կրկնել (կրկին կաշխատի, երբ գինը հետ անցնի)","Повторять (сработает снова после возврата цены)"],["alHist","Notification history","Ծանուցումների պատմություն","История уведомлений"],["alClear","Clear history","Մաքրել պատմությունը","Очистить историю"]].forEach(([k,e,h,r])=>{tr.en[k]=e;tr.hy[k]=h;tr.ru[k]=r});

[["setPref","Preferences","Նախընտրություններ","Настройки"],["setRain","Number rain background","Թվերի անձրև ֆոնին","Фон с цифрами"],["setConfirm","Confirm before each trade","Հաստատել ամեն գործարքից առաջ","Подтверждать каждую сделку"],["setSecurity","Security","Անվտանգություն","Безопасность"],["curPass","Current password","Ընթացիկ գաղտնաբառ","Текущий пароль"],["changePass","Change password","Փոխել գաղտնաբառը","Сменить пароль"],["setData","Data","Տվյալներ","Данные"],["exportData","Export my data","Արտահանել իմ տվյալները","Экспорт данных"],["resetDemo","Reset demo balance to $10,000","Վերականգնել դեմո մնացորդը $10 000","Сбросить демо-баланс до $10 000"],["danger","Danger zone","Վտանգավոր գոտի","Опасная зона"],["delAcc","Delete account","Ջնջել հաշիվը","Удалить аккаунт"],["botT","Learning assistant","Ուսումնական օգնական","Помощник по обучению"],["alerts","Price alerts","Գնի ծանուցումներ","Ценовые уведомления"],["setAlert","Set alert","Ավելացնել","Добавить"],
["qrTab","QR code","QR կոդ","QR-код"],["emailTab","Email","Էլ. փոստ","Email"],["qr1","Log in on your phone first (open this site there)","Նախ մտիր հեռախոսում (բացիր այս կայքը այնտեղ)","Сначала войдите на телефоне (откройте этот сайт там)"],["qr2","Scan the QR code with the phone camera","Սկանավորիր QR կոդը հեռախոսի տեսախցիկով","Отсканируйте QR-код камерой телефона"],["qr3","Tap Approve on the phone","Հեռախոսում սեղմիր «Թույլատրել»","Нажмите «Разрешить» на телефоне"],
["heroT","Practice crypto trading with live-style prices","Սովորիր կրիպտո առևտուրը կենդանի գներով","Учитесь торговле криптой на живых ценах"],["heroS","Demo only. Virtual money, real learning.","Միայն դեմո։ Վիրտուալ փող, իրական ուսուցում։","Только демо. Виртуальные деньги, реальное обучение."],
["cookieT","We only use essential browser storage: your login session, language and theme. No ads, no tracking.","Օգտագործում ենք միայն անհրաժեշտ պահպանումը՝ մուտքի սեսիա, լեզու և թեմա։ Ոչ գովազդ, ոչ հետևում։","Мы используем только необходимое хранилище: сессию входа, язык и тему. Без рекламы и слежки."],["ckOk","Got it","Հասկացա","Понятно"],
["secProfile","Profile","Պրոֆիլ","Профиль"],["secLook","Appearance","Տեսք","Внешний вид"],["secTrade","Trading","Առևտուր","Торговля"],["secSecurity","Security","Անվտանգություն","Безопасность"],["secData","Data","Տվյալներ","Данные"],
["optTheme","Theme","Թեմա","Тема"],["optLang","Language","Լեզու","Язык"],["optSpeed","Rain speed","Անձրևի արագություն","Скорость дождя"],["speedSlow","Slow","Դանդաղ","Медленно"],["speedNorm","Normal","Սովորական","Обычная"],["speedFast","Fast","Արագ","Быстро"],
["optPlay","Digits react to the mouse","Թվերը արձագանքում են մկնիկին","Цифры реагируют на мышь"],["optAsset","Default asset","Լռելյայն ակտիվ","Актив по умолчанию"],["optSound","Sound for price alerts","Ձայն գնի ծանուցումների համար","Звук для уведомлений о цене"],
["themeOcean","Ocean","Օվկիանոս","Океан"],["themeNight","Night","Գիշեր","Ночь"],["navMarkets","Markets","Շուկաներ","Рынки"],["navLearn","Learn","Սովորել","Учиться"],["navPlans","Plans","Փաթեթներ","Тарифы"],["foot1","Practice before you trade","Սովորիր՝ նախքան առևտուր անելը","Практикуйтесь до реальной торговли"],
["sc1","Meet Minimal Black.","Ծանոթացիր՝ Minimal Black։","Знакомьтесь: Minimal Black."],["sc2","A full trading terminal. Zero risk.","Լիարժեք առևտրային տերմինալ։ Զրո ռիսկ։","Полноценный торговый терминал. Ноль риска."],
["f1t","Instant fills","Ակնթարթային կատարում","Мгновенное исполнение"],["f1d","Demo orders fill at the current live market price.","Դեմո պատվերները կատարվում են ընթացիկ շուկայական գնով՝ ակնթարթորեն։","Демо-ордера исполняются по текущей рыночной цене мгновенно."],
["f2t","Transparent fees","Թափանցիկ վճար","Прозрачная комиссия"],["f2d","A flat 0.1% demo fee on every trade. No real money, no risk.","Վճարը՝ 0.1% ամեն գործարքի համար։ Ոչ իրական փող, ոչ ռիսկ։","Комиссия 0,1% на каждую сделку. Без реальных денег и риска."],
["f3t","Deep order book","Խորը order book","Глубокий стакан"],["f3d","Watch the real order book of 7 markets, grouped from 0.01 to 10.","Դիտիր 7 շուկայի իրական order book-ը՝ 0.01-ից 10 խմբավորմամբ։","Смотрите реальный стакан 7 рынков с группировкой от 0.01 до 10."],
["f4t","Learn as you go","Սովորիր աշխատելիս","Учитесь на ходу"],["f4d","A built-in assistant and quiz explain every term.","Ներկառուցված օգնականը և վիկտորինան բացատրում են ամեն տերմին։","Встроенный помощник и викторина объясняют каждый термин."],
["au1","Automate your practice","Ավտոմատացրու վարժանքդ","Автоматизируйте практику"],["au2","Limit orders and price alerts work while the page is open.","Լիմիտ պատվերները և գնի ծանուցումները աշխատում են, քանի էջը բաց է։","Лимитные ордера и уведомления о цене работают, пока страница открыта."],
["cta1","Ready to practise?","Պատրա՞ստ ես վարժվելու","Готовы практиковаться?"],["recentTrades","Recent trades","Վերջին գործարքներ","Последние сделки"],["csvExport","Export trades (CSV)","Արտահանել գործարքները (CSV)","Экспорт сделок (CSV)"],["navBots","DCA Bot","DCA բոտ","DCA-бот"],["navOpt","Optimizer","Օպտիմիզատոր","Оптимизатор"],["botsSub","Build a bot that buys dips and sells at your target. It runs while this page is open.","Սարքիր բոտ, որը գնում է անկումների ժամանակ և վաճառում քո թիրախին։ Աշխատում է, քանի էջը բաց է։","Создайте бота, который покупает на просадках и продаёт по цели. Работает, пока страница открыта."],["optSub","Compare your portfolio with an optimized one using recent real price history (Kraken, 15-minute candles).","Համեմատիր քո պորտֆելը օպտիմալացվածի հետ Kraken-ի վերջին իրական գների պատմությամբ։","Сравните портфель с оптимизированным на недавней реальной истории цен (Kraken)."],["navMissions","Missions","Առաջադրանքներ","Миссии"],["navAna","Analytics","Վերլուծություն","Аналитика"],["anaSub","Statistics from your last 100 demo trades.","Վիճակագրություն քո վերջին 100 դեմո գործարքներից։","Статистика по последним 100 демо-сделкам."],["anaHide","Hide amounts","Թաքցնել գումարները","Скрыть суммы"],["gmSub","Trade, complete missions, earn XP and loot boxes.","Առևտուր արա, կատարիր առաջադրանքներ, վաստակիր XP և տուփեր։","Торгуйте, выполняйте миссии, получайте XP и боксы."],["gmStreak","Trading streak","Առևտրի շարք","Серия торговли"],["gmBoxes","My items","Իմ իրերը","Мои предметы"],["gmWeekly","Weekly missions","Շաբաթական առաջադրանքներ","Недельные миссии"],["optEntry","Digit animation after login","Թվերի անիմացիա մուտքից հետո","Анимация цифр после входа"],["themeLight","Light","Լույս","День"],["themeAuto","Auto","Ավտո","Авто"],["showPw","Show password","Ցույց տալ գաղտնաբառը","Показать пароль"]].forEach(([k,e,h,r])=>{tr.en[k]=e;tr.hy[k]=h;tr.ru[k]=r});
let cv=$("#chart"),mv=e=>{let r=cv.getBoundingClientRect(),q=e.touches?e.touches[0]:e;hv={x:(q.clientX-r.left)*cv.width/r.width,y:(q.clientY-r.top)*cv.height/r.height};drawChart($("#tradeSymbol").value||"BTC")},ml=()=>{hv=null;drawChart($("#tradeSymbol").value||"BTC")};cv.addEventListener("mousemove",mv);cv.addEventListener("touchmove",mv,{passive:true});cv.addEventListener("mouseleave",ml);cv.addEventListener("touchend",ml);
const ic={ocean:"🌊",night:"☾",light:"☀",auto:"◐"};$("#themeBtn").textContent=ic[localStorage.getItem("mb-theme2")||"ocean"];$("#themeBtn").onclick=()=>{setTimeout(()=>$("#optTheme").value=localStorage.getItem("mb-theme2"));let o=["ocean","night","light","auto"],m=o[(o.indexOf(localStorage.getItem("mb-theme2")||"ocean")+1)%4];mbTheme(m);$("#themeBtn").textContent=ic[m];drawChart($("#tradeSymbol").value||"BTC")};
$("#alertBtn").onclick=async()=>{
  let s=$("#tradeSymbol").value||"BTC",p=+$("#alertPrice").value;
  if(!(p>0)||!prices[s])return;
  if(user){
    try{
      await api("/api/alerts",{method:"POST",body:JSON.stringify({symbol:s,target_price:p})});
      flag("alr");$("#alertPrice").value="";toast(`Alert set: ${s} @ ${money(p)}`);await loadAlerts();
    }catch(e){toast(e.message)}
  }else{
    AL.push({s,p,up:p>prices[s]});flag("alr");$("#alertPrice").value="";alSave();
  }
};
alDraw();
$("#mQr").onclick=()=>setMethod("qr");$("#mEmail").onclick=()=>setMethod("email");new MutationObserver(()=>{let v=!$("#auth").classList.contains("hidden");if(v&&qm==="qr"&&!qrT&&!$("#qrPane").classList.contains("hidden"))qrStart();if(!v)qrStop();document.body.classList.toggle("rain-on",v)}).observe($("#auth"),{attributes:true,attributeFilter:["class"]});
if(!localStorage.getItem("mb-ck"))$("#cookie").classList.remove("hidden");$("#ckOk").onclick=()=>{localStorage.setItem("mb-ck","1");$("#cookie").classList.add("hidden")};
$$("#setTabs button").forEach(b=>b.onclick=()=>{$$("#setTabs button").forEach(x=>x.classList.toggle("selected",x===b));$$(".sec").forEach(z=>z.classList.toggle("hidden",z.id!==b.dataset.sec))});
$("#optTheme").value=localStorage.getItem("mb-theme2")||"ocean";$("#optTheme").onchange=e=>{mbTheme(e.target.value);$("#themeBtn").textContent=ic[e.target.value];drawChart($("#tradeSymbol").value||"BTC")};
$("#optLang").value=lang;$("#optLang").onchange=e=>{$("#lang").value=e.target.value;$("#lang").dispatchEvent(new Event("change"))};$("#lang").addEventListener("change",e=>$("#optLang").value=e.target.value);
$("#optSpeed").value=String(mbRain.speed);$("#optSpeed").onchange=e=>{mbRain.speed=+e.target.value;localStorage.setItem("mb-speed",e.target.value)};
$("#optPlay").checked=mbRain.play;$("#optPlay").onchange=e=>{mbRain.play=e.target.checked;localStorage.setItem("mb-play",e.target.checked?"1":"0")};
$("#optAsset").value=localStorage.getItem("mb-asset")||"BTC";$("#optAsset").onchange=e=>{localStorage.setItem("mb-asset",e.target.value);$("#tradeSymbol").value=e.target.value;updateEstimate()};
$("#optSound").checked=localStorage.getItem("mb-snd")!=="0";$("#optSound").onchange=e=>localStorage.setItem("mb-snd",e.target.checked?"1":"0");
$("#showPw").onchange=e=>$("#password").type=e.target.checked?"text":"password";
$("#password").addEventListener("input",e=>{let v=e.target.value,n=(v.length>=10)+(v.length>=14)+(/[a-z]/.test(v)&&/[A-Z]/.test(v))+/\d/.test(v)+/[^\w\s]/.test(v),m=$("#pwMeter");m.firstElementChild.style.width=(n*20)+"%";m.firstElementChild.style.background=n<3?"#e5484d":n<5?"#e8b86b":"#4ade9b";m.lastElementChild.textContent=v?(n<3?tt("Weak","Թույլ","Слабый"):n<5?tt("Okay","Լավ","Нормальный"):tt("Strong","Ուժեղ","Надёжный")):""});
$("#password").addEventListener("keyup",e=>{let on=e.getModifierState&&e.getModifierState("CapsLock"),c=$("#caps");c.textContent=on?"⇪ "+tt("Caps Lock is on","Caps Lock-ը միացված է","Caps Lock включён"):"";c.classList.toggle("hidden",!on)});
$$("#tfBar [data-tf]").forEach(b=>b.onclick=()=>{tf=b.dataset.tf;$$("#tfBar [data-tf]").forEach(x=>x.classList.toggle("selected",x===b));poll()});
const setCM=m=>{chartMode=m;$("#mChart").classList.toggle("selected",m==="chart");$("#mDepth").classList.toggle("selected",m==="depth");drawChart($("#tradeSymbol").value||"BTC")};$("#mChart").onclick=()=>setCM("chart");$("#mDepth").onclick=()=>setCM("depth");
$$("#ordTabs button").forEach(b=>b.onclick=()=>{ordMode=b.dataset.o;$$("#ordTabs button").forEach(x=>x.classList.toggle("selected",x===b));$("#limitRow").classList.toggle("hidden",ordMode==="market");let s=$("#tradeSymbol").value||"BTC";if(ordMode==="stop"||ordMode==="tp")side="sell";if(ordMode!=="market"&&prices[s])$("#limitPrice").value=(prices[s]*(ordMode==="stop"?.97:ordMode==="tp"?1.03:1)).toFixed(prices[s]<1?5:2);ordInfo()});
$("#pct").oninput=e=>{let s=$("#tradeSymbol").value||"BTC",k=+e.target.value/100,q=side==="buy"?(portfolio.balance??10000)*k/prices[s]:myH(s)*k;$("#quantity").value=q?+q.toFixed(6):"";updateEstimate();ordInfo()};$("#quantity").addEventListener("input",ordInfo);$("#limitPrice").addEventListener("input",ordInfo);
$("#place").addEventListener("click",e=>{if(ordMode==="market")return;e.stopImmediatePropagation();e.preventDefault();let s=$("#tradeSymbol").value,q=+$("#quantity").value,p=+$("#limitPrice").value;if(!(q>0)||!(p>0)||!user)return;sendOrder({symbol:s,side:ordMode==="stop"||ordMode==="tp"?"sell":side,type:ordMode,quantity:q,price:p})},true);
$$("#heroTf [data-h]").forEach(b=>b.onclick=()=>{tf=b.dataset.h;$$("#heroTf [data-h]").forEach(x=>x.classList.toggle("selected",x===b));poll()});
$("#prec").onchange=()=>drawBook($("#tradeSymbol").value||"BTC");$("#bbo").onchange=e=>{$("#limitPrice").disabled=e.target.checked;ordInfo()};
$("#nvMarkets").onclick=()=>$("#marketsJump").click();$("#nvLearn").onclick=()=>$("#botBtn").click();$("#nvPlans").onclick=()=>user?openPlans():$("#registerOpen").click();
addEventListener("scroll",scrollAnim,{passive:true});addEventListener("resize",scrollAnim);scrollAnim();$("#ctaStart").onclick=()=>$("#start").click();
{const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("in")}),{threshold:.15});$$(".rev").forEach(z=>io.observe(z))}
$$("#ordsTabs button").forEach(b=>b.onclick=()=>{ordTab=b.dataset.ot;$$("#ordsTabs button").forEach(x=>x.classList.toggle("selected",x===b));renderOrders()});
$("#ordBody").onclick=e=>{let i=e.target.dataset.cx;if(i!==undefined)cancelOrd(+i)};
$("#mktsBody").onclick=e=>{let r=e.target.closest("[data-sym]");if(r){$("#tradeSymbol").value=r.dataset.sym;updateEstimate();poll()}};$("#alertPrice").placeholder="Price (USD)";
$("#optEntry").checked=localStorage.getItem("mb-entry")!=="0";$("#optEntry").onchange=e=>localStorage.setItem("mb-entry",e.target.checked?"1":"0");$("#entryPrev").onclick=()=>playEntry(true);
{const sp=setPage;setPage=function(p){sp(p);if(p==="missions")renderMissions();if(p==="analytics")renderAnalytics();if(p==="bots")loadBots();if(p==="opt")runOpt();if(p==="journal")loadJournal();if(p==="community")loadChat();if(p==="trade"){loadAlerts();initRiskCalc()}};const lp=loadPortfolio;loadPortfolio=async function(){await lp();refreshGame()}}
$("#gmMissions").onclick=e=>{let id=e.target.dataset.claim;if(id)claim(id)};$("#gmBoxes").onclick=e=>{let i=e.target.dataset.open;if(i!==undefined)openBox(+i)};$("#lvlOk").onclick=()=>$("#lvl").classList.add("hidden");$("#anaHide").onchange=renderAnalytics;
$("#mAll").onclick=()=>{mkWatch=false;$("#mAll").classList.add("selected");$("#mWatch").classList.remove("selected");renderMarkets($("#search").value)};$("#mWatch").onclick=()=>{mkWatch=true;$("#mWatch").classList.add("selected");$("#mAll").classList.remove("selected");renderMarkets($("#search").value)};
$("#bSym").innerHTML=coins.map(c=>`<option>${c[0]}</option>`).join("");$("#oAssets").innerHTML=coins.map(c=>`<label class="chk"><input type="checkbox" value="${c[0]}" checked> ${c[0]}</label>`).join("");
$("#bSum").onclick=botSummary;$("#bBack").onclick=botBacktest;$("#bStart").onclick=botStart;
$("#bList").onclick=async e=>{
  let sId=e.target.dataset.serverBot,sAct=e.target.dataset.serverAct;
  if(sId){
    try{
      if(sAct==="toggle") await api(`/api/bots/${sId}/toggle`,{method:"POST",body:"{}"});
      else if(sAct==="delete") await api(`/api/bots/${sId}`,{method:"DELETE"});
      await loadBots();
    }catch(err){toast(err.message)}
    return;
  }
  let i=e.target.dataset.bt;if(i===undefined)return;let b=bots[+i];if(b.on)b.on=false;else bots.splice(+i,1);botsSave();renderBots();
};
$("#oRun").onclick=runOpt;$("#oCsv").onclick=optCsv;$("#oMax").oninput=e=>$("#oMaxV").textContent=e.target.value+"%";
$("#quickAmt").onclick=e=>{let u=e.target.dataset.usd;if(u===undefined)return;let s=$("#tradeSymbol").value||"BTC";$("#quantity").value=+u?+(+u/prices[s]).toFixed(6):"";updateEstimate();ordInfo()};$("#joinBid").onclick=()=>joinOrder("buy");$("#joinAsk").onclick=()=>joinOrder("sell");
$("#ordBody").addEventListener("click",async e=>{let s=e.target.dataset.close;if(!s)return;try{await api("/api/trades",{method:"POST",body:JSON.stringify({symbol:s,side:"sell",quantity:Math.floor(myH(s)*1e6)/1e6})});toast("✓ "+s);await loadPortfolio()}catch(x){toast(x.message)}});setInterval(drawClock,1000);
{const bindChk=(id,k,d)=>{let e=$(id);e.checked=vget(k,d)!=="0";e.onchange=()=>localStorage.setItem(k,e.checked?"1":"0")};bindChk("#vcOn","mb-voice","1");bindChk("#vcAlerts","mb-valert","1");bindChk("#vcFills","mb-vfill","1");
$("#vcLang").value=vget("mb-vlang","auto");$("#vcLang").onchange=e=>localStorage.setItem("mb-vlang",e.target.value);$("#vcVoice").onchange=e=>localStorage.setItem("mb-vuri",e.target.value);
let vv=$("#vcVol"),vr=$("#vcRate");vv.value=vget("mb-vvol",90);vr.value=vget("mb-vrate",100);const lab=()=>{$("#vcVolV").textContent=vv.value+"%";$("#vcRateV").textContent=(vr.value/100).toFixed(2)+"x"};lab();vv.oninput=()=>{localStorage.setItem("mb-vvol",vv.value);lab()};vr.oninput=()=>{localStorage.setItem("mb-vrate",vr.value);lab()};
if("speechSynthesis" in window)speechSynthesis.onvoiceschanged=fillVoices;fillVoices();
const testN=k=>announce(k==="fill"?{kind:"fill",symbol:"BTC",side:"sell",order_type:"tp",price:71250,quantity:.05,pnl:84.5}:{kind:"alert",symbol:"BTC",condition:k==="up"?"gte":"lte",target:k==="up"?70000:65000,price:k==="up"?70012:64988},true);
$("#vcTestUp").onclick=()=>testN("up");$("#vcTestDn").onclick=()=>testN("down");$("#vcTestFill").onclick=()=>testN("fill");
$("#alSym").innerHTML=coins.map(c=>`<option>${c[0]}</option>`).join("");
const alPre=m=>{let s=$("#alSym").value,p=prices[s];if(!p)return toast(tt("Prices are not loaded yet","Գները դեռ բեռնված չեն","Цены ещё не загружены"));$("#alCond").value=m>0?"gte":"lte";$("#alPrice").value=(p*(1+m)).toFixed(p<1?5:2)};$("#alUp1").onclick=()=>alPre(.01);$("#alDn1").onclick=()=>alPre(-.01);
$("#alAdd").onclick=async()=>{let p=+$("#alPrice").value;if(!(p>0)||!user)return;try{await api("/api/alerts",{method:"POST",body:JSON.stringify({symbol:$("#alSym").value,condition:$("#alCond").value,target_price:p,repeat:$("#alRep").checked})});flag("alr");$("#alPrice").value="";toast(tt("Alert added","Ծանուցումը ավելացվեց","Уведомление добавлено"));await loadAlerts()}catch(e){toast(e.message)}};
$("#alTable").onclick=async e=>{let b=e.target.closest("button[data-act]");if(!b)return;let id=b.dataset.id,a=serverAlerts.find(x=>x.id==id);try{if(b.dataset.act==="del")await api("/api/alerts/"+id,{method:"DELETE"});else if(b.dataset.act==="toggle")await api("/api/alerts/"+id,{method:"PATCH",body:JSON.stringify({enabled:!a.enabled})});else await api("/api/alerts/"+id,{method:"PATCH",body:JSON.stringify({target_price:+$("#alTable input[data-id='"+id+"']").value})});await loadAlerts()}catch(x){toast(x.message);loadAlerts()}};
$("#alClear").onclick=async()=>{try{await api("/api/notifications",{method:"DELETE"});notesCache=[];renderNotes();setBell(0)}catch(e){toast(e.message)}};
$('#setTabs [data-sec="s-alerts"]').addEventListener("click",()=>{loadAlerts();loadNotes().then(()=>api("/api/notifications/seen",{method:"POST",body:"{}"})).then(()=>setBell(0)).catch(()=>{})});
$("#bell").onclick=()=>{setPage("settings");$('#setTabs [data-sec="s-alerts"]').click()};
addEventListener("pointerdown",()=>{try{audioCtx=audioCtx||new(window.AudioContext||window.webkitAudioContext)();audioCtx.resume();if("speechSynthesis" in window)speechSynthesis.getVoices()}catch{}},{once:true})}
$("#botBtn").onclick=
()=>$("#bot").classList.contains("hidden")?botOpen():$("#bot").classList.add("hidden");$("#botX").onclick=()=>$("#bot").classList.add("hidden");$("#botForm").onsubmit=e=>{e.preventDefault();let q=$("#botIn").value.trim();if(q){$("#botIn").value="";botAsk(q)}};
$("#optRain").checked=localStorage.getItem("mb-rain")!=="0";$("#optConfirm").checked=localStorage.getItem("mb-cf")==="1";
$("#optRain").onchange=e=>{localStorage.setItem("mb-rain",e.target.checked?"1":"0");$("#rain").style.display=e.target.checked?"":"none"};$("#optConfirm").onchange=e=>localStorage.setItem("mb-cf",e.target.checked?"1":"0");
$("#place").addEventListener("click",e=>{if(localStorage.getItem("mb-cf")==="1"&&!confirm(tt("Place this demo trade?","Կատարե՞լ այս դեմո գործարքը։","Выполнить эту демо-сделку?"))){e.stopImmediatePropagation();e.preventDefault()}},true);
$("#pwBtn").onclick=async()=>{try{await api("/api/password",{method:"POST",body:JSON.stringify({current:$("#pwCur").value,password:$("#pwNew").value})});$("#pwCur").value=$("#pwNew").value="";toast(tt("Password changed","Գաղտնաբառը փոխվեց","Пароль изменён"))}catch(e){toast(e.message)}};
$("#expBtn").onclick=()=>{let a=document.createElement("a");a.href=URL.createObjectURL(new Blob([JSON.stringify({user,portfolio},null,2)],{type:"application/json"}));a.download="my-data.json";a.click()};
$("#rstBtn").onclick=async()=>{if(!confirm(tt("Reset balance and trade history?","Վերականգնե՞լ մնացորդը և պատմությունը։","Сбросить баланс и историю?")))return;try{await api("/api/reset-demo",{method:"POST",body:"{}"});await loadPortfolio();toast("OK")}catch(e){toast(e.message)}};
$("#delBtn").onclick=async()=>{if(!confirm(tt("Delete your account permanently?","Ջնջե՞լ հաշիվը վերջնականապես։","Удалить аккаунт навсегда?")))return;try{await api("/api/account/delete",{method:"POST",body:JSON.stringify({password:$("#delPw").value})});location.reload()}catch(e){toast(e.message)}};

let g=$("#age");if(localStorage.getItem("mb-18")==="1")g.classList.add("hidden");$("#ageYes").onclick=()=>{localStorage.setItem("mb-18","1");g.classList.add("hidden")};$("#ageNo").onclick=()=>{$("#ageBtns").classList.add("hidden");$("#ageMsg").textContent=tr[lang].ageBlock};
const o=authMode;authMode=function(r){each("#authForm,.tabs","remove","hidden");$("#resetForm").classList.add("hidden");o(r);each("#pwMeter","toggle","hidden",!r);each("#methods","toggle","hidden",r);setMethod(r?"email":qm,1)};
$("#forgotLink").onclick=()=>{each("#authForm,.tabs","add","hidden");$("#resetForm").classList.remove("hidden")};
$("#sendCode").onclick=async()=>{try{let d=await api("/api/auth/forgot",{method:"POST",body:JSON.stringify({email:$("#resetEmail").value})});$("#resetStep2").classList.remove("hidden");rmsg(tt("If the account exists, a reset code was created. This demo build sends no email: the code is printed in the server console.","Եթե հաշիվը գոյություն ունի, վերականգնման կոդ ստեղծվեց։ Այս դեմո տարբերակը փոստ չի ուղարկում. կոդը տպվում է սերվերի տերմինալում։","Если аккаунт существует, код создан. Эта демо-версия не отправляет почту: код выводится в консоль сервера."),1)}catch(e){rmsg(e.message)}};
$("#resetForm").onsubmit=async e=>{e.preventDefault();try{await api("/api/auth/reset",{method:"POST",body:JSON.stringify({email:$("#resetEmail").value,code:$("#resetCode").value,password:$("#resetPass").value})});authMode(false);toast(tr[lang].resetDone)}catch(err){rmsg(err.message)}};
$("#upgradeBtn").onclick=openPlans;$("#plansX").onclick=()=>$("#plans").classList.add("hidden");$("#plans").onclick=e=>{if(e.target.id==="plans")e.target.classList.add("hidden")};addEventListener("keydown",e=>{if(e.key==="Escape")$("#plans").classList.add("hidden")});
$$("#plans [data-plan]").forEach(b=>b.onclick=async()=>{try{let d=await api("/api/plan",{method:"POST",body:JSON.stringify({plan:b.dataset.plan})});user.plan=d.plan;showPlan();$("#plans").classList.add("hidden");toast("Plan: "+d.plan)}catch(e){toast(e.message)}})}
async function init(){
  extra();applyLang();renderCoins();renderNft();
  if(localStorage.getItem("mb-asset"))$("#tradeSymbol").value=localStorage.getItem("mb-asset");
  poll();setInterval(poll,2000);
  $("#loginOpen").onclick=()=>authMode(false);
  $("#registerOpen").onclick=()=>authMode(true);
  $("#start").onclick=()=>user?setPage("trade"):authMode(false);
  $("#marketsJump").onclick=()=>$("#ticker").scrollIntoView({behavior:"smooth"});
  $("#back").onclick=showLanding;
  $("#loginTab").onclick=()=>authMode(false);
  $("#registerTab").onclick=()=>authMode(true);
  $("#lang").onchange=e=>{lang=e.target.value;localStorage.setItem("mb-lang",lang);applyLang();renderCoins();renderPortfolio()};
  $("#authForm").onsubmit=async e=>{e.preventDefault();let reg=$("#registerTab").classList.contains("selected"),payload=reg?{username:$("#username").value,email:$("#email").value,password:$("#password").value}:{login:$("#login").value,password:$("#password").value};try{let d=await api(reg?"/api/auth/register":"/api/auth/login",{method:"POST",body:JSON.stringify(payload)});user=d.user;$("#auth").classList.add("hidden");each("#loginOpen,#registerOpen","add","hidden");$("#profileOpen").classList.remove("hidden");setPage("overview");await loadPortfolio();playEntry();toast("Welcome to Minimal Black");if(reg)openPlans();if(qrTok)qrAsk()}catch(err){$("#authError").textContent=err.message;$("#authError").classList.remove("hidden")}};
  $("#profileOpen").onclick=()=>setPage("settings");
  $("#logout").onclick=async()=>{try{await api("/api/auth/logout",{method:"POST",body:"{}"})}catch{}user=null;$("#profileOpen").classList.add("hidden");each("#loginOpen,#registerOpen","remove","hidden");showLanding()};
  $$(".nav").forEach(b=>b.onclick=()=>setPage(b.dataset.page));
  $("#mobileNav").onchange=e=>setPage(e.target.value);
  $("#search").oninput=e=>renderMarkets(e.target.value);
  $("#tradeSymbol").onchange=()=>{updateEstimate();poll()};
  $("#quantity").oninput=updateEstimate;
  $("#buyTab").onclick=()=>{side="buy";updateEstimate()};
  $("#sellTab").onclick=()=>{side="sell";updateEstimate()};
  $("#place").onclick=()=>trade($("#tradeSymbol").value,Number($("#quantity").value),$("#tradeError"));
  $("#quickBuy").onclick=()=>{side="buy";trade($("#quickSymbol").value,Number($("#quickAmount").value)/prices[$("#quickSymbol").value],$("#quickError"))};
  $("#quickSell").onclick=()=>{side="sell";trade($("#quickSymbol").value,Number($("#quickAmount").value)/prices[$("#quickSymbol").value],$("#quickError"))};
  $("#reset").onclick=async()=>{if(confirm(tr[lang].reset+"?")){await api("/api/demo/reset",{method:"POST",body:"{}"});await loadPortfolio();toast("Demo reset")}};
  $("#profileForm").onsubmit=async e=>{e.preventDefault();try{let d=await api("/api/profile",{method:"PATCH",body:JSON.stringify({username:$("#profileUsername").value})});user=d.user;toast("Profile saved")}catch(err){$("#profileError").textContent=err.message;$("#profileError").classList.remove("hidden")}};
  document.addEventListener("click",async e=>{let w=e.target.closest("[data-watch]"),go=e.target.closest("[data-trade]");if(w){try{let d=await api("/api/watchlist/"+w.dataset.watch,{method:"POST",body:"{}"});portfolio.watchlist=d.watchlist;renderMarkets($("#search").value)}catch(err){toast(err.message)}}if(go){$("#tradeSymbol").value=go.dataset.trade;setPage("trade");updateEstimate()}});
  $$(".prompt").forEach(b=>b.onclick=()=>assistant(b.dataset.q));
  $("#askForm").onsubmit=e=>{e.preventDefault();assistant($("#question").value)};
  $("#chatForm").onsubmit=async e=>{
    e.preventDefault();
    let v=$("#chatInput").value.trim();
    if(!v)return;
    if(!user)return toast(tt("Please log in to chat","Խնդրում ենք մուտք գործել՝ գրելու համար","Войдите, чтобы писать в чат"));
    try{
      await api("/api/chat",{method:"POST",body:JSON.stringify({message:v})});
      $("#chatInput").value="";
      await loadChat();
    }catch(err){toast(err.message)}
  };
  $("#toggleRiskCalc").onclick=()=>{
    let p=$("#riskCalcPanel");
    p.classList.toggle("hidden");
    $("#toggleRiskCalc").textContent=p.classList.contains("hidden")?"Calculator ▾":"Calculator ▴";
  };
  ["#rcRiskPct","#rcStopPrice","#rcTpPrice"].forEach(sel=>{
    let el=$(sel);if(el)el.addEventListener("input",initRiskCalc);
  });
  $("#rcApply").onclick=()=>{
    let s=$("#tradeSymbol").value||"BTC",p=prices[s]||0;
    let bal=portfolio.balance??10000;
    let rPct=+$("#rcRiskPct")?.value||2;
    let riskUsd=bal*(rPct/100);
    let sp=$("#rcStopPrice")?.value?+$("#rcStopPrice").value:(p*(side==="buy"?0.98:1.02));
    let dist=Math.abs(p-sp);
    let qty=dist>0?(riskUsd/dist):0;
    if(qty>0){
      $("#quantity").value=(+qty.toFixed(6));
      updateEstimate();
      ordInfo();
      toast(`Applied risk size: ${(+qty.toFixed(5))} ${s}`);
    }
  };
  $("#journalForm").onsubmit=async e=>{
    e.preventDefault();
    try{
      let payload={
        symbol:$("#jSymbol").value,
        title:$("#jTitle").value,
        strategy:$("#jStrategy").value,
        emotion:$("#jEmotion").value,
        rating:Number($("#jRating").value),
        trade_id:$("#jTradeId").value?Number($("#jTradeId").value):null,
        notes:$("#jNotes").value
      };
      await api("/api/journal",{method:"POST",body:JSON.stringify(payload)});
      $("#jTitle").value="";
      $("#jNotes").value="";
      toast("Journal entry saved");
      await loadJournal();
    }catch(err){toast(err.message)}
  };
  $("#jSearch").oninput=renderJournal;
  $("#journalList").onclick=async e=>{
    let delId=e.target.closest("[data-del-journal]")?.dataset.delJournal;
    if(delId){
      if(!confirm(tt("Delete this journal entry?","Ջնջե՞լ այս գրառումը։","Удалить эту запись?")))return;
      try{
        await api("/api/journal/"+delId,{method:"DELETE"});
        toast("Entry deleted");
        await loadJournal();
      }catch(err){toast(err.message)}
    }
  };
  $("#history").onclick=e=>{
    let btn=e.target.closest("[data-jn]");
    if(btn){
      let tradeId=btn.dataset.jn,sym=btn.dataset.jsym;
      setPage("journal");
      setTimeout(()=>{
        if($("#jSymbol"))$("#jSymbol").value=sym;
        if($("#jTradeId"))$("#jTradeId").value=tradeId;
        if($("#jTitle")){
          $("#jTitle").value=`${sym} trade #${tradeId} review`;
          $("#jTitle").focus();
        }
      },100);
    }
  };
  $$("#histFilterSeg button").forEach(b=>{
    b.onclick=()=>{
      histFilter=b.dataset.hf;
      $$("#histFilterSeg button").forEach(x=>x.classList.toggle("selected",x===b));
      renderPortfolio();
    };
  });
  $$("#mSortSeg button").forEach(b=>{
    b.onclick=()=>{
      mSort=b.dataset.sort;
      $$("#mSortSeg button").forEach(x=>x.classList.toggle("selected",x===b));
      renderMarkets($("#search").value);
    };
  });
  $$("[data-plan]").forEach(b=>b.onclick=()=>toast("Demo plans only — no payment is taken"));

  // PWA & Service Worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').catch(e => console.log('SW error:', e));
    });
  }

  try{
    let d=await api("/api/me");
    user=d.user;
    each("#loginOpen,#registerOpen","add","hidden");
    $("#profileOpen").classList.remove("hidden");
    setPage("overview");
    await loadPortfolio();
    if(qrTok)qrAsk();
  }catch{}
}
init();