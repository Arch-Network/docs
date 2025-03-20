import { defineConfig } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import MobileNavigation from './components/MobileNavigation.vue'
import ResponsiveTable from './components/ResponsiveTable.vue'
import Layout from './Layout.vue'
import { applyMobileClasses, setupRouteWatcher } from './enhanceApp.js'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app, router }) {
    app.component('MobileNavigation', MobileNavigation)
    app.component('ResponsiveTable', ResponsiveTable)
    
    // For client-side only
    if (typeof window !== 'undefined') {
      // Apply mobile enhancements after mounting
      app.mixin({
        mounted() {
          applyMobileClasses()
        }
      })
      
      // Setup route change watcher
      setupRouteWatcher(router)
    }
  }
} 