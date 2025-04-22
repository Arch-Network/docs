# ArchVM and Runtime

The ArchVM uses a fork of Solana's eBPF (extended Berkeley Packet Filter) virtual machine, providing a secure and performant environment for executing smart contract programs. While using familiar terminology to Solana, ArchVM is uniquely able to interact directly with Bitcoin's UTXO model.


## Foundation: Rust-Based eBPF Virtual Machine

Like Solana's implementation, the ArchVM:



* Executes programs compiled to eBPF format
* Uses the Solana BPF compiler (SBF compiler) to transform Rust code into ELF binary
* Provides a restricted instruction set designed for safe execution


This foundation ensures that developers familiar with Solana's programming model can easily build on Arch while benefiting from its Bitcoin integration capabilities.


## Key Components

The ArchVM architecture consists of several critical components working together:



1. Program Registry: Maintains the catalog of deployed programs on Arch Network and manages their lifecycle
2. Instruction Processor: Executes individual instructions within transactions according to the eBPF instruction set
3. Memory Management: Controls program memory access, provides sandboxing, and enforces memory safety constraints
4. Syscall Interface: Provides a gateway to system-level functionality, including both standard and Bitcoin-specific operations
5. Compute Meter: Tracks and limits computational resources to prevent excessive resource consumption
6. DAG Transaction Dependency Graph: Organizes transactions in a directed acyclic graph to track dependencies and execution order


## Program Execution Flow



1. Program Deployment
    a. Write program in Rust using Arch Program
    b. Compile to native code using Solana's build-sbf
    c. Deploys to network with program ID
2. Transaction Processing
    a. Runtime validates tx and signatures
    b. Analyzes previous dependencies and updates states
    c. Loads required program and account states
3. Instruction Execution
    a. Runtime processes instructions in order
    b. Handles system and UTXO syscalls
    c. Updates account states
4. State Integration
    a. Records tx results
    b. Commit account changes
    c. Update tx tree
    d. Submit Bitcoin txs if needed
5. Bitcoin Monitoring
    a. Indexer tracking Bitcoin transaction status
    b. Reports confirmations or reorgs
    c. Notifies the runtime of state changes
6. State Consistency
    a. Executes rollback if necessary
    b. Reapplies transactions when valid

This architecture provides the best of both worlds: Solana's programmability, performance, and account model for complex application logic, combined with Bitcoin's security and finality for critical operations.


## Extended Syscalls

The most significant innovation in the ArchVM is the addition of Bitcoin-specific syscalls that allow smart contracts to interact with the Bitcoin blockchain:


### Key Bitcoin Syscalls



* UTXO Transaction Processing: Syscalls to create, sign, and verify Bitcoin UTXO transactions
* Bitcoin Script Execution: Ability to verify and create Bitcoin scripts
* Direct Bitcoin State Access: Read Bitcoin blockchain state and UTXO information
* Transaction Posting: Submit transactions directly to the Bitcoin network

These syscalls serve as the bridge between the programmable environment of Arch and the fundamental UTXO model of Bitcoin.


### New Syscalls

```rust

// Validates and sets up transaction for being signed
define_syscall!(fn arch_set_transaction_to_sign(transaction_to_sign: *const TransactionToSign));

// Retrieves raw Bitcoin transaction from RPC and copies into memory buffer
define_syscall!(fn arch_get_bitcoin_tx(data: *mut u8, length: u64, txid: &[u8; 32]) -> u64);

// Retrieves the multi-sig public key and copies into memory buffer
define_syscall!(fn arch_get_network_xonly_pubkey(data: *mut u8) -> u64);

// Validates ownership of a Bitcoin UTXO against a public key
define_syscall!(fn arch_validate_utxo_ownership(utxo: *const UtxoMeta, owner: *const Pubkey) -> u64);

// Generates a Bitcoin script public key and copies into memory buffer
define_syscall!(fn arch_get_account_script_pubkey(script: *mut u8, pubkey: *const Pubkey) -> u64);

// Retrieves the latest Bitcoin block height
define_syscall!(fn arch_get_bitcoin_block_height() -> u64);

```
