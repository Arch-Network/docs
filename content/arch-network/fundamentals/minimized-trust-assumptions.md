---
title: Minimized Trust Assumptions
---

By allowing users to invoke programs with a native Bitcoin transaction, Arch improves the user experience by reducing the number of steps needed to interact with the platform, and reduces security risk since there is no bridge implementation to depend on. Furthermore, unlike chains that require bridges, there is no fear of assets being marooned in the Arch network because assets are never stored on Arch; should a bridge go offline in other scenarios, a user's funds would effectively be stuck until the bridge was able to be started again.

Users of applications who use Arch behind the scenes put trust in the decentralized key generation scheme for assets only while their assets are controlled by Arch Bitcoin addresses, and also for the consistency of external-to-Bitcoin state. Users also place trust in the program authors, the same as they would with other networks that support smart contracts, though these programs can and should be audited first before being used, as a best practice.
