# State Transitions Anchored on Bitcoin

Although state data is only held within the Arch Network, each state transition is anchored with a bitcoin transaction. All transitions and their associated data can be requested from the Arch Network and cryptographically verified. While program results are anchored to Bitcoin via a final transaction that is subject to Bitcoin's block time constraint, the throughput of the Arch Network is not bottlenecked by this same constraint; program execution on Arch is limited only to an Arch validator's hardware capabilities.

The Arch Network maintains real-time state, allowing for Bitcoin transaction chains to be built up within the Bitcoin mempool. Because these unconfirmed Bitcoin transactions are controlled by the Arch Network distributed keys, the network can be confident that double spends will not occur, and that all state transitions will eventually be settled on Bitcoin, providing finality for ultimate security.
