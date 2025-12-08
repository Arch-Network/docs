---
title: Onboarding Guide
---

**Table of Contents:**
- [Arch Node RPC Endpoints]
- [Bitcoin RPC Providers]
- [Web Wallets]
- [Bitcoin Testnet4 Faucet]
- [Runes and Ordinals]
- [Indexers]
- [Explorers]
---

### About

This guide contains the relevant sections for how to connect to the Arch testnet RPC service, obtain testnet funds, and view transaction activity on the Arch block explorer.

The Arch testnet is designed to help builder teams deploy their programs and test dapp functionality on a live network. 

## Arch Node RPC Endpoints

| Provider | URL |
|--------|--------|
| Arch | <http://rpc-01.test.arch.network>
| Maestro | <https://arch-testnet.gomaestro-api.org/v0>

[Maestro] is a leading Web3 infrastructure provider specializing in UTxO-based blockchains, including Bitcoin, Cardano, Dogecoin and Arch. Maestro offers a versatile suite of powerful APIs and advanced developer tools that streamline dApp development, empowering businesses to leverage the full potential of blockchain technology. 

[Sign-up] for an account and consult the [docs] for how to get started using Maestro as your Arch RPC provider.

:::info
While you can rely on the RPC service provided by the Arch team as well as Maestro, there is also an option to run your own RPC node. 

In the spirit of true decentralization, this approach provides the added benefit of resilience; should the other RPC services experience an outage, your dapp (and users) would not be impacted as a result.
:::

## Bitcoin RPC Providers

Arch dapp developers need an active Bitcoin RPC to point to. Builders can either choose to run a Bitcoin node themselves or can choose to connect with a Bitcoin RPC provider to facilitate communication with the Bitcoin network.

**Providers:**
- [Bitcoin RPC API - Maestro]

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

:::tip NOTE
A Twitter account is needed as a spam-protection measure.
:::

## Runes and Ordinals

The following resources are available for runes/ordinals on Bitcoin Testnet4:

- [Ordinals Explorer - Saturn]
- [Inscriptions Indexer API - Maestro]
- [Runes Indexer API - Maestro]

## Indexers

### Arch Network
Should developers need to index the Arch chain, we have open-sourced our rust indexer which can be forked and customized further to fit the needs of your team.

The source code for this indexer can be found in our [arch-rust-indexer] repo.

### Bitcoin
Should developers need to index the Bitcoin chain, the following resources are available for accessing indexed chain data, both mainnet and testnet4.

- [Bitcon Indexer API - Maestro]

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
[Maestro]: https://gomaestro.org
[Sign-up]: https://dashboard.gomaestro.org/login
[docs]: https://docs.gomaestro.org
[Bitcoin RPC API - Maestro]: https://docs.gomaestro.org/bitcoin
[Xverse]: https://www.xverse.app/
[Unisat]: https://unisat.io/
[Leather]: https://leather.io/
[OKX]: https://okx.com
[testnet4 mempool.space faucet]: https://mempool.space/testnet4/faucet
[arch-rust-indexer]: https://github.com/Arch-Network/arch-rust-indexer
[Ordinals Explorer - Saturn]: https://ord-testnet4.saturnbtc.io/
[Inscriptions Indexer API - Maestro]: https://docs.gomaestro.org/bitcoin/api-reference#6kTut
[Runes Indexer API - Maestro]: https://docs.gomaestro.org/bitcoin/api-reference#Kzjqx
[Bitcon Indexer API - Maestro]: https://docs.gomaestro.org/bitcoin/api-reference#TekXe
