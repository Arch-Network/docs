---
title: History of Bitcoin Programmability
---

Bitcoin has grown to become a more than trillion-dollar asset since its inception as the first decentralized peer-to-peer electronic cash system proposed in the [Bitcoin whitepaper] (2008). Currently, it is about triple the size of [Ethereum], the next largest-blockchain, with all others representing a mere fraction of the total blockchain asset market. 

The sheer scope of Bitcoin adoption gives it unparalleled liquidity and security compared to other blockchains. Yet despite those advantages, its functionality has been relatively confined to digital currency for a number of reasons, including its …

- **Limited Scripting Language:** Bitcoin's scripting language, [Script], is intentionally limited in its capabilities to ensure security and simplicity. It lacks the Turing completeness found in languages used by platforms like Ethereum, which restricts the types of logic and conditions that can be executed in Bitcoin smart contracts.

- **Data and State Storage:** Bitcoin's blockchain is optimized for storing transaction data rather than the state information required by complex smart contracts. The lack of statefulness in Bitcoin's design makes it challenging to implement dynamic smart contracts that can interact and update according to varying conditions.

- **Execution Environment:** Bitcoin does not have a native execution environment that can run complex smart contracts. Platforms that support advanced dApps, like Ethereum, have a Virtual Machine (EVM) that provides a controlled environment for executing smart contracts.

For these reasons, most innovations in blockchain programmability have occurred on other chains over the past decade, namely, Ethereum. However, Bitcoin has increasingly proven its core promises of security and decentralization, while adding significant upgrades that are now paving the way for builders to add programmability. 

The introduction of Segregated Witnesses ([SegWit]) in 2017 increased Bitcoin’s block size limit, while the Taproot upgrade in 2021 made it possible to batch signatures for validation, making it easier and faster to process transactions (unlocking atomic swaps, multi-signature wallets, and conditional payments). In 2022, developer Casey Rodarmor proposed his “[Ordinal Theory],” outlining a numbering scheme for satoshis that can place arbitrary data such as images, texts, and games onto Bitcoin transactions, forming the foundation for fully onchain NFTs on Bitcoin.

The innovation of ordinals expands Bitcoin’s utility to grow from a financial ledger into a fully functioning data ledger, with expanded data availability that opens up new possibilities for embedding state information and metadata directly on-chain, crucial for applications like smart contracts that require accessible and verifiable state data. 

These developments have further enhanced the future of Bitcoin programmability, setting the stage for a new wave of decentralized applications to be built on the world’s most valuable blockchain.

[Bitcoin whitepaper]: https://bitcoin.org/bitcoin.pdf
[Ethereum]: https://ethereum.org
[Script]: https://learnmeabitcoin.com/technical/script/
[SegWit]: https://learnmeabitcoin.com/beginners/guide/segwit/
[Ordinal Theory]: https://github.com/ordinals/ord/pull/117/files
