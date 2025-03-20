<template>
  <div class="responsive-table-wrapper">
    <div v-if="isMobile" class="mobile-table-notice">
      <span>👉 Scroll horizontally to see more</span>
    </div>
    <div class="responsive-table-container">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMobile = ref(false)

const checkMobile = () => {
  isMobile.value = window.innerWidth < 768
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>

<style scoped>
.responsive-table-wrapper {
  position: relative;
  margin: 1.5rem 0;
}

.responsive-table-container {
  width: 100%;
  overflow-x: auto;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  background-color: var(--vp-c-bg-soft);
  position: relative;
}

.mobile-table-notice {
  display: none;
}

@media (max-width: 767px) {
  .responsive-table-container {
    -webkit-overflow-scrolling: touch;
    border-radius: 0;
    margin: 0 -1rem;
    width: calc(100% + 2rem);
    box-shadow: none;
    border: 1px solid var(--vp-c-divider);
  }
  
  .mobile-table-notice {
    display: block;
    font-size: 0.75rem;
    color: var(--vp-c-text-2);
    margin-bottom: 0.5rem;
    text-align: right;
    padding-right: 0.5rem;
  }

  /* Custom styles for tables in our container */
  :deep(table) {
    margin: 0;
    border: none;
    width: 100%;
    font-size: 0.85rem;
  }
  
  :deep(th) {
    white-space: nowrap;
    background-color: var(--vp-c-bg-soft);
    position: sticky;
    left: 0;
    z-index: 1;
  }
  
  :deep(th:first-child) {
    position: sticky;
    left: 0;
    z-index: 2;
    box-shadow: 1px 0 5px rgba(0, 0, 0, 0.05);
  }
  
  :deep(td:first-child) {
    position: sticky;
    left: 0;
    background-color: var(--vp-c-bg);
    z-index: 1;
    box-shadow: 1px 0 5px rgba(0, 0, 0, 0.05);
  }
}

/* Tablet */
@media (min-width: 768px) and (max-width: 1023px) {
  .responsive-table-container {
    overflow-x: auto;
  }
  
  :deep(table) {
    margin: 0;
    width: 100%;
  }
}
</style> 