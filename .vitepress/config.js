// https://vitepress.dev/reference/site-config
export default {
  title: 'Arch Network',
  description: 'Bridgeless Bitcoin Programmability',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
    ],
    sidebar: {
      '/': [
        { text: 'Introduction', link: '/' },
      ]
    },
    outline: {
      level: 'deep',
      label: 'On this page'
    },
    search: {
      provider: 'local'
    },
    socialLinks: [
      // Your existing social links
    ]
  },
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ]
} 