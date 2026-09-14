---
title: archUSD
---

archUSD is the dollar the Arch ecosystem runs on. It is issued by Arch Network, backed one-for-one by liquid USDC held off-chain in custody at BitGo and Copper, and it is the unit positions settle in and the unit client debt is denominated in.

## The mechanism

One unit of archUSD exists for one dollar of reserve held with the custodians. Mint is permissionless: anyone who delivers the reserve asset can create the token, without an approval step or a relationship with Arch Prime.

That is the whole instrument. archUSD wraps dollars that already arrived.

## It is not a CDP, and that has consequences

A collateralized debt position works the other way around. You post a volatile asset, the system mints a dollar-denominated liability against it, and a dollar that did not previously exist enters circulation secured by collateral that can fall in value. The mint event *is* a credit event.

archUSD does none of that. There is no borrower behind the token, no collateral ratio to monitor, and nothing volatile standing behind a unit. Minting archUSD does not create credit — it changes the form of a dollar that already existed somewhere else.

Three things follow:

**Holding archUSD is not lending.** You are not exposed to a borrower's health. You hold a claim on a reserve.

**The archUSD supply is not a measure of lending capacity.** Capacity comes from committed lending dollars supplied by third-party liquidity providers. It is those commitments, not the token supply, that gate what the book can finance.

**Growth in supply says nothing about the loan book.** It means more dollars were wrapped.

## The two legs of an account

These are easy to run together and they are separate:

| | What it is |
|---|---|
| **Collateral** | Native Bitcoin, held as a UTXO under Taproot spending conditions |
| **Debt** | Denominated in archUSD |

An account is opened with Bitcoin. What it owes is archUSD.

## Why the issuer is the network

archUSD is issued at the network layer rather than by the application that lends. The party extending credit — Arch Prime — is not the party that issues the unit, and issuance is constrained by reserve delivery rather than by anyone's discretion. Units follow reserve either way.

That separation is what makes "the ecosystem's dollar" an accurate description rather than a branding choice: it is the settlement unit for the network, not an instrument Arch Prime bolted onto its credit business.

## The role in a closeout

archUSD is what makes the liquidation engine work without waiting for an outside buyer. When collateral is swept and sold, the proceeds land as USDC in the reserve account; archUSD is minted against that reserve; the lending pool is repaid in the unit the debt was denominated in.

The order is the point. **The dollars arrive before the units do.** The liquidation mint is the same one-for-one rule as any other mint, with Arch Prime delivering the reserve asset rather than a third party. A closeout does not expand supply beyond the reserve standing behind it, and nothing is created against a promise.

## Who earns on the float

The reserve earns treasury yield. That yield accrues to Arch Network and its token. It is not Arch Prime revenue, and **it does not reach the holder** — archUSD has no yield leg, and none is claimed. If you want dollar-denominated yield, that is a different instrument with a different risk profile; see [Prime Dollar](05-prime-btc-and-prime-dollar).

## Reserve risk

Reserve risk is the risk that the thing standing behind the token stops standing behind it at full value, or stops being reachable on the timetable you need. It has three paths, and they fail differently:

| Path | What can happen |
|---|---|
| **Reserve asset** | USDC can break its own peg or become illiquid. archUSD's 1:1 accounting passes that through rather than insulating you from it. A dollar of reserve worth ninety cents backs a dollar of archUSD with ninety cents. |
| **Custodian** | The reserve sits at BitGo and Copper. Failure, freeze or operational interruption at a custodian interrupts any path back to the reserve regardless of whether the assets are fully present. Arch Network's enforcement against Bitcoin collateral does not reach a custodied reserve. |
| **Process** | A path back to the reserve is a process run by people and systems. It can be slower than expected, gated, or suspended under stress — which is precisely when you want it. |

Who bears it: the holder. Neither Arch Network nor Arch Prime guarantees the reserve.

## Backing and market liquidity are different questions

**Backing** asks whether full value stands behind the unit. It is a solvency question, answered by the reserve and the custodians.

**Liquidity** asks what you can execute right now, in size, against a live order book. It is an execution question, answered by who is bidding at this moment.

A fully backed dollar can trade below a dollar. Nothing about 1:1 backing puts a bid in the book. Backing tells you where price should converge if a path back to the reserve runs; liquidity tells you what you get if you cannot wait for it.

## If archUSD trades away from a dollar

Debt is denominated in archUSD and collateral is Bitcoin, so a discount or premium on archUSD changes the real value of what borrowers owe and what lenders are repaid. A discount makes debt cheaper to retire in real terms and repays lenders in units worth less than par; a premium does the reverse. Neither Arch Prime nor Arch Network guarantees the price, and no mechanism described here puts a floor under it.

## What does not hold

- **1:1 backing is not a price floor.** It describes what stands behind the unit; it does not put a bid in the market, and it does not survive a reserve asset that is itself impaired.
- **Permissionless mint is not permissionless redemption.** The mint is open to anyone who delivers the reserve asset. That says nothing about the terms on which a unit comes back.
- **archUSD is not a yield instrument.** There is no yield leg for the holder.
- **Delivering reserve is not issuing.** Arch Prime delivers reserve during a closeout. It does not issue archUSD.
- **It is not a bank deposit** and carries no deposit insurance.

## Related

- [How it works](02-how-it-works) — where archUSD sits in borrowing and closeout
- [Prime BTC and Prime Dollar](05-prime-btc-and-prime-dollar)
- [Risk overview](06-risk)
