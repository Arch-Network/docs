import { useRouter } from 'vitepress'
import { onMounted } from 'vue'

export function useNavigationSync() {
  const router = useRouter()
  
  onMounted(() => {
    // Send initial route
    window.parent.postMessage({
      type: 'vitepress-route',
      path: window.location.pathname
    }, '*')

    // Listen for route changes
    router.onAfterRouteChanged = (to) => {
      window.parent.postMessage({
        type: 'vitepress-route',
        path: to
      }, '*')
    }
  })
} 