---
title: What Arch Prime is
description: Arch Prime brings prime services to Bitcoin, on-chain. One account, holding native Bitcoin as collateral, that borrows against it, deploys into yield strategies, and manages the whole position as a single margined book.
---

It runs on Arch Network — a Bitcoin-native chain that holds the collateral, authorizes any movement of it through threshold cryptography, and settles it on the Bitcoin network. Programs govern the movement of the UTXOs: no counterparty, custodian or operator performs a subsequent operation to make it happen. Arch Prime extends the credit; Arch Network clears and settles it.

## What prime services are, and who has had them

A prime broker gives a client one relationship instead of many: credit against the whole portfolio, execution across venues, custody, and a single view of positions and margin. The capital efficiency comes from that consolidation — collateral posted once supports activity that would otherwise need funding several times over.

Those services have always been reserved for the largest accounts in finance, because the underwriting and the risk management are done by human teams, and the account has to be big enough to be worth the desk time.

## What is different here

**Arch Prime underwrites the collateral, not the counterparty.** A prime broker prices a client — who they are, what they have, what recourse exists if they fail. That is why onboarding requires identity, credit assessment and legal agreements, and why it is only worth doing above a certain account size.

Arch Prime does not price the client. It prices the asset: how volatile it is, how certain enforcement against it is, and how quickly it can be turned back into repayment. The same asset carries the same terms for every account, because enforcement does not depend on knowing who is behind it. Recourse is not legal, it is programmatic — the rules run whether or not anyone cooperates.

That is the trade, and it cuts both ways. You do not get bespoke terms negotiated for your size and history. What you get instead is access: no identity check, no credit check, no minimum account size, and terms that do not depend on being large enough to be interesting.

## What Arch Prime does not do

- It does not extend uncollateralized credit. Every position is backed by collateral in the account.
- It does not underwrite you as a counterparty, and has no recourse to you beyond the account.
- It does not hold client funds on its own balance sheet, and it does not fund the loan book. Third-party liquidity providers do.
- It does not offer the full service set of a traditional prime broker. Spot trading, perpetuals, options and structured products are not part of what is described here.

## What happens to your Bitcoin

Your Bitcoin leaves your wallet — it has to, it is securing a live obligation — but it does not go to a counterparty. It stays a native Bitcoin UTXO, at its own address, under Taproot spending conditions that programs enforce. There is no wrapped representation, no bridge custodian, no synthetic claim standing in for the coin, and it is never lent out or re-pledged.

The improvement is not that you keep the coin in your wallet. It is that no counterparty is holding it, and no one's discretion decides what happens to it. The rules that bind you are the same rules that bind Arch Prime: it cannot decline to liquidate a favoured account, and it cannot reach the collateral of an account that is healthy.

That distinction is the one that mattered in the collapses of FTX, Celsius and BlockFi. Those did not fail because a consensus mechanism was captured. They failed because a counterparty with discretion over other people's coins used it.

## Where to go next

- [How it works](02-how-it-works) — the account, borrowing, deploying, and closeout
- [Why a purpose-built chain](03-why-a-purpose-built-chain) — what building the layer underneath buys
- [archUSD](04-archusd) — the dollar the system runs on
- [Risk overview](06-risk) — what can go wrong, and who is exposed
