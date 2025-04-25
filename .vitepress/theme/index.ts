import DefaultTheme from 'vitepress/theme'
import { useNavigationSync } from './navigation-sync'
import { EnhanceAppContext } from 'vitepress'

export default {
  extends: DefaultTheme,
  setup() {
    useNavigationSync()
  }
} 