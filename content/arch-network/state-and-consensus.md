---
title: State & Consensus
description: How Arch achieves consensus and manages state — dPoS, 300ms finality, and a dual-state model anchored to Bitcoin.
---

Arch uses a stake-weighted delegated proof-of-stake (dPoS) consensus mechanism optimized for speed and throughput. The network is designed for financial operations where execution latency directly impacts risk — every millisecond of delay in a liquidation is a millisecond of potential bad debt.

## Consensus Parameters

* **300ms block finality** — transactions are final within a single block
* **~1,000 TPS throughput** — sufficient for institutional-scale trading and lending volumes
* **Stake-weighted validator selection** — validators are selected proportional to staked ARCH tokens
* **Deterministic ordering** — transaction order is determined by the consensus protocol, not by fee auction

## Why dPoS

Arch chose dPoS over proof-of-work or nakamoto-style consensus because capital markets infrastructure requires speed and determinism, not maximum decentralization. The tradeoff is deliberate: Arch's validator set is smaller and more coordinated than Bitcoin's miner set, but it produces final blocks in 300ms instead of 10 minutes. The security model relies on economic stake (validators risk their staked ARCH tokens) and threshold cryptography (no single validator can produce valid signatures).

## State Model

Arch programs manage state through accounts (similar to Solana's account model). However, unlike Solana, Arch's state is anchored to Bitcoin UTXOs. This dual-state model means:

* **Fast state** — program accounts on Arch update within 300ms, enabling real-time operations
* **Settled state** — Bitcoin UTXOs are the source of truth, updated when threshold-signed transactions settle on-chain
* **Consistency guarantees** — the DAG-based transaction tracker ensures fast state and settled state remain synchronized

This dual-state architecture is what allows Arch to offer sub-second execution while maintaining Bitcoin-grade settlement finality. The product suite operates on fast state for responsiveness, while all economic value is secured by settled state on Bitcoin's base layer.

## Related Reading

* [Consensus overview](./consensus)
* [FROST](./consensus/frost)
* [ROAST](./consensus/roast)
* [Bitcoin Settlement](./bitcoin-settlement)
