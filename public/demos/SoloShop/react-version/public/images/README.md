# Product Images Folder

## 📸 How to Add Your Product Images

Place all your product images in this `/public/images/` folder.

### Image Requirements

- **Format:** JPG, PNG, or WebP
- **Recommended Size:** 600x600px for main images, 150x150px for thumbnails
- **Naming Convention:** Use descriptive names like:
  - `product-front.jpg`
  - `product-side.jpg`
  - `product-angle.jpg`
  - `product-closeup.jpg`

### How to Use Images in Your Code

Once you place images here, reference them in `App.jsx` like this:

```javascript
const productImages = [
  {
    thumbnail: "/images/product-front.jpg",
    full: "/images/product-front.jpg",
    alt: "Product Front View"
  },
  {
    thumbnail: "/images/product-side.jpg",
    full: "/images/product-side.jpg",
    alt: "Product Side View"
  },
  // Add more images...
];
```

### Current Setup

The template currently uses **Unsplash placeholder images** from URLs. Once you add your own images to this folder, replace those URLs with local paths starting with `/images/`.

### Example

If you have a file named `smartwatch-1.jpg` in this folder, use it like:

```javascript
thumbnail: "/images/smartwatch-1.jpg",
full: "/images/smartwatch-1.jpg",
```

### Tips

1. **Optimize your images** before uploading (compress them to reduce file size)
2. Use tools like [TinyPNG](https://tinypng.com) or [ImageOptim](https://imageoptim.com)
3. Keep image file sizes under 500KB for faster loading
4. Use consistent aspect ratios for all product images (square works best)

---

**Need help?** Check the main README.md in the project root folder.
