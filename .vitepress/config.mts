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
    [
      "link",
      {
        rel: "icon",
        type: 'image/x-icon',
        href: "/docs/favicon.ico"
      },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#fff" }],
    ["meta", { name: "theme-color", content: "#fff" }],
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
        content: "tmp-docs.arch.network",
      },
    ],
    [
      "meta",
      {
        name: "twitter:url",
        content: "https://tmp-docs.arch.network",
      },
    ],
    ["meta", { name: "og:image", content: "/logo-light.png" }],
    ["meta", { name: "apple-mobile-web-app-title", content: "Arch" }],
  ],
  sitemap: {
    hostname: "https://tmp-docs.arch.network",
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
        { text: "Learn", link: "/learn/overview" },
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
          text: 'History of Bitcoin Programmability', 
          link: '/learn/history-of-bitcoin-programmability'
        },
        { 
          text: 'The Challenges Facing Bitcoin DeFi', 
          link: '/learn/challenges-facing-bitcoin-defi'
        }
      ]
    },
    {
      text: 'Run a node',
      collapsed: true,
      items: [
        { text: 'Overview', link: '/nodes/overview' },
        { 
          text: 'Networks',
          collapsed: true,
          items: [
            { text: 'Testnet Guide', link: '/nodes/testnet-guide' }
          ]
        }
      ]
    },
    {
      text: 'Developers',
      collapsed: true,
      items: [
        { text: 'Overview', link: '/developers/overview ' },
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
