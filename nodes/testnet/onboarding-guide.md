# Onboarding Guide

**Table of Contents**
- [Download Validator Client]
- [Register a Peer ID]
- [Register an RPC Service]
- [Configure Ports]
- [Configure BTC Node or RPC Provider]
- [Upgrading Your Node]
- [Common Problems]
- [Examples]

---
### About

This guide contains the relevant sections for how to connect to the Arch testnet depending on the type of node you are running. 

The Arch testnet is designed to help validators test out their infrastructure and node software in a live network environment.

Validators will be able to validate transactions on the Arch Testnet and get a feel for what participation looks like.

### Download Validator Client

You can find the binaries available to run an Arch validator here; we recommend `latest`:

- https://github.com/Arch-Network/arch-node/releases

### Register a Peer ID

Upon starting up your validator client, you have the ability to generate a unique PeerID.

```bash
# renamed binary to arch-node for easier usage

# generate unique Peer ID
./arch-node --generate-peer-id
```

**Note:** This will only generate a single Peer ID and will not result in a new ID upon subsequent invocations unless the 

Register your peer IDs with us over Telegram and make a callout to our team. You will not be eligible without registering your peer ID.

### Register an RPC Service

> NOTE: This step is optional.

If you would like to offer your node's RPC to the public, allowing for a potential service offering opportunity, you may do so at your discretion. 

We ask that you let us know you are doing this so that we may showcase your service to our community of builders and better manage expectations.

### Configure Ports

Ensure that the proper ports are exposed. If you are *NOT* running an RPC service for the public, this would mean *NOT* exposing RPC ports in the final configuration.

### Configure BTC Node or RPC Provider

Arch nodes are expected to stay aware of Bitcoin's state at all times. Validators can either choose to run a Bitcoin testnet4 node themselves or should connect with a Bitcoin RPC provider (non-API) to facilitate communication with the Arch validator client.

### Upgrading Your Node
If you have a node that is already synced and wish to participate in a software upgrade, refer to the following steps:

1. Download a new binary from the [arch-node releases] page.
2. Set the binary as executable.
3. Restart your node.
4. **Do not** remove the `/arch-data` directory (as this will wipe state as well as reset a validator’s Peer ID).

### Common Problems

**Problem #1:** `Could not find system program file`.

This means there is a system program file that is not present during the invocation. This file is present within the Docker image but should also be present when running the binary directly. 

**Problem #2:** `NodeIsBehindNAT`

That means that the bootnode was not able to reach your validator node as there is a firewall or NAT preventing connections to your validator node.

**Problem #3:** `ValidatorNotWhitelisted` 

Validator must provide us with their Peer Id so we can add them to the whitelist.

**Problem #4:** My Bitcoin RPC drops connection.

We have seen this happen due to the amount of RPC calls that the Arch node makes to the Bitcoin RPC server. The server gets overwhelmed in trying to handle the volume of requests resulting in the connection being dropped.

### Examples

_Example BTC RPC credentials from Chainstack:_

```bash
export BTC_RPC_URL="my-btc-url"
export BTC_RPC_KEY="my-btc-key"
export BTC_RPC_USER="my-btc-user"
export BTC_RPC_PASS="my-btc-pass"
```

**Pulse check**

```bash
curl $BTC_RPC_URL/$BTC_RPC_KEY -d '{"method":"getblockchaininfo","params":[],"id":1}'
```

**Start Validator (WIP)**

```bash
./validator \
--network-mode testnet \
--bitcoin-rpc-endpoint $BTC_RPC_URL/$BTC_RPC_KEY \
--bitcoin-rpc-username $BTC_RPC_USER \
--bitcoin-rpc-password $BTC_RPC_PASS
```

<!-- Internal -->
[Download Validator Client]: #download-validator-client
[Register a Peer ID]: #register-a-peer-id
[Register an RPC Service]: #register-an-rpc-service
[Configure Ports]: #configure-ports
[Configure BTC Node or RPC Provider]: #configure-btc-node-or-rpc-provider
[Upgrading Your Node]: #upgrading-your-node
[Examples]: #examples
[Common Problems]: #common-problems

<!-- External -->
[[arch-node releases]: https://github.com/Arch-Network/arch-node/releases
