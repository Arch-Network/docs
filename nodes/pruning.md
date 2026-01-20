# Node Pruning

## What Is Blockchain Pruning?

Blockchain pruning refers to the process of reducing a node's local storage requirements by deleting older transactional data after it has been validated and incorporated into the network's state. Unlike archival nodes that store the entire transaction history, pruned nodes retain only the metadata and cryptographic proofs necessary to verify new transactions. This approach maintains the blockchain's core property of immutability while optimizing resource usage.

## Benefits of Pruning

**Storage Efficiency**: Reduces node storage requirements from terabytes to ~5GB in Bitcoin's case
**Increased Participation**: Lowers hardware barriers for node operators
**Network Health**: Maintains decentralization by enabling more users to run full validation nodes
**Performance**: Prevents storage-related latency issues during block validation

## How to launch a pruned node

```bash
cli validator-start \
    --network-mode devnet \
    --data-dir ./.arch_data \
    --rpc-bind-ip 127.0.0.1 \
    --rpc-bind-port 9002 \
    --titan-endpoint titan-node.dev.aws.archnetwork.xyz \
    --titan-socket-endpoint titan-node.dev.aws.archnetwork.xyz:18443
    --pruned-size 102400 # limit state size in bytes
```

While pruned nodes still take part in the consensus algorithm, some points to consider:

**Irreversibility**: Once pruned, data cannot be recovered from the local node

**Initial Sync Requirement**: Nodes must still download the full blockchain before pruning
