---
title: How Products Work Together
description: How Arch's vertical integration translates into concrete advantages — closed-loop liquidity, deterministic liquidation, and integrated risk monitoring.
---

Arch's vertical integration isn't a marketing claim — it's an architectural decision with concrete implications for how the products function.

## The Flow

1. **Capital enters through Arch Lend** — institutions deposit BTC or stablecoins into lending pools
2. **Arch Swap provides liquidity** — trading activity creates the market depth that makes lending efficient
3. **Liquidations route through Arch Swap** — when collateral needs to be liquidated, it executes instantly through Arch's own trading infrastructure (300ms)
4. **Arch Prime monitors everything** — real-time visibility across all positions, collateral health, and yield
5. **Yield Vaults optimize returns** — automated strategies deploy capital across lending and trading to maximize yield

## Why This Matters

On fragmented platforms, liquidation depends on external liquidity that may not be there when you need it. On Arch, the trading infrastructure and lending infrastructure are the same system. This closed-loop design is what enables the liquidation fidelity that makes scaled lending possible — and scaled lending is what unlocks capital markets.

## Partner Integration

* **HoneyB** connects to Arch Lend's API to borrow stablecoins against BTC, deploying into private credit for yield
* **Bitfrost** provides bridge and prime brokerage services for cross-chain liquidity
* **Chaos Labs** and **Gauntlet** provide oracle data and risk management for Arch Lend's parameters

## Related Reading

* [Product Suite Overview](./overview)
* [The Arch Thesis](/learn/the-arch-thesis)
* [Partners Overview](/partners/overview)
