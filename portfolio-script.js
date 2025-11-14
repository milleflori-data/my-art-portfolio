// =============================================
// INTEGRATED ART PORTFOLIO JAVASCRIPT
// =============================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  initializePortfolio();
  loadButtonsFromJSON();
  initializeGalleryLightbox();
});

// ===========================
// PORTFOLIO INITIALIZATION
// ===========================
function initializePortfolio() {
  console.log('Art Portfolio Initialized!');
  
  // Add fade-in effect to body
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 1s ease-in';
    document.body.style.opacity = '1';
  }, 100);
}

// ===========================
// SCROLL TO GALLERY FUNCTION
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
// DREAMSTONE BUTTON MANAGEMENT
// ===========================
async function loadButtonsFromJSON() {
  try {
    const res = await fetch("buttons.json");
    
    if (!res.ok) {
      console.warn("buttons.json not found. Using default buttons.");
      loadDefaultButtons();
      return;
    }
    
    const buttons = await res.json();
    const container = document.getElementById('button-container');
    
    if (!container) {
      console.error("Button container not found");
      return;
    }
    
    // Clear container
    container.innerHTML = '';
    
    buttons.forEach(btn => {
      const button = document.createElement("button");
      button.id = btn.id;
      button.className = btn.class;
      button.innerText = btn.label;
      
      // Set background image if provided
      if (btn.image) {
        button.style.backgroundImage = `url('${btn.image}')`;
        button.style.backgroundSize = "cover";
        button.style.backgroundPosition = "center";
      }
      
      // Set click handler
      button.onclick = () => {
        console.log(btn.onClickMessage || `${btn.label} clicked!`);
        showNotification(btn.onClickMessage || `${btn.label} Gallery`);
        
        // Add pulse effect
        button.classList.add('pulse');
        setTimeout(() => button.classList.remove('pulse'), 1500);
      };
      
      container.appendChild(button);
    });
    
    // Initialize button event listeners
    initializeButtonListeners();
    
  } catch (error) {
    console.error("Error loading buttons:", error);
    loadDefaultButtons();
  }
}

// Default buttons fallback
function loadDefaultButtons() {
  const container = document.getElementById('button-container');
  if (!container) return;
  
  const defaultButtons = [
    { id: 'btn_all', label: 'All Artwork', class: 'button-dreamstone button-glow' },
    { id: 'btn_paintings', label: 'Paintings', class: 'button-dreamstone' },
    { id: 'btn_digital', label: 'Digital Art', class: 'button-dreamstone' },
    { id: 'btn_sketches', label: 'Sketches', class: 'button-dreamstone button-shadow' }
  ];
  
  container.innerHTML = '';
  
  defaultButtons.forEach(btn => {
    const button = document.createElement("button");
    button.id = btn.id;
    button.className = btn.class;
    button.innerText = btn.label;
    button.onclick = () => {
      console.log(`${btn.label} clicked!`);
      showNotification(`Showing: ${btn.label}`);
    };
    container.appendChild(button);
  });
  
  initializeButtonListeners();
}

// Initialize button click handlers
function initializeButtonListeners() {
  document.querySelectorAll('.button-dreamstone').forEach(button => {
    button.addEventListener('click', () => {
      console.log('Dreamstone button clicked!');
      button.classList.add('pulse');
      setTimeout(() => button.classList.remove('pulse'), 1500);
    });
  });
}

// Button state management functions
function toggleButtonState(btnId) {
  const btn = document.getElementById(btnId);
  if (btn) {
    btn.classList.toggle('active');
  }
}

function setButtonGlow(btnId, enable) {
  const btn = document.getElementById(btnId);
  if (btn) {
    if (enable) {
      btn.classList.add('button-glow');
    } else {
      btn.classList.remove('button-glow');
    }
  }
}

// ===========================
// EXPANDABLE PANEL TOGGLE
// ===========================
function togglePanel(panel) {
  // Optional: Add click behavior for panels
  const panels = document.querySelectorAll('.mast-panel');
  panels.forEach(p => {
    if (p !== panel) {
      p.style.flexGrow = '1';
    }
  });
  panel.style.flexGrow = '3';
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
      
      if (img) {
        openLightbox(img.src, img.alt, caption ? caption.textContent : '');
      }
    });
  });
}

function openLightbox(src, alt, title) {
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
    max-height: 80vh;
    object-fit: contain;
    border-radius: 10px;
    box-shadow: 0 10px 50px rgba(127, 255, 212, 0.5);
  `;
  
  // Create title
  if (title) {
    const titleEl = document.createElement('h2');
    titleEl.textContent = title;
    titleEl.style.cssText = `
      color: rgba(127, 255, 212, 0.9);
      font-family: 'Pinyon Script', cursive;
      font-size: 2.5rem;
      margin-top: 20px;
      text-shadow: 0 0 20px rgba(127, 255, 212, 0.8);
    `;
    lightbox.appendChild(img);
    lightbox.appendChild(titleEl);
  } else {
    lightbox.appendChild(img);
  }
  
  // Create close button
  const closeBtn = document.createElement('div');
  closeBtn.innerHTML = '×';
  closeBtn.style.cssText = `
    position: absolute;
    top: 20px;
    right: 30px;
    font-size: 50px;
    color: rgba(127, 255, 212, 0.9);
    cursor: pointer;
    transition: transform 0.3s ease;
  `;
  closeBtn.onmouseover = () => closeBtn.style.transform = 'scale(1.2)';
  closeBtn.onmouseout = () => closeBtn.style.transform = 'scale(1)';
  
  lightbox.appendChild(closeBtn);
  document.body.appendChild(lightbox);
  
  // Close on click
  lightbox.addEventListener('click', () => {
    lightbox.style.animation = 'fadeOut 0.3s ease';
    setTimeout(() => lightbox.remove(), 300);
  });
  
  // Close on ESC key
  const escHandler = (e) => {
    if (e.key === 'Escape') {
      lightbox.style.animation = 'fadeOut 0.3s ease';
      setTimeout(() => lightbox.remove(), 300);
      document.removeEventListener('keydown', escHandler);
    }
  };
  document.addEventListener('keydown', escHandler);
}

// ===========================
// NOTIFICATION SYSTEM
// ===========================
function showNotification(message) {
  // Remove existing notification if any
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
    background: rgba(127, 255, 212, 0.95);
    color: #000;
    padding: 15px 25px;
    border-radius: 10px;
    font-weight: 600;
    box-shadow: 0 5px 20px rgba(127, 255, 212, 0.5);
    z-index: 10000;
    animation: slideIn 0.3s ease;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
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
// THEME MANAGEMENT (Optional)
// ===========================
function loadThemeFromJSON(jsonPath) {
  fetch(jsonPath)
    .then(response => response.json())
    .then(data => {
      if (data.glowColor) {
        document.documentElement.style.setProperty('--glow-color', data.glowColor);
      }
      if (data.accentColor) {
        document.documentElement.style.setProperty('--accent-color', data.accentColor);
      }
      console.log("Theme loaded successfully");
    })
    .catch(error => {
      console.warn("Could not load theme:", error);
    });
}

// ===========================
// SMOOTH SCROLL FOR ALL LINKS
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

console.log('🎨 Art Portfolio Ready!');
