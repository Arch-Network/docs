### APL Token Walkthrough — Level 2: Advanced Operations

This guide builds on the Level 1 walkthrough and covers advanced token scenarios using `arch-cli`. You’ll learn authority management, freezing/thawing, delegate approvals, “checked” operations, batch jobs, multisig, account lifecycle, and useful listing/formatting utilities.

Prereqs:
- Completed Level 1 and have a running environment (`orchestrate start`) pointing at your profile
- Have `MINT` and at least one token account from Level 1

Tip: `--profile` is a global flag and must be placed before subcommands, or set `ARCH_PROFILE` env var.

---

## 0) Quick setup (reuse Level 1 values)

If you didn’t keep these env vars around, re-export them now with your own values:

```bash
# Example formats only; paste your own from Level 1 output
export MINT=<YOUR_MINT_ADDRESS>
export ATA=<YOUR_PRIMARY_TOKEN_ACCOUNT>
```

Optional keys/env from Level 1 for examples below:

```bash
mkdir -p ~/DEMO_KEYS
openssl rand -out ~/DEMO_KEYS/freeze_authority.key 32   # if you want to demo freeze/thaw
openssl rand -out ~/DEMO_KEYS/new_mint_authority.key 32 # for authority handoff demos
# If not already created in Level 1
# openssl rand -out ~/DEMO_KEYS/recipient.key 32          # recipient wallet

# If you created a recipient ATA in Level 1, reuse it:
# export RECIPIENT_ATA=<RECIPIENT_ATA_FROM_LEVEL_1>
```

---

## 1) Authority management (mint/freeze/account owner/close account)

Why: Use authorities to harden supply, reduce custody risk, and separate duties. Common patterns include: disabling minting after distribution to cap supply, removing freeze authority for immutability, delegating account ownership for custodial flows, and designating who can close dormant accounts to reclaim rent.

Disable future minting (burn-only mint):

```bash
arch-cli token set-authority "$MINT" \
  --authority-type mint \
  --new-authority none \
  --current-authority ~/DEMO_KEYS/mint_authority.key
```

Transfer mint authority to a new authority address:

```bash
arch-cli token set-authority "$MINT" \
  --authority-type mint \
  --new-authority <NEW_AUTHORITY_PUBKEY_BASE58> \
  --current-authority ~/DEMO_KEYS/mint_authority.key

Note: Replace `<NEW_AUTHORITY_PUBKEY_BASE58>` with the base58 public key (32-byte) of the new authority. If you only have a key file, you can run an airdrop once using that key to print its public key, then use that base58 value here.
```

Remove freeze authority (cannot freeze accounts anymore):

```bash
arch-cli token set-authority "$MINT" \
  --authority-type freeze \
  --new-authority none \
  --current-authority ~/DEMO_KEYS/mint_authority.key
```

Change token account owner (handoff custody of a specific account):

```bash
arch-cli token set-authority "$ATA" \
  --authority-type account_owner \
  --new-authority <RECIPIENT_PUBKEY_BASE58> \
  --current-authority ~/DEMO_KEYS/mint_authority.key
```

Enable someone to close an account to reclaim rent-exemption back to a destination:

```bash
arch-cli token set-authority "$ATA" \
  --authority-type close_account \
  --new-authority <CLOSER_PUBKEY_BASE58> \
  --current-authority ~/DEMO_KEYS/mint_authority.key
```

---

## 2) Freeze and thaw token accounts

Why: Freezing lets you respond to emergencies (compromised keys, suspected fraud, regulatory holds) without impacting the mint itself. Thawing restores normal operations once the incident is resolved. If you never want this power, remove the freeze authority from the mint for stronger guarantees.

Freeze a token account (requires freeze authority on mint):

```bash
arch-cli token freeze-account "$ATA" \
  --authority ~/DEMO_KEYS/freeze_authority.key
```

Thaw a frozen token account:

```bash
arch-cli token thaw-account "$ATA" \
  --authority ~/DEMO_KEYS/freeze_authority.key
```

Check state with:

```bash
arch-cli token balance "$ATA"
```

---

## 3) Delegate approvals (approve/revoke)

Why: Delegations enable spend allowances without handing over full ownership. Typical uses include exchange hot wallets, automated market maker bots, and time-bound spend limits. Revoking an allowance is a fast way to cut access without moving funds.

Approve a delegate to spend from an account up to an allowance:

```bash
export DELEGATE=$(xxd -p -c 64 ~/DEMO_KEYS/recipient.key)
arch-cli token approve "$ATA" "$DELEGATE" 420000 \
  --owner ~/DEMO_KEYS/mint_authority.key
```

Revoke the delegate (removes allowance):

```bash
arch-cli token revoke "$ATA" \
  --owner ~/DEMO_KEYS/mint_authority.key
```

---

## 4) Checked operations (decimals-verified)

