---
title: FAQ
---

The following details frequently asked questions from our developer community.

:::info NOTE
This section will be continually updated as new questions are received. Check back in regularly to ensure you are staying up-to-date!
:::

**Q: How do developers and businesses get involved with Arch Network, and what resources and support are available to them?**

A: We have a builders application form found on our [website](https://arch.network); interested developers can also join our [Discord](https://discord.gg/archnetwork), follow us on [X](https://x.com/archntwrk), read our developer [docs](https://docs.arch.network) and clone our [repositories](https://github.com/arch-network) to begin tinkering with contract development and learning more about the architecture.

​https://0chrcuqp28m.typeform.com/to/fTaRfve6

**Q: What are the key innovations and values Arch Network plans to bring to the market to stand out from the rest in the early development stage?**

A: We are leveraging a multisig with key ownership distributed amongst the Arch validators and secured using threshold-signatures schemes, notably: **FROST** (Flexible Round-Optimized Schnorr Threshold) used in conjunction with **ROAST** (Robust Asynchronous Schnorr Threshold Signatures) to facilitate communication between the signing parties.

More can be read about these decisions here: https://medium.com/arch-network/a-deep-dive-into-multisig-architecture-on-arch-8ee47f5e20dc​

**Q: Where can I find the onboarding documentation for examples and the SDK?**

A. We recommend developers read [The Arch Book](https://book.arch.network) to get started developing on Arch Network.

**Q: How does the validation process work in Arch Network?**

A: There is a network of validators. Each validator within the Arch Network controls a share in the network's distributed signing key (the multi-sig).  Every validator validates and processes transactions; the leader handles the block proposal and ROAST protocol.

The leader receives the [RuntimeTransaction](https://book.arch.network/sdk/runtime-transaction.html) and proposes a new block to the other network participants. The validators execute the transaction in parallel and provide signatures for the transaction(s) as well as the block; these outputs (execution receipts, program data, and completed state transitions) are then shared back to the leader. After enough signatures have been collected (ie, a threshold has been met), the leader then submits a fully signed Bitcoin transaction to the Bitcoin network.

**Q: What is the simplest configuration for local testing and which NETWORK mode should we use?**

A: We recommend starting with the [arch-cli](https://github.com/arch-network/arch-cli).

**Q: Who are the validator nodes?**

A: Currently, there are about 25 validators onboarded into the testnet, all commercial validators with significant staked assets. More validators will be onboarded until the network becomes permissionless.

**Q: How is Arch different than an L2?**

A: See [Bitcoin Native vs. L2s & Metaprotocols](../learn/ecosystem/bitcoin-native-vs-l2-metaprotocols.md).

**Q: Is the network PoW or PoS?**

A: The network is PoS. Nodes stake tokens as economic security and face slashing risks for malicious actions or downtime. Validators are incentivized with tokens for validating transactions.

**Q: What is the multisig architecture all about?**

A: https://medium.com/arch-network/a-deep-dive-into-multisig-architecture-on-arch-8ee47f5e20dc​

**Q: How is concurrency handled with state UTXOs?**

A: Concurrency issues are managed on the backend, with nodes tracking UTXOs containing the latest states, ensuring users (and contract devs) not needing to worry about it.

**Q: Where does the contract live?**

A: The program logic (bytecode) and storage (state) lives in a key-value database within every validator node in the network. See [accounts](https://book.arch.network/program/account.html) for more information.

**Q: What is the transaction finalization speed on the network?**

A: A soft confirmation is provided near instantaneously (<1 second), but finalization depends on Bitcoin block confirmations. Transactions are chainable in the mempool, so throughput isn't limited by Bitcoin block time. 

> Note:
>
> Proper benchmarking is still needed to provide a factual chart of soft confirmation times.

Since all of these transactions are ultimately controlled by the Arch Network distributed key, Arch can be sure that double spends on its state transactions will not happen.

If a double spend on a payment UTXO occurs then that chain of transactions would simply revert.

Someone who is waiting to offer external service or goods in exchange for Bitcoin still needs to wait for Bitcoin confirmations. But for native asset and state exchange the throughput is limited only by the speed of execution of the network, which will all eventually resolve to an onchain Bitcoin transaction.

**Q: How often does the network settle the state on Bitcoin?**

A: The network settles transactions immediately after execution, but they are subject to Bitcoin block time delays.

**Q: How does Arch write state to Bitcoin- is it incremental or is it the full state at any point in time?**

A: Arch will update only the state UTXOs that are used (modified) in the execution of a program call.

A user can provide a list of UTXOs to the program and the program can also have its own list of UTXOs.  Over the course of its execution, the program can update the state contained in any of those UTXOs (not the UTXO itself, but a shadow copy).  After execution completes, UTXOs that should have changes will be submitted to the blockchain.  The existing UTXOs will be used as inputs (thereby spending them) and new UTXOs will be created that hold the updated state.

**Q: What will be the utility of the Arch token on the Arch ecosystem when launched?**

A: The Arch token will be used for gas within the Arch Network as well as will serve as the token that validators will stake behind their Arch nodes. The Arch token will not be needed by developers- nor will it be required for end users of DApps- to deploy programs or otherwise interact with these programs (ie, send transactions).

**Q: Do programs deployed via Arch require a separate gas token?**

A: No, programs are deployed and interacted with via Bitcoin, therefore no additional token is necessary as a either a developer or a user when deploying or otherwise interacting with programs deployed via Arch.

**Q: How is gas paid for in the network?**

A: Gas is paid in Arch. It can also be paid in Bitcoin if the user does not hold Arch as it will be auto-converted on the backend.

**Q: How does a user obtain Arch tokens?**

A: Arch tokens can be obtained via an upcoming airdrop as well as the TGE (Token Generation Event; date: TBD; likely Q1, 2025).

**Q: Will Arch network work like Babylon chain, and if not what makes it stand out?**

A: Babylon exists to solve a different purpose and is more closely related to projects like [EigenLayer](https://www.eigenlayer.xyz/) whereby Bitcoin is staked and then applied towards a shared security model like in other PoS networks (ie, Cosmos) to earn yield.

**Q: How will my Bitcoin appear within Arch Network?**

A: Your Bitcoin (UTXOs) get stored within the Arch Network multisigs, which is something managed by the program and therefore can be indexed by the block explorer, or the app it is participating in.

**Q: What are the main problems you plan to solve with Arch Network at the initial stage?**

A: The main problem is that most Bitcoin is idle; Arch allows for this idle Bitcoin to be leveraged so that additional value can be created as a result.

**Q: How does Arch Network plan to engage and support its community at the initial stages of development?**

A: Hackathons, AMAs, Twitter Spaces, loyalty programs, dedicated Telegram channels between projects-our dev team; we’re working on having more developer resources as well.

**Q: How can the stability of Arch Network transaction fees be ensured under the fluctuation of Bitcoin mainnet transaction fees?**

A: Layer 1 fees can impact the transaction fees to settle back on Bitcoin accordingly. Therefore, it can be expensive during periods of high demand.

**Q: Which oracle can be used for a price feed in Rust?**

A: We do not have a decentralized oracle that is live yet. As a workaround, you can poll data from multiple APIs, take the average and then sign that for use within your dapps.

**Q: How does Arch Network stay in-sync with the Bitcoin Network (blocktime)?**

A: Arch validators also run Bitcoin full nodes. In this way, they are kept in-sync with the Bitcoin network and ensure that there is no stale data when an Arch transaction is posted back to Bitcoin.

**Q: When a user calls a function that includes a PSBT, how does Arch ensure that a malicious validator doesn't steal the funds within the UTXO?**

A: The transaction gets constructed by the dApp with the terms set (and signed) by the user. It then gets sent directly to Arch for second signing (of buying counterparty), validation, execution, etc. The ownership transfer between user and counterparty occurs once the now fully-signed Bitcoin transaction gets processed on Bitcoin.
