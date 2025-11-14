# 💎 GEMSTONE BUTTON MAPPING

## Quick Reference Card

```
┌──────────────────────────────────────────────────────┐
│         YOUR 10 GEMSTONE CATEGORY BUTTONS            │
└──────────────────────────────────────────────────────┘

┌─────────────────────┬────────────────────────────────┐
│  GEMSTONE           │  CATEGORY & DATA-CATEGORY      │
├─────────────────────┼────────────────────────────────┤
│                     │                                │
│  💎 Crystal Quartz  │  All Artwork                   │
│  (Clear crystals)   │  data-category="all"           │
│                     │  Keyboard: A or 1              │
│                     │                                │
├─────────────────────┼────────────────────────────────┤
│                     │                                │
│  🌈 Rainbow Opal    │  Digital Art                   │
│  (Iridescent)       │  data-category="digital"       │
│                     │  Keyboard: 2                   │
│                     │                                │
├─────────────────────┼────────────────────────────────┤
│                     │                                │
│  💗 Pink Tourmaline │  Portraits                     │
│  (Magenta faceted)  │  data-category="portraits"     │
│                     │  Keyboard: 3                   │
│                     │                                │
├─────────────────────┼────────────────────────────────┤
│                     │                                │
│  🔥 Fire Opal       │  Mixed Media                   │
│  (Rainbow pink)     │  data-category="mixed"         │
│                     │  Keyboard: 4                   │
│                     │                                │
├─────────────────────┼────────────────────────────────┤
│                     │                                │
│  🌌 Cosmic Opal     │  Abstract                      │
│  (Purple/teal)      │  data-category="abstract"      │
│                     │  Keyboard: 5                   │
│                     │                                │
├─────────────────────┼────────────────────────────────┤
│                     │                                │
│  🖤 Black Opal      │  Paintings                     │
│  (Dark purple/green)│  data-category="paintings"     │
│                     │  Keyboard: 6                   │
│                     │                                │
├─────────────────────┼────────────────────────────────┤
│                     │                                │
│  🧡 Mexican Fire    │  Illustrations                 │
│  (Red/orange opal)  │  data-category="illustrations" │
│                     │  Keyboard: 7                   │
│                     │                                │
├─────────────────────┼────────────────────────────────┤
│                     │                                │
│  🪨 Jaspellite      │  Sketches                      │
│  (Brown striped)    │  data-category="sketches"      │
│                     │  Keyboard: 8                   │
│                     │                                │
├─────────────────────┼────────────────────────────────┤
│                     │                                │
│  ⚫ Hematite        │  Black & White                 │
│  (Metallic grey)    │  data-category="bw"            │
│                     │  Keyboard: 9                   │
│                     │                                │
├─────────────────────┼────────────────────────────────┤
│                     │                                │
│  🟡 Crystaline Wood │  Traditional                   │
│  (Golden amber)     │  data-category="traditional"   │
│                     │  Keyboard: 0                   │
│                     │                                │
└─────────────────────┴────────────────────────────────┘
```

---

## 📋 File Mapping

### Button Image Files:
```
crystalquartz.png    → All Artwork
opalbutton.png       → Digital Art
opalbutton3.png      → Portraits
opalbutton4.png      → Mixed Media
opalbutton5.png      → Abstract
opalbutton6.png      → Paintings
opalbutton7.png      → Illustrations
jaspellitebutton.png → Sketches
hematite.png         → Black & White
crystalinewood.png   → Traditional
```

---

## 🎯 Usage in HTML

### Button Structure:
```html
<button class="gemstone-button" data-category="CATEGORY" data-stone="STONE NAME">
  <img src="assets/FILENAME.png" alt="Stone Name">
  <span class="button-label">Category Name</span>
</button>
```

### Gallery Item Structure:
```html
<div class="gallery-item" data-category="MATCHING-CATEGORY">
  <img src="assets/artwork.jpg" alt="Art" class="gallery-image">
  <div class="gallery-caption">
    <h3>Title</h3>
    <p>Medium • Year</p>
  </div>
</div>
```

---

## 🎨 Category Assignment Strategy

### I Chose These Assignments Because:

1. **Crystal Quartz** = All
   - Clear/transparent = "see through everything"
   - Neutral, works for universal view

2. **Rainbow Opal** = Digital Art
   - Vibrant, iridescent = modern digital colors
   - Tech-forward aesthetic

3. **Pink Tourmaline** = Portraits
   - Pink/warm tones = human, skin tones
   - Faceted = multifaceted personality

4. **Fire Opal** (rainbow pink) = Mixed Media
   - Multiple colors = multiple mediums
   - Unique patterns = experimental

5. **Cosmic Opal** = Abstract
   - Purple/galaxy-like = otherworldly
   - Non-representational appearance

6. **Black Opal** = Paintings
   - Deep, rich colors = traditional paint
   - Dark elegance = classical art

