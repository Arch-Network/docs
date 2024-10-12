# Decentralized Validation

Users submit program transaction requests through an RPC interface, providing the associated Bitcoin state anchors, input data, and transaction fees (paid in BTC). Each node of the Decentralized Verifier Network distributes the request within the network, runs the program request, signs off on the result, and shares the signed result with the elected leader node. As soon as a threshold of signatures has been collected, the leader node submits the resulting Bitcoin transaction.

The Decentralized Verifier Network is designed to be permissionless, maintaining the trustless environment characteristic of Bitcoin and allowing for anyone to participate in the ecosystem’s security and verification processes. It uses a gossip protocol to efficiently propagate information across the network, ensuring that all verifiers receive updates in a decentralized and fault-tolerant manner, helping maintain the network’s resilience and consistency.
