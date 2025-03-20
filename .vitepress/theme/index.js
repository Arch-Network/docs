import { defineConfig } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import MobileNavigation from './components/MobileNavigation.vue'
import ResponsiveTable from './components/ResponsiveTable.vue'
import Layout from './Layout.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('MobileNavigation', MobileNavigation)
    app.component('ResponsiveTable', ResponsiveTable)
  }
} 