---
title: Prime BTC and Prime Dollar
---

Prime BTC and Prime Dollar are the yield instruments an Arch Prime account deploys into. Each gives spot exposure to its base asset plus a return from market-neutral quantitative strategies.

| | Prime BTC | Prime Dollar |
|---|---|---|
| **Base exposure** | Bitcoin, spot | US dollar |
| **Yield source** | Market-neutral quantitative strategies | Market-neutral quantitative strategies |
| **You are exposed to** | Bitcoin's price, and the strategy | The strategy |
| **What it is not** | A wrapped or synthetic Bitcoin | A stablecoin |

The difference is what happens when Bitcoin moves. Prime BTC carries the price; Prime Dollar does not. Treating them as interchangeable will size a position wrong.

## Where the yield comes from

The strategies are market-neutral: they capture spreads between related exposures while hedging out market direction. That is an established institutional approach, not a crypto invention, and it does not rely on any single mechanism.

They are run by **Velox Trading**, a quantitative trading firm operating under a signed letter of intent with Arch. Velox brings Arch Prime the two prime functions that cannot be written in code — execution and a risk desk — with connectivity across roughly 60 venues.

Arch Network, the infrastructure underneath the account, is a separate system and is unaffected by strategy performance: collateral remains a Bitcoin UTXO under Taproot spending conditions and is never reissued on another chain. The strategy is where the return comes from; Arch Network is where enforcement comes from. They are different systems and they fail for different reasons.

## What market-neutral does and does not mean

**Does mean:** the strategy is not taking a directional view. Its return does not depend on Bitcoin rising.

**Does not mean:** no risk. Market-neutral books lose money. Related exposures diverge instead of converging, spreads widen, hedges are imperfect, and a venue can halt or fail while a position is open. There is no floor under the yield leg, and none is claimed.

## How they behave as collateral

Deployed positions are held as receipts inside the margin account, marked at net asset value, and counted as collateral after their haircut. They are **liquidation rank 1** — unwound before Bitcoin, because that is where the levered risk sits.

Two consequences follow, and they are the ones that catch people:

**The deployed leg reaches your equity before Bitcoin's price does.** In a levered account the binding constraint is not Bitcoin. At 5.0× a 20% impairment in the strategy exhausts the equity behind it, at full Bitcoin value — Bitcoin never moved, the NAV did.

**A sale realizes market price, not NAV.** The account is marked at NAV; a receipt sold into the market fetches what the book will pay. Those diverge most under stress, which is exactly when a closeout happens.

## Concentration

Arch Prime runs one whitelisted strategy today, which means **100% concentration by construction**. Deploying is a single concentrated exposure regardless of position size. That is acceptable only because the strategy is hand-underwritten, and it is a real limit rather than a technicality.

## Track record

The strategies behind Prime BTC and Prime Dollar are not new — Velox has run them through multiple market cycles. Publishing that record, with the methodology and the drawdown history that the 5.0× leverage ceiling is derived from, is pending Velox clearance and is not included here.

Nothing in this page is a forecast, a target, or a rate Arch Prime expects.

## What does not hold

- **Prime BTC is not wrapped Bitcoin.** It is a position that carries Bitcoin exposure plus strategy exposure.
- **Prime Dollar is not a stablecoin.** It can lose value. If you want a dollar that only wraps a dollar, that is [archUSD](04-archusd).
- **Neither is principal-protected**, and neither carries a fixed or promised return.
- **Venue connectivity is surface area as well as opportunity.** Outages, halted markets, changed rules and settlement failures are venue events, and neutrality does not address them.

## Related

- [How it works](02-how-it-works)
- [archUSD](04-archusd)
- [Risk overview](06-risk)
