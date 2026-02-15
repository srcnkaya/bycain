# Image Optimization Guide

## 🚨 Current Issue
PageSpeed Insights shows **11+ MB** of image savings. This is the biggest performance bottleneck.

## ✅ Solutions

### 1. Use WebP Format
Convert all product images to WebP format (smaller file size, better quality):

```bash
# Install Sharp (if not installed)
npm install sharp

# Convert images
npx @squoosh/cli --webp auto public/products/*.jpg
```

### 2. Compress Images
Before uploading images:
- Use [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
- Target: Under 100-150 KB per image
- Recommended dimensions: 800x600px for product images

### 3. Use Next.js Image Component (Alternative)
If you migrate to Next.js in the future, use `<Image>` component for automatic optimization.

### 4. Implement Responsive Images
Add different sizes for different screen sizes:

```jsx
<img 
  srcSet="
    image-small.webp 400w,
    image-medium.webp 800w,
    image-large.webp 1200w
  "
  sizes="(max-width: 600px) 400px, (max-width: 900px) 800px, 1200px"
  src="image-medium.webp"
  alt="Product"
  loading="lazy"
/>
```

## 📊 Current Optimizations Applied

✅ **Lazy Loading** - All images load only when visible
✅ **Async Decoding** - Images decode asynchronously
✅ **Preconnect** - Fonts and analytics preconnected
✅ **Code Splitting** - Vendor chunks separated
✅ **Minification** - Console.logs removed in production
✅ **Cache Headers** - 1-year cache for static assets (Vercel)

## 🎯 Target Scores

After image optimization:
- **Mobile**: 85-95+
- **Desktop**: 95-100

## 🛠️ Quick Win

Optimize your top 5 most visible images first (hero, featured products). This alone can boost mobile score by 20-30 points.

## Tools

- [Squoosh](https://squoosh.app/) - Google's image compressor
- [TinyPNG](https://tinypng.com/) - PNG/JPG optimizer
- [ImageOptim](https://imageoptim.com/) - Mac app for batch optimization
- [Sharp](https://sharp.pixelplumbing.com/) - Node.js image processing

---

**Next Steps**: Compress all images in `/public/products/` and `/public/logo/` directories.
