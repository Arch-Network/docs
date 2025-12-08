---
title: Overview
---

Arch is an execution platform that unlocks DeFi with full Turing-complete smart contract functionality without compromising the liquidity and security of the Bitcoin base layer, thanks to its trust-minimized and decentralized architecture. It maintains block consensus and transaction data availability on the Bitcoin base layer and allows for greater interoperability between L2s and metaprotocols that invoke smart contracts through it. 

Arch uses a specialized VM to perform complex computation combined with a Decentralized Verifier Network and a FROST + ROAST signature scheme to enable trust-minimized and programmable multisigs.

Arch builds upon the foundational pillars for creating a vibrant ecosystem directly on Bitcoin — smart contract programmability and trust-minimized interoperability — paving the way for a new wave of dApps and protocols on Bitcoin's base layer. 

The Arch VM

The Arch VM represents an eBPF virtual machine. Each validator node in the Arch verifier network executes transactions asynchronously alongside other validator nodes in the network. The results of these computations are shared with Arch's leader node- a rotating role granted to one of the nodes in the verifier network as a result of a periodic election- who is responsible for collating the results and submitting a Bitcoin transaction with the signed UTXOs, thus completing the loop and anchoring the changes back on Bitcoin.

The Arch Decentralized Verifier Network

The Arch verifier network is designed to be permissionless, aligning with Bitcoin's core principles of decentralization and openness. This means that anyone can participate in the network as a validator, contributing to the validation of transactions on Arch. By leveraging a permissionless verifier network, Arch maintains the trustless environment characteristic of Bitcoin, allowing for broad participation in the ecosystem's security and verification processes.

The asset transfers and state changes all happen on Bitcoin L1 on a per-transaction basis, in accordance with Bitcoin's block time.

Developers can build diverse applications and protocols on Arch Network, powered by Arch's turing complete smart contracts. 

[eBPF]: https://ebpf.io
