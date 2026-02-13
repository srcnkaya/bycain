# 🛍️ Digital Store Setup Guide

Your digital store is now live on your portfolio! Here's everything you need to know.

---

## 📁 File Structure

```
src/
├── data/
│   └── products.js          ← Your product database
├── components/
│   └── Shop.jsx             ← The store component
└── App.jsx                  ← Updated with Shop section
```

---

## ✅ What's Already Done

✨ **Shop Component** - Beautiful grid layout with quiet luxury design  
✨ **Category Filtering** - Tabs for All, Templates, UI Kits  
✨ **6 Demo Products** - Ready for you to customize  
✨ **Lemon Squeezy Ready** - Buy Now buttons configured  
✨ **Responsive Design** - Works on all devices  
✨ **Smooth Animations** - Framer Motion transitions  

---

## 🔧 How to Add/Edit Products

### Edit `src/data/products.js`

Each product has this structure:

```javascript
{
  id: 1,                          // Unique number
  title: "Agency Template V1",    // Product name
  description: "A premium...",    // Short description
  price: 29,                      // Price in dollars
  category: "Templates",          // Templates or UI Kits
  tags: ["React", "Tailwind"],    // Tech stack tags
  image: "/products/image.jpg",   // Image path
  lemonSqueezyUrl: "https://...", // Your checkout URL
  featured: true,                 // Show FEATURED badge?
}
```

### To Add a New Product:

1. Copy an existing product object
2. Change the `id` to a unique number
3. Update all fields with your product info
4. Add your Lemon Squeezy checkout URL
5. Save the file - changes appear instantly!

### To Remove a Product:

Simply delete the entire product object from the array.

---

## 💳 Lemon Squeezy Integration

### Steps:

1. **Create Products in Lemon Squeezy:**
   - Go to your [Lemon Squeezy Dashboard](https://app.lemonsqueezy.com/)
   - Create products for each template/kit
   - Get the checkout URL for each

2. **Add URLs to Your Products:**
   - Open `src/data/products.js`
   - Find each product's `lemonSqueezyUrl` field
   - Replace the placeholder with your actual checkout URL:
   
   ```javascript
   lemonSqueezyUrl: "https://yourstorename.lemonsqueezy.com/checkout/buy/abc123def",
   ```

3. **Test:**
   - Click "Buy Now" on any product
   - It should open the Lemon Squeezy checkout in a new tab

---

## 🖼️ Adding Product Images

### Option 1: Local Images

1. Create a `public/products/` folder in your project
2. Add your product screenshots (recommended size: 800x600px)
3. Update the `image` field in `products.js`:
   ```javascript
   image: "/products/agency-template.jpg"
   ```

### Option 2: External URLs

Use image hosting (Cloudinary, imgbb, etc.):
```javascript
image: "https://cdn.example.com/my-product.jpg"
```

### Current State:

Right now, products show a placeholder. Uncomment this line in `Shop.jsx` (line ~104) when you have images:

```javascript
<img 
  src={product.image} 
  alt={product.title}
  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
/>
```

---

## 🎨 Customization

### Change Categories:

Edit the categories in individual products. The filter tabs auto-generate from your product categories.

Example: Add "Assets" category:
```javascript
{
  id: 7,
  title: "Icon Pack Pro",
  category: "Assets",  // New category!
  // ... rest of product
}
```

The "Assets" tab will automatically appear!

### Change Store Description:

Edit line ~62 in `Shop.jsx`:
```javascript
<p className="text-luxury-charcoal/70 max-w-2xl mx-auto text-lg">
  {/* [MANUAL FIX]: Update store description */}
  Your custom description here
</p>
```

---

## 🎯 Featured Products

Set `featured: true` on products you want to highlight with a "FEATURED" badge:

```javascript
{
  id: 1,
  title: "Best Seller",
  featured: true,  // Shows badge!
  // ...
}
```

---

## 📊 Product Display

- **Desktop:** 3 columns
- **Tablet:** 2 columns
- **Mobile:** 1 column

All automatically responsive!

---

## 🔍 SEO Tips

Add these to your product descriptions for better discoverability:
- Main features/benefits
- Technologies used
- Who it's for
- What problems it solves

Keep descriptions between 100-150 characters for best display.

---

## 🚀 Next Steps

1. ✅ Update product information in `products.js`
2. ✅ Add your Lemon Squeezy checkout URLs
3. ✅ Upload product screenshots
4. ✅ Test the "Buy Now" flow
5. ✅ Customize store description
6. ✅ Review on mobile devices

---

## 💡 Tips

- **High-Quality Images:** Use clear screenshots or mockups
- **Compelling Descriptions:** Focus on benefits, not just features
- **Competitive Pricing:** Research similar products
- **Featured Products:** Highlight your best sellers or newest items
- **Regular Updates:** Add new products regularly to keep visitors engaged

---

**Need help?** Check out the [Lemon Squeezy Docs](https://docs.lemonsqueezy.com/) for payment setup.

Your store is ready to start selling! 🎉
