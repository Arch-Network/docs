# Onboarding Guide

**Table of Contents:**
- [RPC Endpoints]
- [Bitcoin Testnet4 Faucet]
- [Explorers]
---

### About

This guide contains the relevant sections for how to connect to the Arch testnet RPC service, obtain testnet funds, and view transaction activity on the Arch block explorer.

The Arch testnet is designed to help builder teams deploy their programs and test dapp functionality on a live network. 

## RPC Endpoints

| Provider | URL |
|--------|--------|
| Maestro | <https://arch-testnet.gomaestro-api.org/v0>
| Arch | <https://rpc-01.test.arch.network/> |
| Local | <http://localhost:9001/> |

[Maestro] is a leading Web3 infrastructure provider specializing in UTxO-based blockchains, including Bitcoin, Cardano, Dogecoin and Arch. Maestro offers a versatile suite of powerful APIs and advanced developer tools that streamline dApp development, empowering businesses to leverage the full potential of blockchain technology. 

[Sign-up] for an account and consult the [docs] for how to get started using Maestro as your Arch RPC provider.

:::info
While you can rely on the RPC service provided by the Arch team as well as Maestro, there is also an option to run your own RPC node. 

In the spirit of true decentralization, this approach provides the added benefit of resilience; should the other RPC services experience an outage, your dapp (and users) would not be impacted as a result.
:::

## Bitcoin Testnet4 Faucet

In order to participate in the Arch testnet, testnet4 Bitcoin is required to pay for transactions and be used in dapps as a medium of exchange with swaps, lending protocols, etc.

You can request testnet4 BTC from the [testnet4 mempool.space faucet].

:::tip NOTE
A Twitter account is needed as a spam-protection measure.
:::

## Explorers

The Arch Network explorer is coming soon.

[RPC Endpoints]: #rpc-endpoints
[Bitcoin Testnet4 Faucet]: #bitcoin-testnet4-faucet
[Explorers]: #explorers
[Maestro]: https://gomaestro.org
[Sign-up]: https://dashboard.gomaestro.org/login
[docs]: https://docs.gomaestro.org
[testnet4 mempool.space faucet]: https://mempool.space/testnet4/faucet
