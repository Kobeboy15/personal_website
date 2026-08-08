Built across three generations over roughly two months — each one a response to what the previous version got wrong. The result is an autonomous agent that scans Polymarket prediction markets, uses Claude as an analyst to detect edge, sizes positions with fractional Kelly criterion, and enforces hard risk controls before touching real money.

![KAIROS dashboard showing capital, P&L, win rate, and open positions for the live Polymarket bot](/projects/trading-bot/dashboard-overview.png "KAIROS — the generation 3 bot's live dashboard, currently running in paper/dry-run mode.")

## Generation 1 — poly-bot

The first version established the core loop: scrape open markets, rank by expected value, paper-trade the top picks, log outcomes to SQLite. The focus was on getting the data pipeline right and proving the EV-ranking approach had any signal at all. By the time the strategy was retired, the pipeline had logged **2.4 million price ticks** and **389 paper trades across 42 markets** — a real backtesting scale even if the strategy itself underperformed.

Key lesson: markets with overlapping resolution windows would over-allocate to correlated outcomes. A position on "Will X happen by Friday?" and "Will X happen by Sunday?" look independent but aren't — and the naive portfolio blew through its risk budget on the same bet twice.

## Generation 2 — poly-bot-2

The second version was a full architectural rewrite (~6,800 LOC, 15 test files, a written ARCHITECTURE.md). The central fix was a first-class `window_key` domain model that groups markets by resolution window and enforces portfolio-aware risk across the whole group — not just per-trade.

- **Expectancy-aware ranking** that improves with paper-trade history, weighted toward recent outcomes
- **Custom HTML scraper** with no external dependencies — faster and more resilient than a full browser
- **Full test suite** covering the risk engine, EV calculations, and market parsing edge cases

Key lesson: the analyst step was still rule-based. Identifying *why* a market had edge required reading context — team news, sentiment, recent events — that structured scrapers can't surface.

## Generation 3 — autonomous_trading_bot

The third version added an AI analyst in the loop. Each market candidate gets passed to Claude with a web_search tool call, and the model returns a structured JSON verdict (TRADE or SKIP) with a confidence score and reasoning. The prompt is deliberately skeptical — it defaults to SKIP and requires the model to argue for a trade.

- **AI edge detection**: Claude scans current news and context for each candidate; structured output forces a consistent verdict format
- **Fractional Kelly sizing**: positions sized at ¼ Kelly to reduce variance on uncertain probability estimates
- **Hard risk controls**: per-trade dollar cap, max concurrent positions, minimum confidence gate, daily loss circuit breaker
- **Safety-first defaults**: `DRY_RUN=true` out of the box, read-only price client, lazy wallet construction so no keys are loaded unless a live trade is explicitly triggered
- **Live dashboard (KAIROS)**: a FastAPI/SQLite browser dashboard showing open positions, cumulative P&L, and every AI decision with its reasoning — reads straight off the bot's own state, so it works even while the bot is stopped

![Go-live readiness checklist tracking sample size, calibration error, concentration, and Brier score against the raw market](/projects/trading-bot/go-live-readiness.png "A gate, not a vibe check — the bot has to beat the market's own forecast accuracy before it's allowed to size up.")

![AI decision log with the model's SKIP/YES call, confidence, and full reasoning for each market it evaluated](/projects/trading-bot/ai-decision-log.png "Every evaluated market gets a call and a paragraph of reasoning — nothing trades without an argued case.")

![Smart-money panel tracking wallets with confirmed on-chain edge, alongside a leaderboard of the most notable tracked wallets](/projects/trading-bot/smart-money.png "A separate signal source — positions get an extra confirm/veto check against wallets with a track record of being right.")

## Stack

`Python` `Claude API` `FastAPI` `SQLite` `py-clob-client` `Rich`
