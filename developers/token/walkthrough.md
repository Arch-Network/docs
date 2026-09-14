### Create Your Own APL Token: End-to-End Walkthrough

This guide walks you through creating an APL token from scratch using the Arch CLI, starting local services, generating keys, minting tokens (with automatic ATA creation), and verifying balances.

We’ll create a fun demo token called “STARBURST” with 6 decimals, mint a supply to your wallet, and inspect the results.

Prereqs:
- arch-cli installed and on PATH
- Docker with the docker compose plugin
- Local Arch dev tools checked out (we’ll point orchestrate to your local source)

Tip: All commands below are copy/paste ready. Replace placeholders as needed.

---

## 1) Create a configuration profile

First, create a profile named `demo-testnet` pointing to a remote Bitcoin node and your local Arch node:

```bash
arch-cli config create-profile demo-testnet \
  --bitcoin-node-endpoint http://bitcoin-node.test.aws.archnetwork.xyz:49332 \
  --bitcoin-node-username bitcoin \
  --bitcoin-node-password uU1taFBTUvae96UCtA8YxAepYTFszYvYVSXK8xgzBs0 \
  --bitcoin-network testnet \
  --arch-node-url http://localhost:9002
```

Optionally set this as your default profile so you don’t need to pass `--profile` each time:

```bash
arch-cli config set-default-profile demo-testnet
```

You can confirm your profiles with:

```bash
arch-cli config list-profiles
```

---

## 2) Start the local environment (no bitcoind)

We’ll run the orchestrated stack using your local Arch source and skip running a local bitcoind. Titan will connect to the Bitcoin RPC specified in your `demo-testnet` profile.

From your arch-network repo root:

```bash
# Use --profile as a top-level flag (must come before subcommands)
arch-cli --profile demo-testnet orchestrate start --local "$(pwd)" --no-bitcoind

# Alternatively, use the environment variable for the profile
ARCH_PROFILE=demo-testnet arch-cli orchestrate start --local "$(pwd)" --no-bitcoind
```

What this does:
- Starts Titan and the local_validator
- Uses your profile’s Bitcoin RPC endpoint and credentials (no local bitcoind needed)
- Exposes the Arch RPC at `http://localhost:9002`

Notes:
- `--profile` is a global flag and must be placed before subcommands like `orchestrate start`.
- You can also set the profile via the `ARCH_PROFILE` environment variable.
- If you set `demo-testnet` as the default profile, you can omit `--profile demo-testnet` entirely.

---

## 3) Create demo keys

For this walkthrough, we’ll generate simple 32-byte secp256k1 secret keys for the payer and the mint authority. Keep these safe in a dedicated folder.

```bash
mkdir -p ~/DEMO_KEYS

# Generate 32-byte secrets for payer and mint authority
openssl rand -out ~/DEMO_KEYS/payer.key 32
openssl rand -out ~/DEMO_KEYS/mint_authority.key 32

# (If using SPL-style Option A) Generate a dedicated mint account keypair
openssl rand -out ~/DEMO_KEYS/mint.key 32

# (Optional) Freeze authority if you want to retain freeze control
# openssl rand -out ~/DEMO_KEYS/freeze_authority.key 32
```

Notes:
- Files contain raw 32-byte secp256k1 private keys. Do not share them.
- For a quick demo, the same key can be used for multiple roles, but using separate keys is safer.

### 3.1) Fund the mint authority (fee payer)

The mint authority will act as the fee payer for account creation and mint transactions. Fund it once via the faucet:

```bash
arch-cli --profile demo-testnet account airdrop \
  --keypair-path ~/DEMO_KEYS/mint_authority.key
```

Keep the printed public key handy; you’ll compare it with the mint’s authority in the next step.

---

## 4) Create the STARBURST mint

We’ll create a mint with 6 decimals (common for UI-friendly tokens). The “name” is off-chain branding; the chain stores mint config and authorities. We’ll refer to it as STARBURST throughout.

```bash
# Create a new token mint with 6 decimals (SPL-style)
# Option A: Provide a mint keypair file
arch-cli token create-mint \
  --decimals 6 \
  --mint-authority ~/DEMO_KEYS/mint_authority.key \
  --mint-keypair-path ~/DEMO_KEYS/mint.key \
  --keypair-path  ~/DEMO_KEYS/payer.key

# Option B: Let the CLI generate a fresh mint keypair in-memory
# (address printed; key not saved by default)
# arch-cli token create-mint \
#   --decimals 6 \
#   --mint-authority ~/DEMO_KEYS/mint_authority.key \
#   --keypair-path  ~/DEMO_KEYS/payer.key
```

