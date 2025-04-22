# Consensus

Arch's consensus is powered by Arch's native token using a dPoS model for block production and threshold key distribution. The network state and activity is propagated across nodes via the [GossipSub protocol](https://github.com/libp2p/specs/tree/master/pubsub/gossipsub), ensuring that all validators receive updates in a decentralized and fault-tolerant manner. Leveraging FROST + ROAST, Arch comes to consensus on new user-submitted Bitcoin UTXOs and settles them directly on Bitcoin with our cryptographic multi-sig architecture.

![Arch Consensus Overview](/consensus.png)

## Block Production

### Leader Selection

The block production process in our dPoS consensus begins with leader selection, which operates on a predetermined schedule for each epoch or fixed time period. Leaders are strategically selected based on their stake weight in the network, creating a deterministic schedule that's transparent and known to all participating validators. To maintain system reliability, multiple backup leaders are designated for each slot, providing essential fault tolerance should the primary leader fail to produce a block within the allocated time frame.

### Transaction Collection and Verification

When a validator assumes the leadership role, they immediately begin the transaction collection and verification phase. During this critical stage, the leader gathers all pending transactions from the mempool—the network's temporary storage for unconfirmed transactions. Each transaction undergoes rigorous verification, with the leader checking signature validity and ensuring all transactions adhere to the protocol's rules. Once verified, transactions are ordered based on first in first out, enabling fair inclusion in the upcoming block.

### Block Formation

The final stage involves block formation, where the leader assembles a comprehensive block structure that serves as an immutable record in the blockchain. This structure contains several essential components: a reference to the previous block to maintain chain continuity, a precise timestamp documenting when the block was created, and a list of transaction IDs that were included in the block.

## Consensus Process

### Block Validation

When validators receive a new block, they engage in a comprehensive validation process to ensure network integrity. First, they verify that the block producer is indeed the designated leader according to the predetermined schedule, preventing unauthorized block creation. Next, validators perform block format verification, timestamp validity and meticulously validate all transaction signatures within the block to confirm their authenticity and prevent forgery. They then execute each transaction and verify the resulting UTXO states, ensuring that all state transitions follow protocol rules and maintain data consistency across the network. Validators then sign each block hash and all resulting bitcoin transactions using their secret key shares and broadcast them over the network for aggregation. Finally, a signature from the network's pubkey on the block hash makes the block finalized.

### UTXO-based State Management

Arch's unique approach to state management leverages Bitcoin's UTXO model while extending it for smart contract functionality. The system begins with rigorous UTXO validation, verifying each UTXO's existence on Bitcoin and preventing double-spending attempts. State updates are handled with precision, ensuring atomic state transitions on Arch and Bitcoin asset transfers, with sophisticated reorg handling through rollbacks when necessary.

### FROST Signing Process

The FROST signing process implements a sophisticated threshold signature scheme that distributes trust across multiple validators. Each validator generates their partial signature using their unique secret key share, contributing to the collective security of the network. These partial signatures are then shared among the threshold group, creating a collaborative verification environment where no single entity controls the entire signing process. The system aggregates these partial signatures into a final consolidated signature that represents the distributed consensus of the participating validators. Before acceptance, this aggregated signature undergoes verification against the group public key, ensuring that it is valid, thereby enabling secure transaction validation without requiring trust in any single validator.

[Learn more about FROST →](./frost)

### ROAST Enhancement Layer

ROAST transforms FROST into a production-ready consensus mechanism by adding crucial enhancements for real-world deployment. It provides asynchronous operation guarantees, allowing validators to participate in signing rounds without tight timing constraints. The protocol progresses even when some validators are temporarily delayed or when network conditions are suboptimal. The system implements Byzantine Fault Tolerance, maintaining safety and liveness even in the presence of malicious actors by tolerating up to *f* Byzantine validators where *f < n * 49/100*, detecting and isolating malicious behavior, and excluding signature shares from Byzantine validators. The leader rotation mechanism deterministically selects leaders based on stake weight and randomness, automatically rotates them to prevent centralization, and provides backup leaders for fault tolerance.

[Learn more about ROAST →](./roast)

### Liveness Guarantees

ROAST ensures the network continues to make progress through several sophisticated mechanisms that work in concert. The view synchronization component ensures validators maintain a consistent view of network state with recovery procedures for missed blocks and automatic resynchronization if validators fail. Failure recovery systems provide automatic detection of failed validators, seamless transition to backup leaders, recovery from temporary network failures, and rejoining procedures for validators that fall behind. Progress conditions guarantee block finalization when sufficient honest validators participate, ensuring no single validator can prevent progress while maintaining continued operation during validator churn. Deadlock prevention strategies eliminate waiting for specific validators, implement timeout mechanisms for unresponsive participants, and dynamically adjust protocol parameters to maintain network momentum under varying conditions.

### Instant Finality

Once consensus is achieved, the network either has a valid signature or it doesn't, resulting in instant finality that doesn't allow the chain to fork. 