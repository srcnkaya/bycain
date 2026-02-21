# Gallery Images Folder

Place your barbershop photos here for the gallery section of your website.

---

## 📸 What to Include

### Recommended Gallery Images (6-12 photos):

1. **Haircut Styles** (3-4 photos)
   - Classic cuts
   - Modern styles
   - Fade techniques
   - Before/after shots

2. **Beard Work** (1-2 photos)
   - Beard trims
   - Shaping and styling
   - Clean shaves

3. **Shop Interior** (1-2 photos)
   - Barber chairs
   - Waiting area
   - Overall ambiance

4. **Action Shots** (1-2 photos)
   - Barber at work
   - Customer service in action
   - Tools and equipment

5. **Detail Shots** (1-2 photos)
   - Tools (scissors, clippers, razors)
   - Product display
   - Vintage decor

---

## 📐 Image Specifications

### Required:
- **Size:** 800x800px (square)
- **Format:** JPG or WebP
- **Max file size:** 200KB per image

### Recommended:
- High resolution (at least 72 DPI for web)
- Good lighting
- Professional quality
- Consistent style and tone

---

## 🎨 Image Naming

Use descriptive, SEO-friendly names:

### Good Examples ✅
```
classic-mens-haircut.jpg
modern-fade-style.jpg
beard-trim-service.jpg
shop-interior-chairs.jpg
barber-cutting-hair.jpg
```

### Bad Examples ❌
```
IMG_1234.jpg
DSC00456.jpg
photo.jpg
unnamed.jpg
```

---

## 🔧 Compression Tools

Before adding images, compress them:

1. **[TinyPNG.com](https://tinypng.com)** - Drag & drop compression
2. **[Squoosh.app](https://squoosh.app)** - Advanced options
3. Photoshop: File → Export → Save for Web (Quality: 80-85%)

---

## 📝 After Adding Images

1. Update `index.html` (around line 260)
2. Replace Unsplash URLs with your image paths:

```html
<!-- BEFORE -->
<img src="https://images.unsplash.com/photo-123..." alt="Old">

<!-- AFTER -->
<img src="images/gallery/classic-mens-haircut.jpg" alt="Classic Men's Haircut">
```

3. Update the `alt` text for each image (important for SEO and accessibility)

---

## ✅ Gallery Checklist

Before going live:

- [ ] At least 6 gallery images added
- [ ] All images are square (800x800px)
- [ ] All images compressed (under 200KB each)
- [ ] Descriptive file names used
- [ ] Updated paths in `index.html`
- [ ] Updated alt text for accessibility
- [ ] Tested images in browser
- [ ] Images look good on mobile

---

## 💡 Tips for Great Gallery Photos

### Do's ✅
- Use natural lighting when possible
- Show your best work
- Include variety (different styles, angles)
- Get customer permission for their photos
- Keep consistent color tones
- Show your shop's personality

### Don'ts ❌
- Don't use blurry or low-quality images
- Don't include customers without permission
- Don't mix drastically different lighting/styles
- Don't use stock photos (use real photos of your work)
- Don't include watermarks or logos

---

## 📱 Testing

After adding images, test:

1. **Desktop:** Open site in browser, check all images load
2. **Mobile:** Use browser DevTools (F12) to test responsive view
3. **Speed:** Check loading speed at [PageSpeed Insights](https://pagespeed.web.dev)

---

**Ready to add your images?** Just save them in this folder and update the paths in `index.html`!
