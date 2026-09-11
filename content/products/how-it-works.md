---
title: How Arch Prime Works
description: How on-chain prime services work on Arch Prime — collateral, borrowing, deployment, and closeout.
---

Four things happen in an Arch Prime account: you post collateral, you borrow against it, you deploy the borrowing into a strategy, and — if the account's health falls far enough — the position is closed out.

## The margin account

An account holds an owner, a set of positions, and a set of debts, and derives one number across all of them.

```
collateralValue = Σ (quantity × price × (1 − haircut))
healthFactor    = collateralValue / totalDebt
```

Every action is accepted or rejected on what it does to the health factor. Liquidation is triggered when the health factor falls below 1. Read it as a ratio, not a percentage: at 2.0 your haircut collateral is twice your debt; below 1.0 the account is in liquidation.

The haircut is the discount applied to a position before it counts as collateral, set per asset from three inputs:

```
haircut = f(price volatility, enforcement certainty, unwind route)
```

The unwind route is the input people forget. An asset that is volatile but exits immediately can carry a smaller haircut than a stable asset that takes a month to exit, because the haircut is not only a price buffer — it is a statement about whether the position can be turned into repayment inside the window a closeout has.

**Margin is additive.** A single health factor across every position gives an account that feels like a cross-margin account. It is not one. There is no correlation modelling and nothing offsets anything: each position contributes its haircut value to the numerator, each debt its face to the denominator. A hedge in one leg does not reduce the requirement in another.

## Posting collateral

Posting commits an existing unspent transaction output to a set of spending conditions. The coin stays on Bitcoin, at its own address, and is never reissued anywhere else. What changes is the condition under which it can be spent: before, your signature; after, the spending policy the account was created under — which admits your withdrawal when the account's health permits it, and admits enforcement when it does not.

Withdrawal is permitted whenever the resulting health factor is still at or above 1. A withdrawal that would leave it below is refused before Arch Network is ever asked to authorize a Bitcoin transaction.

## Borrowing and deploying

Borrowing is denominated in archUSD, the dollar the system runs on. Borrowing and deploying are not two steps you perform in sequence — they are one atomic bundle:

1. Validate the collateral and the requested borrow
2. Issue the debt against the account
3. Deposit the proceeds into the whitelisted strategy
4. Mint the receipt directly into the margin account — not to you
5. Register the receipt as a position, so it counts as collateral at its haircut
6. Recompute health and assert it

If any step fails, including the final health assertion, the whole bundle reverts. There is no partially-deployed position and no debt issued against a deposit that did not happen.

You never hold the borrowed funds. The bundle has no step that pays out to you, so there is no moment at which borrowed capital exists in a form you could move. A borrow with no deployment attached is not an instruction that exists. That property is what lets the account extend more buying power than a plain loan would — the borrowed value never leaves the collateral perimeter.

Leverage comes from repeating that shape: looping the deployed asset through further borrow-and-deploy instructions until the target is reached, with the health assertion applied to the end state.

At target leverage λ, the deployed position is λ times the equity behind it, so the impairment in the deployed leg that exhausts that equity is `1 / λ`.

## Getting out

Three ways, all of which retire the debt before collateral is released:

1. **Sell the deployed position.** The receipt is a transferable instrument, and in many cases exit and deleveraging are a swap of the receipt rather than a redemption. Proceeds retire the borrowing.
2. **Redeem it with the strategy.** On the strategy's terms; the receipt is burned.
3. **Repay from outside funds and withdraw your Bitcoin.**

The two closing routes are not interchangeable. Redemption is slow but contractual — it runs on the strategy's stated terms, including whatever gates and notice periods those terms provide for. Sale is fast but conditional — it depends on there being a book to sell into at the moment you need one, and it realizes market price rather than the strategy's NAV.

## Closeout

If the health factor falls below 1, the account is closed out. It is rule-based: nobody at Arch Prime decides whether your account is liquidated, and nobody can decide not to.

Positions are unwound by liquidation rank ascending. Deployed strategy positions are rank 1; Bitcoin is rank 99. Bitcoin is the last thing touched, and only if unwinding everything ahead of it did not restore health. That ordering follows the risk: it sits in the deployed leg, which is levered, which is why those positions are whitelisted, underwritten and liquidated first.

The closeout does not wait for a buyer. Conventional on-chain liquidation is an auction — the protocol offers collateral at a discount and waits for an outside participant with capital to arrive, which is least likely in the middle of a cascade. Here the sequence runs on its own:

1. **Breach.** Health factor falls below 1. The risk systems see it as it happens.
2. **Sequencing.** The closeout enters the priority rail, ahead of flow that carries no risk.
3. **Clearing the exposure.** Where on-chain depth supports it, the position clears as an atomic swap. Where it does not, Arch Prime sweeps the Bitcoin collateral at a discount to market — possession in roughly 300 milliseconds, two blocks to Arch finality — and PropAMM and the risk monitoring systems route the sale or hedge across roughly 60 venues to wherever execution is best.
4. **Reserve.** The Bitcoin is sold into USDC on a centralized exchange, and that USDC lands in the account where archUSD reserves are held. The proceeds do not get sent anywhere afterwards. They arrive as reserve.
5. **Issuance.** With the dollars already sitting in reserve, archUSD is minted against them on-chain — the same one-for-one rule as any other mint.
6. **Repayment.** The lending pool is repaid in archUSD, the unit the debt was denominated in from the start.

From breach to repayment, automatically, in under three seconds.

The place the collateral is sold is the place the reserve lives, so clearing the price risk and funding the repayment are the same action — reserve first, issuance second.

## Related Reading

* [Arch Prime](./arch-prime)
* [Why a Purpose-Built Chain](./why-a-purpose-built-chain)
* [Arch Lend](./arch-lend)
* [Arch Swap](./arch-swap)
* [How Products Work Together](./integration)
