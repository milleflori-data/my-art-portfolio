// =============================================
// SHOP FOR MY ART - POPUP LIGHTBOX
// Drop this file in your site folder and add
// <script src="shop-popup.js"></script> to
// your index.html just before </body>
// =============================================

function openShopPopup() {
  // Remove any existing popup
  const existing = document.getElementById('shop-popup-overlay');
  if (existing) existing.remove();

  // --- Overlay ---
  const overlay = document.createElement('div');
  overlay.id = 'shop-popup-overlay';
  overlay.style.cssText = `
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    animation: shopFadeIn 0.35s ease;
    padding: 20px;
  `;

  // --- Modal Box ---
  const modal = document.createElement('div');
  modal.style.cssText = `
    background: linear-gradient(145deg, rgba(10,10,20,0.97), rgba(20,40,35,0.97));
    border: 3px solid rgba(127,255,212,0.5);
    border-radius: 25px;
    padding: 50px 45px 45px 45px;
    max-width: 480px;
    width: 100%;
    text-align: center;
    position: relative;
    box-shadow: 0 0 60px rgba(127,255,212,0.25), 0 20px 60px rgba(0,0,0,0.8);
    animation: shopSlideUp 0.4s cubic-bezier(0.22,1,0.36,1);
  `;

  // --- Close Button ---
  const closeBtn = document.createElement('div');
  closeBtn.textContent = '×';
  closeBtn.style.cssText = `
    position: absolute;
    top: 15px;
    right: 25px;
    font-size: 42px;
    font-weight: 300;
    color: #fff;
    cursor: pointer;
    line-height: 1;
    transition: color 0.2s ease, transform 0.2s ease;
    font-family: 'Poppins', sans-serif;
  `;
  closeBtn.onmouseenter = () => {
    closeBtn.style.color = 'rgba(127,255,212,0.9)';
    closeBtn.style.transform = 'scale(1.2)';
  };
  closeBtn.onmouseleave = () => {
    closeBtn.style.color = '#fff';
    closeBtn.style.transform = 'scale(1)';
  };
  closeBtn.onclick = () => overlay.remove();

  // --- Gem Icon (CSS art, no image needed) ---
  const gem = document.createElement('div');
  gem.style.cssText = `
    width: 60px;
    height: 60px;
    margin: 0 auto 24px auto;
    background: radial-gradient(circle at 35% 35%, rgba(200,255,240,0.9), rgba(127,255,212,0.5) 50%, rgba(0,180,130,0.4));
    border-radius: 50% 50% 45% 45%;
    border: 2px solid rgba(127,255,212,0.7);
    box-shadow: 0 0 30px rgba(127,255,212,0.5), inset 0 0 20px rgba(255,255,255,0.2);
    animation: gemGlow 2.5s ease-in-out infinite alternate;
  `;

  // --- Heading ---
  const heading = document.createElement('h2');
  heading.textContent = 'Shop For My Art';
  heading.style.cssText = `
    font-family: 'Cinzel Decorative', 'Poppins', sans-serif;
    font-size: 2rem;
    font-weight: 700;
    color: rgba(127,255,212,0.95);
    margin-bottom: 12px;
    text-shadow: 0 0 25px rgba(127,255,212,0.6), 0 2px 8px rgba(0,0,0,0.8);
    letter-spacing: 1px;
  `;

  // --- Subtext ---
  const sub = document.createElement('p');
  sub.textContent = 'Original works, prints, and more — find something you love.';
  sub.style.cssText = `
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    color: rgba(255,255,255,0.75);
    margin-bottom: 36px;
    line-height: 1.6;
  `;

  // --- Button builder ---
  function makeShopButton(label, url, isPrimary) {
    const btn = document.createElement('a');
    btn.textContent = label;
    // ↓ PASTE YOUR LINK IN THE href BELOW
    btn.href = url || '#';
    btn.target = '_blank';
    btn.rel = 'noopener noreferrer';
    btn.style.cssText = `
      display: block;
      width: 100%;
      padding: 15px 20px;
      margin-bottom: 14px;
      border-radius: 50px;
      font-family: 'Poppins', sans-serif;
      font-size: 1.05rem;
      font-weight: 700;
      text-decoration: none;
      cursor: pointer;
      transition: all 0.3s ease;
      letter-spacing: 0.5px;
      ${isPrimary
        ? `background: rgba(127,255,212,0.9); color: #000; border: 2px solid transparent;
           box-shadow: 0 5px 25px rgba(127,255,212,0.4);`
        : `background: transparent; color: rgba(127,255,212,0.9);
           border: 2px solid rgba(127,255,212,0.5);`
      }
    `;
    btn.onmouseenter = () => {
      btn.style.transform = 'translateY(-3px)';
      btn.style.boxShadow = isPrimary
        ? '0 8px 35px rgba(127,255,212,0.6)'
        : '0 8px 25px rgba(127,255,212,0.25)';
      if (!isPrimary) btn.style.background = 'rgba(127,255,212,0.1)';
      if (isPrimary) btn.style.background = '#ffd700';
    };
    btn.onmouseleave = () => {
      btn.style.transform = 'translateY(0)';
      btn.style.boxShadow = isPrimary ? '0 5px 25px rgba(127,255,212,0.4)' : 'none';
      if (!isPrimary) btn.style.background = 'transparent';
      if (isPrimary) btn.style.background = 'rgba(127,255,212,0.9)';
    };
    return btn;
  }

  // ── ADD YOUR LINKS HERE ──────────────────────────────────────
  // Replace the empty strings '' with your eBay or Printify URLs.
  // If you only want one button, delete the other makeShopButton line.
  const ebayBtn    = makeShopButton('Shop on eBay',    'https://www.ebay.com/usr/magictribestudio', true);
  const printifyBtn = makeShopButton('Shop on Printify', '', false);
  // ─────────────────────────────────────────────────────────────

  // --- Divider label ---
  const divider = document.createElement('p');
  divider.textContent = '— or —';
  divider.style.cssText = `
    font-family: 'Poppins', sans-serif;
    font-size: 0.85rem;
    color: rgba(255,255,255,0.35);
    margin: 2px 0 14px 0;
  `;

  // Assemble
  modal.appendChild(closeBtn);
  modal.appendChild(gem);
  modal.appendChild(heading);
  modal.appendChild(sub);
  modal.appendChild(ebayBtn);
  modal.appendChild(divider);
  modal.appendChild(printifyBtn);
  overlay.appendChild(modal);

  // Close on backdrop click
  overlay.onclick = (e) => { if (e.target === overlay) overlay.remove(); };

  // Keyframes (injected once)
  if (!document.getElementById('shop-popup-styles')) {
    const style = document.createElement('style');
    style.id = 'shop-popup-styles';
    style.textContent = `
      @keyframes shopFadeIn {
        from { opacity: 0; }
        to   { opacity: 1; }
      }
      @keyframes shopSlideUp {
        from { opacity: 0; transform: translateY(30px) scale(0.96); }
        to   { opacity: 1; transform: translateY(0)    scale(1);    }
      }
      @keyframes gemGlow {
        from { box-shadow: 0 0 20px rgba(127,255,212,0.4), inset 0 0 15px rgba(255,255,255,0.15); }
        to   { box-shadow: 0 0 45px rgba(127,255,212,0.8), inset 0 0 25px rgba(255,255,255,0.3); }
      }
      #shop-now-btn:hover {
        transform: translateY(-2px);
      }
    `;
    document.head.appendChild(style);
  }

  document.body.appendChild(overlay);

  // ESC key closes
  const escHandler = (e) => {
    if (e.key === 'Escape') { overlay.remove(); document.removeEventListener('keydown', escHandler); }
  };
  document.addEventListener('keydown', escHandler);
}

