# Art Portfolio - Setup Guide

## 📁 File Structure

Your art portfolio consists of these files:

```
portfolio/
├── portfolio.html       (Main HTML file)
├── styles.css          (All styling)
├── script.js           (Button functionality & interactions)
├── buttons.json        (Button configuration)
└── assets/            (Your images folder)
    ├── button_opal.png
    ├── button_onyx.png
    ├── button_agate.png
    ├── artwork1.jpg
    ├── artwork2.jpg
    └── ... (more artwork images)
```

## 🎨 Adding Your Artwork

### Option 1: Quick Method
1. Open `portfolio.html`
2. Find the gallery section (`<div class="gallery-grid">`)
3. Copy and paste this template for each artwork:

```html
<div class="gallery-item">
  <img src="assets/your-image.jpg" alt="Description" class="gallery-image">
  <div class="gallery-caption">
    <h3>Artwork Title</h3>
    <p>Medium • Year</p>
  </div>
</div>
```

4. Replace:
   - `your-image.jpg` with your actual filename
   - `Artwork Title` with your piece's name
   - `Medium • Year` with details (e.g., "Oil on Canvas • 2024")

### Option 2: Multiple Images at Once
Simply duplicate the gallery-item div for each artwork you want to add!

## 🔘 Customizing Buttons

### Using Your Button PNG Files
Your buttons are loaded from `buttons.json`. The file already references:
- `button_opal.png`
- `button_onyx.png`
- `button_agate.png`

**To use your button images:**
1. Place your button PNG files in the `assets/` folder
2. Make sure the filenames match what's in `buttons.json`
3. The buttons will automatically display with your images as backgrounds!

### Adding More Buttons
Edit `buttons.json` and add new entries:

```json
{
  "id": "btn_sapphire",
  "label": "Sapphire",
  "image": "assets/button_sapphire.png",
  "class": "button-dreamstone button-glow",
  "onClickMessage": "Sapphire gallery opened!"
}
```

### Button Effects
You can use these classes for different effects:
- `button-glow` - Glowing effect
- `button-pulse` - Pulsing animation
- `button-shadow` - Deep shadow
- Mix and match: `button-dreamstone button-glow button-pulse`

## 🎨 Changing Colors

Edit the `:root` section in `styles.css`:

```css
:root {
  --accent-color: #7fffd4;  /* Change this to your favorite color */
  --glow-color: rgba(127, 255, 212, 0.8);
}
```

Try these color schemes:
- Purple: `#b794f4` 
- Pink: `#f687b3`
- Gold: `#ffd700`
- Teal: `#38b2ac`

## 📝 Changing Fonts

The portfolio uses these Google Fonts:
- **Title**: Kaushan Script (decorative)
- **Subtitles**: Pinyon Script (elegant)
- **Body**: Roboto (clean, readable)

To change fonts, edit the Google Fonts link in `portfolio.html` and update the CSS variables.

## 🖼️ Image Requirements

For best results:
- **Artwork images**: 800x800px or larger, JPG/PNG
- **Button images**: 200x100px or larger, PNG with transparency
- Keep file sizes reasonable (under 1MB per image)

## 🚀 Launching Your Portfolio

1. **Local Testing**: 
   - Open `portfolio.html` in your web browser
   - If buttons don't load, make sure `buttons.json` is in the same folder

2. **Publishing Online**:
   - Upload all files to a web hosting service
   - Keep the folder structure intact
   - Your portfolio will be live!

## ✨ Features

- **Responsive Design**: Works on phones, tablets, and desktops
- **Lightbox View**: Click any artwork to see it fullscreen
- **Button Animations**: Glow, pulse, and shadow effects
- **Smooth Hover Effects**: Gallery items lift and glow on hover
- **Notification System**: Shows messages when buttons are clicked

## 🛠️ Troubleshooting

**Buttons not showing?**
- Check that `buttons.json` is in the same folder as the HTML
- Verify button image paths are correct
- Open browser console (F12) to see error messages

**Images not loading?**
- Make sure your image files are in the `assets/` folder
- Check that filenames match exactly (case-sensitive!)
- Verify image file extensions (.jpg, .png, etc.)

**Page looks broken?**
- Ensure `styles.css` and `script.js` are in the same folder
- Check browser console for errors
- Try refreshing the page (Ctrl+F5)

## 💡 Tips

- Start with 6-12 artworks for a clean look
- Use consistent image sizes for a professional gallery
- Keep button labels short (1-2 words)
- Add new artwork by copying existing gallery-item divs
- Backup your files before making major changes!

## 🎉 Have Fun!

Your portfolio is ready to showcase your amazing artwork. Customize it, make it yours, and share it with the world!

---
Need help? The code is well-commented to guide you through any changes.
