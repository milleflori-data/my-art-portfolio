// =============================================
// CORRECTED GEMSTONE PORTFOLIO JAVASCRIPT
// All syntax errors fixed, lightboxes working
// =============================================

// Initialize portfolio with fade-in effect
function initializeGemstonePortfolio(){
  document.body.style.opacity='0';
  setTimeout(()=>{
    document.body.style.transition='opacity 1s ease-in';
    document.body.style.opacity='1';
  },100);
  initializeCategoryButtons();
  // Start with NO items showing - user must click a gemstone
  filterGallery("none");
}

// Setup category button click handlers
function initializeCategoryButtons(){
  const buttons=document.querySelectorAll('.gemstone-button');
  buttons.forEach(button=>{
    button.addEventListener('click',function(){
      const category=this.getAttribute('data-category');
      const stoneName=this.getAttribute('data-stone');
      buttons.forEach(btn=>btn.classList.remove('active'));
      this.classList.add('active');
      filterGallery(category);
      updateCategoryDisplay(this.querySelector('.button-label').textContent);
      showNotification(`Viewing: ${stoneName} Collection`);
    });
  });
}

// Filter gallery items by category
function filterGallery(category){
  const items=document.querySelectorAll('.gallery-item');
  items.forEach((item,i)=>{
    const c=item.getAttribute('data-category');
    if(category==="none"){
      item.classList.add("hidden");
      item.classList.remove("show");
      item.style.display="none";
      return;
    }
    if(category==="all"||c===category){
      setTimeout(()=>{
        item.classList.remove('hidden');
        item.classList.add('show');
        item.style.display='block';
      },i*50);
    } else {
      item.classList.remove('show');
      item.classList.add('hidden');
      setTimeout(()=>item.style.display='none',400);
    }
  });
}

// Update category name display
function updateCategoryDisplay(name){
  const el=document.getElementById('category-name');
  if(!el)return;
  el.style.transition='opacity 0.3s ease';
  el.style.opacity='0';
  setTimeout(()=>{
    el.textContent=name;
    el.style.opacity='1';
  },200);
}

// Show notification popup
function showNotification(msg){
  const old=document.querySelector('.notification');
  if(old)old.remove();
  const n=document.createElement('div');
  n.className='notification';
  n.textContent=msg;
  document.body.appendChild(n);
  setTimeout(()=>n.remove(),2500);
}

// Initialize gallery lightbox on all items
function initializeGalleryLightbox(){
  document.querySelectorAll('.gallery-item').forEach(item=>{
    item.addEventListener('click',()=>{
      const img=item.querySelector('.gallery-image');
      const caption=item.querySelector('.gallery-caption h3');
      const cat=item.querySelector('.gallery-caption p');
      if(img){
        openLightbox(
          img.src,
          img.alt,
          caption?caption.textContent:'',
          cat?cat.textContent:''
        );
      }
    });
  });
}

// Open lightbox with image and info
function openLightbox(src,alt,title,category){
  const box=document.createElement('div');
  box.className='lightbox';
  
  const img=document.createElement('img');
  img.src=src;
  img.alt=alt;
  img.className='lightbox-image';
  box.appendChild(img);
  
  const info=document.createElement('div');
  info.className='lightbox-info';
  
  if(title){
    const t=document.createElement('h2');
    t.textContent=title;
    info.appendChild(t);
  }
  
  if(category){
    const c=document.createElement('p');
    c.textContent=category;
    info.appendChild(c);
  }
  
  // Special links for podcast items
  if(title==="Listen To Episodes"){
    const link=document.createElement('a');
    link.href='https://www.funnelcakepodcast.com/index.html';
    link.target='_blank';
    link.textContent='Listen Here';
    link.className='lightbox-link';
    info.appendChild(link);
  } // ← FIXED: Added closing brace here
  
  if(title==="Shop Funnelcake Podcast"){
    const link=document.createElement('a');
    link.href='https://funnelcake-podcast-merch.printify.me';
    link.target='_blank';
    link.textContent='Products';
    link.className='lightbox-link';
    info.appendChild(link);
  }
  
  box.appendChild(info);
  
  // Close button
  const close=document.createElement('div');
  close.textContent='×';
  close.className='lightbox-close';
  box.appendChild(close);
  
  close.onclick=()=>box.remove();
  box.onclick=(e)=>{if(e.target===box)box.remove();};
  
  document.body.appendChild(box);
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded',()=>{
  initializeGemstonePortfolio();
  initializeGalleryLightbox();
});