Why: Checked ops provide defense-in-depth by verifying the mint’s decimals on-chain. This prevents wrong-scale mistakes (e.g., treating 6-decimal assets as 9-decimal) and mitigates spoofing where a mismatched mint could otherwise accept transfers.

Use these when you want the instruction to also verify the expected decimals on-chain. Replace `6` with your mint’s decimals.

Transfer checked (to recipient’s ATA):

```bash
arch-cli token transfer-checked "$ATA" "$RECIPIENT_ATA" 1000 6 \
  --owner ~/DEMO_KEYS/mint_authority.key
```

Mint to checked (to a specific account):

```bash
arch-cli token mint-to-checked "$MINT" "$ATA" 100000 6 \
  --authority ~/DEMO_KEYS/mint_authority.key
```

Burn checked:

```bash
arch-cli token burn-checked "$ATA" 50000 6 \
  --owner ~/DEMO_KEYS/mint_authority.key
```

---

## 5) Batch operations

Why: Batch jobs are ideal for airdrops, vesting schedules, or periodic distributions. Capture a single source of truth in JSON and execute consistently, making it easy to review, audit, and re-run if needed.

Prepare a JSON file describing transfers:

```json
[
  {
    "source_account": "<SRC_ACCOUNT>",
    "destination_account": "<DST_ACCOUNT>",
    "amount": 12345,
    "owner_keypair_path": "~/DEMO_KEYS/mint_authority.key"
  }
]
```

Run the batch transfer (batch uses default decimals=9 internally; amounts are raw units):

```bash
arch-cli token batch-transfer ./transfers.json \
  --keypair-path ~/DEMO_KEYS/payer.key
```

Prepare a JSON file describing mints:

```json
[
  {
    "mint_address": "<MINT>",
    "account_address": "<DEST_ACCOUNT>",
    "amount": 1000000,
    "authority_keypair_path": "~/DEMO_KEYS/mint_authority.key"
  }
]
```

Run the batch mint (batch uses default decimals=9 internally; amounts are raw units):

```bash
arch-cli token batch-mint ./mints.json \
  --keypair-path ~/DEMO_KEYS/payer.key
```

---

## 6) Multisig (advanced/experimental)

Why: Multisig reduces single-key risk for high-value authorities (mint/freeze). Require M-of-N signers to approve sensitive changes, align with governance policies, and keep keys distributed across stakeholders and devices.

Create a multisig authority requiring 2-of-3 signers:

```bash
arch-cli token create-multisig 2 \
  --signers ~/DEMO_KEYS/mint_authority.key,~/DEMO_KEYS/new_mint_authority.key,~/DEMO_KEYS/freeze_authority.key \
  --keypair-path ~/DEMO_KEYS/payer.key
```

Show multisig account details:

```bash
arch-cli token multisig-show <MULTISIG_ADDRESS>
```

Make the multisig the new mint authority:

```bash
arch-cli token set-authority "$MINT" \
  --authority-type mint \
  --new-authority <MULTISIG_ADDRESS> \
  --current-authority ~/DEMO_KEYS/mint_authority.key
```

Note: Multisig sign/execute flows are currently developer-focused and may evolve.

---

## 7) Account lifecycle: create ATA, list, close

Why: Manually creating ATAs helps with onboarding recipients ahead of distributions. Listing accounts gives operational visibility (balances, freezes, delegates). Closing idle accounts reclaims rent to keep state lean and costs low.

Manual account creation for a recipient (Associated Token Account):

```bash
arch-cli token create-account \
  --mint "$MINT" \
  --owner ~/DEMO_KEYS/recipient.key \
  --keypair-path ~/DEMO_KEYS/payer.key
```

List all accounts for a mint and see balances/states:

```bash
arch-cli token accounts "$MINT"
```

Close a token account (reclaim rent to a destination address):

```bash
arch-cli token close-account "$ATA" <DESTINATION_PUBKEY> \
  --owner ~/DEMO_KEYS/mint_authority.key
```

---

## 8) Utilities: supply, mints, balances, amount formatting

Why: These commands are your day-to-day observability and formatting toolkit. Confirm supply caps, scan all mints in the network, inspect account holders, and convert amounts precisely for UI or accounting.

Supply and mint details:

```bash
arch-cli token supply "$MINT"
```

List all mints on the network:

```bash
arch-cli token mints
```

Account balance (with UI formatting):

```bash
arch-cli token balance "$ATA"
```

Convert amounts with mint decimals:

```bash
arch-cli token amount-to-ui "$MINT" 1000000
arch-cli token ui-to-amount "$MINT" 1.000000
```

---

## 9) Suggested hardening patterns

- Disable mint authority when distribution is complete (`--new-authority none`).
- Remove freeze authority for immutable mints.
- Use checked ops (`*-checked`) in critical flows to enforce decimals.
- Use multisig for high-value authorities.
- Keep separate keys for fee payer, mint authority, freeze authority, and custodians.

---

That’s it—Level 2 equips you with operational controls for production-grade tokens. Continue to iterate with batch jobs, multisig authorities, and authority life-cycle management.
