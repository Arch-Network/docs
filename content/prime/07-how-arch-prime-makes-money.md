---
title: How Arch Prime makes money
---


Arch Prime does not fund client financing. Third-party liquidity providers do. Arch Prime earns a spread on flow it does not finance.

That is the whole revenue model, and the order of the words matters. The dollars a client borrows come from lenders who supply that credit. Arch Prime operates the account, sets the risk parameters, and lists the strategy the borrowed dollars are deployed into; the closeout it relies on runs as programs on Arch Network. It takes a share of the financing rate for doing so. It does not take the credit exposure underneath.

Revenue scales with borrowed balances rather than with committed capital. An account that posts collateral and borrows nothing generates nothing.

## Why third-party capital funds the book

Lenders underwrite the enforcement, not the borrower. They are not forming a view on Bitcoin's price and they are not extending credit to a name they have diligenced. They are underwriting whether their claim executes when an account breaches — on time, in a known order, without needing Arch Prime or the client to cooperate.

What supports that is enforcement without possession by a counterparty. The collateral stays a Bitcoin UTXO under predefined Taproot spending conditions and is never rehypothecated. The seizure rights against it are capped, programmatic, and do not depend on anyone's cooperation.

One boundary travels with that claim every time it is made: enforcement determines that closeout begins and in what order, not the price at which it completes. Any shortfall is a credit loss to the liquidity providers who chose to take that exposure, sized by rules published in advance.

## What this changes about the business

**Growth is not rationed by Arch Prime's balance sheet.** Because Arch Prime is not underwriting each client off its own book, the marginal client costs nothing to onboard. That is why there is no minimum account size, and why an account too small for a prime broker to bother with can be served here.

**There is no concentrated counterparty book to lose.** A balance-sheet prime broker's revenue compensates it for warehousing counterparty exposure; when a large client fails, the loss lands on the broker. Arch Prime's revenue compensates it for operating the account against an enforcement path that runs as code.

## What caps the book

Because the book is funded by committed lending dollars, capacity is a direct function of how many exist. Committed depth, not code, is the constraint:

```
supportable user collateral = (committed depth × utilisation) ÷ (leverage − 1)
```

A user seeking leverage λ consumes (λ − 1) dollars of borrow per dollar of collateral. At 2× that is one dollar borrowed per dollar posted; at 4× it is three. The same book serves three times fewer dollars of collateral when its users move from 2× to 4×.

**Target utilisation is 90%.** Utilisation is the share of committed depth actually lent out, and whatever is not lent out is the only thing a lender withdrawing or an account unwinding can draw on. The higher utilisation runs, the thinner that is.

Arch Prime rations across accounts with a per-account borrow cap expressed as a share of available depth rather than a fixed dollar amount, so no single account can consume the cohort's capacity. The cap limits how much of the book any one account can take. It does not set a floor under how small an account can be.

## Fees

A Prime account is charged on borrowed balances, for as long as they are outstanding. Deployed strategies carry their own economics, which sit with the strategy rather than with Arch Prime. Trading executed on Arch Network's concentrated-liquidity DEX and PropAMM carries the venue's fee.

Rates are not published here.

## Limits

- **Buying power is not a credit line.** It is recomputed from marks and haircuts continuously, and can fall without you doing anything.
- **Capacity can move against you.** Available depth is a function of committed lending, and both the per-account cap and the depth behind it can change.
- **Arch Prime not taking the credit exposure does not mean nobody does.** It sits with the liquidity providers, and a shortfall is a real loss to them.
- **A closeout is not a costless event for Arch Prime either.** The sweep puts Arch Prime's own capital in front of the position for the seconds between possession and repayment.

## Related

- [How it works](02-how-it-works)
- [Risk overview](06-risk)
