# 📘 PROJECT CONTEXT — ByCain (bycain-ventures)

Quick reference so we can work on the project without re-reading the entire codebase.

---

## 🎯 Project Overview

- **Name:** ByCain
- **Type:** Landing + digital product store (templates/UI kits) + blog
- **Stack:** React 19 + Vite + Tailwind v4 + Framer Motion + React Router
- **Payments:** Lemon Squeezy checkout links
- **Hosting:** Vercel (SPA)

---

## 🎨 Design System

### Colors (Luxury Steel theme)
```text
luxury-black      #0A0A0A
luxury-charcoal   #1A1A1A
luxury-gray       #2A2A2A
luxury-slate      #94a3b8   (primary accent)
luxury-platinum   #cbd5e1
luxury-slateLight #e2e8f0
luxury-white      #FAFAFA
```

### Styling rules
- Rounded everywhere: `rounded-xl` / `rounded-2xl`
- Accent color: `luxury-slate`
- Fonts: Playfair Display (headings), Inter (body)

---

## 📂 Key Structure

```text
src/
  components/
    Header.jsx
    Hero.jsx
    Shop.jsx
    TechStack.jsx
    About.jsx
    Contact.jsx
    Footer.jsx
    SEO.jsx              # dynamic meta + canonical + OG/Twitter + JSON-LD
  pages/
    Privacy.jsx
    Terms.jsx
    BlogList.jsx         # /blog (search + pagination)
    BlogPost.jsx         # /blog/:slug (markdown render + share buttons)
  data/
    products.js
    blogPosts.js         # metadata only (slug/title/excerpt/date/tags/contentPath)
  utils/
    analytics.js         # GA4 event helper (gtag)
  App.jsx
  main.jsx
  index.css

public/
  products/
  logo/
  demos/                 # live demo files (static)
  blog/                  # markdown content files
  robots.txt
  sitemap.xml            # auto-generated

scripts/
  generate-sitemap.mjs   # builds sitemap.xml from blogPosts
  patch-demo-mobile.ps1  # injects mobile hardening CSS into demo index.html

vercel.json              # SPA rewrite + security headers
index.html               # base HTML + global meta + schema + analytics scripts
```

---

## 🧭 Routing

- `/` → Home (Hero → Shop → TechStack → About → Contact)
- `/privacy` → Privacy
- `/terms` → Terms
- `/blog` → Blog list
- `/blog/:slug` → Blog post

`App.jsx` uses React Router and includes `ScrollToTop`.

---

## 🧷 Header behavior

- Header is **transparent** only on the Home page at the very top.
- On **all non-home routes** (blog/privacy/terms), header is forced **light (white)** and nav text is **black**.
- Blog spacing: blog pages use extra top padding + margin to avoid being hidden under fixed header.

---

## 🛍️ Shop

### Features
- Category filter + search + pagination
- **Buy Now** → opens Lemon Squeezy in new tab
- **Live Demo** → opens demo link in new tab (uses `previewUrl`)

### Product schema (SEO)
`Shop.jsx` injects JSON-LD (`ItemList` of `Product` + `Offer`) for richer search understanding.

### Analytics events
- `buy_now_click`
- `live_demo_click`

---

## 🧪 Live demos (public/demos)

### How demos work
- Demo files live under `public/demos/<TemplateName>/index.html`
- `products.js` uses explicit `previewUrl` to each demo, typically:
  - `/demos/<Folder>/index.html`

### SEO / indexing prevention for demos
In `vercel.json` we set for `/demos/(.*)`:
- `X-Robots-Tag: noindex, nofollow, noarchive, nosnippet`
- `Cache-Control: no-store, no-cache, must-revalidate`

In `robots.txt`:
- `Disallow: /demos/`

### Mobile hardening for demos
Script: `scripts/patch-demo-mobile.ps1`
- Injects a shared CSS block into each demo `index.html` to reduce mobile breakage (overflow-x, grid to single col, responsive media, etc.)

> Note: Demo source cannot be fully hidden in the browser. We can only reduce discoverability/scraping and avoid publishing raw source repos.

---

## ✍️ Blog

### Content model
- Metadata in `src/data/blogPosts.js`:
  - `slug, title, excerpt, date, readingTime, tags, contentPath`
- Actual content is markdown in `public/blog/*.md`

### Blog list features (`/blog`)
- Search box (title/excerpt/tags)
- Pagination: **10 posts per page**

### Blog post features (`/blog/:slug`)
- Markdown rendering supports:
  - `## headings`
  - `**bold**`
  - inline code: `` `code` ``
  - code blocks: ``` ... ```
- Share buttons with colored icons:
  - X, LinkedIn, Facebook, WhatsApp, Copy Link

### Blog analytics events
- `blog_read_click` (from list)
- `blog_post_view` (detail view)
- `blog_share_click` / `blog_share_copy_link`

---

## 🗺️ Sitemap automation

- Script: `scripts/generate-sitemap.mjs`
- Command: `npm run sitemap`
- `npm run build` runs sitemap generation first:
  - `npm run sitemap && vite build`

Sitemap includes:
- `/`, `/privacy`, `/terms`, `/blog`, and all `/blog/:slug` from `blogPosts.js`.

---

## 🚀 Commands

```bash
npm run dev
npm run sitemap
npm run build
npm run preview
```

---

## ✅ Recent Updates (2026-02-21)

- Added **Blog** (`/blog`, `/blog/:slug`) with markdown content files in `public/blog/`
- Added **SEO component** (`SEO.jsx`) for per-route meta/canonical/OG/Twitter + JSON-LD
- Added **Product JSON-LD** in Shop for better SEO
- Added **sitemap automation** (build generates `public/sitemap.xml`)
- Added **share buttons** on blog posts (colored icons + copy link)
- Added **GA4 event tracking** helper + key events (shop/blog)
- Updated header behavior for non-home routes (always light header with black nav)
- Demo folder system finalized (`public/demos/...`) + **noindex** headers + robots disallow
- Demo mobile hardening script added (`patch-demo-mobile.ps1`)

**Last Updated:** 2026-02-21
