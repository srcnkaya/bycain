# 📘 PROJECT CONTEXT - ByCain Portfolio

**Quick reference for AI assistant to understand the project without reading all code.**

---

## 🎯 Project Overview

**Name:** ByCain Portfolio  
**Type:** Digital product store + portfolio website  
**Tech Stack:** React + Vite + Tailwind CSS v4 + Framer Motion  
**Purpose:** Sell coding templates and digital assets via Lemon Squeezy  

---

## 🎨 Design System

### Colors (Steel Blue Theme)
```javascript
luxury-black      #0A0A0A   // Main backgrounds, text
luxury-charcoal   #1A1A1A   // Card backgrounds
luxury-gray       #2A2A2A   // Borders
luxury-slate      #94a3b8   // PRIMARY ACCENT (buttons, hover)
luxury-platinum   #cbd5e1   // Light accent text
luxury-slateLight #e2e8f0   // Light backgrounds
luxury-white      #FAFAFA   // White sections
```

### Styling Rules
- ✅ **Rounded corners:** `rounded-xl` (1rem), `rounded-2xl` (1.5rem)
- ✅ **Steel blue accents** on all interactive elements
- ❌ **NO beige/cream colors** (removed)
- ❌ **NO sharp corners** anywhere
- Fonts: Playfair Display (serif headers), Inter (body)

---

## 📂 Project Structure

```
src/
├── components/
│   ├── Header.jsx         // Sticky nav with smart routing (works from any page)
│   ├── Hero.jsx           // "ByCain" + "Developer & Entrepreneur"
│   ├── Shop.jsx           // Product grid with search, filters, pagination
│   ├── PreviewModal.jsx   // Full-screen iframe modal for live demos
│   ├── TechStack.jsx      // Grid of tech tools (React, Vite, etc.)
│   ├── About.jsx          // Minimalist text-only bio (NO photo)
│   └── Contact.jsx        // Social links, footer
├── pages/
│   ├── Privacy.jsx        // Privacy policy (auto-scroll to top)
│   └── Terms.jsx          // Terms of service (auto-scroll to top)
├── data/
│   └── products.js        // Product database (easy to edit)
├── App.jsx                // Router + ScrollToTop component
├── index.css              // Tailwind v4 config (@import "tailwindcss")
└── main.jsx               // Entry point

tailwind.config.js         // Color palette, rounded corners
postcss.config.js          // @tailwindcss/postcss plugin
index.html                 // Meta tags, "ByCain | Developer & Entrepreneur"
```

### Navigation & Routing:
- **Header Navigation:** Works from any page (Privacy, Terms, Home)
- **ByCain Logo:** Always returns to home page (smooth scroll if already home)
- **Section Links:** Automatically navigate to home first if on another page
- **Scroll Restoration:** All pages start from top (ScrollToTop component in App.jsx)
- **Smooth Scrolling:** All internal navigation uses smooth scroll behavior

---

## 🧩 Section Layout (Order Matters!)

1. **Hero** - Black background, steel blue buttons
2. **Shop** - White background, product grid with filters
3. **Tech Stack** - Black background, tech tool grid
4. **About** - White background, text-only (NO photo, NO skills)
5. **Contact** - Black background, social links

---

## 🛍️ Shop Section Features

### Product Cards:
- **2 Buttons:**
  - **"Buy Now"** (solid steel blue) → Opens Lemon Squeezy checkout
  - **"Preview"** (outline steel blue + eye icon) → Opens PreviewModal
- **Category Filter:** All, Templates, UI Kits (auto-generated from products)
- **Search Box:** Real-time search through titles, descriptions, and tags
- **Pagination:** 9 products per page with Previous/Next navigation
- **Rounded cards:** `rounded-2xl`
- **Smooth animations:** Framer Motion with AnimatePresence

### Search & Pagination:
- **Search:** Filters products by title, description, or tags (case-insensitive)
- **9 Products Per Page:** Automatic pagination when more than 9 products exist
- **Page Controls:** Number buttons + Previous/Next arrows with steel blue styling
- **Smart Reset:** Auto-reset to page 1 when changing filters or searching
- **Scroll Behavior:** Smooth scroll to shop section when changing pages

### PreviewModal:
- Full-screen overlay (z-50)
- Black background with header/footer
- Iframe for live demo
- Close button + ESC key support

---

## 📊 Product Data (`src/data/products.js`)

