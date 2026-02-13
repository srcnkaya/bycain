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
│   ├── Header.jsx         // Sticky nav, steel blue on scroll
│   ├── Hero.jsx           // "ByCain" + "Developer & Entrepreneur"
│   ├── Shop.jsx           // Product grid, category filter, Buy/Preview buttons
│   ├── PreviewModal.jsx   // Full-screen iframe modal for live demos
│   ├── TechStack.jsx      // Grid of tech tools (React, Vite, etc.)
│   ├── About.jsx          // Minimalist text-only bio (NO photo)
│   └── Contact.jsx        // Social links, footer
├── data/
│   └── products.js        // Product database (easy to edit)
├── App.jsx                // Layout: Hero → Shop → TechStack → About → Contact
├── index.css              // Tailwind v4 config (@import "tailwindcss")
└── main.jsx               // Entry point

tailwind.config.js         // Color palette, rounded corners
postcss.config.js          // @tailwindcss/postcss plugin
index.html                 // Meta tags, "ByCain | Developer & Entrepreneur"
```

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
- **Rounded cards:** `rounded-2xl`
- **Smooth animations:** Framer Motion with AnimatePresence

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
  category: "Templates" | "UI Kits",
  tags: ["React", "Tailwind", ...],
  image: "/products/image.jpg",
  lemonSqueezyUrl: "https://...",  // Checkout URL
  previewUrl: "https://...",       // Live demo URL
  featured: boolean
}
```

**To add/edit products:** Only edit `products.js` - no code changes needed.

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

### Change Accent Color:
1. Open `tailwind.config.js`
2. Edit `luxury.slate` hex value
3. Restart dev server

### Update Content:
- **Hero text:** `src/components/Hero.jsx`
- **About bio:** `src/components/About.jsx`
- **Tech stack:** `src/components/TechStack.jsx`
- **Social links:** `src/components/Contact.jsx`

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

## 🎯 Current State

- ✅ Steel blue + rounded design implemented
- ✅ Live Preview modal working
- ✅ Layout: Hero → Shop → TechStack → About → Contact
- ✅ "ByCain" branding everywhere
- ✅ Deployment guide in README.md
- ✅ Ready for production

**Last Updated:** 2026-02-13  
**Version:** 1.0 (Production-ready)

---

**Token-Saving Tip:** This file contains everything needed to understand the project. No need to read all component code unless making specific changes to that file.
