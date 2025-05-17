import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en/US",
  title: "Arch documentation",
  description: "The official documentation of Arch Network",
  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: true,
  base: "/",
  outDir: ".vitepress/dist",
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
          "width=device-width, initial-scale=1.0, viewport-fit=cover",
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
          text: 'Overview',
          link: '/learn/overview'
        },
        {
          text: 'The Bitcoin Builder\'s Dilemma',
          link: '/learn/the-bitcoin-builders-dilemma'
        },
        {
          text: 'The Arch Unlock',
          link: '/learn/the-arch-unlock'
        },
        {
          text: 'Bitcoin Ecosystem',
          link: '/learn/bitcoin-ecosystem.md'
        },
        {
          text: 'Architecture',
          collapsed: true,
          items: [
            {
              text: 'Architecture Overview',
              link: '/learn/architecture/overview'
            },
            {
              text: 'Consensus',
              link: '/learn/architecture/consensus/',
              items: [
                {
                  text: 'FROST',
                  link: '/learn/architecture/consensus/frost'
                },
                {
                  text: 'ROAST',
                  link: '/learn/architecture/consensus/roast'
                }
              ]
            },
            {
              text: 'Execution',
              link: '/learn/architecture/execution/',
              items: [
                {
                  text: 'ArchVM and Runtime',
                  link: '/learn/architecture/execution/archvm-and-runtime'
                },
                {
                  text: 'DAG Transaction Dependency Graph',
                  link: '/learn/architecture/execution/dag-transaction-dependency-graph'
                },
                {
                  text: 'Rollback/Reapply',
                  link: '/learn/architecture/execution/rollback-reapply'
                },
                {
                  text: 'Enabling Bitcoin Pre-Confirmations',
                  link: '/learn/architecture/execution/enabling-bitcoin-pre-confirmations'
                }
              ]
            },
            {
              text: 'Bitcoin Integration',
              link: '/learn/architecture/bitcoin-integration/',
              items: [
                {
                  text: 'Cryptographic Multisig as Smart Contract-Controlled Wallets',
                  link: '/learn/architecture/bitcoin-integration/cryptographic-multisig-as-smart-contract-controlled-wallets'
                },
                {
                  text: 'Titan Indexer',
                  link: '/learn/architecture/bitcoin-integration/titan-indexer'
                }
              ]
            },
            {
              text: 'Resources',
              link: '/learn/resources'
            },
            {
              text: 'Running a Node',
              link: '/learn/running-a-node'
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
