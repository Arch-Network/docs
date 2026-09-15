---
title: The Deterministic Stack
description: Why Arch's deterministic design is structurally different from other Bitcoin infrastructure — and why it matters for capital markets.
---

Most Bitcoin infrastructure projects optimize for trustlessness — zk proofs, challenge periods, fraud proofs. Arch optimizes for something different: deterministic financial execution with Bitcoin settlement.

## What Deterministic Means Here

When a program executes on Arch, the outcome is known within 300ms. There are no challenge windows, no optimistic assumptions, no waiting periods. Execution is final. The resulting Bitcoin transaction is constructed, signed by validators, and settled. This is not fast-by-crypto-standards — this is fast enough to enforce liquidations before market conditions drift, which is the bar for institutional credit.

## Why Competitors Can't Replicate This

zk-rollups (Citrea, etc.) achieve trustlessness through proof generation, but proof generation takes seconds to minutes — too slow for real-time collateral enforcement. Optimistic rollups require 7-day challenge periods. Meta-protocols inherit Bitcoin's 10-minute block time. None of these architectures can enforce a liquidation in 300ms.

Arch made a different tradeoff: use a validator network with threshold cryptography (FROST/ROAST) to achieve fast, deterministic execution, while still settling every transaction natively on Bitcoin. The result is infrastructure fast enough for capital markets and secure enough for institutional volumes.

## What the Deterministic Stack Enables

* **300ms liquidation fidelity** — collateral is enforced before oracle lag can create bad debt
* **Atomic trade settlement** — trades execute and settle in a single deterministic step
* **Real-time risk management** — Arch Prime can monitor positions with sub-second accuracy
* **Institutional credit at scale** — lenders can underwrite against Bitcoin collateral knowing enforcement is deterministic
* **Closed-loop liquidation** — Arch Lend + Arch Swap in a single execution environment means liquidations never depend on external liquidity

## The Stack

From top to bottom:

1. **Product Suite** — Arch Swap, Arch Lend, Arch Prime, Yield Vaults
2. **ArchVM** — deterministic execution, UTXO-aware syscalls
3. **Validator Network** — dPoS consensus, 300ms finality
4. **Threshold Signatures** — FROST/ROAST, no single point of failure
5. **Bitcoin Settlement** — native UTXOs, base layer finality

Every layer is purpose-built. The VM is designed for financial operations, not general computation. The consensus is tuned for speed, not maximum decentralization. The signing scheme is built for collective custody, not single-party control. This is a financial infrastructure stack, not a general-purpose blockchain.
