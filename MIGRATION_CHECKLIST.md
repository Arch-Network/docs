# Arch Network Documentation Migration Checklist

## ✅ Completed Pages

### Core Pages
- [x] Introduction (index.mdx)
- [x] Quick Start Guide

### Core Concepts
- [x] Architecture Overview
- [x] Bitcoin Integration
- [x] ROAST and FROST Consensus

### Program Development
- [x] Writing Your First Program

### Arch Program Library (APL)
- [x] Introduction

---

## 🚧 Pending Migration

### Getting Started (7 pages)
- [ ] Validator Setup (bitcoin-and-titan-setup.md)
- [ ] System Requirements (requirements.md)
- [ ] Setup Options (how-to-configure-local-validator-bitcoin-testnet4.md)
- [ ] Running Your Node (validator-staking.md)
- [ ] Setting Up a Project (setting-up-a-project.md)
- [ ] FAQ (faq.md)
- [ ] External Resources (resources.md)

### Core Concepts (6 pages)
- [ ] Network Architecture (network-architecture.md)
- [ ] Validator State Machine (validator-state-machine.md)
- [ ] Node Operation (nodes.md)
- [ ] Programs (program/program.md)
- [ ] UTXOs (program/utxo.md)
- [ ] Accounts (program/accounts.md)
- [ ] Instructions (program/instructions-and-messages.md)
- [ ] System Calls (program/syscall.md)

### Program Development (8 pages)
- [ ] Understanding Arch Programs (understanding-arch-programs.md)
- [ ] Testing Your Program (testing-guide.md)
- [ ] Program Examples (guides.md)
- [ ] Fungible Token (how-to-create-a-fungible-token.md)
- [ ] Oracle Program (how-to-write-oracle-program.md)
- [ ] Runes Swap (how-to-build-runes-swap.md)
- [ ] Lending Protocol (how-to-build-lending-protocol.md)

### Arch Program Library (APL) (6 pages)
- [ ] Token Program (token-program.md)
- [ ] Associated Token Account Program (associated-token-account.md)
- [ ] Token API (token/api.md)
- [ ] Token Architecture (token/architecture.md)
- [ ] Token Security (token/security.md)
- [ ] Token Usage (token/usage.md)

### SDK Reference (13 pages)
- [ ] SDK Overview (sdk.md)
- [ ] TypeScript SDK Getting Started (typescript/getting-started.md)
- [ ] TypeScript API Reference (typescript/api-reference.md)
- [ ] TypeScript Examples (typescript/examples.md)
- [ ] Web3 Integration (typescript/web3-integration.md)
- [ ] Rust SDK Getting Started (rust/getting-started.md)
- [ ] Rust API Reference (rust/api-reference.md)
- [ ] Rust Examples (rust/examples.md)
- [ ] Program Development (rust/program-development.md)
- [ ] Core Types (core-types.md)
- [ ] Pubkey (pubkey.md)
- [ ] Account (account.md)
- [ ] Instructions and Messages (instructions-and-messages.md)
- [ ] Runtime Transaction (runtime-transaction.md)
- [ ] Processed Transaction (processed-transaction.md)
- [ ] Signature (signature.md)

### Tools & CLI (1 page)
- [ ] Arch CLI Reference (arch-cli-reference.md)

### Reference (2 pages)
- [ ] API Reference (rpc/rpc.md)
- [ ] RPC Method Availability (rpc/rpc-method-availability.md)

### System Program (5 pages)
- [ ] System Program (system-program.md)
- [ ] Account Creation (create-account.md)
- [ ] Program Deployment (make-executable.md)
- [ ] Assign Ownership (assign-ownership.md)
- [ ] Write Bytes (write-bytes.md)

### Resources (2 pages)
- [ ] Troubleshooting (troubleshooting.md)
- [ ] External Resources (resources.md)

### RPC HTTP Methods (20 pages)
- [ ] get-account-address.md
- [ ] get-all-accounts.md
- [ ] get-arch-txid-from-btc-txid.md
- [ ] get-best-block-hash.md
- [ ] get-best-finalized-block-hash.md
- [ ] get-block-count.md
- [ ] get-block-hash.md
- [ ] get-block.md
- [ ] get-current-state.md
- [ ] get-latest-tx-using-account.md
- [ ] get-network-pubkey.md
- [ ] get-peers.md
- [ ] get-processed-transaction.md
- [ ] get-program-accounts.md
- [ ] get-transaction-report.md
- [ ] get-version.md
- [ ] is-node-ready.md
- [ ] read-account-info.md
- [ ] reset-network.md
- [ ] send-transaction.md
- [ ] send-transactions.md
- [ ] start-dkg.md

### Additional Files
- [ ] Basics (basics/basics.md)
- [ ] Building Deploying Interfacing (basics/building-deploying-interfacing.md)
- [ ] Interaction (basics/interaction.md)
- [ ] APL Token Standard (apl-token-standard.md)
- [ ] Whitepaper PDF (whitepaper.pdf)

---

## 📊 Migration Progress

**Total Pages**: ~80 pages
**Completed**: 5 pages (6.25%)
**Remaining**: ~75 pages (93.75%)

## 🎯 Priority Order

1. **High Priority** (Core functionality)
   - Getting Started pages
   - Core Concepts remaining pages
   - Program Development guides

2. **Medium Priority** (Developer tools)
   - SDK Reference
   - APL documentation
   - Tools & CLI

3. **Low Priority** (Reference material)
   - RPC API methods
   - System Program details
   - Additional resources

## 📝 Notes

- All Mermaid diagrams are working correctly
- Images have been copied to public/images/
- Navigation structure is set up in meta.json
- Build and deployment are working
- Ready for Vercel deployment
