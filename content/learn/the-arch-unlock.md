---
title: The Arch Unlock
---

Two things have never existed together, and Arch is the first system where they do.

**A program can enforce against native Bitcoin.** Not a custodian acting on instruction, not a wrapper on another chain — a program holding a real, conditional claim on a coin that never leaves Bitcoin and never becomes anyone's liability.

**One stack clears the risk that enforcement creates.** Taking collateral is only half the job. The instant you seize it you own a position you have to exit, and every previous attempt handed that half off to an open market. Arch owns it end to end.

That combination is the unlock. Everything else on this page follows from it.

## Enforcement from a program

Until now, the right to seize Bitcoin collateral had to be held by a person or a company. That is why every Bitcoin credit structure has been built around a custodian, a bridge or a bilateral agreement — the enforcement right had to live somewhere, and Bitcoin could not express it, so it was delegated to an entity that could act.

Delegating it is what introduced every failure this market has experienced. An entity that can seize your collateral can also lend it out, freeze it, or lose it.

On Arch the right is encoded rather than delegated. Collateral stays a Bitcoin UTXO on the base layer, committed to a Taproot output with predefined spending conditions: the client can withdraw while in good standing, and the clearing process can take the collateral on breach. Spending requires a threshold signature from the validator set, so no single party — Arch included — can act unilaterally. The risk engine evaluates conditions on Arch at 300ms finality, and the ArchVM's UTXO-aware syscalls let that logic spend Bitcoin directly.

The result is an enforceable claim that exists from the moment the account opens, held by a program rather than a counterparty.

## Clearing the risk enforcement creates

An enforcement right you cannot act on is not worth much.

The moment a liquidation fires, the system owns a position it has to exit — and it is exiting into one-directional flow, because everyone holding that collateral is being closed out simultaneously. This is where the right to seize stops being an advantage. A forced seller with a perfect legal claim still sells into a book that has already widened.

Arch clears that risk inside its own stack rather than handing it to a market:

**Block priority.** Liquidations are a protocol-level transaction type with a reserved lane. They do not bid for inclusion or queue behind unrelated flow.

**Atomicity.** Pricing, seizure and settlement land in one state transition. The system cannot reach the state where the price has moved but the collateral has not been taken.

**A counterparty that already exists.** Liquidations clear against the propAMM, which quotes the position and takes it onto its own book inside that same transition. A dedicated execution desk across 60+ venues then unwinds the inventory on its own clock — because the liquidation has a deadline nobody chose, and the unwind does not.

**A unit the system already holds.** Debt, marks and proceeds all resolve in archUSD, backed 1:1 by USDC. The close-out moves entries inside a system that holds both sides rather than converting assets on the day conversion is most expensive.

## Why neither half works alone

Programmatic enforcement without integrated clearing gives you a system that can seize collateral and then has to dump it — precise about the claim, defenceless about the exit. That is most of what has been attempted on Bitcoin.

Integrated clearing without programmatic enforcement gives you a clearing stack with nothing it can actually enforce against, which is why this machinery has only ever existed around custodied assets.

Together they produce something new: **Bitcoin-backed credit where both the claim and the exit are guaranteed by the protocol rather than promised by a counterparty.**

## What that changes

Every parameter in a credit book is a bet on one question: *can I close this position out at a price near the one I modeled?* When the answer is uncertain, every parameter is set defensively — wide haircuts, low loan-to-value, short collateral lists, hard caps, manual intervention at exactly the moments manual intervention is least reliable.

That defensiveness is not bad risk management. It is the correct response to a system that cannot guarantee its own close-outs. Remove the uncertainty and everything downstream moves.

| | Without clearing | On Arch |
|---|---|---|
| **Liquidation execution** | Competes for block space; keeper-dependent | Reserved priority lane, protocol-guaranteed |
| **Price at close-out** | Oracle lag, mempool exposure, auction widening | Locked before broadcast, atomic |
| **Counterparty at close-out** | Whatever depth the open market happens to have | propAMM quotes and takes the position |
| **Source of dollars** | Convert collateral on the worst day of the year | archUSD; proceeds settle into the reserve they are owed from |
| **Collateral location** | Bridged, wrapped, or with a custodian | Native, in the client's own account |
| **Parameters** | Set for a worst case that cannot be modeled | Set for a close-out path that is deterministic |

## Who it changes it for

**Holders** have had two options: sell, or do nothing. Everything in between has required handing the asset to a counterparty and accepting that counterparty as the largest risk in the structure. On Arch the position stays in the holder's own account and credit is drawn against it — and what that credit buys sits in the same account and counts as collateral too. That is cross-margin, not rehypothecation: capacity compounds because the account holds more, not because the same coin has been pledged twice.

**Lenders** have stayed out for a reason that was never a view on Bitcoin. Recovery depended on operational performance — whether a keeper fires, whether a custodian cooperates, whether a book holds depth on the day it matters — and operational performance is not underwritable. No credit committee can price it. When close-out is a protocol guarantee instead, Bitcoin lending becomes a haircut, a loss waterfall and a rate: the form institutional credit takes in every other asset class.

**The market** gets the thing that has been missing rather than a new source of demand. The distance between the Bitcoin posted today and the credit extended against it is not a measure of appetite — it is a measure of absent infrastructure.

## The compounding effect

None of this is a one-time step change.

Credit that clears reliably can be priced tightly. Credit priced tightly gets used. Credit that gets used generates position, loss and behavioral data that let the next round be priced tighter still — which widens the eligible collateral set, which brings more assets into accounts, which deepens the book.

That loop is how every mature credit market was built. It has never had a chance to start on Bitcoin, because the first turn requires a close-out you can rely on.
