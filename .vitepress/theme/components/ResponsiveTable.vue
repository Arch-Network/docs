<template>
  <div class="responsive-table-container">
    <slot></slot>
  </div>
</template>

<style scoped>
.responsive-table-container {
  width: 100%;
  overflow-x: auto;
  margin: 1rem 0;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}

@media (max-width: 767px) {
  .responsive-table-container {
    -webkit-overflow-scrolling: touch;
  }
  
  /* Add horizontal scroll indicator for mobile */
  .responsive-table-container::after {
    content: "→";
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.2rem;
    color: var(--vp-c-brand);
    opacity: 0.7;
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0% { opacity: 0.5; }
    50% { opacity: 1; }
    100% { opacity: 0.5; }
  }
}
</style> 