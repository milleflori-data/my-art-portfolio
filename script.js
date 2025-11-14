// ===========================
// Dreamstone UI Pack Script
// ===========================

// Add click handlers to all Dreamstone buttons
document.addEventListener('DOMContentLoaded', () => {
  // Load buttons first
  loadButtonsFromJSON();
  
  // Initialize button event listeners after a short delay to ensure buttons are loaded
  setTimeout(initializeButtonListeners, 100);
});

function initializeButtonListeners() {
  document.querySelectorAll('.button-dreamstone').forEach(button => {
    button.addEventListener('click', () => {
      console.log('Dreamstone button clicked:', button.id);
      
      // Add pulse effect
      button.classList.add('pulse');
      setTimeout(() => button.classList.remove('pulse'), 1500);
      
      // Filter gallery based on button clicked (optional feature)
      const buttonId = button.id;
      console.log(`Filter gallery for: ${buttonId}`);
      // You can add gallery filtering logic here
    });
  });
}

// ===========================
// Button State Management
// ===========================

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
// Load Buttons from JSON
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
        if (btn.onClickMessage) {
          showNotification(btn.onClickMessage);
        }
      };
      
      container.appendChild(button);
    });
    
    // Reinitialize event listeners
    initializeButtonListeners();
    
  } catch (error) {
    console.error("Error loading buttons:", error);
    loadDefaultButtons();
  }
}

// ===========================
// Default Buttons (Fallback)
// ===========================

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

// ===========================
// Theme Management
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
// Notification System
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
    color: #2c3e50;
    padding: 15px 25px;
    border-radius: 10px;
    font-weight: 600;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
    z-index: 10000;
    animation: slideIn 0.3s ease;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Add notification animations
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
`;
document.head.appendChild(style);

// ===========================
// Gallery Enhancements
// ===========================

// Add lightbox functionality for gallery images
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        const img = item.querySelector('.gallery-image');
        if (img) {
          openLightbox(img.src, img.alt);
        }
      });
    });
  }, 200);
});

function openLightbox(src, alt) {
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.95);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    cursor: pointer;
    animation: fadeIn 0.3s ease;
  `;
  
  const img = document.createElement('img');
  img.src = src;
  img.alt = alt;
  img.style.cssText = `
    max-width: 90%;
    max-height: 90%;
    object-fit: contain;
    border-radius: 10px;
    box-shadow: 0 10px 50px rgba(0, 0, 0, 0.8);
  `;
  
  lightbox.appendChild(img);
  document.body.appendChild(lightbox);
  
  lightbox.addEventListener('click', () => {
    lightbox.style.animation = 'fadeOut 0.3s ease';
    setTimeout(() => lightbox.remove(), 300);
  });
}

// Add fade animations
const fadeStyle = document.createElement('style');
fadeStyle.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
  }
`;
document.head.appendChild(fadeStyle);
