---
title: Bitcoin-Native vs. Bitcoin L2s & Metaprotocols
---

The recent programmability upgrades have led to a resurgent wave of experimentation on the Bitcoin base layer. More than [80 teams] are working on projects in the space, utilizing a wide-range of approaches including rollups, drivechains, sidechains, and others to more efficiently scale Bitcoin programmability. Many of these projects fall into a broad category of “Bitcoin Layer 2s,” with some that are already functional and others that are more dependent on future iterations of Bitcoin architecture, including [BitVM], [OP_CAT], and others.

A few emerging meta-protocols have also tried to add new programmable capabilities to Bitcoin by increasing off-chain compute capacity that requires first "wrapping" their Bitcoin into this new isolated system.

The majority of these L2 and metaprotocol models are making a trade-off that improves speed and scalability at the cost of tapping into Bitcoin’s full liquidity and security. However, the most dedicated Bitcoin holders do so precisely for its security. They exceedingly value self-custody of their assets and do not want to bridge their BTC in order to take advantage of enhanced programmability. 

Asking Bitcoin users to bridge is a major point of friction and a significant problem for Bitcoin L2s and metaprotocols to adopt users and acquire liquidity. They will need to design and construct a system that inspires confidence in the security and trust assumptions made in order to participate, yet most are constructed as multi-sigs that require taking on bridge/centralization risk to use them. Their business logic follows that made by notable L2s on Ethereum, such as Arbitrum, Blast, and Base (each have [between $1 and $3 billion in TVL locked] to date, but have struggled to attract a meaningful percentage of Ethereum’s [$60B+ in TVL]).

Certainly, Bitcoin L2s, metaprotocols and other bridge-based solutions will serve important roles in the Bitcoin ecosystem, just as Ethereum L2s do despite the vast majority of TVL resting on the Ethereum L1. However, Bitcoin currently has no native VM or programmability that allows L2s to communicate back to the L1 without additional trust assumptions. 

For the entire BTC programmability ecosystem to thrive, there is a significant need for a Bitcoin-native VM that does not require interacting with other bridges or chains. Once that critical infrastructure is built, Bitcoin developers will finally be able to fully capitalize on the potential of the world’s largest and most valuable blockchain by meeting users where they are — on the Bitcoin base layer — before optimizing for speed and scaling.

### Why L2s and Meta-protocols Aren’t Enough
Bitcoin Layer 2 solutions try to address the issues of Bitcoin by building their own execution layers, which users can bridge their assets onto. This process allows for scalable programmability. However, it transfers trust away from the Bitcoin base layer — by far the most liquid, secure, and decentralized blockchain — to these L2s. This isn’t appealing to many Bitcoiners, who have already had the ability to access programmability by bridging into Ethereum for years yet have largely chosen not to do so. The total value locked of “wrapped” BTC assets in DeFi — Bitcoin that is bridged onto Ethereum — is about $10 billion as of writing, less than 1% of the total Bitcoin market cap.


A few emerging meta-protocols have also tried to add new capacities to Bitcoin by increasing off-chain compute capacity. However, they can only handle state changes, and aren’t able to do asset transfers, which require the ability to sign Bitcoin transactions programmability and in a decentralized, secure fashion. In short, they have the same performance limitations of the Bitcoin L1 without the utility of Bitcoin L2s — plus, most also require that users bridge their assets, exposing them to the same fractured liquidity and compromised security concerns of L2s.


To build the pillars of DeFi, Bitcoin needs a truly Turing-complete execution platform, capable of executing both state changes and asset transfers. It must be able to power the complex, interoperable smart contracts needed to support DeFi apps without fracturing liquidity or compromising security. And it must do so in a trust-minimized way that doesn’t force Bitcoiners to trust their assets with insufficiently decentralized protocols.

[80 teams]: https://l2.watch/
[BitVM]: https://bitvm.org/
[OP_CAT]: https://hashrateindex.com/blog/a-guide-to-op_cat/
[between $1B and $3B in TVL locked]: https://defillama.com/chains/EVM
[$60B+ in TVL]: https://defillama.com/chain/Ethereum
