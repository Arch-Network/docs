// This script adds special classes to elements for better mobile styling

/**
 * Apply custom classes to hardware-related headings and feedback paragraphs
 */
export function applyMobileClasses() {
  if (typeof window === 'undefined') return
  
  // Wait for the DOM to be ready
  setTimeout(() => {
    // Apply hardware heading class
    const headings = document.querySelectorAll('h2, h3')
    headings.forEach(heading => {
      const text = heading.textContent.toLowerCase()
      if (text.includes('hardware') || text.includes('requirements') || text.includes('specifications')) {
        heading.classList.add('hardware-heading')
      }
    })
    
    // Apply feedback box class
    const paragraphs = document.querySelectorAll('p')
    paragraphs.forEach(p => {
      const text = p.textContent.toLowerCase()
      if (text.includes('feedback') || text.includes('issue') || 
          text.includes('request') || text.includes('bug')) {
        p.classList.add('feedback-box')
      }
    })
    
    // Find tables and add mobile navigation wrapper
    const tables = document.querySelectorAll('table')
    tables.forEach(table => {
      // Skip tables that are already wrapped
      if (table.parentNode.classList.contains('responsive-table-container')) return
      
      // Create wrapper elements
      const wrapper = document.createElement('div')
      wrapper.className = 'responsive-table-wrapper'
      
      const container = document.createElement('div')
      container.className = 'responsive-table-container'
      
      // Check if we're on mobile
      if (window.innerWidth < 768) {
        const notice = document.createElement('div')
        notice.className = 'mobile-table-notice'
        notice.innerHTML = '<span>👉 Scroll horizontally to see more</span>'
        wrapper.appendChild(notice)
      }
      
      // Replace the table with our wrapped version
      table.parentNode.insertBefore(wrapper, table)
      container.appendChild(table)
      wrapper.appendChild(container)
    })
  }, 100)
}

// Watch for route changes to reapply classes
export function setupRouteWatcher(router) {
  if (typeof window === 'undefined' || !router) return
  
  router.onAfterRouteChanged = () => {
    applyMobileClasses()
  }
} 