---
title: How it works
---

Four things happen in an Arch Prime account: you deposit collateral into a bank, you borrow against weighted collateral, you deploy the borrow into a strategy, and — if the account fails maintenance — it is liquidated.

The lending layer is [`arch-lend`](https://github.com/Arch-Network/arch-lend): a **group** owns **banks** (one per mint); each user holds balances in a **ClendAccount**.

## Group, banks, and the account

| Term | Meaning |
|---|---|
| **Group** (`ClendGroup`) | The market. Every bank and every account belongs to one group. |
| **Bank** | One mint inside the group. Holds deposits and borrows for that asset, accrues interest, and carries risk weights, oracle, and limits. Liquidity, insurance, and fee balances sit in the bank’s vault accounts. |
| **ClendAccount** | The user’s lending account in that group. Holds up to 16 **balances**. |
| **Balance** | One slot for one bank. A balance is one-sided: **asset shares** (deposit) or **liability shares** (borrow). |

Interest accrues per bank. Unhealthy accounts are liquidated against oracle prices.

## Risk weights

Each bank configures four weights:

- `asset_weight_init` / `asset_weight_maint` — how much of a deposited asset counts toward risk (≤ 1)
- `liability_weight_init` / `liability_weight_maint` — how much of a borrow counts against risk (≥ 1)

For a collateral/debt pair, the launch ratios are:

```
max init LTV = asset_weight_init  / liability_weight_init
LLTV         = asset_weight_maint / liability_weight_maint
```

Example (aBTC collateral, archUSD debt, liability weights = 1.0): asset weights `0.65` / `0.75` → **65%** max init LTV and **75%** LLTV.

Weights are the underwriting: price volatility, enforcement certainty, and unwind route all land in those four numbers. A lighter asset weight discounts collateral; a heavier liability weight burdens debt above face.

**Risk tiers** (per bank):

- **Collateral** — deposits contribute weighted assets.
- **Isolated** — that liability can only be held alone; deposits in an isolated bank contribute zero weighted assets.

**Requirement types:**

- **Initial** — checked when risk increases (borrow, withdraw). Uses time-weighted oracle when available; may discount init asset weight under deposit concentration.
- **Maintenance** — the liquidation threshold. Uses real-time oracle.
- **Equity** — used for bankruptcy and socialized-loss checks.

## Account health

The risk engine computes:

```
weighted_assets      = Σ (asset_amount      × price × asset_weight)
weighted_liabilities = Σ (liability_amount  × price × liability_weight)

account_health = weighted_assets − weighted_liabilities
```

Health is a signed surplus of weighted collateral over weighted debt. An action that raises risk is accepted when **initial** weighted assets ≥ weighted liabilities. The account is liquidatable when **maintenance health ≤ 0**.

Risk is additive across balances. Each collateral bank contributes its weighted assets; each liability bank its weighted liabilities. Nothing offsets anything — no correlation modelling, and a hedge in one leg does not reduce the requirement in another.

## Deposit

**Deposit** moves tokens into a bank’s **liquidity vault** and credits the ClendAccount with **asset shares**. Shares are internal accounting: accrual raises share value over time. A balance that already holds a liability in that bank cannot also take a deposit.

For Bitcoin collateral in Arch Prime, posting commits a UTXO to spending conditions on Bitcoin. The coin stays on Bitcoin, at its own address. What changes is the spend path: before, your signature; after, the account’s spending policy — withdrawal when health permits, enforcement when it does not.

**Withdraw** burns asset shares and returns tokens when the resulting account still clears the **initial** health check. A withdraw that would leave weighted assets below weighted liabilities is refused before Arch Network authorizes a Bitcoin spend.

## Borrow and deploy

Borrowing is denominated in **archUSD** against that bank: the account takes on **liability shares**. Borrowing and deploying are one atomic bundle:

1. Validate collateral balances and the requested borrow against **initial** health
2. **Borrow** — open or increase liability shares in the archUSD bank
3. Deposit the proceeds into the whitelisted strategy
4. Issue the strategy **receipt** into the ClendAccount path — not to you
5. If that receipt is a bankable mint, **deposit** it so it counts as collateral at that bank’s asset weights
6. Recompute health and assert the initial requirement

If any step fails, including the final health assertion, **the whole bundle reverts.** There is no partially-deployed position and no debt without the deposit.

**You never hold the borrowed funds.** The bundle has no step that pays out to you. A borrow with no deployment attached is not an instruction that exists. Borrowed value never leaves the collateral perimeter — that is what lets the account extend more buying power than a plain loan.

**Leverage** comes from repeating that shape: looping the deployed asset through further borrow-and-deploy until the target, with the health assertion on the end state.

At target leverage λ, the deployed position is λ times the equity behind it, so the impairment in the deployed leg that exhausts that equity is `1 / λ`:

| Leverage | Impairment that exhausts equity |
|---|---|
| 2.0× | 50% |
| 3.0× | 33% |
| 4.0× | 25% |
| 5.0× | 20% |

**The ceiling is 5.0×.** It is set from the deployed strategy’s drawdown history: the impairment required to exhaust equity is a multiple of the deepest drawdown that strategy has recorded. A shallower history can support more leverage; a deeper history supports less.

## Interest

Each bank accrues **simple** interest on a piecewise-linear utilization curve (`InterestRateConfig`). Utilization = liabilities / assets for that bank.

| Field | Role |
|---|---|
| `optimal_utilization_rate` | Break between the two linear segments |
| `plateau_interest_rate` | Borrow base rate at optimal utilization |
| `max_interest_rate` | Base rate as utilization → 100% |

Lending APR scales with utilization; borrowing APR adds insurance, group, and program fee layers. Quote only points frozen in the launch sheet as live; treat the rest of the curve as assumed shape until locked.

In Phase 1, aBTC is collateral and archUSD is the borrow mint — the aBTC bank’s borrow curve stays out of scope until aBTC is borrowed.

## Getting out

Three ways, all of which retire liability shares before collateral is fully released:

- **Sell the deployed position.** The receipt is transferable; exit and deleveraging are often a swap of the receipt rather than a redemption. Proceeds **repay** the archUSD bank.
- **Redeem it with the strategy.** On the strategy’s terms; the receipt is burned.
- **Repay from outside funds** and **withdraw** your Bitcoin.

**Redemption is slow but contractual.** **Sale is fast but conditional** — it needs a book, and it realizes market price rather than strategy NAV.

## Liquidation

When **maintenance** account health ≤ 0, the account is liquidatable. It is rule-based: nobody at Arch Prime decides whether your account is liquidated, and nobody can decide not to.

### On-protocol

`lending_account_liquidate`: a **liquidator** pays down the liquidatee’s **liability bank** and seizes from an **asset bank**. Maintenance health must already be ≤ 0; after the trade, health must improve and remain ≤ 0. The liquidator fee is a program constant (7%). If the account is still insolvent under the equity requirement, **`handle_bankruptcy`** draws the insurance vault first, then **`socialize_loss`** (remaining depositors take the loss through a lower asset share value), and the account is **DISABLED**.

### Product closeout

Arch Prime also runs a product unwind path. Positions clear by liquidation rank ascending: **deployed strategy positions are rank 1; Bitcoin is rank 99.** Bitcoin is last, and only if unwinding everything ahead did not restore maintenance health.

That path does not wait for a buyer:

1. **Breach.** Maintenance health ≤ 0. Risk systems see it as it happens.
2. **Sequencing.** The closeout enters the priority rail, ahead of flow that carries no risk.
3. **Clearing the exposure.** Where on-chain depth supports it, the position clears as an atomic swap. Where it does not, Arch Prime sweeps Bitcoin collateral at a discount to market — possession in roughly 300 milliseconds, two blocks to Arch finality — and PropAMM and risk monitoring route the sale or hedge across roughly 60 venues.
4. **Reserve.** Bitcoin is sold into USDC on a centralized exchange; that USDC lands where archUSD reserves are held. Proceeds arrive as reserve.
5. **Issuance.** With the dollars already in reserve, archUSD is minted one-for-one.
6. **Repayment.** The archUSD **bank** is repaid in archUSD — the unit the liability was denominated in.

From breach to repayment, automatically, in under three seconds when the product path runs. Clearing price risk and funding repayment are the same action — reserve first, issuance second.

Closeout begins on time, in a known order, without depending on a liquidator’s arrival. It does not choose the price the market pays at that moment. A closeout can still leave a shortfall; any shortfall is a credit loss to the depositors who financed the position, and may be socialized when bankruptcy is reached.

## Related

- [archUSD](04-archusd)
- [Prime BTC and Prime Dollar](05-prime-btc-and-prime-dollar)
- [Risk overview](06-risk)
- Protocol: [Arch-Network/arch-lend](https://github.com/Arch-Network/arch-lend)
