<template>
  <div class="mobile-navigation" :class="{ 'is-open': isOpen }">
    <button @click="toggleMenu" class="mobile-nav-toggle" aria-label="Toggle navigation menu">
      <div class="hamburger" :class="{ 'is-active': isOpen }">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
    
    <div class="mobile-nav-overlay" v-if="isOpen" @click="closeMenu"></div>
    
    <div class="mobile-nav-menu">
      <div class="mobile-nav-header">
        <div class="mobile-nav-logo">
          <img :src="theme.logo?.light" alt="Arch Logo" v-if="theme.logo?.light">
          <span v-else>{{ theme.siteTitle || 'Arch Documentation' }}</span>
        </div>
        <button @click="closeMenu" class="mobile-nav-close" aria-label="Close navigation menu">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      
      <div class="mobile-nav-content">
        <div class="mobile-nav-section">
          <h3>Main Navigation</h3>
          <a 
            v-for="navItem in navItems" 
            :key="navItem.text" 
            :href="navItem.link" 
            class="mobile-nav-link"
            @click="closeMenu"
          >
            {{ navItem.text }}
          </a>
        </div>
        
        <div class="mobile-nav-section">
          <h3>Resources</h3>
          <a href="/learn/introduction" class="mobile-nav-link" @click="closeMenu">Introduction</a>
          <a href="/developers/overview" class="mobile-nav-link" @click="closeMenu">Developer Docs</a>
          <a href="/nodes/overview" class="mobile-nav-link" @click="closeMenu">Run a Node</a>
          <a href="/community/overview" class="mobile-nav-link" @click="closeMenu">Community</a>
        </div>
        
        <div class="mobile-nav-section">
          <h3>Connect</h3>
          <div class="mobile-social-links">
            <a 
              v-for="social in theme.socialLinks" 
              :key="social.link" 
              :href="social.link" 
              target="_blank" 
              rel="noopener noreferrer"
              class="mobile-social-link"
            >
              <component :is="getSocialIcon(social.icon)" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useData } from 'vitepress'

const { theme } = useData()
const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
  document.body.classList.toggle('nav-open', isOpen.value)
}

const closeMenu = () => {
  isOpen.value = false
  document.body.classList.remove('nav-open')
}

const navItems = computed(() => {
  if (theme.value.nav) {
    if (typeof theme.value.nav === 'function') {
      return theme.value.nav()
    }
    return theme.value.nav
  }
  return []
})

// Simple function to handle social icons
const getSocialIcon = (icon) => {
  // You can replace this with actual icon components if needed
  return {
    template: `<span class="social-icon ${icon}"></span>`
  }
}
</script>

<style scoped>
.mobile-navigation {
  display: none;
}

@media (max-width: 767px) {
  .mobile-navigation {
    display: block;
    position: relative;
    z-index: 100;
  }

  .mobile-nav-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 201;
    position: relative;
  }

  .hamburger {
    width: 20px;
    height: 16px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .hamburger span {
    display: block;
    height: 2px;
    width: 100%;
    background-color: var(--vp-c-text-1);
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  .hamburger.is-active span:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
  }

  .hamburger.is-active span:nth-child(2) {
    opacity: 0;
  }

  .hamburger.is-active span:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
  }

  .mobile-nav-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 199;
  }

  .mobile-nav-menu {
    position: fixed;
    top: 0;
    right: 0;
    width: 85%;
    max-width: 320px;
    height: 100%;
    background-color: var(--vp-c-bg);
    z-index: 200;
    padding: 1rem;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    transform: translateX(100%);
    overflow-y: auto;
    display: flex;
    flex-direction: column;
  }

  .is-open .mobile-nav-menu {
    transform: translateX(0);
  }

  .mobile-nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--vp-c-divider);
    margin-bottom: 1rem;
  }

  .mobile-nav-logo {
    font-weight: bold;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
  }

  .mobile-nav-logo img {
    max-height: 30px;
    margin-right: 8px;
  }

  .mobile-nav-close {
    background: transparent;
    border: none;
    color: var(--vp-c-text-2);
    cursor: pointer;
    padding: 0.5rem;
  }

  .mobile-nav-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .mobile-nav-section {
    margin-bottom: 1rem;
  }

  .mobile-nav-section h3 {
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--vp-c-text-2);
    margin-bottom: 0.75rem;
  }

  .mobile-nav-link {
    display: block;
    padding: 0.5rem 0;
    color: var(--vp-c-text-1);
    text-decoration: none;
    font-size: 1.1rem;
    transition: color 0.2s;
  }

  .mobile-nav-link:hover {
    color: var(--vp-c-brand);
  }

  .mobile-social-links {
    display: flex;
    gap: 1rem;
    margin-top: 0.5rem;
  }

  .mobile-social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: var(--vp-c-bg-soft);
    color: var(--vp-c-text-1);
    transition: background-color 0.2s, color 0.2s;
  }

  .mobile-social-link:hover {
    background-color: var(--vp-c-brand);
    color: white;
  }

  /* Social icon classes */
  .social-icon {
    font-size: 1.2rem;
  }

  .social-icon.github::before {
    content: 'GH';
  }

  .social-icon.x::before {
    content: 'X';
  }

  .social-icon.discord::before {
    content: 'DC';
  }

  /* Global body class for preventing scroll when nav is open */
  :global(body.nav-open) {
    overflow: hidden;
  }
}
</style> 