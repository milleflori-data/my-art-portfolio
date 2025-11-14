# ⚡ QUICK START CHECKLIST

## Get Your Gemstone Portfolio Running in 5 Minutes!

---

## ✅ STEP 1: Download Files (30 seconds)

Download these files:
- [ ] `gemstone-portfolio.html`
- [ ] `gemstone-styles.css`
- [ ] `gemstone-script.js`

Download the `assets` folder containing:
- [ ] All 10 gemstone button PNGs

---

## ✅ STEP 2: Organize Files (1 minute)

Create this structure on your computer:

```
📁 my-art-portfolio/
   │
   ├── 📄 gemstone-portfolio.html
   ├── 📄 gemstone-styles.css
   ├── 📄 gemstone-script.js
   │
   └── 📁 assets/
       ├── 🖼️ crystalquartz.png
       ├── 🖼️ opalbutton.png
       ├── 🖼️ opalbutton3.png
       ├── 🖼️ opalbutton4.png
       ├── 🖼️ opalbutton5.png
       ├── 🖼️ opalbutton6.png
       ├── 🖼️ opalbutton7.png
       ├── 🖼️ jaspellitebutton.png
       ├── 🖼️ hematite.png
       └── 🖼️ crystalinewood.png
```

**Important:** All 3 main files must be in the SAME folder!

---

## ✅ STEP 3: Add Your Artwork (2 minutes)

Add your artwork images to the `assets/` folder:
- [ ] Save your images as JPG or PNG
- [ ] Name them clearly: `painting1.jpg`, `sketch5.jpg`, etc.
- [ ] Recommended size: 800x800px or larger

---

## ✅ STEP 4: Test It! (30 seconds)

- [ ] Double-click `gemstone-portfolio.html`
- [ ] Page opens in your browser
- [ ] See 10 gemstone buttons
- [ ] Click a button - gallery filters!

**✨ It works!** (Even with placeholder images)

---

## ✅ STEP 5: Customize Gallery (1 minute)

Open `gemstone-portfolio.html` in a text editor.

Find this section (around line 90):
```html
<div class="gallery-grid">
```

Replace example artwork with yours:

### Copy This Template:
```html
<div class="gallery-item" data-category="YOUR-CATEGORY">
  <img src="assets/your-image.jpg" alt="Description" class="gallery-image">
  <div class="gallery-caption">
    <h3>Your Title</h3>
    <p>Your Medium • 2024</p>
  </div>
</div>
```

### Use These Categories:

| Category | Use This |
|----------|----------|
| All | `data-category="all"` |
| Digital Art | `data-category="digital"` |
| Portraits | `data-category="portraits"` |
| Mixed Media | `data-category="mixed"` |
| Abstract | `data-category="abstract"` |
| Paintings | `data-category="paintings"` |
| Illustrations | `data-category="illustrations"` |
| Sketches | `data-category="sketches"` |
| Black & White | `data-category="bw"` |
| Traditional | `data-category="traditional"` |

---

## 🎯 EXAMPLE: Adding a Digital Artwork

```html
<div class="gallery-item" data-category="digital">
  <img src="assets/cyberpunk-city.jpg" alt="Cyberpunk City" class="gallery-image">
  <div class="gallery-caption">
    <h3>Neon Dreams</h3>
    <p>Digital Art • 2024</p>
  </div>
</div>
```

**That's it!** Save and refresh the page.

---

## 🎨 Common Tasks

### Change Header Title:
1. Open `gemstone-portfolio.html`
2. Find line ~19: `<h1>My Art Gallery</h1>`
3. Change to your name: `<h1>Jane's Art Gallery</h1>`
4. Save and refresh!

### Change Button Colors:
1. Open `gemstone-styles.css`
2. Find line ~13: `:root {`
3. Change `--glow-color` value
4. Save and refresh!

### Add More Artwork:
1. Put image in `assets/` folder
2. Copy gallery item template in HTML
3. Update image name and category
4. Save and refresh!

---

## 🚨 Troubleshooting

### Buttons Not Showing?
- ✓ Check that HTML, CSS, and JS are in same folder
- ✓ Verify `assets/` folder is in same location
- ✓ Refresh with Ctrl+F5 (hard refresh)

