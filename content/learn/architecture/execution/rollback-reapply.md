---
title: Rollback/Reapply
---

Building on our pre-confirmation system, Arch implements a sophisticated rollback and reapply mechanism to maintain state consistency between Bitcoin's finality model and Arch's high-performance execution environment. This architecture uses the DAG Graph to track transaction dependencies, enabling deterministic handling of cross-chain inconsistencies.


### Rollback Process

When Bitcoin-anchored transactions fail to confirm (due to mempool eviction, chain reorganizations, or transaction drops), Arch initiates a rollback:



1. Graph Construction: Starting from the failed transaction, the system walks backward to gather dependencies and forward to identify affected children
2. Validation: Confirms anchoring status of each transaction, excluding previously rolled-back nodes
3. Recursive Execution: Traverses and marks all affected transactions, applying rollbacks in dependency-aware order

Importantly, this process operates with transaction-level granularity, allowing the system to roll back specific transaction chains without disrupting the entire network.


### Reapply Process

When previously failed transactions eventually confirm on Bitcoin:



1. Graph Rebuild: Starting with the reapply candidate, the system rebuilds dependencies and forward-traverses to include affected children
2. Topological Execution: Ensures dependencies execute in the correct order


### Developer Benefits

This mechanism automatically manages the complexities of Bitcoin's probabilistic finality while preserving Arch's high-performance capabilities. Developers gain:



* Clean application logic without Bitcoin-specific error handling
* Transaction consistency regardless of Bitcoin confirmation delays
* Graceful handling of chain reorganizations
* The security guarantees of Bitcoin with responsive performance

The rollback/reapply architecture allows developers to build confidently on Bitcoin without sacrificing reliability or user experience, even under volatile network conditions.
