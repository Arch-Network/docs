---
title: How Arch Works
description: From user action to Bitcoin settlement — the end-to-end execution flow on Arch.
---

Arch is not a sidechain, an L2, or a meta-protocol. It is an independent execution and settlement network whose output is native Bitcoin transactions. Here is the end-to-end flow:

## 1. User Action

A user interacts with the Arch product suite — placing a trade on Arch Swap, depositing collateral into Arch Lend, or rebalancing a yield vault. The user signs the action with their existing Bitcoin wallet (Xverse, Unisat, Magic Eden, Ledger) using standard Taproot addresses. No new wallet. No bridging. No wrapped assets.

## 2. ArchVM Execution

The signed action enters the ArchVM — Arch's execution environment built on eBPF with custom syscalls designed for UTXO management. The VM processes the transaction deterministically: it reads the relevant Bitcoin UTXOs, executes the program logic (the trade, the loan, the liquidation), and computes the resulting state changes. The output of this execution is not an internal ledger update — it is a set of Bitcoin transactions that encode the new state.

## 3. Transaction Construction

The ArchVM constructs native Bitcoin transactions that reflect the execution output. If a user borrowed stablecoins against BTC collateral, the VM constructs the Bitcoin transaction that locks the collateral into the appropriate UTXO. If a liquidation triggered, it constructs the transaction that moves collateral to the liquidator. Every state change becomes a Bitcoin transaction.

## 4. Validator Consensus & Threshold Signing

The constructed Bitcoin transactions are presented to Arch's validator network. Validators run stake-weighted delegated proof-of-stake (dPoS) consensus with 300ms block finality. Once consensus is reached, validators collectively sign the Bitcoin transactions using FROST and ROAST threshold signature schemes. No single validator can sign a transaction alone — it requires a threshold of the validator set to produce a valid signature.

## 5. Bitcoin Settlement

The signed Bitcoin transactions are broadcast to the Bitcoin network and settle on the base layer. Collateral is held in real Bitcoin UTXOs. Trades settle as real Bitcoin transactions. There is no intermediary ledger, no IOU, no wrapped representation. The execution happened on Arch. The settlement happened on Bitcoin.

## Why This Matters

This architecture means Arch's execution output is indistinguishable from any other Bitcoin transaction. Collateral held by Arch Lend is verifiable on-chain. Trades executed on Arch Swap settle to Bitcoin UTXOs. The entire financial product suite operates with Bitcoin-native settlement finality, which is what makes institutional-grade risk infrastructure possible.
