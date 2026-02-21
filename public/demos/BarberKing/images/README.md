# Images Folder

This folder is where you should place your custom images for the BarberKing template.

---

## 📁 Folder Structure

```
images/
├── hero-bg.jpg           # Hero section background (1920x1080px)
├── favicon.png           # Browser tab icon (32x32px)
├── apple-touch-icon.png  # iOS home screen icon (180x180px)
├── og-image.jpg          # Social media preview image (1200x630px)
└── gallery/              # Gallery photos folder
    ├── photo1.jpg        # Gallery image (800x800px)
    ├── photo2.jpg
    ├── photo3.jpg
    └── ...
```

---

## 🖼️ Image Requirements

### Hero Background (`hero-bg.jpg`)
- **Size:** 1920x1080px minimum (landscape)
- **Format:** JPG or WebP
- **Max file size:** 500KB
- **Subject:** Your barbershop interior, exterior, or a professional barber at work
- **Usage:** Main hero section background

### Gallery Images (`gallery/`)
- **Size:** 800x800px (square)
- **Format:** JPG or WebP
- **Max file size:** 200KB each
- **Subject:** Haircuts, beard trims, your work examples, shop interior
- **Usage:** Photo gallery grid
- **Recommended quantity:** 6-12 images

### Favicon (`favicon.png`)
- **Size:** 32x32px or 16x16px
- **Format:** PNG or ICO
- **Background:** Transparent recommended
- **Subject:** Your logo or initials
- **Usage:** Browser tab icon

### Apple Touch Icon (`apple-touch-icon.png`)
- **Size:** 180x180px
- **Format:** PNG
- **Background:** Your brand color or white
- **Subject:** Your logo
- **Usage:** iOS home screen shortcut icon

### Open Graph Image (`og-image.jpg`)
- **Size:** 1200x630px
- **Format:** JPG or PNG
- **Max file size:** 300KB
- **Subject:** Your shop name + tagline or your best work
- **Usage:** Social media preview when sharing your site
- **Text overlay:** Keep important content in the center (safe zone)

---

## 🎨 Image Tips

### Best Practices
- ✅ Use high-quality, professional photos
- ✅ Maintain consistent lighting and color tones
- ✅ Show your actual work and shop
- ✅ Include diverse hairstyles and angles
- ✅ Compress images before uploading (use TinyPNG.com)

### What to Avoid
- ❌ Stock photos (use real photos of your shop)
- ❌ Low resolution or blurry images
- ❌ Images with watermarks
- ❌ Inconsistent styles (mix of color and B&W)
- ❌ Large file sizes (slow loading)

---

## 🔧 Image Optimization Tools

### Online Tools (Free)
- **[TinyPNG](https://tinypng.com)** - Best for JPG/PNG compression
- **[Squoosh](https://squoosh.app)** - Advanced compression with preview
- **[CloudConvert](https://cloudconvert.com)** - Format conversion (JPG to WebP)
- **[Favicon Generator](https://realfavicongenerator.net)** - Generate all favicon sizes

### Desktop Tools
- **Adobe Photoshop** - Professional editing
- **GIMP** - Free Photoshop alternative
- **IrfanView** - Batch resizing (Windows)
- **XnConvert** - Batch processing (Cross-platform)

---

## 📷 Where to Get Images

### Professional Photos (Recommended)
- Hire a local photographer
- Use a good smartphone camera (iPhone, Samsung)
- Take photos in good natural lighting
- Get customers' permission for before/after shots

### Stock Photos (Temporary Placeholder)
- **[Unsplash](https://unsplash.com)** - Free high-quality photos
- **[Pexels](https://pexels.com)** - Free stock photos
- **[Pixabay](https://pixabay.com)** - Free images and videos

**Note:** The template currently uses Unsplash placeholder images. Replace these with your own photos for a professional look.

---

## 🔗 How to Use Your Images

### 1. Save Images to This Folder

```
images/
├── hero-bg.jpg           ← Your hero background
└── gallery/
    ├── haircut1.jpg      ← Your gallery photos
    ├── haircut2.jpg
    └── ...
```

### 2. Update Image Paths in HTML

Open `index.html` and update:

**Hero Background (line ~140):**
```html
<img src="images/hero-bg.jpg" alt="My Barber Shop">
```

**Gallery Images (line ~260):**
```html
<img src="images/gallery/haircut1.jpg" alt="Classic Haircut">
```

---

## 📐 Quick Resize Guide

### Using Online Tools

1. Go to [Squoosh.app](https://squoosh.app)
2. Upload your image
3. Select "Resize" and enter target dimensions
4. Choose "MozJPEG" or "WebP" format
5. Adjust quality to ~80-85%
6. Download optimized image

### Using Photoshop

1. Open image
2. Image → Image Size
3. Enter new dimensions (maintain aspect ratio)
4. File → Export → Save for Web
5. Choose JPG, Quality: 80-85%
6. Save

---

## ✅ Image Checklist

Before uploading your site:

- [ ] Hero background image replaced (1920x1080px)
- [ ] All gallery images replaced (800x800px)
- [ ] Favicon added (32x32px)
- [ ] All images compressed (under size limits)
- [ ] Image file names are descriptive (e.g., `classic-haircut.jpg` not `IMG_1234.jpg`)
- [ ] All images are correctly referenced in `index.html`
- [ ] Tested images load correctly in browser
- [ ] Images look good on mobile devices

---

## 🎯 Example Image Names

Use descriptive, SEO-friendly file names:

### Good ✅
- `hero-barber-shop-interior.jpg`
- `classic-mens-haircut.jpg`
- `beard-trim-service.jpg`
- `fade-haircut-style.jpg`

### Bad ❌
- `IMG_1234.jpg`
- `DSC00456.jpg`
- `photo.jpg`
- `unnamed.jpg`

---

## 📱 Testing Your Images

After adding images:

1. **Desktop Test:**
   - Open `index.html` in Chrome/Firefox/Safari
   - Check that all images load
   - Verify images look sharp (not pixelated)

2. **Mobile Test:**
   - Press F12 → Toggle device toolbar
   - Test on various screen sizes
   - Check image loading speed

3. **Performance Test:**
   - Use [Google PageSpeed Insights](https://pagespeed.web.dev)
   - Aim for "Good" performance score
   - Compress images further if needed

---

**Need help?** Refer to the main README.md file for more detailed instructions.