Each product has:
```javascript
{
  id: number,
  title: string,
  description: string,
  price: number,
  category: "Templates" | "UI Kits" | "Best Sellers",
  tags: ["React", "Tailwind", ...],
  image: "/products/image.jpg",
  lemonSqueezyUrl: "https://...",  // Checkout URL
  previewUrl: "https://...",       // Live demo URL
  featured: boolean
}
```

**To add/edit products:** Only edit `products.js` - no code changes needed.

### Best Sellers Category (Inactive):
- Category exists in code but **hidden** from filter buttons
- Ready to be activated later
- Plan: Add random products to grab visitor attention
- **To activate:** Update `categories` array in `products.js` to include "Best Sellers"
- Helper function `getBestSellers()` already available

---

## 🎭 Key Content

- **Brand Name:** "ByCain" (everywhere)
- **Role:** "Developer & Entrepreneur" (NO "Musician")
- **About Section:** 3 short paragraphs, text-only, centered, minimalist
- **No Live Projects:** (That's why Ventures was removed, replaced with Tech Stack)

---

## 🚀 Development Commands

```bash
npm run dev          # Start dev server (localhost:5173)
npm run build        # Build for production (dist/)
npm run preview      # Preview production build
```

---

## 🔧 Common Tasks

### Add a New Product:
1. Open `src/data/products.js`
2. Copy existing product object
3. Update all fields (id, title, price, URLs, etc.)
4. Save - changes appear instantly
5. **Automatic:** Pagination updates if more than 9 products

### Activate Best Sellers Category:
1. Open `src/data/products.js`
2. Change some products' category to `"Best Sellers"`
3. Update the `categories` array to include "Best Sellers"
4. The filter button will appear automatically

### Change Products Per Page:
1. Open `src/components/Shop.jsx`
2. Edit `PRODUCTS_PER_PAGE` constant (currently 9)
3. Save - pagination recalculates automatically

### Change Accent Color:
1. Open `tailwind.config.js`
2. Edit `luxury.slate` hex value
3. Restart dev server

### Update Content:
- **Hero text:** `src/components/Hero.jsx`
- **About bio:** `src/components/About.jsx`
- **Tech stack:** `src/components/TechStack.jsx`
- **Social links:** `src/components/Contact.jsx`
- **Privacy policy:** `src/pages/Privacy.jsx`
- **Terms of service:** `src/pages/Terms.jsx`

---

## ⚠️ Important Notes

1. **Tailwind v4** uses `@import "tailwindcss"` (not v3 syntax)
2. **PostCSS plugin:** `@tailwindcss/postcss` (not `tailwindcss`)
3. **All buttons/cards:** Must be rounded (`rounded-xl` or `rounded-2xl`)
4. **Steel blue only:** No other accent colors
5. **About section:** Text-only, NO photo placeholder

---

## 📝 When Starting a New Session

**Tell the AI:**
> "Read PROJECT-CONTEXT.md - this is the ByCain portfolio project. I need to [describe what you want to change]."

**Examples:**
- "Add a new product to the shop"
- "Change the hero section text"
- "Update the color scheme"
- "Add a new section"

**The AI will understand the project structure without reading all code!**

---

## 📋 Recent Updates (2026-02-14)

### Navigation Fixes:
- ✅ Privacy/Terms pages now start from top (auto-scroll on load)
- ✅ Header "ByCain" logo properly returns to home page
- ✅ Navigation links work from Privacy/Terms pages (navigate home → scroll to section)
- ✅ Added ScrollToTop component for proper page navigation

### Shop Enhancements:
- ✅ **Search Box:** Real-time product search (titles, descriptions, tags)
- ✅ **Pagination:** 9 products per page with page number controls
- ✅ **Smart Filters:** Search + category filters work together
- ✅ **Auto-reset:** Page resets to 1 when filtering or searching
- ✅ **Page Navigation:** Previous/Next buttons with steel blue styling

### Best Sellers Category:
- ✅ Category created but inactive (hidden from filter menu)
- ✅ Helper function `getBestSellers()` ready
- ✅ Documented for future activation with random products

---

## 🎯 Current State

- ✅ Steel blue + rounded design implemented
- ✅ Live Preview modal working
- ✅ Layout: Hero → Shop → TechStack → About → Contact
- ✅ "ByCain" branding everywhere
- ✅ Search & pagination in shop
- ✅ Smart navigation from all pages
- ✅ Deployment guide in README.md
- ✅ Ready for production

**Last Updated:** 2026-02-14  
**Version:** 1.1 (Enhanced Shop + Navigation)

---

**Token-Saving Tip:** This file contains everything needed to understand the project. No need to read all component code unless making specific changes to that file.
