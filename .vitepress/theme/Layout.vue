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
    position: fixed;
    top: 0;
    right: 0;
    z-index: 100;
    padding: 0.5rem 1rem;
  }
  
  /* Hide the default VitePress mobile menu toggle */
  .VPNavBarHamburger {
    display: none !important;
  }
  
  /* Adjust content for fixed mobile header */
  .VPContent {
    padding-top: 60px;
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
  }
  
  /* Improve code block responsiveness */
  .vp-doc pre {
    overflow-x: auto;
  }
}
</style> 