---
title: Overview
---

Arch Network is a Layer 1 whose design is organized around one event, the moment a credit position has to be closed out. This page covers how that works and what runs on it.

## The network

Arch Network is a Layer 1 whose design is organized around one event: the moment a credit position has to be closed out. This page covers how that works and what runs on it.

Most chains are general-purpose. Every transaction competes for the same block space on the same terms, which is a reasonable trade for most applications and a fatal one for credit — where the value of the system is decided entirely in the few minutes a year when everything moves at once.

Arch narrows the mandate. Four design decisions follow from it.

**Liquidations are a protocol-level transaction type.** Clearing is not an application running on Arch; it is something the chain knows about. Liquidation transactions have a reserved lane in every block. They are not best-effort, they do not bid for inclusion, and they cannot be crowded out by unrelated flow — which is only possible because the chain was built for this rather than adapted to it.

**Close-out is a single state transition.** Pricing, seizure and settlement happen together, in one operation, or not at all. There is no oracle hop where the price can drift between mark and execution, no mempool where the transaction can be observed and front-run, and no external keeper who has to be incentivized to act. The system cannot end up in the state that breaks every other credit protocol: price moved, collateral not yet taken.

**The network issues its own unit of account.** Credit on Arch is denominated and settled in **archUSD**, backed 1:1 by USDC. Debt, collateral marks and liquidation proceeds all resolve in the same unit, held in the same reserve — so a close-out is a movement of entries in a system that holds both sides, not a scramble to source dollars on the day dollars are scarce.

**Settlement is native Bitcoin.** Execution output is real Bitcoin transactions on the base layer. No bridge, no wrapper, no custodial receipt standing in for the asset.

### What that runs on

- A **decentralized validator network** running stake-weighted dPoS consensus with 300ms block finality
- A **UTXO-aware execution environment (ArchVM)** based on eBPF, with custom syscalls that orchestrate UTXOs directly on Bitcoin's base layer
- **Threshold signatures (FROST + ROAST)** — no transaction is published without majority validator consensus
- **Native Bitcoin settlement** — execution output is Bitcoin transactions, settled on the base layer

The mandate is narrow on purpose. Arch is not competing for developers building arbitrary applications, because the guarantees above only hold while the chain does one thing. The network itself is neutral: anyone extending credit against Bitcoin can clear through it.

## Arch Prime

Arch Prime is the first business to do so at scale — a prime brokerage for Bitcoin holders, and the network's anchor tenant.

A client posts Bitcoin. It stays in distributed threshold control, not on anyone's balance sheet. Against it, the risk engine extends credit in archUSD.

### Where the credit goes

The account extends credit against whatever is on the shelf. Arch Prime runs the shelf and underwrites what is on it — it does not manufacture most of it.

**Third-party strategies.** Vaults run by other asset managers on Arch: market-neutral, basis, yield. Arch Prime whitelists each one, sets its haircut, and takes a marketplace fee. This is the marketplace, and it is the largest part of the shelf by design.

**House strategies.** Strategies run in-house. They sit on the shelf under the same terms as everyone else's — same whitelist process, same risk committee, same haircut methodology, same position in the liquidation order. At launch they anchor the shelf; at scale they are one manager among many.

**Directional positions and other collateral.** Buy more Bitcoin, tokenised equities or gold on margin, where the hurdle is price rather than yield. Or post those assets as collateral alongside the Bitcoin — a tokenised treasury fund enters at a high advance rate and enlarges the account rather than consuming it.

Whatever the client deploys into, the resulting positions sit in the same account and count as collateral too, at whatever haircut the risk engine assigns them.

This is **cross-margin, not rehypothecation.** The assets never leave the client's account. They sit there under predefined spending conditions enforced by the protocol. Borrowing capacity compounds because the account holds more, not because the same asset has been pledged twice. There is no chain of claims on one coin, and no counterparty in the middle who can fail.

Bitcoin is where the account opens. The shelf is why it isn't where it ends.

## Execution: the propAMM

A liquidation is one-directional flow. Everyone holding the same collateral is being closed out at the same moment, which means the open market is at its worst precisely when the close-out has to happen — books thin, spreads widen, and a forced seller pays for all of it.

Arch does not send liquidations into that market. They clear against the **propAMM**, a proprietary quoting engine that acts as counterparty of first resort. When a position breaches, the propAMM quotes it and takes it onto its own book inside the same atomic state transition that seizes the collateral and settles the debt. The protocol's side is finished at that point — priced, closed, settled, in one operation.

What happens to the inventory afterward is a separate problem on a separate clock. This is the part that matters: the liquidation has a deadline nobody chose; the unwind does not. The propAMM absorbs that timing mismatch. The credit system gets immediacy and certainty; the position gets worked out over minutes or hours instead of seconds.

That work is done by a dedicated execution desk integrated with **60+ venues**, running proprietary risk and execution systems. Market fragmentation, which is a liability for a forced seller, becomes an asset once you are no longer forced: inventory is distributed across venues and time rather than dumped into one book at the worst moment.

One-directional flow is normally toxic to an automated market maker — it is adverse selection by construction. It is underwritable here for three reasons the open market doesn't have:

- **The flow is known, not anonymous.** The propAMM is quoting against a credit book Arch underwrites. It can see position concentration, collateral composition and breach thresholds before a liquidation happens, and price accordingly.
- **It is compensated.** The liquidation spread is the propAMM's consideration for providing immediacy — the same economics as any liquidation penalty, but paid to a counterparty inside the system rather than to an outside searcher.
- **It is hedgeable.** A desk across 60+ venues can lay off directional exposure while the unwind runs, rather than carrying it naked.

This is what makes a close-out a ledger operation rather than a market event. The atomic state transition only exists because something is on the other side of it at the instant it executes.

## How a position closes out

1. The risk engine marks the account. A breach is detected on-chain, not by an external keeper who has to be paid to show up.
2. The liquidation enters its reserved lane. No gas auction, no mempool exposure, no competition with unrelated flow.
3. Price locks before broadcast. The propAMM takes the position; pricing, execution and settlement land in a single atomic state transition — no window in which the price has moved but the collateral has not been taken, and no dependency on an outside venue having depth.
4. Possession at block finality: **~300 milliseconds.** Full path end to end, detection through settlement: **under three seconds.**
5. The desk unwinds the inventory across 60+ venues on its own clock, independent of the liquidation.

Each layer is doing something the one below it cannot. The chain guarantees the liquidation executes; the atomic transition guarantees it executes completely; the propAMM guarantees there is a counterparty when it does; archUSD guarantees the proceeds settle in a unit the system already holds.

## Access

Users reach Arch from their existing Bitcoin wallets — Xverse, Unisat, Ledger — through Taproot address integration. No bridging, no new wallets, no wrapped assets.

## Specifications

| | |
|---|---|
| Block finality | ~300ms |
| Throughput | ~1,500 TPS |
| Liquidation path | Under 3 seconds end to end |
| Bitcoin compatibility | Taproot-native |

