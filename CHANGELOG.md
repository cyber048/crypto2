# Changelog

## Alerts, notifications and voice (this release)
Built on the uploaded v16 (which already contained server-side alerts, journal, chat, bots and gamification).

### Fixed in the uploaded version
* Server-side alerts never worked end to end: the API returned `triggered` (0/1) but the client looked for `status`
  ("active"/"triggered"), so no alert was ever listed as active, and the client re-triggered alerts on every poll.
  The server now returns `status`, `triggered_price`, `trigger_count`; the client no longer re-triggers anything.

### Added
* Alert engine: one-shot and repeating alerts (re-arm after the price crosses back), pause/resume, edit, "already past"
  protection (a target the price has already passed is rejected), max 50 per user.
* `notifications` table and API: `GET /api/notifications?after=ID`, `POST /api/notifications/seen`, `DELETE /api/notifications`,
  `PATCH /api/alerts/:id`. Alerts and server-side order fills create notifications inside the same SQL transaction.
* Settings → **Alerts & voice**: voice on/off, announce alerts / fills, language (Auto, Հայերեն, Русский, English), voice picker,
  volume, speed, test buttons; alert rule editor (+1% / -1% presets, repeat switch); notification history.
* Effects: rising/falling/fill chimes (WebAudio), animated banner, bell with unseen badge, green/red price flash in Markets and
  the watchlist.
* 11 new automated tests (43 total) and a migration check on a copy of a real database file.

### Verified
* `npm test`: 43 tests pass (alerts, notifications, fills, migration of an old `alerts` table).
* The real `server.js` driven against mocked Express/Kraken: alert created -> price tick -> notification stored once -> cursor
  returns nothing new -> edit re-arms -> pause -> ownership checks -> take-profit filled server-side -> fill notification.
* Client voice logic unit-tested with stubs: spoken text in en/ru/hy, voice fallback (no Armenian voice -> English), toggles,
  forced test announcements, first poll silent / later polls announced in order, user switch reset.
* The migration ran on a copy of the user's own `platform.sqlite` (users/trades kept, new columns/table added).

### Not verified
* No real browser was used: actual speech output, audio autoplay permissions, banner/bell/switch styling and mobile layout.
* The live Kraken API (see Phase 1 notes below).

### Not implemented
* Percent-move alerts ("+3% in 5 min"), e-mail/push notifications, reading out notifications that arrived while the site was closed.


## Phase 1 — correctness, security, real market data (this release)
Original files are saved in `backup-pre-phase1/`.

### Added / changed
* `lib/ledger.js`: transactional demo ledger — fees, average entry price, positions table, realised/unrealised P/L,
  market/limit/stop-loss/take-profit orders executed by the server, order reservation, idempotent `clientId`, CSV export, reset.
* `lib/market.js`: Kraken public-API client (ticker, OHLC, depth, trades) with caching, back-off, stale detection.
* Server: `GET /api/market` (real data + source + update time), `POST /api/orders`, `DELETE /api/orders/:id`,
  `GET /api/trades.csv`; `/api/trades` now uses the ledger; cross-site request guard; password-reset code no longer returned.
* UI: data-source/last-update indicator, offline/stale banner, real order book + depth chart + recent trades, Stop-loss and
  Take-profit order tabs, server-side open orders with cancel, real positions with unrealised P/L, fee shown in the order
  panel, CSV export button. Removed controls that did nothing (margin, TP/SL checkbox, Post only) and removed fabricated
  numbers (hard-coded prices, "Index price", short-sell limit). Wording changed from "simulated prices" to the real source.
* BNB replaced by LTC (Kraken has no BNB market).
* `npm test`: 27 unit tests (ledger rules, fees, average cost, SL/TP, reservations, idempotency, CSV, migration, market client).

### Verified
* Ledger rules and the market client: 27 automated tests pass (Node 22, built-in SQLite).
* Real `server.js` driven end-to-end against a mocked Express and a **mocked Kraken**: registration, market endpoint, trades,
  duplicate protection, stop-loss filled by a price tick without a browser, cancel/ownership, CSV, password-reset response
  without code, cross-site guard, demo reset, feed outage (stale → trading refused → recovery).
* New client functions unit-tested with server-shaped data (status banner, order-book grouping, orders tab, cancel/send).

### Not verified
* **The live Kraken API has not been called** (no network in the build environment); response parsing follows Kraken's
  documented format and is covered by tests with sample payloads only. Check the first run: the header should show
  "Kraken public API · updated hh:mm:ss".
* Nothing was run in a real browser (layouts, animations, QR login, theme colours, mobile).
* `better-sqlite3` was not installed here (tests used a compatible wrapper over `node:sqlite`).

### Not implemented yet (incomplete)
* NEXTRA visual theme (#090B0E / #15181D / neon green), full responsive and accessibility audit.
* Dedicated Dashboard, Portfolio allocation page redesign, favourites sorting/volume column in Market Watch.
* Editable price alerts and notification history (alerts are simple browser alerts); server-side alerts.
* Server-side DCA bots; trading journal; risk simulator; strategy lab with limitations beyond the DCA backtest.
* Demo challenges stored in the browser only; achievements persistence on the server.
* Real e-mail delivery for password reset; Google login; two-factor authentication.
* Server error messages are English only (UI texts are Armenian/Russian/English).
