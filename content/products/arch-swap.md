---
title: Arch Swap
description: Native BTC trading with atomic settlement and execution guarantees — the liquidity layer for Arch's product suite.
---

Arch Swap is Arch's integrated trading product, providing native BTC trading with atomic settlement and deep liquidity.

## Core Capabilities

* **Atomic settlement** — trades execute and settle in a single transaction, no partial fills or settlement risk
* **300ms execution** — trades confirm in under a second
* **Native BTC** — no wrapped assets, no bridge risk, trade directly with Bitcoin
* **Deep liquidity** — closed-loop integration with Arch Lend creates lending-backed liquidity pools
* **Execution guarantees** — deterministic execution prevents MEV extraction common on other chains

## Why Integrated Trading Matters

Arch Swap isn't a standalone exchange — it's the liquidity layer for Arch's entire product suite. When Arch Lend needs to liquidate collateral, it routes through Arch Swap. When yield vaults rebalance positions, they trade through Arch Swap. This closed-loop design ensures liquidity is always available where it's needed most: at the moment of risk enforcement.

## Related Reading

* [Arch Lend](./arch-lend)
* [How Products Work Together](./integration)
* [The Deterministic Stack](/learn/architecture/the-deterministic-stack)