### Images Not Loading?
- ✓ Confirm images are in `assets/` folder
- ✓ Check spelling of filenames (case-sensitive!)
- ✓ Make sure path is: `assets/image.jpg`

### Filtering Not Working?
- ✓ Check `data-category` matches button categories
- ✓ Open browser console (F12) for errors
- ✓ Ensure JavaScript file is linked in HTML

### Page Looks Broken?
- ✓ Verify CSS file is linked in HTML head
- ✓ Clear browser cache (Ctrl+Shift+Delete)
- ✓ Try a different browser

---

## ⌨️ Quick Tips

### Keyboard Shortcuts:
- Press **A** → Show all artwork
- Press **1-9** → Jump to category buttons

### Click Behavior:
- **Click button** → Filter gallery
- **Click artwork** → View fullscreen
- **Press ESC** → Close lightbox

### Mobile:
- Works perfectly on phones and tablets!
- Touch-friendly button sizes
- Swipe-friendly gallery

---

## 📋 Before & After

### BEFORE (What you downloaded):
```
✓ 10 functional gemstone buttons
✓ Example gallery with placeholder images
✓ Full filtering system
✓ Animations and effects
✓ Mobile responsive
```

### AFTER (What you customize):
```
+ Your artwork images
+ Your titles and descriptions
+ Your categories and organization
+ Your personal style touches
+ Your branding
```

---

## 🎯 Your First 3 Artworks

Let's add 3 pieces right now!

### Artwork 1:
```html
<div class="gallery-item" data-category="digital">
  <img src="assets/art1.jpg" alt="My First Artwork" class="gallery-image">
  <div class="gallery-caption">
    <h3>First Piece</h3>
    <p>Digital Art • 2024</p>
  </div>
</div>
```

### Artwork 2:
```html
<div class="gallery-item" data-category="paintings">
  <img src="assets/art2.jpg" alt="My Second Artwork" class="gallery-image">
  <div class="gallery-caption">
    <h3>Second Piece</h3>
    <p>Acrylic • 2024</p>
  </div>
</div>
```

### Artwork 3:
```html
<div class="gallery-item" data-category="sketches">
  <img src="assets/art3.jpg" alt="My Third Artwork" class="gallery-image">
  <div class="gallery-caption">
    <h3>Third Piece</h3>
    <p>Pencil • 2024</p>
  </div>
</div>
```

**Copy, paste, update, save, refresh!** ✨

---

## ✅ Final Checklist

Before calling it done:

- [ ] All files in correct locations
- [ ] Assets folder has your images
- [ ] Gallery has your artwork (not placeholders)
- [ ] Titles and descriptions are accurate
- [ ] Categories are correctly assigned
- [ ] Tested all buttons
- [ ] Checked on mobile (or browser dev tools)
- [ ] Lightbox works for all images
- [ ] Happy with the look!

---

## 🚀 Ready to Share?

### Test Locally First:
1. Click every button
2. View every artwork
3. Check mobile view (F12 → Toggle Device Toolbar)
4. Test keyboard shortcuts

### Then Go Live:
- Upload to web host
- Share with friends
- Post on social media
- Add to portfolio sites

---

## 🎉 You're Done!

Your gemstone portfolio is live and functional!

**Total Time:** ~5-10 minutes for basic setup  
**Your Investment:** 10 beautiful gemstone buttons  
**Your Result:** A stunning, functional art portfolio  

---

## 💡 Next Steps

1. ✅ **Add all your artwork** (take your time!)
2. 🎨 **Customize colors** to match your brand
3. 📝 **Update header text** with your name/bio
4. 🌐 **Publish online** and share with world
5. 📱 **Share on social** media for exposure

---

## 📚 Need More Help?

Check these guides:
- `GEMSTONE-GUIDE.md` - Complete feature guide
- `BUTTON-MAPPING.md` - Category assignments
- HTML comments - Inline documentation

---

## ⚡ That's It!

You now have a fully functional, beautiful gemstone portfolio with category filtering!

**Your gemstones await your artwork!** 💎✨🎨

**Questions?** Everything is documented in the guides!
**Problems?** Check the troubleshooting section above!
**Ready?** Start adding your amazing artwork!

---

**Happy creating!** 🎉
