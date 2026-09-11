---
title: Why a Purpose-Built Chain
description: Why Arch Prime cannot be assembled on a rented chain — ordering, a unified stack, and closeout that does not wait on a buyer.
---

A business like this does not obviously need its own chain. Nothing stops someone assembling a similar product on infrastructure that already exists — lending markets, vaults, swap venues and stablecoins are all deployed protocols, and a competent team could put them together on a chain it does not control.

The concession is real, and the question that matters comes after it: not whether the product can be built on a chain whose ordering and priorities are set by someone else, for everyone, but what cannot be built underneath it.

Three things.

## A rented chain cannot see risk

A chain that was not designed for clearing is unaware of transaction type. It sees transactions and it sees fees. It does not see that one transaction is a liquidation on which a loan book's recoverability depends and another carries no systemic risk at all, so it cannot give the liquidation any priority. Both compete for the same blockspace on the same terms.

Put that in the only conditions that matter. Blockspace is most contested at peak volatility, which is also the exact moment a loan book's solvency depends on liquidations clearing promptly. The two conditions coincide: the moment the clearing transaction most needs to go through is the moment it is least assured of going through, and the chain has no way to tell that it should.

**The priority rail.** Arch Network sequences transactions that carry risk ahead of transactions that do not, which makes ordering a property of the system rather than an outcome of a fee auction against unrelated flow.

## A rented chain cannot hold a position together

The second thing a rented chain gives you is a product assembled from parts that do not belong to each other. Lending is one protocol, vaults another, swapping another, stablecoin issuance another. Each is separately governed, parameterized and upgraded, and a levered position spans all of them at once.

In calm markets the coordination holds. In volatile ones it is the coordination that fails — not usually any single component, since each does exactly what it was built to do. Each optimizes for its own solvency, its own liquidity, its own depositors. None optimizes for the solvency of a position that spans all four, and none can see that position whole. The failure is in the joints.

**One stack, and a dollar of its own.** Here those functions are one system rather than four counterparties to each other. Issuance, risk management and clearing sitting together changes what it costs and how long it takes to resolve a risk position.

In a fragmented system, resolving one means moving value: the protocol has to source the asset it repays in, from a market, and the transfer has to clear across rails that belong to other people. Every one of those steps is slowest and most expensive at precisely the moment the position needs resolving. The design has you buying your repayment asset into the worst bid of the year.

Here the repayment leg does not have to travel. Arch Network issues the dollar the debt is owed in, so what repays it is minted against reserves already sitting in custody rather than bought in a market and moved between parties and chains. Risk becomes a state the system can control rather than value it has to move, at the moment moving it is slowest and costliest.

## A rented chain cannot close a position without help

Conventional on-chain liquidation is an auction: the protocol offers collateral at a discount and waits for an outside participant with capital to arrive and take it. That participant is least likely to be there in the middle of a cascade, which is the only time it matters whether they come.

**The liquidation engine** does not depend on that arrival. The full sequence is in [How Arch Prime Works](./how-it-works); the short version is that Arch Prime sweeps the collateral itself, clears the price exposure across roughly 60 venues, and the proceeds land as reserve in the same account archUSD is minted from — so the pool is repaid in the unit the debt was denominated in, in under three seconds, with no human in the loop.

## The scale at which all three bind

All three are survivable at moderate size. Around $100 million of notional, a book can absorb the ordering uncertainty, the coordination gaps and a liquidation that waits on someone else's bid — losses land but not solvency events.

The alternatives work at that size. What changes is that the properties making them workable stop being adequate as the book scales into the tens of billions, which is what real capital markets for Bitcoin means. At that size, ordering guarantees, a stack that does not have to negotiate with itself, and a closeout that does not depend on a counterparty showing up stop being advantages and start becoming requirements.

## The posture difference

Other lending protocols manage risk with conservatism: wider parameters, larger buffers, less credit per unit of collateral. That is a rational response to their position. They cannot control what happens between a breach being detected and recovery completing, they cannot guarantee their liquidation is sequenced ahead of noise, and they cannot make four separately governed protocols cooperate in a cascade. So they hold back capital against the interval they do not control.

Arch Prime controls that interval, and manages risk proactively rather than defensively.

This is a term of business, not an architecture preference. Conservatism is not free, and it is not the protocol that pays for it. The client pays, in credit they do not get — the haircut wider than the asset's behaviour warrants, the leverage capped below what the collateral would support if the interval between detection and recovery were controlled. A buffer sized for an uncontrolled interval is capital sitting idle in the client's account, insuring the protocol against something it cannot govern.

## What this does not buy

* **It does not remove market risk.** Bitcoin can fall, a deployed strategy can be impaired, and both can happen faster than any ordering guarantee helps with.
* **It does not guarantee a recovery price.** A closeout that does not wait for a buyer still executes into a market. What is fixed is that closeout begins on time and completes without depending on anyone's arrival. What is not fixed is the price.
* **It does not remove the trust assumption**, it relocates it. Enforcement runs through a threshold of validators, and the validator set is operated by Arch at launch. Authority to upgrade the programs is a separate and equally real central point of failure.
* **It substitutes one kind of risk for another.** A mature chain has years of adversarial operation behind it, a large validator set, and implementation bugs already found by someone else. A newer chain does not. That is a real trade.

## Related Reading

* [Arch Prime](./arch-prime)
* [How Arch Prime Works](./how-it-works)
* [How Products Work Together](./integration)
