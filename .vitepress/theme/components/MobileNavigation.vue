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
        <!-- Main navigation items -->
        <div class="mobile-nav-categories">
          <a href="/learn/introduction" class="mobile-nav-category">
            <div class="mobile-nav-category-icon">🏗️</div>
            <div class="mobile-nav-category-text">
              <h3>Learn</h3>
              <p>Introduction to Arch Network</p>
            </div>
          </a>
          
          <a href="/nodes/overview" class="mobile-nav-category">
            <div class="mobile-nav-category-icon">🔒</div>
            <div class="mobile-nav-category-text">
              <h3>Run a node</h3>
              <p>Node types and requirements</p>
            </div>
          </a>
          
          <a href="/developers/overview" class="mobile-nav-category">
            <div class="mobile-nav-category-icon">⚙️</div>
            <div class="mobile-nav-category-text">
              <h3>Developers</h3>
              <p>Build on Arch</p>
            </div>
          </a>
          
          <a href="/community/overview" class="mobile-nav-category">
            <div class="mobile-nav-category-icon">🏰</div>
            <div class="mobile-nav-category-text">
              <h3>Community</h3>
              <p>Join the Arch community</p>
            </div>
          </a>
        </div>
        
        <!-- Secondary links -->
        <div class="mobile-nav-section">
          <h3>Quick Links</h3>
          <div class="mobile-nav-links">
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
        </div>
        
        <!-- Social links -->
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
    width: 40px;
    height: 40px;
    background: var(--vp-c-bg-soft);
    border: 1px solid var(--vp-c-divider-light);
    border-radius: 8px;
    cursor: pointer;
    padding: 0;
    z-index: 201;
    position: relative;
  }

  .hamburger {
    width: 18px;
    height: 14px;
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
    transform: translateY(6px) rotate(45deg);
  }

  .hamburger.is-active span:nth-child(2) {
    opacity: 0;
  }

  .hamburger.is-active span:nth-child(3) {
    transform: translateY(-6px) rotate(-45deg);
  }

  .mobile-nav-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 199;
    backdrop-filter: blur(4px);
  }

  .mobile-nav-menu {
    position: fixed;
    top: 0;
    right: 0;
    width: 85%;
    max-width: 360px;
    height: 100%;
    background-color: var(--vp-c-bg);
    z-index: 200;
    padding: 1rem;
    box-shadow: -2px 0 20px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
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
    margin-bottom: 1.5rem;
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
    gap: 2rem;
  }

  /* App-like categorized menu items */
  .mobile-nav-categories {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .mobile-nav-category {
    display: flex;
    align-items: center;
    padding: 1rem;
    background-color: var(--vp-c-bg-soft);
    border-radius: 12px;
    text-decoration: none;
    color: var(--vp-c-text-1);
    transition: all 0.2s ease;
  }

  .mobile-nav-category:hover,
  .mobile-nav-category:active {
    background-color: var(--vp-c-bg-mute);
    transform: translateY(-2px);
  }

  .mobile-nav-category-icon {
    font-size: 1.75rem;
    margin-right: 1rem;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .mobile-nav-category-text {
    flex: 1;
  }

  .mobile-nav-category-text h3 {
    font-size: 1rem;
    font-weight: 600;
    margin: 0 0 0.25rem 0;
  }

  .mobile-nav-category-text p {
    font-size: 0.85rem;
    margin: 0;
    color: var(--vp-c-text-2);
  }

  .mobile-nav-section {
    margin-bottom: 1.5rem;
  }

  .mobile-nav-section h3 {
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--vp-c-text-2);
    margin-bottom: 0.75rem;
    font-weight: 600;
  }

  .mobile-nav-links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .mobile-nav-link {
    display: inline-block;
    padding: 0.5rem 0.75rem;
    border-radius: 8px;
    background-color: var(--vp-c-bg-soft);
    color: var(--vp-c-text-1);
    text-decoration: none;
    font-size: 0.9rem;
    transition: all 0.2s;
  }

  .mobile-nav-link:hover {
    background-color: var(--vp-c-bg-mute);
    color: var(--vp-c-brand);
  }

  .mobile-social-links {
    display: flex;
    gap: 0.75rem;
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
    transition: all 0.2s;
  }

  .mobile-social-link:hover {
    background-color: var(--vp-c-brand);
    color: white;
    transform: translateY(-2px);
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