// ── TRIGGER BUTTON ──────────────────────────────────────────────
// This creates the floating "Shop" button in the top-right corner.
// If you'd rather trigger the popup from a nav link or your own
// button instead, delete this block and call openShopPopup() yourself.
document.addEventListener('DOMContentLoaded', () => {
  const shopBtn = document.createElement('button');
  shopBtn.id = 'shop-now-btn';
  shopBtn.textContent = '🛒 Shop My Art';
  shopBtn.style.cssText = `
    position: fixed;
    top: 22px;
    right: 22px;
    z-index: 9998;
    padding: 12px 22px;
    background: rgba(0,0,0,0.75);
    color: rgba(127,255,212,0.95);
    border: 2px solid rgba(127,255,212,0.5);
    border-radius: 50px;
    font-family: 'Poppins', sans-serif;
    font-size: 0.95rem;
    font-weight: 700;
    cursor: pointer;
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 20px rgba(0,0,0,0.5), 0 0 15px rgba(127,255,212,0.2);
    transition: all 0.3s ease;
    letter-spacing: 0.3px;
  `;
  shopBtn.onmouseenter = () => {
    shopBtn.style.background = 'rgba(127,255,212,0.15)';
    shopBtn.style.borderColor = 'rgba(127,255,212,0.9)';
    shopBtn.style.boxShadow = '0 6px 30px rgba(0,0,0,0.6), 0 0 25px rgba(127,255,212,0.4)';
    shopBtn.style.transform = 'translateY(-2px)';
  };
  shopBtn.onmouseleave = () => {
    shopBtn.style.background = 'rgba(0,0,0,0.75)';
    shopBtn.style.borderColor = 'rgba(127,255,212,0.5)';
    shopBtn.style.boxShadow = '0 4px 20px rgba(0,0,0,0.5), 0 0 15px rgba(127,255,212,0.2)';
    shopBtn.style.transform = 'translateY(0)';
  };
  shopBtn.onclick = openShopPopup;
  document.body.appendChild(shopBtn);
});
