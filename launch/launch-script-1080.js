// MIRA Social Launch Promo (1080x1080) - Screenshot Helper

document.addEventListener('DOMContentLoaded', function() {
  const panels = document.querySelectorAll('.screenshot-panel');
  
  // Add click handlers for screenshot selection
  panels.forEach((panel, index) => {
    panel.addEventListener('click', function() {
      // Remove selection from all panels
      panels.forEach(p => p.classList.remove('selected'));
      
      // Add selection to clicked panel
      this.classList.add('selected');
      
      // Add screenshot-ready class for visual feedback
      this.classList.add('screenshot-ready');
      
      console.log(`Panel ${index + 1} selected for screenshot`);
    });
    
    // Add hover effects
    panel.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.02)';
      this.style.transition = 'transform 0.2s ease';
    });
    
    panel.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });
  
  // Keyboard shortcuts for panel selection
  document.addEventListener('keydown', function(e) {
    if (e.key >= '1' && e.key <= '3') {
      const panelIndex = parseInt(e.key) - 1;
      if (panels[panelIndex]) {
        panels.forEach(p => p.classList.remove('selected', 'screenshot-ready'));
        panels[panelIndex].classList.add('selected', 'screenshot-ready');
        console.log(`Panel ${e.key} selected via keyboard`);
      }
    }
    
    // Clear selection with Escape
    if (e.key === 'Escape') {
      panels.forEach(p => p.classList.remove('selected', 'screenshot-ready'));
      console.log('Selection cleared');
    }
  });
  
  // Add instructions
  console.log('MIRA Social Screenshot Helper Loaded:');
  console.log('- Click on any panel to select it for screenshot');
  console.log('- Use number keys 1-3 to select panels');
  console.log('- Press Escape to clear selection');
  console.log('- Selected panels will have a purple outline');
  console.log('- Optimized for 1080x1080 social media format');
});
