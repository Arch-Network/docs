---
title: Glossary
---


**Arch Network** — the Bitcoin-native chain underneath everything here. It holds the collateral, authorizes any movement of it through threshold cryptography, sequences transactions that carry risk ahead of those that do not, settles to Bitcoin, and issues archUSD. Never used to mean the business.

**Arch Prime** — the business built on Arch Network and its anchor tenant. It extends credit against Bitcoin collateral, sets account parameters, lists strategies, runs product-layer closeout, and earns a spread. Never used to mean the chain.

**archUSD** — the ecosystem’s dollar. Issued by Arch Network, backed one-for-one by liquid USDC held at BitGo and Copper, and the unit client debt is denominated in. It wraps dollars that already arrived; nothing volatile stands behind a unit. In `arch-lend`, borrows are against the **archUSD bank** inside a **group**.

**Account health** — `weighted_assets − weighted_liabilities`. A signed surplus of weighted collateral over weighted debt. Healthy when weighted assets ≥ weighted liabilities. Liquidatable when maintenance health ≤ 0.

**Asset weight / liability weight** — per-bank risk multipliers (`asset_weight_init` / `asset_weight_maint` ≤ 1; `liability_weight_init` / `liability_weight_maint` ≥ 1). Launch ratios: max init LTV = asset_weight_init ÷ liability_weight_init; LLTV = asset_weight_maint ÷ liability_weight_maint.

**Atomic bundle** — the borrow-and-deploy transaction shape. Validate, borrow (liability shares), deposit into the strategy, place the strategy receipt on the ClendAccount path, recompute initial health and assert it — or the whole thing reverts.

**Balance** — one slot (max 16) on a ClendAccount for one bank. One-sided: asset shares or liability shares.

**Bank** — one mint inside a group. Holds share accounting, liquidity/insurance/fee vaults, weights, interest curve, oracle, and limits.

**ClendAccount** — the user’s lending account in a group. Holds balances; the authority is the signer.

**Concentration** — Arch Prime runs one whitelisted strategy, so every deployed account holds the same exposure. 100% by construction.

**Deposit / withdraw / borrow / repay / liquidate** — the `arch-lend` user instructions. Deposit credits asset shares; borrow opens liability shares; interest accrues by raising share value (simple interest).

**Group** (`ClendGroup`) — the market. Owns banks; every ClendAccount belongs to one group.

**InterestRateConfig** — per-bank piecewise-linear utilization curve: `optimal_utilization_rate`, `plateau_interest_rate`, `max_interest_rate`. Accrual is simple interest.

**Leverage ceiling** — 5.0×. Derived from the deployed strategy’s drawdown history so that the impairment exhausting equity is a multiple of the deepest recorded drawdown.

**Liquidation** — on-protocol (`lending_account_liquidate`): a liquidator pays a liability bank and seizes an asset bank; liquidator fee is a 7% program constant. Pre: maintenance health ≤ 0; post: health improves and stays ≤ 0. Residual insolvency → bankruptcy and socialized loss. Product-layer PropAMM/sweep closeout is a parallel unwind path.

**Liquidation rank** — product unwind order. Deployed strategy positions are rank 1; Bitcoin is rank 99. Bitcoin is last.

**PropAMM** — Arch Network’s proprietary market-making and routing system. With risk monitoring it routes product closeout flow across roughly 60 venues.

**Prime BTC** — spot Bitcoin exposure plus a return from market-neutral quantitative strategies.

**Prime Dollar** — dollar exposure plus a return from market-neutral quantitative strategies. It can lose value.

**Priority rail** — sequencing that puts transactions carrying risk ahead of transactions that do not.

**Receipt** — product-layer instrument a strategy issues for a deployed position, marked at NAV, transferable for sale exit, never held by the client. Protocol deposits themselves are asset shares on a Balance.

**Rehypothecation** — reusing client collateral. Posted Bitcoin is never lent out or re-pledged.

**Requirement type** — Initial (borrow/withdraw), Maintenance (liquidation), Equity (bankruptcy).

**Risk tier** — per bank: Collateral (deposits back borrows) or Isolated (that liability stands alone; isolated deposits contribute zero weighted assets).

**Sweep** — product closeout step: Arch Prime takes possession of collateral at a discount to market in roughly 300 milliseconds, then clears price exposure.

**Unwind route** — how a position becomes repayment. Redemption is slow but contractual; sale is fast but conditional. Decisive when setting asset weights.

**Utilization** — per bank: liabilities / assets. Unlent depth is what a withdrawing depositor or an unwinding account can draw on from that bank.

**Vault** (bank) — a bank’s token accounts: liquidity, insurance, fee.

**Velox Trading** — the quantitative trading firm running the market-neutral strategies behind Prime BTC and Prime Dollar, under a signed letter of intent with Arch. Supplies execution and a risk desk across roughly 60 venues.

**Weighted assets / weighted liabilities** — oracle-marked amounts × asset or liability weights, summed across the ClendAccount’s balances. The inputs to account health.
