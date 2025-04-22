## Enabling Bitcoin Pre-Confirmations

The DAG-based Transaction Dependency Graph and Rollback/Reapply Mechanism enable Arch to implement pre-confirmations to overcome Bitcoin's inherent slowness without compromising security. 


## Consensus and Finality



1. Once consensus is reached on a block, all transactions in the DAG that are part of that block are preconfirmed on Arch
1. Selected transactions are anchored to Bitcoin according to their requirements
2. The indexer monitors Bitcoin for confirmations and reorganizations
3. The rollback/reapply mechanism maintains state consistency if Bitcoin state changes

Instead of waiting for full Bitcoin block confirmations —which create poor user experiences and limit DeFi liquidity flow — Arch provides "soft-confirmations" that allow applications to proceed immediately as if transactions will be included in the next Bitcoin block. 

By chaining state transitions together, Arch guarantees state consistency between Bitcoin and Arch. The rollback mechanism can reverse state transitions on Arch if a transaction gets evicted from the mempool or experiences a reorg on Bitcoin. 

Crucially, Arch can perform these rollbacks with single-transaction granularity, meaning only affected transactions need reversal rather than the entire network, maintaining system stability while enabling much faster transaction processing.
