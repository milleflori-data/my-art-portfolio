// Corrected JS
function initializeGemstonePortfolio(){
  document.body.style.opacity='0';
  setTimeout(()=>{document.body.style.transition='opacity 1s ease-in';document.body.style.opacity='1';},100);
  initializeCategoryButtons();
  filterGallery("none");
}
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
function filterGallery(category){
  const items=document.querySelectorAll('.gallery-item');
  items.forEach((item,i)=>{
    const c=item.getAttribute('data-category');
    if(category==="none"){
      item.classList.add("hidden");item.classList.remove("show");item.style.display="none";return;
    }
    if(category==="all"||c===category){
      setTimeout(()=>{item.classList.remove('hidden');item.classList.add('show');item.style.display='block';},i*50);
    } else {
      item.classList.remove('show');item.classList.add('hidden');setTimeout(()=>item.style.display='none',400);
    }
  });
}
function updateCategoryDisplay(name){
  const el=document.getElementById('category-name');
  if(!el)return;
  el.style.opacity='0';
  setTimeout(()=>{el.textContent=name;el.style.opacity='1';},200);
}
function showNotification(msg){
  const old=document.querySelector('.notification');if(old)old.remove();
  const n=document.createElement('div');n.className='notification';n.textContent=msg;
  n.style.cssText='position:fixed;top:20px;right:20px;background:#fff;padding:10px;z-index:10000;';
  document.body.appendChild(n);setTimeout(()=>n.remove(),2500);
}
function initializeGalleryLightbox(){
  document.querySelectorAll('.gallery-item').forEach(item=>{
    item.addEventListener('click',()=>{
      const img=item.querySelector('.gallery-image');
      const caption=item.querySelector('.gallery-caption h3');
      const cat=item.querySelector('.gallery-caption p');
      if(img)openLightbox(img.src,img.alt,caption?caption.textContent:'',cat?cat.textContent:'');
    });
  });
}
function openLightbox(src,alt,title,category){
  const box=document.createElement('div');
  box.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.9);display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:9999;';
  const im=document.createElement('img');im.src=src;im.alt=alt;im.style.cssText='max-width:90%;max-height:70vh;';
  box.appendChild(im);
  const info=document.createElement('div');info.style.cssText='margin-top:20px;text-align:center;';
  if(title){const t=document.createElement('h2');t.textContent=title;info.appendChild(t);}
  if(category){const c=document.createElement('p');c.textContent=category;info.appendChild(c);}
  if(title==="Listen To Episodes"){
    const link=document.createElement('a');link.href='https://www.funnelcakepodcast.com/index.html';link.target='_blank';link.textContent='Listen Here';
    link.style.cssText='display:inline-block;margin-top:20px;padding:10px 20px;background:#0ff;text-decoration:none;';
    info.appendChild(link);
  }
  box.appendChild(info);
  const close=document.createElement('div');close.textContent='×';close.style.cssText='position:absolute;top:20px;right:30px;font-size:40px;cursor:pointer;';
  box.appendChild(close);
  close.onclick=()=>box.remove();
  box.onclick=(e)=>{if(e.target===box)box.remove();};
  document.body.appendChild(box);
}
document.addEventListener('DOMContentLoaded',()=>{initializeGemstonePortfolio();initializeGalleryLightbox();});
