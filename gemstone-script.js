// =============================================
// GEMSTONE PORTFOLIO JAVASCRIPT
// Category Filtering System
// =============================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  initializeGemstonePortfolio();
  initializeGalleryLightbox();
});

// ===========================
// PORTFOLIO INITIALIZATION
// ===========================
function initializeGemstonePortfolio() {
  console.log('🔮 Gemstone Portfolio Initialized!');
  
  // Fade in effect
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 1s ease-in';
    document.body.style.opacity = '1';
  }, 100);
  
  // Initialize category buttons
  initializeCategoryButtons();
  
  // Show all items initially
  showAllItems();
}

// ===========================
// CATEGORY BUTTON SYSTEM
// ===========================
function initializeCategoryButtons() {
  const buttons = document.querySelectorAll('.gemstone-button');
  
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const category = this.getAttribute('data-category');
      const stoneName = this.getAttribute('data-stone');
      
      // Update active states
      buttons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // Filter gallery
      filterGallery(category);
      
      // Update category display
      updateCategoryDisplay(this.querySelector('.button-label').textContent);
      
      // Show notification
      showNotification(`Viewing: ${stoneName} Collection`);
      
      // Add pulse effect
      this.style.animation = 'none';
      setTimeout(() => {
        this.style.animation = '';
      }, 10);
      
      console.log(`Category selected: ${category}`);
    });
  });
}

// ===========================
// GALLERY FILTERING
// ===========================
function filterGallery(category) {
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  galleryItems.forEach((item, index) => {
    const itemCategory = item.getAttribute('data-category');
    
    if (category === 'all' || itemCategory === category) {
      // Show item with delay for staggered animation
      setTimeout(() => {
        item.classList.remove('hidden');
        item.classList.add('show');
        item.style.display = 'block';
      }, index * 50);
    } else {
      // Hide item
      item.classList.remove('show');
      item.classList.add('hidden');
      setTimeout(() => {
        item.style.display = 'none';
      }, 400);
    }
  });
  
  // Scroll to gallery smoothly
  setTimeout(() => {
    const gallery = document.getElementById('gallery');
    if (gallery) {
      const yOffset = -100;
      const y = gallery.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, 100);
}

function showAllItems() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach(item => {
    item.classList.remove('hidden');
    item.classList.add('show');
    item.style.display = 'block';
  });
}

// ===========================
// UPDATE CATEGORY DISPLAY
// ===========================
function updateCategoryDisplay(categoryName) {
  const categoryNameElement = document.getElementById('category-name');
  if (categoryNameElement) {
    // Fade out
    categoryNameElement.style.transition = 'opacity 0.2s ease';
    categoryNameElement.style.opacity = '0';
    
    // Change text
    setTimeout(() => {
      categoryNameElement.textContent = categoryName;
      categoryNameElement.style.opacity = '1';
    }, 200);
  }
}

// ===========================
// SCROLL TO GALLERY
// ===========================
function scrollToGallery() {
  const gallery = document.getElementById('gallery');
  if (gallery) {
    gallery.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// ===========================
// NOTIFICATION SYSTEM
// ===========================
function showNotification(message) {
  // Remove existing notification
  const existing = document.querySelector('.notification');
  if (existing) {
    existing.remove();
  }
  
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: linear-gradient(135deg, rgba(127, 255, 212, 0.95) 0%, rgba(100, 200, 180, 0.95) 100%);
    color: #000;
    padding: 15px 25px;
    border-radius: 15px;
    font-weight: 700;
    box-shadow: 0 8px 25px rgba(127, 255, 212, 0.5);
    z-index: 10000;
    animation: slideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border: 2px solid rgba(255, 255, 255, 0.3);
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
    setTimeout(() => notification.remove(), 400);
  }, 2500);
}

// ===========================
// GALLERY LIGHTBOX
// ===========================
function initializeGalleryLightbox() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('.gallery-image');
      const caption = item.querySelector('.gallery-caption h3');
      const category = item.querySelector('.gallery-caption p');
      
      if (img) {
        openLightbox(
          img.src, 
          img.alt, 
          caption ? caption.textContent : '',
          category ? category.textContent : ''
        );
      }
    });
  });
}

