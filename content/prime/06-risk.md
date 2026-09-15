---
title: Risk overview
---

An Arch Prime account combines programs on Arch Network with off-chain custody, trading venues, a strategy manager, and Bitcoin itself. No single control removes those dependencies, and losses are possible.

> Your collateral can be liquidated. A deployed strategy can lose money. A closeout can leave a shortfall. archUSD can trade below a dollar. Do not treat an Arch Prime account as a deposit, an insured product, or a guaranteed return.

## Where the risk sits

The single most important thing to understand: **in a levered account, the deployed strategy — not Bitcoin's price — is what reaches your equity first.** At 5.0× leverage a 20% impairment in the strategy exhausts your equity at full Bitcoin value. A 100% Bitcoin drawdown, with the deployed position intact, leaves the debt covered. The leg you are watching is usually not the leg that ends you.

## Principal risks

**Market and strategy** — where the position itself loses money.

| Risk | What can happen | Who is exposed |
|---|---|---|
| **Strategy impairment** | A market-neutral book can lose money; spreads widen, hedges are imperfect, related exposures diverge | Your equity, first and fastest |
| **Leverage** | Leverage shortens the distance between a move and a liquidation, symmetrically | Your equity |
| **Bitcoin price** | Bitcoin can fall far and fast, reducing collateral value | Account health |
| **Concentration** | One whitelisted strategy means 100% concentration by construction | Every deployed account, together |
| **NAV marks** | Health is computed from a NAV produced outside Arch Network; a stale or wrong mark produces a wrong health factor in either direction | Account health, in both directions |

**Liquidity and exit** — where you cannot get out at the price or on the timeline you expect.

| Risk | What can happen | Who is exposed |
|---|---|---|
| **Unwind route** | Redemption is slow but contractual; sale is fast but conditional and withdraws under stress. A position underwritten on depth alone is underwritten on the route most likely to be gone | Anyone closing a position under stress |
| **Closeout price** | A sale realizes market price, not NAV, and the two diverge most in a cascade | Your equity, then the lenders |
| **Shortfall** | Closing out is not a promise that debt is repaid in full from proceeds | Third-party liquidity providers |
| **archUSD discount** | Debt is denominated in archUSD; a discount or premium changes the real value of what is owed and what lenders receive | Borrowers and lenders, in opposite directions |

**Counterparty and custody** — where someone else holds or honours something.

| Risk | What can happen | Who is exposed |
|---|---|---|
| **Strategy manager** | Velox operates under a signed letter of intent, and supplies execution and the risk desk. Operational failure, departure, or a change in that relationship affects the strategy behind both instruments | Deployed positions |
| **Reserve custodian** | The archUSD reserve sits at BitGo and Copper. Failure, freeze or operational interruption interrupts any path back to the reserve | archUSD holders |
| **Reserve asset** | USDC can break its peg or become illiquid; 1:1 accounting passes that through | archUSD holders |
| **Venue** | Roughly 60 venues carry execution and hedging. Outages, halts, rule changes and settlement failures are venue events, and neutrality does not address them | Strategy performance and closeout execution |
| **Lender withdrawal** | Capacity depends on committed lending dollars; those commitments can be reduced | Borrowing availability |

**Protocol and settlement** — where the system itself can fail.

| Risk | What can happen | Who is exposed |
|---|---|---|
| **Validator set** | Enforcement runs through a threshold of validators. **The validator set is operated by Arch at launch**, a configuration chosen for reliability while the network is young. Participants controlling more than the signing threshold could, colluding, authorize transactions the rules do not permit | All collateral under enforcement |
| **Upgrade authority** | Spending conditions are enforced by programs. Whoever can change those programs is a party you are exposed to. This is the exception to "no single operator can move collateral" | All collateral under enforcement |
| **Implementation** | A newer chain has less adversarial operating history than a mature one. Bugs found elsewhere have not been found here yet | Everything running on it |
| **Bitcoin settlement** | A pre-confirmation is not finality. A transaction can leave the mempool, and a reorganization can alter recently confirmed state | Anyone relying on an unconfirmed transfer |
| **Oracle and price inputs** | Health is only as good as the prices it is computed from | Account health, in both directions |

## Risks compound

These are not independent. A venue failure can leave a strategy unhedged, widen the discount on the receipt, push accounts through the liquidation threshold, and degrade the execution the closeout depends on — at the same time, for the same reason.

## What the design does not protect you from

- **Price.** Enforcement determines that closeout begins, on time and without anyone's cooperation. It does not determine the price at which closeout completes.
- **Your own sizing.** Additive margin means a hedge in one leg does not reduce the requirement in another. Nothing interposes a waiting period between a breach and the walk.
- **Loss of the deployed leg at the worst moment.** Deployed positions are unwound before Bitcoin by design, because that is where the levered risk is.
- **Trust, entirely.** What Arch Prime removes is a counterparty with discretion over your coin. What remains is the validator set, the upgrade authority, the custodians behind archUSD, and the strategy manager. Those are different risks from a custodian's balance sheet, not an absence of risk.

## What is left after every control

Controls constrain specific failures. They do not guarantee the value of off-chain assets, correct execution, continuous liquidity, or a return. Arch Prime does not operate a reserve fund, and there is no second line behind the archUSD reserve.

## Related

- [How it works](02-how-it-works)
- [archUSD](04-archusd)
- [Prime BTC and Prime Dollar](05-prime-btc-and-prime-dollar)