This will:
- Derive a deterministic mint address (printed to the console)
- Create and initialize the mint account on-chain



Capture the printed mint address into an environment variable `MINT` for convenience:

```bash
# Replace with the address printed by the previous command
export MINT=<PASTE_MINT_ADDRESS_FROM_OUTPUT>

# Example format: base58 public key (32-byte)
# export MINT=3N5Sx5Q1z3kVw8Yx3Pqv8i8dPZv2oJv1kz2N9UQG6o4w
```

Verify the mint:

```bash
arch-cli token show-mint "$MINT"
```

You should see fields like Decimals, Supply (initially 0), and Authorities.

---

## 5) Mint tokens with automatic ATA creation

Now let’s mint some STARBURST into your wallet. We’ll use `--auto-create-ata` so the CLI derives and creates the Associated Token Account (ATA) automatically if needed.

We’ll mint 1,000,000 raw units, which with 6 decimals equals 1.000000 STARBURST.

```bash
arch-cli token mint "$MINT" 1000000 \
  --authority ~/DEMO_KEYS/mint_authority.key \
  --auto-create-ata
```

What happens:
- The CLI derives the ATA for the mint authority’s wallet
- If it doesn’t exist, it creates it (and waits for it to be visible)
- Mints 1,000,000 raw units to that account
- Prints the token account address it minted to

Copy that printed token account address and set it as `ATA`:

```bash
# Replace with the token account address printed by the mint command
export ATA=<PASTE_TOKEN_ACCOUNT_ADDRESS_FROM_OUTPUT>
```

---

## 6) Confirm balances and details

Check the mint state:

```bash
arch-cli token show-mint "$MINT"
```

Check your token account state and balance:

```bash
arch-cli token show-account "$ATA"
```

You should see:
- Mint: your `MINT`
- Owner: your wallet (the mint authority’s public key)
- Balance: `1000000` (raw units)

With 6 decimals, raw 1000000 equals 1.000000 STARBURST.

---

### 6.1) Create a recipient and its ATA (for transfers)

To demonstrate transfers, create a second wallet and its Associated Token Account for this mint.

```bash
# Generate a second owner key (recipient)
openssl rand -out ~/DEMO_KEYS/recipient.key 32

# Manually create the recipient's ATA for this mint
arch-cli --profile demo-testnet token create-account \
  --mint "$MINT" \
  --owner ~/DEMO_KEYS/recipient.key \
  --keypair-path  ~/DEMO_KEYS/payer.key

# Capture the printed ATA address
export RECIPIENT_ATA=<PASTE_RECIPIENT_ATA_FROM_OUTPUT>
```

You can verify it with:

```bash
arch-cli --profile demo-testnet token show-account "$RECIPIENT_ATA"
```

---

## 7) Optional: transfer or burn

Transfer some STARBURST from your account to another account (replace addresses):

```bash
arch-cli --profile demo-testnet token transfer "$ATA" "$RECIPIENT_ATA" 420000 \
  --owner ~/DEMO_KEYS/mint_authority.key
```

Burn tokens from your account:

```bash
arch-cli token burn "$ATA" 100000 \
  --owner ~/DEMO_KEYS/mint_authority.key
```

Re-run `show-account` and `show-mint` to confirm balances and supply.

---

## Tips, gotchas, and customization

- Profiles: You can pass `--profile demo-testnet` on any command if you didn’t make it default.
- Decimals: Common choices are 6 or 9. Pick the right precision for your UI.
- Authorities: Use a distinct freeze authority if you want the ability to freeze accounts; otherwise omit it for a freer token.
- Naming: “STARBURST” is our friendly name here. Metadata (name/symbol/logo) can be layered on via off-chain services or future metadata programs.
- Logs: If a command fails, rerun with `-v` (verbose) or review logs printed by `orchestrate start`.

That’s it—your STARBURST APL token is live, funded, and visible. Happy building!

Next: Continue with Level 2 advanced scenarios (authority management, freeze/thaw, delegates, checked ops, batch jobs, multisig, account lifecycle) in `APL_TOKEN_WALKTHROUGH_LEVEL_2.md`.
