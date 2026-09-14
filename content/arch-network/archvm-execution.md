---
title: ArchVM & Execution
description: A deep dive on the ArchVM — UTXO-aware execution purpose-built for Bitcoin financial operations.
---

The ArchVM is Arch's execution environment — an eBPF-based virtual machine with custom syscalls designed specifically to orchestrate Bitcoin UTXOs. Unlike general-purpose VMs (EVM, SVM), the ArchVM is purpose-built to construct, validate, and manage Bitcoin transactions as the direct output of program execution.

## eBPF Runtime

The ArchVM uses extended Berkeley Packet Filter (eBPF) as its instruction set. eBPF is a proven, sandboxed execution model used in production systems at scale (Linux kernel, network infrastructure). It provides deterministic execution with bounded resource consumption — programs cannot loop infinitely or consume unbounded memory. This determinism is critical for financial operations where execution outcomes must be predictable.

## UTXO-Aware Syscalls

The ArchVM extends eBPF with custom system calls that interact directly with Bitcoin's UTXO set. Programs running on Arch can:

* Read the current state of specific Bitcoin UTXOs
* Construct new Bitcoin transactions that spend or create UTXOs
* Verify signatures and validate transaction conditions
* Manage multi-party collateral arrangements (lending, escrow, vaults)
* Execute atomic multi-step operations (trade + settle, borrow + lock collateral)

This is what makes Arch fundamentally different from EVM-based chains that use wrapped Bitcoin or bridge-locked tokens. Arch programs operate on real Bitcoin UTXOs — the execution output is a real Bitcoin transaction.

## Solana-Compatible Programming Model

The ArchVM supports programs written in Rust using the Anchor framework. Developers familiar with Solana's account model and instruction pattern will find the programming interface familiar. The Satellite framework provides migration tooling for porting existing Anchor programs. See the [For Solana Developers](/developers/for-solana-developers) guide for details.

## How It Connects

When Arch Lend executes a liquidation, the ArchVM reads the collateral UTXO, computes the liquidation, constructs the Bitcoin transaction that moves the collateral, and passes it to validators for threshold signing. The entire process — from trigger to signed Bitcoin transaction — completes in under 300ms. This is the execution layer that makes deterministic financial infrastructure on Bitcoin possible.

## Related Reading

* [Execution overview](./execution)
* [ArchVM and Runtime](./execution/archvm-and-runtime)
* [DAG transaction dependency graph](./execution/dag-transaction-dependency-graph)
* [Rollback and reapply](./execution/rollback-reapply)
