# Minimal Black — crypto market analysis and demo trading

A demo trading platform. **All money is virtual.** Market prices come from Kraken's public API; orders are simulated and
**never** sent to any exchange. Simulated results do not guarantee real-world performance.

## Install and run
```
npm install
npm start          # http://localhost:3000
npm test           # 27 automated tests (ledger + market-data client)
```
Requires Node.js 20+. Use another port with `PORT=3001 npm start`. Open the site through the network address printed in the
terminal if you want to log in from a phone (QR login).

## Environment variables
See `.env.example`. Important ones: `SESSION_SECRET` (required in production, 32+ chars), `TRUST_PROXY=1` behind a proxy,
`FEE_RATE` (default 0.001 = 0.1%), `MARKET_STALE_MS` (default 30000), optional `ANTHROPIC_API_KEY` for the AI assistant.

## Market data (real)
* Source: **Kraken public REST API**, no key needed: Ticker (every 5 s), OHLC candles, order book depth, recent trades.
* Symbols: BTC, ETH, SOL, XRP, ADA, DOGE, LTC (all vs USD). BNB was removed because Kraken does not list it.
* The UI shows the source and the last update time. If the feed fails, the last data stays visible but is marked **stale**
  after 30 s, a banner appears and **market orders are refused** (`503 STALE`). Prices are never invented.
* Rate limits: requests are cached (ticker 5 s, depth 4 s, trades 5 s, candles 15 s–10 min); HTTP 429 or an API rate-limit error
  triggers a 15 s back-off.
* "Change" is measured **since 00:00 UTC** (Kraken's daily open); high/low/volume are the last 24 h.
* Market data is kept separate from the demo ledger (`lib/market.js` vs `lib/ledger.js`).

## Demo trading rules (`lib/ledger.js`)
* Start balance 10,000 virtual USD. Fee = `FEE_RATE` of the trade value, added to the cost of buys (included in the average
  entry price) and deducted from the proceeds of sells. Realised P/L of a sell = net proceeds − average cost × quantity.
* Order types: **market**, **limit**, **stop-loss** (sell when price ≤ trigger), **take-profit** (sell when price ≥ trigger).
  Pending orders are stored in the database and executed **by the server** on every price update — the browser does not have
  to stay open. They fill at the current market price when their condition is met.
* Validation on the server: asset, side, type, quantity, price; minimum order 1 USD (or closing a whole position), maximum
  1,000,000 USD; balance and holdings; sell orders reserve holdings and buy limit orders reserve cash; at most 50 open orders.
* Every state change (balance, position, trade, order) runs in **one SQL transaction**. Market orders carry a `clientId`;
  repeating the same id returns the original result instead of trading twice. SQLite access is synchronous in one process, so
  two requests cannot interleave inside a transaction.
* Persisted in SQLite: users, trades (with fee and realised P/L), positions, orders. CSV export: `GET /api/trades.csv`
  (formula-injection safe). Demo reset (Settings → Data) clears trades, orders and positions and restores 10,000 USD.


## Price alerts, voice and notifications
* **Alerts are evaluated by the server** on every price update, so they fire even when the browser is closed. Each alert is
  "rises above" or "falls below" a price; a *one-shot* alert fires once, a *repeating* alert re-arms after the price crosses
  back. Alerts can be edited, paused/resumed and deleted in **Settings → Alerts & voice** (max 50 per user).
* Every fired alert and every server-side order fill (limit, stop-loss, take-profit) is stored as a **notification**
  (last 200 per user, shown as history, with a 🔔 badge for unseen ones).
* While the site is open the browser announces new notifications with a chime, a banner and **speech synthesis**
  (Settings → voice on/off, alerts/fills on/off, language, voice, volume, speed, test buttons). Voice is the browser's built-in
  `speechSynthesis`: Armenian voices are rarely installed, so the app falls back to English (or your chosen language).
  On Linux install `speech-dispatcher` or `espeak-ng` if the voice list is empty. Browsers may block sound until you click
  the page once. Notifications that arrive while the site is closed are listed in the history but not read aloud.

## Security notes
* Passwords hashed with bcrypt (cost 12); sessions are HTTP-only, SameSite=Lax cookies (Secure in production), regenerated
  on login; login/auth endpoints are rate limited; server-side validation of all inputs.
* State-changing `/api` requests are rejected when `Sec-Fetch-Site` is cross-site or the `Origin` does not match the host.
* **Password reset:** the reset code is **never sent to the browser**. In development it is printed in the server console.
  **No e-mail/SMS provider is integrated, so password reset is not usable in production.**
* **QR login** (phone approves a code shown on the computer) is implemented server-side and unit-simulated, but has not been
  verified in a real browser/phone pair. **Google login and two-factor authentication are not implemented.**
* Secrets (session secret, `ANTHROPIC_API_KEY`) stay on the server.

## Known limitations
See `CHANGELOG.md` for the verified / unverified / not-implemented lists. In short: DCA bots and browser price alerts still
run in the browser (only while the page is open); there is no trading journal, risk simulator or strategy lab beyond the
DCA backtest; the visual redesign to the NEXTRA palette and a full accessibility/responsive audit are not done.
