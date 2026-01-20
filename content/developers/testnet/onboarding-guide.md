---
title: Onboarding Guide
---
<!-- markdownlint-disable MD033 -->

**Table of Contents:**

- [Arch Node RPC Endpoints]
- [Bitcoin RPC Providers]
- [Web Wallets]
- [Bitcoin Testnet4 Faucet]
- [Runes and Ordinals]
- [Indexers]
- [Explorers]

---

## About

This guide contains the relevant sections for how to connect to the Arch testnet RPC service, obtain testnet funds, and view transaction activity on the Arch block explorer.

The Arch testnet is designed to help builder teams deploy their programs and test dapp functionality on a live network.

## Arch Node RPC Endpoints

| Provider | URL                                |
| -------- | ---------------------------------- |
| Arch     | <https://rpc.testnet.arch.network> |

**Arch Explorer (Indexer) API:**

- [Arch Explorer Developer Portal]
- [Arch Explorer API Documentation]

<Tip>
While you can rely on the RPC service provided by the Arch team, there is also an option to run your own RPC node.

In the spirit of true decentralization, this approach provides the added benefit of resilience; should the other RPC services experience an outage, your dapp (and users) would not be impacted as a result.
</Tip>

## Bitcoin RPC Providers

Arch dapp developers need an active Bitcoin RPC to point to. Builders can either choose to run a Bitcoin node themselves or can choose to connect with a Bitcoin RPC provider to facilitate communication with the Bitcoin network.

## Web Wallets

Arch is compatible with Bitcoin testnet4.

The following wallets currently support testnet4:

- [Xverse]
- [Unisat]
- [Leather]
- [OKX]

## Bitcoin Testnet4 Faucet

In order to participate in the Arch testnet, testnet4 Bitcoin is required to pay for transactions and be used in dapps as a medium of exchange with swaps, lending protocols, etc.

You can request testnet4 BTC from the [testnet4 mempool.space faucet].

<Tip>
**NOTE:** A Twitter account is needed as a spam-protection measure.
</Tip>

## Runes and Ordinals

The following resources are available for runes/ordinals on Bitcoin Testnet4:

## Indexers

### Arch Network

For indexed views over Arch blocks, transactions, programs, tokens, accounts, and network stats, use the Arch Explorer API:

- [Arch Explorer Developer Portal]
- [Arch Explorer API Documentation]

### Bitcoin

Should developers need to index the Bitcoin chain, the following resources are available for accessing indexed chain data, both mainnet and testnet4.

## Explorers

The Arch Network explorer is coming soon.

<!-- Internal -->
[Arch Node RPC Endpoints]: #arch-node-rpc-endpoints
[Bitcoin RPC Providers]: #bitcoin-rpc-providers
[Web Wallets]: #web-wallets
[Bitcoin Testnet4 Faucet]: #bitcoin-testnet4-faucet
[Runes and Ordinals]: #runes-and-ordinals
[Indexers]: #indexers
[Explorers]: #explorers

<!-- External -->
[Xverse]: https://www.xverse.app/
[Unisat]: https://unisat.io/
[Leather]: https://leather.io/
[OKX]: https://okx.com
[testnet4 mempool.space faucet]: https://mempool.space/testnet4/faucet

[Arch Explorer Developer Portal]: https://explorer-beta.test.arch.network/dev
[Arch Explorer API Documentation]: https://explorer-beta.test.arch.network/docs
