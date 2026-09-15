---
title: The Bitcoin Builder's Dilemma
---

Bitcoin holds the largest, highest-quality pool of collateral in the digital asset market, and the least credit extended against it. That gap has never been about appetite. It is about a choice every builder has been forced to make, where both options destroy something essential.

## The dilemma

**Keep Bitcoin on Bitcoin.** The collateral stays pristine — the hardest, most liquid, most widely held asset in the market, sitting in native custody where anyone can verify it. What you do not have is any way to act on it. Bitcoin's scripting model was deliberately constrained, and it offers no mechanism to price a position, seize collateral on a deadline, and settle the proceeds. So lending happens off-chain and bilaterally, negotiated one loan at a time and enforced through legal recourse rather than protocol recourse. It works, and it does not scale.

**Move Bitcoin somewhere programmable.** Wrap it, bridge it, or hand it to a custodian who issues a receipt. Now you have programmability — and you have destroyed the thing that made the collateral good. The asset is a claim on an intermediary. Credit extended against a wrapped receipt is not credit against Bitcoin; it is credit against whoever issued the receipt. Enforcement rights run against the token, not the coin, and if the issuer fails, the receipt's claim becomes a legal question rather than a protocol one. Every lender in that system is unknowingly holding the bridge as their largest concentrated exposure.

The dilemma is that Bitcoin's greatest strength — that it does one thing and refuses to be extended — is exactly what has kept credit from being built on it. Every attempt to escape the constraint has escaped the guarantee along with it.

## The usual framing is wrong

The standard diagnosis is that Bitcoin lacks expressiveness, so the fix is to make it expressive. That is why a decade of effort has gone into general-purpose smart contract platforms for Bitcoin, and why very little credit has resulted.

Credit does not need arbitrary computation. It needs three guarantees at one moment:

1. When a position breaches, the close-out **executes** — not queued, not outbid, not dependent on someone deciding to show up.
2. Pricing, seizure and settlement happen **together**, so there is no window where the price has moved but the collateral has not been taken.
3. The proceeds settle in **a unit the system already holds**, rather than one it has to go buy on the day buying is most expensive.

None of that is a scripting-language problem. All of it is an enforcement and clearing problem — and you do not solve an enforcement problem with a more expressive virtual machine.

## Custody and enforcement are not the same right

Here is the assumption underneath both bad options, and it has gone unexamined for so long that it reads as a law of nature:

*To be able to seize an asset, you must hold it.*

That is why every credit system in this market asks you to hand your Bitcoin over — to a lender, a custodian, a bridge, a wrapper. But look at what a lender actually needs. Not possession today. **A guarantee of possession at a future moment, conditional on a defined event.**

Those are different rights, and the second is far narrower than the first. The reason everyone has taken the broader right is that nobody could express the narrower one. Bitcoin could not describe "this coin is spendable by its owner, unless this specific condition is met, in which case it is spendable by the clearing process" — so the industry substituted a custodian, who can do anything, in place of a rule that does one thing.

That substitution is no longer necessary.

## How Arch enforces without holding

Collateral posted to Arch stays a Bitcoin UTXO on the Bitcoin base layer. It is never sent to a custodian, and never becomes anyone's liability. What changes is not where the coin lives — it is what the coin is committed to.

**The UTXO is locked to a Taproot output governed by predefined spending conditions.** Those conditions are set when credit is drawn and reflect the terms of the account: the client can withdraw while the position is in good standing, and the clearing process can take the collateral if the position breaches. Both paths exist from the moment the account is opened. Neither requires anyone's cooperation later.

**No single party can move it — including Arch.** Spending requires a FROST + ROAST threshold signature from the validator set. There is no key, anywhere, that one entity can use to move client collateral. This is the structural difference from custody: a custodian is defined by its ability to act unilaterally, and here no such ability exists.

**The state that decides lives on Arch; the value lives on Bitcoin.** The risk engine marks positions, evaluates conditions and determines whether a breach has occurred on Arch, at 300ms finality. The ArchVM's UTXO-aware syscalls let that logic reference and spend Bitcoin UTXOs directly. The chain does the thinking; Bitcoin holds the asset. Neither layer is asked to do the thing it is bad at.

**Taproot is what makes this practical now, not in theory.** A complex spending policy commits to a single key-path output — cheap to spend, and on-chain it is indistinguishable from an ordinary payment. The combination of Taproot and production threshold signature schemes is recent enough that this design was not available to anyone attempting it a few years ago.

The result is that enforcement is a property of the collateral commitment itself. The lender's right to seize exists from day one, encoded rather than delegated. The client's Bitcoin never left Bitcoin, never became a receipt, and never sat on anyone's balance sheet.

## Why Bitcoin is where this starts

Arch begins with Bitcoin for two reasons, and they are separate.

**It is the hardest asset to enforce against.** No native seizure mechanism, no programmable settlement, no way to extend the protocol to add one. Building clearing that works here means it works anywhere else by construction. Solving the hard case first is a design decision, not a slogan.

**It carries the highest collateral weighting.** Deepest liquidity, longest history, lowest haircut in any serious risk framework. The most efficient credit in the system is extended against assets like this — which makes it striking that the least credit currently is.

## Bitcoin is the entry point, not the market

The account opens with Bitcoin. It does not stay only Bitcoin.

Credit drawn against Bitcoin gets deployed — into third-party strategies, house strategies, directional positions, tokenised treasuries and other collateral. Those positions sit in the same account and count as collateral too, at whatever haircut the risk engine assigns them. Over time Bitcoin becomes the largest collateral type in the book rather than the only one.

That is the right order of operations: start where enforcement is hardest and collateral quality is highest, then let everything else ladder in behind it at a haircut the risk engine sets.
