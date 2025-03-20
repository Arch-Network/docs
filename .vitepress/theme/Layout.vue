<template>
  <div class="mobile-optimized-theme">
    <div class="mobile-header">
      <MobileNavigation />
    </div>
    <Layout>
      <template #aside-top>
        <div class="mobile-helper-notice">
          <div class="mobile-helper-icon">📱</div>
          <div class="mobile-helper-text">
            <p>Viewing on mobile? Use the menu in the top right for better navigation.</p>
          </div>
        </div>
      </template>
    </Layout>
  </div>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'

const { Layout } = DefaultTheme
const { frontmatter } = useData()
</script>

<style>
.mobile-optimized-theme {
  position: relative;
}

.mobile-header {
  display: none;
}

.mobile-helper-notice {
  display: none;
}

@media (max-width: 767px) {
  .mobile-header {
    display: block;
    position: absolute;
    top: 8px;
    right: 10px;
    z-index: 100;
  }
  
  /* Hide the default VitePress mobile menu toggle button */
  .VPNavBarHamburger {
    display: none !important;
  }
  
  /* Make sure the title doesn't overlap with our menu */
  .VPNavBarTitle {
    padding-right: 50px;
  }
  
  /* Fix scrolling behavior */
  html {
    scroll-padding-top: 60px;
  }
  
  /* Helper notice at the top of the sidebar */
  .mobile-helper-notice {
    display: flex;
    align-items: center;
    padding: 12px;
    background-color: var(--vp-c-bg-soft);
    border-radius: 8px;
    margin-bottom: 16px;
  }
  
  .mobile-helper-icon {
    font-size: 20px;
    margin-right: 12px;
  }
  
  .mobile-helper-text p {
    margin: 0;
    font-size: 0.85rem;
    line-height: 1.4;
    color: var(--vp-c-text-2);
  }
  
  /* Hide the sidebar toggle button on mobile */
  .VPNavBarHamburger {
    display: none !important;
  }
  
  /* Make sure content doesn't get hidden under fixed elements */
  .VPContent {
    padding-top: 0;
  }
  
  /* Allow content to scroll properly */
  .VPDoc {
    overflow-x: hidden;
  }
  
  /* Fix table scrolling on mobile */
  .vp-doc table {
    display: block;
    overflow-x: auto;
    width: 100%; 
    margin: 1rem 0;
  }
  
  /* Fix code blocks on mobile */
  .vp-doc pre {
    margin: 1rem -1rem;
    border-radius: 0;
  }
  
  /* Fix images on mobile */
  .vp-doc img {
    max-width: 100%;
    height: auto;
  }
}
</style> 