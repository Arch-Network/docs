# Architecture Overview

Arch combines the power of Bitcoin with the speed and execution of Solana. The network is composed of a validator set running a dPoS consensus on top of our novel ArchVM combined with a cutting edge cryptographic multisig — one that uses FROST and ROAST threshold signature schemes that settle directly on Bitcoin. 

Understanding how these components interoperate is critical to understanding how Arch provides a pristine environment to make Bitcoin productive at scale.

Our dPoS consensus offers validators a stake-weighted share of leader node slots and threshold signatures, where leader nodes are responsible for aggregating signature shares from every validator in the network and settling transactions on Bitcoin post-consensus. The ArchVM is an extension of the eBPF virtual machine with embedded syscalls that orchestrate UTXOs directly on the Bitcoin base layer. This results in pure interoperability between Bitcoin and Arch smart contracts, unlocking brand new use cases on Bitcoin, never seen before. Further, our account model supports Taproot addresses, so users never need to leave their Bitcoin wallet to access Arch’s capabilities.

Our Flexible Round-Optimized Schnorr Threshold Signatures (FROST) mean that no transaction is published to Bitcoin without 51%+ of Arch consensus, while our Robust Asynchronous Schnorr Threshold (ROAST) signatures  unlock seamless validator exit and entry in-between epochs. The combination of FROST + ROAST extends Bitcoin’s security and assets to Arch and its integrated applications.

In the following sections, we will lay out each of these components in detail.