7. **Mexican Fire Opal** = Illustrations
   - Bright red/orange = bold narratives
   - Energetic = storytelling

8. **Jaspellite** = Sketches
   - Brown/earth tones = pencil, paper
   - Striped pattern = line work

9. **Hematite** = Black & White
   - Metallic grey = monochrome palette
   - Smooth surface = simplified form

10. **Crystaline Wood** = Traditional
    - Golden/amber = classic, warm
    - Organic formation = heritage techniques

---

## 🔄 Want to Reassign?

### Option 1: Swap Categories
Just change the `data-category` attribute and button label:

**Before:**
```html
<button class="gemstone-button" data-category="digital">
  <span class="button-label">Digital Art</span>
</button>
```

**After:**
```html
<button class="gemstone-button" data-category="sculptures">
  <span class="button-label">Sculptures</span>
</button>
```

### Option 2: Create New Categories
1. Add new button with new `data-category`
2. Add gallery items with matching category
3. Done! JavaScript handles the rest automatically

---

## 🎭 Visual States

### Default State:
- Subtle white border
- Slight transparency
- Normal stone appearance

### Hover State:
- **Teal glow** (--glow-color)
- Lifts up 10px
- Stone scales up 10%
- Label glows teal

### Active State:
- **Gold border** (#ffd700)
- Gold glow and shadow
- Stone pulses gently
- Label turns gold, bigger font

### Click Animation:
- Quick scale down
- Notification appears
- Gallery filters smoothly

---

## 🎨 Color Codes

### Used in Styling:

| Element | Color | Code |
|---------|-------|------|
| Default glow | Teal | `rgba(127, 255, 212, 0.8)` |
| Hover glow | Teal | `rgba(127, 255, 212, 0.8)` |
| Active glow | Gold | `#ffd700` |
| Border default | White | `rgba(255, 255, 255, 0.2)` |
| Border hover | Teal | `var(--glow-color)` |
| Border active | Gold | `#ffd700` |
| Label color | White | `#fff` |
| Label hover | Teal | `var(--glow-color)` |
| Label active | Gold | `#ffd700` |

---

## ⚙️ JavaScript Functions

### Key Functions:
```javascript
initializeCategoryButtons()  // Sets up click handlers
filterGallery(category)      // Shows/hides items
updateCategoryDisplay()      // Updates "Showing: X"
showNotification()           // Toast message
openLightbox()               // Fullscreen view
```

### How Filtering Works:
1. User clicks button
2. Get `data-category` value
3. Loop through all `.gallery-item` elements
4. Check each item's `data-category`
5. Show matches, hide non-matches
6. Add staggered animation delay
7. Update active states

---

## 📱 Responsive Behavior

### Desktop (1024px+):
- Grid: Auto-fit columns
- Buttons: ~200px each
- Multiple rows if needed

### Tablet (768px - 1024px):
- Grid: 2-3 columns
- Buttons: Slightly smaller
- More compact spacing

### Mobile (< 768px):
- Grid: 2 columns
- Buttons: 180px each
- Larger touch targets

### Small Mobile (< 480px):
- Grid: 1 column (stacked)
- Full-width buttons
- Optimized for touch

---

## 🚀 Performance Notes

### Optimizations Built In:
- ✅ CSS animations (GPU accelerated)
- ✅ Smooth transitions
- ✅ Efficient filtering (no page reload)
- ✅ Lazy opacity changes
- ✅ Transform-based movements
- ✅ No layout thrashing

### Load Times:
- Initial: Fast (small images)
- Filtering: Instant (pure CSS/JS)
- Transitions: 0.4s smooth

---

## 🎯 Quick Tips

### Adding Artwork:
1. Put image in `assets/`
2. Add gallery item with correct `data-category`
3. Refresh page - it works!

### Changing Button Order:
- Just rearrange button HTML blocks
- Keyboard shortcuts will auto-adjust

### Hiding a Button:
- Add `style="display: none;"` to button
- Or comment out entire button block

### Duplicating a Category:
- Add multiple buttons with same `data-category`
- Useful for subcategories with same filter

---

## 💡 Future Enhancements

### Easy Additions:
- [ ] Add filter transition effects
- [ ] Include item count per category
- [ ] Add "Coming Soon" for empty categories
- [ ] Multi-select filtering (show multiple categories)
- [ ] Search bar for artwork titles
- [ ] Sort options (date, name, popularity)

### The code is structured to easily add these features!

---

## ✨ You're All Set!

Your gemstones are mapped, functional, and beautiful. Each button is a gateway to different aspects of your creative work!

**Need to change assignments? It's just 2 attributes:**
1. Button's `data-category`
2. Button's `<span class="button-label">`

**Want to add artwork? Just 1 attribute:**
1. Gallery item's `data-category`

Simple, powerful, beautiful! 💎✨
