---
title: Bitcoin Settlement
description: How Arch settles to Bitcoin — UTXO anchoring, threshold signatures, and what "native Bitcoin settlement" actually means.
---

When we say Arch settles on Bitcoin, we mean it literally. Every state change produced by the ArchVM is encoded as a Bitcoin transaction, signed by Arch's validator network, and broadcast to the Bitcoin network. There is no internal ledger that "represents" Bitcoin. There is Bitcoin.

## UTXO Anchoring

Arch tracks state through Bitcoin UTXOs. When a user deposits BTC as collateral in Arch Lend, that BTC is held in a real Bitcoin UTXO controlled by Arch's threshold signature scheme. The UTXO is verifiable on-chain by anyone. This is fundamentally different from wrapped or bridged Bitcoin where a custodian holds the real BTC and issues a representation on another chain.

## FROST & ROAST Threshold Signatures

Arch uses FROST (Flexible Round-Optimized Schnorr Threshold) and ROAST (Robust Asynchronous Schnorr Threshold) signature schemes. These allow the validator network to collectively produce a single valid Schnorr signature for Bitcoin transactions without any single validator having access to the full private key.

* **No single point of failure** — key material is distributed across the validator set
* **Taproot-native** — threshold signatures produce standard Schnorr signatures indistinguishable from single-signer transactions on-chain
* **Robust against failures** — ROAST ensures signing completes even if some validators are unresponsive

## DAG-Based Transaction Tracking

Arch uses a directed acyclic graph (DAG) to track the dependency relationships between transactions. This ensures that state transitions are processed in the correct order and that parallel transactions don't create conflicts. The DAG structure also enables efficient rollback when Bitcoin reorgs occur — Arch can identify exactly which state transitions need to be replayed.

## Reorg Handling

Because Arch settles on Bitcoin, it must handle Bitcoin's probabilistic finality. Arch's rollback mechanism monitors the Bitcoin chain for reorgs and can revert and replay affected state transitions. The DAG-based transaction tracking makes this efficient — only the affected subgraph needs to be replayed, not the entire state.

## What This Means for Users

Your Bitcoin is always Bitcoin. Collateral is held in real UTXOs. Trades settle as real Bitcoin transactions. There is no custody risk from bridge operators, no representation risk from wrapped tokens, and no settlement risk from internal ledgers. Arch's infrastructure is invisible — the execution is fast and programmable, but the settlement is pure Bitcoin.

## Related Reading

* [Bitcoin Integration overview](./bitcoin-integration)
* [Cryptographic multisig as smart-contract-controlled wallets](./bitcoin-integration/cryptographic-multisig-as-smart-contract-controlled-wallets)
* [Titan Indexer](./bitcoin-integration/titan-indexer)
