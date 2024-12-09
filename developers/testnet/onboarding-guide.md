# Onboarding Guide

**Table of Contents:**
- [Arch Node RPC Endpoints]
- [Bitcoin RPC Providers]
- [Web Wallets]
- [Bitcoin Testnet4 Faucet]
- [Indexers]
- [Explorers]
---

### About

This guide contains the relevant sections for how to connect to the Arch testnet RPC service, obtain testnet funds, and view transaction activity on the Arch block explorer.

The Arch testnet is designed to help builder teams deploy their programs and test dapp functionality on a live network. 

## Arch Node RPC Endpoints

| Provider | URL |
|--------|--------|
| Maestro | <https://arch-testnet.gomaestro-api.org/v0>

[Maestro] is a leading Web3 infrastructure provider specializing in UTxO-based blockchains, including Bitcoin, Cardano, Dogecoin and Arch. Maestro offers a versatile suite of powerful APIs and advanced developer tools that streamline dApp development, empowering businesses to leverage the full potential of blockchain technology. 

[Sign-up] for an account and consult the [docs] for how to get started using Maestro as your Arch RPC provider.

:::info
While you can rely on the RPC service provided by the Arch team as well as Maestro, there is also an option to run your own RPC node. 

In the spirit of true decentralization, this approach provides the added benefit of resilience; should the other RPC services experience an outage, your dapp (and users) would not be impacted as a result.
:::

## Bitcoin RPC Providers

Arch dapp developers need an active Bitcoin RPC to point to. Builders can either choose to run a Bitcoin node themselves or should connect with a Bitcoin RPC provider to facilitate communication with the Bitcoin network.

**Providers:**

- [Maestro BTC RPC]

## Web Wallets
Arch is compatible with Bitcoin testnet4.

The following wallets currently support testnet4:
- [Xverse](https://www.xverse.app/)
- [Unisat](https://unisat.io/)

_Additional wallets coming soon._

## Bitcoin Testnet4 Faucet

In order to participate in the Arch testnet, testnet4 Bitcoin is required to pay for transactions and be used in dapps as a medium of exchange with swaps, lending protocols, etc.

You can request testnet4 BTC from the [testnet4 mempool.space faucet].

:::tip NOTE
A Twitter account is needed as a spam-protection measure.
:::

## Indexers

Should developers need to index the Arch chain, we have open-sourced our rust indexer which can be forked and customized further to fit the needs of your team.

The source code for this indexer can be found in our [arch-rust-indexer] repo.

## Explorers

The Arch Network explorer is coming soon.

<!-- Internal -->
[Arch Node RPC Endpoints]: #arch-node-rpc-endpoints
[Bitcoin RPC Providers]: #bitcoin-rpc-providers
[Bitcoin Testnet4 Faucet]: #bitcoin-testnet4-faucet
[Indexers]: #indexers
[Explorers]: #explorers

<!-- External -->
[Maestro]: https://gomaestro.org
[Sign-up]: https://dashboard.gomaestro.org/login
[docs]: https://docs.gomaestro.org
[Maestro BTC RPC]: https://docs.gomaestro.org/bitcoin
[testnet4 mempool.space faucet]: https://mempool.space/testnet4/faucet
[arch-rust-indexer]: https://github.com/Arch-Network/arch-rust-indexer
