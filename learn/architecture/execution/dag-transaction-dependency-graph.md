# DAG Transaction Dependency Graph

Unlike traditional blockchain systems with linear transaction processing, Arch Network employs a transaction specific Directed Acyclic Graph (DAG) structure. This approach enables more efficient parallelization, precise dependency tracking, and sophisticated state management when interacting with Bitcoin.

### DAG Structure

The transaction graph in Arch Network consists of:

* Nodes: Individual transactions in the Arch network
* Edges: Dependencies between transactions, representing transactions that operate on the same accounts

Each transaction in the graph is represented by a structure that maintains:

* Previous transactions: direct dependencies that were processed first
* Next transactions: txs that depend on the current transaction
* Current node state: 
    * Anchored on Bitcoin or State-only (Arch only, no Bitcoin anchoring).
    * Rolled back or Not Rolled back

This graph structure allows the system to maintain a complete picture of transaction relationships, which is crucial for handling complex potential state inconsistencies.

When a transaction fails, the system can precisely identify which other transactions are affected, allowing Arch to rollback only affected transactions. 

## Example DAG Flow

<div style="float: right; margin-left: 20px;">
  <img src="/arch-dag.png" alt="Arch DAG Transaction Flow" width="400"/>
</div>

In this example:

* T1 is anchored to Bitcoin (confirmed) and initiates the transaction flow
* T2 and T3 depend on T1's state changes:
    * T2 might update an account based on T1's result
    * T3 represents a state-only operation that depends on T1
* T4 depends on T2, while T5 depends on T3, and are also anchored to Bitcoin
* T6 depends on both T4 and T5, requiring both to be valid for it to execute

State flow:

* When T1 confirms on Bitcoin:
    * State changes are committed
    * T2 and T3 become unlocked for execution
* If T5's anchoring fails:
    * T5's state changes get rolled back
    * T6 cannot proceed
    * T3's state-only changes remain valid

Recovery Situation:

* If T1's Bitcoin tx gets reorg'd:
    * All dependent txs are rolled back (T2-T6)
* If T5's Bitcoin anchoring fails:
    * Only T5 and T6 are affected
    * T2->T4 path remains valid