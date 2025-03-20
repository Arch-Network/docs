import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en/US",
  title: "Arch documentation",
  description: "The official documentation of Arch Network",
  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: true,
  base: "/docs", 
  head: [
    // Basic favicon
    ["link", { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    
    // PNG formats for modern browsers
    ["link", { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" }],
    ["link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" }],
    
    // Apple Touch icon
    ["link", { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" }],
    
    // #fff
    ["meta", { name: "msapplication-TileColor", content: "#FF9900" }],
    ["meta", { name: "theme-color", content: "#FF9900" }],
    [
      "meta",
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
      },
    ],
    [
      "meta",
      {
        property: "description",
        content: "The official documentation of Arch Network.",
      },
    ],
    ["meta", { httpEquiv: "Content-Language", content: "en" }],
    ["meta", { name: "twitter:image", content: "/logo-light.png" }],
    [
      "meta",
      {
        name: "twitter:site:domain",
        content: "docs.arch.network",
      },
    ],
    [
      "meta",
      {
        name: "twitter:url",
        content: "https://docs.arch.network",
      },
    ],
    ["meta", { name: "og:image", content: "/logo-light.png" }],
    ["meta", { name: "apple-mobile-web-app-title", content: "Arch" }],
  ],
  sitemap: {
    hostname: "https://docs.arch.network",
  },
  themeConfig: {
    siteTitle: "Arch Documentation",
    // https://vitepress.dev/reference/default-theme-config
    nav: nav(),
    outline: {
      level: "deep",
    },

    search: {
      provider: "local",
      options: {
        detailedView: true,
      },
    },

    editLink: {
      pattern: "https://github.com/arch-network/docs/edit/main/:path",
      text: "Edit this page on GitHub",
    },

    sidebar: {
      "/": sidebarHome(),
    },

    logo: {
      alt: "Arch Logo",
      light: "/logo-light.png",
      dark: "/logo-light.png",
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/arch-network' },
      { icon: 'x', link: 'https://x.com/archntwrk' },
      { icon: 'discord', link: 'https://discord.gg/archnetwork' }
    ]
  }
})

function nav() {
  return [
    {
      text: "Join the network",
      items: [
        { text: "Learn", link: "/learn/introduction" },
        { text: "Run a node", link: "/nodes/overview" },
        { text: "Developers", link: "/developers/overview" },
        { text: "Community", link: "/community/overview" } 
      ]
    }
  ]
}

function sidebarHome() {
  return [
    {
      text: 'Learn',
      collapsed: true,
      items: [
        {
          text: 'Introduction',
          link: '/learn/introduction'
        },
        {
          text: 'History',
          collapsed: true,
          items: [
            { 
              text: 'History of Bitcoin Programmability', 
              link: '/learn/history/history-of-bitcoin-programmability'
            },
            { 
              text: 'The Challenges Facing Bitcoin DeFi', 
              link: '/learn/history/challenges-facing-bitcoin-defi'
            }
          ]
        },
        {
          text: 'Ecosystem',
          collapsed: true,
          items: [
            {
              text: 'Bitcoin-Native vs. Bitcoin L2s & Metaprotocols',
              link: '/learn/ecosystem/bitcoin-native-vs-l2-metaprotocols'
            }
          ]
        },
        {
          text: 'Fundamentals',
          collapsed: true,
          items: [
            {
              text: 'Overview',
              link: '/learn/fundamentals/overview'
            },
            {
              text: 'How Arch Works',
              link: '/learn/fundamentals/how-arch-works'
            },
            {
              text: 'Arch\' Signature Scheme Model (FROST + ROAST)',
              link: '/learn/fundamentals/arch-signature-scheme-model-frost-roast'
            },
            {
              text: 'Step-by-Step User Journey',
              link: '/learn/fundamentals/step-by-step-user-journey'
            },
            {
              text: 'Bridgeless Execution',
              link: '/learn/fundamentals/bridgeless-execution'
            },
            {
              text: 'Decentralized Validation',
              link: '/learn/fundamentals/decentralized-validation'
            },
            {
              text: 'State Transitions Anchored on Bitcoin',
              link: '/learn/fundamentals/state-transitions-anchored-on-bitcoin'
            },
            {
              text: 'Minimized Trust Assumptions',
              link: '/learn/fundamentals/minimized-trust-assumptions'
            }
          ]
        },
        {
          text: 'Use Cases',
          collapsed: true,
          items: [
            {
              text: 'DeFi',
              collapsed: true,
              items: [
                {
                  text: 'How Arch Unlocks the Core Pillars of DeFi',
                  link: '/learn/use-cases/defi/how-arch-unlocks-core-pillars-of-defi'
                },
                {
                  text: 'Examples',
                  collapsed: true,
                  items: [
                    {
                      text: 'AMMs, DEXs and LPs',
                      link: '/learn/use-cases/defi/examples/amms-dexs-lps'
                    },
                    {
                      text: 'Stablecoins',
                      link: '/learn/use-cases/defi/examples/stablecoins'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          text: 'Future',
          collapsed: true,
          items: [
            {
              text: 'Roadmap',
              link: '/learn/future/roadmap'
            },
            {
              text: 'Audits',
              link: '/learn/future/audits'
            }
          ]
        }
      ]
    },
    {
      text: 'Run a node',
      collapsed: true,
      items: [
        { text: 'Overview', link: '/nodes/overview' },
        { 
          text: 'Testnet',
          collapsed: true,
          items: [
            { text: 'Onboarding Guide', link: '/nodes/testnet/onboarding-guide' }
          ]
        },
        { text: 'FAQ', link: '/nodes/faq' }
      ]
    },
    {
      text: 'Developers',
      collapsed: true,
      items: [
        { text: 'Overview', link: '/developers/overview ' },
        {
          text: 'Testnet',
          collapsed: true,
          items: [
            {
              text: 'Onboarding Guide',
              link: '/developers/testnet/onboarding-guide'
            }
          ]
        },
        { text: 'FAQ', link: '/developers/faq' }
      ]
    },
    {
      text: 'Community',
      collapsed: true,
      items: [
        { text: 'Overview', link: '/community/overview' }
      ]
    }
  ]
}