function openLightbox(src, alt, title, category) {
  // Create lightbox overlay
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox-overlay';
  lightbox.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.95);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    cursor: pointer;
    animation: fadeIn 0.3s ease;
  `;
  
  // Create image
  const img = document.createElement('img');
  img.src = src;
  img.alt = alt;
  img.style.cssText = `
    max-width: 90%;
    max-height: 70vh;
    object-fit: contain;
    border-radius: 15px;
    box-shadow: 0 20px 60px rgba(127, 255, 212, 0.4);
    border: 3px solid rgba(127, 255, 212, 0.3);
  `;
  
  lightbox.appendChild(img);
  
  // Create info container
  if (title || category) {
    const infoContainer = document.createElement('div');
    infoContainer.style.cssText = `
      margin-top: 30px;
      text-align: center;
    `;
    
    if (title) {
      const titleEl = document.createElement('h2');
      titleEl.textContent = title;
      titleEl.style.cssText = `
        color: rgba(127, 255, 212, 0.95);
        font-family: 'Pinyon Script', cursive;
        font-size: 3rem;
        margin-bottom: 10px;
        text-shadow: 0 0 20px rgba(127, 255, 212, 0.8);
      `;
      infoContainer.appendChild(titleEl);
    }
    
    if (category) {
      const categoryEl = document.createElement('p');
      categoryEl.textContent = category;
      categoryEl.style.cssText = `
        color: rgba(255, 255, 255, 0.8);
        font-size: 1.2rem;
        font-weight: 300;
      `;
      infoContainer.appendChild(categoryEl);
    }
    
    lightbox.appendChild(infoContainer);
  }
  
  // Create close button
  const closeBtn = document.createElement('div');
  closeBtn.innerHTML = '×';
  closeBtn.style.cssText = `
    position: absolute;
    top: 20px;
    right: 30px;
    font-size: 60px;
    color: rgba(127, 255, 212, 0.9);
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 300;
    line-height: 1;
    text-shadow: 0 0 15px rgba(127, 255, 212, 0.8);
  `;
  
  closeBtn.onmouseover = () => {
    closeBtn.style.transform = 'scale(1.2) rotate(90deg)';
    closeBtn.style.color = '#ffd700';
  };
  closeBtn.onmouseout = () => {
    closeBtn.style.transform = 'scale(1) rotate(0deg)';
    closeBtn.style.color = 'rgba(127, 255, 212, 0.9)';
  };
  
  lightbox.appendChild(closeBtn);
  document.body.appendChild(lightbox);
  
  // Close on click
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target === closeBtn) {
      closeLightbox(lightbox);
    }
  });
  
  // Close on ESC key
  const escHandler = (e) => {
    if (e.key === 'Escape') {
      closeLightbox(lightbox);
      document.removeEventListener('keydown', escHandler);
    }
  };
  document.addEventListener('keydown', escHandler);
}

function closeLightbox(lightbox) {
  lightbox.style.animation = 'fadeOut 0.3s ease';
  setTimeout(() => lightbox.remove(), 300);
}

// ===========================
// ANIMATIONS
// ===========================
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
  }
`;
document.head.appendChild(style);

// ===========================
// SMOOTH SCROLL FOR LINKS
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===========================
// KEYBOARD SHORTCUTS
// ===========================
document.addEventListener('keydown', (e) => {
  // Press 'A' to show all
  if (e.key === 'a' || e.key === 'A') {
    const allButton = document.querySelector('[data-category="all"]');
    if (allButton) {
      allButton.click();
    }
  }
  
  // Press numbers 1-9 for categories
  if (e.key >= '1' && e.key <= '9') {
    const buttons = document.querySelectorAll('.gemstone-button');
    const index = parseInt(e.key) - 1;
    if (buttons[index]) {
      buttons[index].click();
    }
  }
});

console.log('🔮 Gemstone Gallery Ready!');
console.log('💡 Tip: Press "A" to show all, or 1-9 for quick category selection');
