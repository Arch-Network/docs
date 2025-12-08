---
title: The Challenges Facing Bitcoin DeFi
---

Bitcoin has unparalleled security and liquidity but historically-limited programmability that has restricted its utility for DeFi and other use cases. It has no native execution environment and a limited scripting language incapable of supporting state changes and asset transfers, the core components of Turing-complete smart contracts native to blockchains like [Ethereum] and [Solana].

Recent solutions have attempted to add greater programmability to Bitcoin, including non-fungible and fungible token standards such as Ordinals, BRC-20, and Runes. However, those solutions have all had significant limitations due to the core infrastructure challenges of building on DeFi, including …
​
### Reliance on the UTXO model

The [UTXO] (Unspent Transaction Output) model on Bitcoin is fundamentally different from the account-based model used by other blockchains like Ethereum, which are more suited to smart contracts. In the UTXO model, each transaction output can only be spent once, and transactions must reference specific outputs, making it challenging to manage complex, stateful applications required for DeFi.

This model doesn't naturally support the execution of multi-step transactions, pooling of funds, or the creation of smart contracts that require continuous interaction with multiple parties. As a result, implementing features like decentralized exchanges, lending protocols, or automated market makers on Bitcoin requires workarounds or off-chain solutions, complicating the development and reducing the flexibility of Bitcoin-based DeFi applications.
​
### Inability to create native fungible tokens

Bitcoin lacks the native ability to create, transfer, and interact with tokens that represent various assets, such as stablecoins, synthetic assets, or governance tokens, which are essential for most DeFi applications. In ecosystems like Ethereum, standards like [ERC-20] provide a uniform set of rules for creating and managing fungible tokens, enabling seamless integration across decentralized exchanges, lending platforms, and yield farming protocols.

This absence of standardized tokens on Bitcoin means that DeFi developers have to rely on less efficient or centralized solutions, such as wrapped tokens on other blockchains, which undermines the decentralization and security principles that Bitcoin is known for.
​
### Fragmented solutions restrict access to deep liquidity

While various L2s and meta-protocols may offer ways to build more complex applications on top of Bitcoin, assets transferred onto these protocols through bridging aren’t able to communicate with each other programmatically on the base layer. They lack the necessary interoperability components for multi-party contracts and cross-program invocation as seen on platforms like Ethereum and Solana.

This fragmentation leads to lower liquidity as different platforms and protocols may not easily interoperate, making it harder to aggregate liquidity across multiple sources — the types of deep liquidity sources needed to operate more complex DeFi instruments like lending markets and derivatives trading.

[Ethereum]: https://ethereum.org/
[Solana]: https://solana.com/
[UTXO]: https://learnmeabitcoin.com/technical/transaction/utxo/
[ERC-20]: https://github.com/ethereum/ercs/blob/master/ERCS/erc-20.md
