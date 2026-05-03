---
title: For Solana Developers
description: A migration guide for Solana developers — port your Anchor programs to Bitcoin via Arch's Satellite framework.
---

If you've built on Solana using Anchor, you already know most of what you need to build on Arch. The ArchVM runtime is Solana-compatible, and Arch's Satellite framework lets you port existing Anchor programs to Bitcoin with minimal changes.

## What's the Same

* Rust-based programs using the Anchor framework
* Account model structure — programs, accounts, and instructions map directly
* Familiar tooling — build, test, and deploy workflows will feel natural
* Program Derived Addresses (PDAs) work the same way

## What's Different

* **Settlement is on Bitcoin** — execution output is native Bitcoin transactions, not Solana transactions
* **UTXO-aware execution** — the ArchVM manages Bitcoin UTXOs directly, which affects how state is handled
* **Threshold signatures** — transactions are signed by validators using FROST/ROAST, not single-signer
* **No token program** — Arch works with native BTC and Runes, not SPL tokens

## Satellite Framework

Satellite is Arch's migration framework for Solana developers. It provides compatibility layers that let you take an existing Anchor program and deploy it on Arch with minimal modifications:

1. Install the Satellite CLI alongside your existing Anchor project
2. Update your program's dependencies to use Arch's SDK instead of Solana's
3. Adjust UTXO-specific logic (Satellite provides helpers for common patterns)
4. Build and deploy to Arch's testnet

For detailed migration steps, code examples, and common patterns, see the Satellite Framework documentation.

## Getting Started

The fastest path is to start with the Satellite quickstart template, which includes a working Anchor-to-Arch example program. From there, consult the [Architecture Overview](/learn/architecture/overview) for how Arch's runtime differs from Solana's, and the [Developers section](/developers/overview) for Arch-specific APIs and tooling.

## Related Reading

* [ArchVM & Execution](/learn/architecture/archvm-execution)
* [Bitcoin Settlement](/learn/architecture/bitcoin-settlement)
* [How Arch Works](/learn/architecture/how-arch-works)
