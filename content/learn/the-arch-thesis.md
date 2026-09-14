---
title: The Arch Thesis
description: Capital markets run on credit. Credit runs on clearing. Bitcoin has never had either — and the missing piece is not appetite, it is infrastructure.
---

## Why lending is the foundation of Bitcoin capital markets

Bitcoin is a multi-trillion-dollar asset with almost no capital markets infrastructure built around it. No scalable lending markets, no liquid derivatives, no structured products at size. The reason is straightforward: capital markets require credit, and credit requires infrastructure that can price, enforce and liquidate collateral with precision.

Traditional finance solved this a long time ago. Prime brokerages, clearinghouses and margin systems are the machinery that makes credit scalable — and scalable credit is what makes derivatives, structured products and institutional participation possible. Roughly $26 trillion of Treasuries supports something on the order of $600 trillion of derivatives, and the multiple has nothing to do with Treasuries being an unusually good asset. It exists because the clearing machinery around them is deterministic, so participants can extend credit against them without independently underwriting the risk that settlement fails.

Bitcoin has the collateral. It has never had the machinery.

## Why this requires its own chain

This is the part most people skip, and it is the actual thesis.

A credit business can be built on existing rails. A credit business that *clears* cannot — because every existing settlement layer fails at the same moment, for the same reason.

Follow a liquidation on a general-purpose chain. The oracle updates, with lag. A keeper notices, and has to be paid enough to act. The transaction enters a public mempool where anyone can see it. Gas spikes, because everyone else is liquidating at the same time. It lands late, at a worse price. The collateral is then sold into an order book that has already widened — because the event causing the liquidation is hitting every participant simultaneously.

Nothing in that sequence is a bug. It is what a chain that treats every transaction identically does under stress, and no amount of engineering on top of it changes the result.

There is a precedent for the fix. When a financial primitive needs execution guarantees a shared chain cannot make, it gets its own chain — Hyperliquid proved that for order books, where matching and margining continuously is not something general-purpose block space can promise.

Credit needs the same treatment for a different reason, and the difference matters:

| | Trading | Credit |
|---|---|---|
| **What it needs** | Match, fill and margin a book continuously | Price, seize and settle a defaulted position on a deadline nobody chose |
| **What a shared chain can't guarantee** | Ordering and throughput under load | Priority and atomicity — it cannot tell a liquidation from a memecoin swap |
| **Answer** | Purpose-built L1 | Purpose-built L1 |

Trading needs determinism of *ordering*. Credit needs determinism of *priority and atomicity*. Building for one does not solve the other.

## The three pieces

**Liquidations go first.** Clearing has a reserved lane in every block. Not best-effort, not a gas auction against unrelated flow — a protocol-level rule, which is only available to someone who owns the chain.

*On its own, this is a faster queue.* You still have a multi-step process that can fail halfway through.

**Close-out is a single state transition.** Price locks before broadcast. Pricing, seizure and settlement land together, in one operation, or not at all. No oracle hop, no mempool, no external keeper, no bridge. The system cannot reach the state that breaks every other credit protocol: price moved, collateral not yet taken.

*On its own, this is a clean transaction* that still has to find dollars and a bid at the exact moment both are scarce.

**The network issues the unit the debt is owed in.** Credit on Arch is denominated and settled in archUSD, backed 1:1 by USDC. Debt, collateral marks and liquidation proceeds all resolve in the same unit, held in the same reserve. This does not conjure liquidity — it removes the conversion step. A close-out is a movement of entries inside a system that already holds both sides, rather than a scramble to convert one asset into another on the day conversion is most expensive.

*On its own, this is a stablecoin.*

Each piece alone is a feature someone else can copy. Together they are a clearinghouse.

## Why vertical integration is not a preference

The live version of this argument says Arch internalizes the stack because integration confers advantage. That is true, but it understates the case. **Integration is not an edge. It is the only configuration in which the guarantee can be made at all.**

Work backwards from the promise. Arch guarantees a position can be closed out completely, on time, at a known price.

- To guarantee it *executes*, you must control block inclusion. That means owning the chain.
- To guarantee it executes *completely*, pricing and settlement must be one operation. That means owning the execution environment.
- To guarantee there is a **counterparty** at the instant it executes, you must control the other side of the trade. You cannot promise liquidity you have to go ask someone else for.
- To guarantee the proceeds *settle*, the unit of account must be one the system already holds.

The third is where most stacks break, and it is what the propAMM exists for. A liquidation is one-directional flow: everyone holding the same collateral is being closed out at once, so the open market is at its worst precisely when the close-out has to happen. Arch does not send liquidations into that market. They clear against the propAMM, which quotes the position and takes it onto its own book inside the same atomic transition that seizes the collateral — and a dedicated execution desk across 60+ venues then unwinds the inventory on its own clock.

That decoupling is the whole trick. **The liquidation has a deadline nobody chose. The unwind does not.** Closed-loop liquidity between the credit book and the quoting engine is what converts a market event into a ledger operation — and it is not available to anyone who owns only one layer.

Owning both sides raises an obvious question, and the answer is structural rather than promissory: house strategies sit on the same shelf as third-party managers, under the same whitelist, the same haircut methodology, the same risk committee and the same position in the liquidation order. The propAMM is compensated by a disclosed liquidation spread — the same economics as any liquidation penalty, paid to a counterparty inside the system instead of to an outside searcher — not by discretion over who gets liquidated or when.

## What scaled credit unlocks

Once Bitcoin-backed credit can be priced, issued and closed out deterministically, the things that have never existed on Bitcoin become buildable — because each of them is downstream of credit, not parallel to it:

- **Derivatives.** Options, futures and swaps are margin products. They require a system that can mark a position and enforce a margin call with certainty.
- **Structured products.** Yield notes and tranched exposure require a credit market underneath to tranche in the first place.
- **Institutional participation.** Banks, funds and asset managers cannot underwrite operational performance — whether a keeper fires, whether a custodian cooperates. They can underwrite a haircut, a loss waterfall and a rate. Deterministic clearing is what converts the first into the second.
- **Capital efficiency.** Credit against collateral that is itself productive, cross-margined in one account, rather than every position funded standalone.

This is how capital markets get built on Bitcoin: not by publishing a platform and waiting, but by building the risk infrastructure and proving it works at the precision institutional finance requires.
