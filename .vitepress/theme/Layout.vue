<template>
  <div class="theme">
    <div class="mobile-header">
      <MobileNavigation />
    </div>
    <Layout />
  </div>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'

const { Layout } = DefaultTheme
const { frontmatter } = useData()
</script>

<style>
.mobile-header {
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
  
  /* Hide the default VitePress mobile menu toggle */
  .VPNavBarHamburger {
    display: none !important;
  }
  
  /* Make sure the title doesn't overlap with our menu */
  .VPNavBarTitle {
    padding-right: 50px;
  }
  
  /* Adjust content for proper layout */
  .VPContent {
    padding-top: 0;
  }
  
  /* Make images responsive */
  .VPContent img {
    max-width: 100%;
    height: auto;
  }
  
  /* Improve table responsiveness */
  .vp-doc table {
    display: block;
    overflow-x: auto;
    width: 100%;
    margin: 1rem 0;
  }
  
  /* Improve code block responsiveness */
  .vp-doc pre {
    overflow-x: auto;
  }
}
</style> 