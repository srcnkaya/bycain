# Bycain Ventures - Portfolio & Venture Studio

A minimalist, high-converting portfolio website built with React, Tailwind CSS, and Framer Motion. Designed with a "Quiet Luxury" aesthetic—clean, professional, and timeless.

---

## 🎨 Design Philosophy

**Quiet Luxury** • **Old Money** • **Minimalist**

- **Color Palette**: Black, White, Beige tones
- **Typography**: Serif headlines (Playfair Display) + Sans-serif body (Inter)
- **Animations**: Smooth, subtle transitions via Framer Motion
- **Aesthetic**: Professional, understated elegance

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn**

### Installation

1. **Run the setup script** in PowerShell:

```powershell
cd bycain-ventures
.\SETUP.ps1
```

This script will:
- Initialize a Vite React project
- Install all dependencies (Tailwind CSS, Framer Motion, Lucide React)
- Create the necessary folder structure

2. **Replace the generated files** with the provided component files (already done if you received the complete package).

3. **Start the development server**:

```bash
npm run dev
```

Your site will be live at `http://localhost:5173`

---

## 📝 Manual Fixes Required

Throughout the codebase, you'll find comments marked with:

```javascript
// [MANUAL FIX]: Instructions here
```

### Files That Need Your Input

#### 1. **src/components/Hero.jsx**
- **Line ~14**: Replace "CAIN" with your actual name/brand
- **Line ~19**: Update your tagline/subtitle
- **Line ~27-29**: Write your personal mission statement

#### 2. **src/components/About.jsx**
- **Line ~34**: Replace placeholder div with your actual photo
  ```jsx
  <img src="/path/to/your-photo.jpg" alt="Your Name" className="w-full h-full object-cover" />
  ```
- **Lines ~47-60**: Write your full bio (3-4 paragraphs)
- **Lines ~67-72**: Update your expertise/skills tags

#### 3. **src/components/Ventures.jsx**
- **Lines ~10-37**: Replace placeholder ventures with your actual projects
  - Update `title`, `category`, `description`
  - Add real `link` URLs
  - Change `status` (Live, Coming Soon, In Development)
  - Update icons if needed
- **Line ~61**: Update ventures section description

#### 4. **src/components/Contact.jsx**
- **Lines ~10-43**: Update ALL social links with your real information:
  - Email address
  - GitHub username
  - LinkedIn profile
  - Twitter/X handle
  - Instagram handle
- Remove any social links you don't want to display
- **Line ~59**: Update contact intro text
- **Line ~113**: Update copyright name

#### 5. **src/components/Header.jsx**
- **Line ~38**: Update logo/brand name (currently "CAIN")

#### 6. **index.html**
- **Line ~9**: Update page title
- **Lines ~10-11**: Update meta description
- **Lines ~14-16**: Update Open Graph tags for social sharing
- **Lines ~19-21**: Update Twitter Card tags
- Add your social image paths (uncomment and update image URLs)

---

## 🎯 Project Structure

```
bycain-ventures/
├── public/              # Static assets (add images here)
├── src/
│   ├── assets/          # Additional assets if needed
│   ├── components/      # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Ventures.jsx
│   │   └── Contact.jsx
│   ├── pages/           # Future pages (if expanding)
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles + Tailwind
├── index.html           # HTML template
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS config
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies
```

---

## 🛠️ Available Scripts

### Development

```bash
npm run dev
```
Starts the Vite development server with hot reload.

### Build for Production

```bash
npm run build
```
Creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```
Serves the production build locally for testing.

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy Vite projects with zero configuration.

#### Option 1: Deploy via Vercel CLI

1. **Install Vercel CLI:**
```bash
npm install -g vercel
```

2. **Build your project:**
```bash
npm run build
```

3. **Deploy:**
```bash
vercel
```

Follow the prompts. Vercel will automatically detect your Vite configuration.

#### Option 2: Deploy via Vercel Dashboard

1. **Build your project:**
```bash
npm run build
```

2. **Push your code to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/bycain-ventures.git
git push -u origin main
```

3. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Vite settings
   - Click "Deploy"

**Build Settings (Auto-detected):**
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

### Deploy to Netlify

#### Option 1: Drag & Drop

1. **Build your project:**
```bash
npm run build
```

2. **Drag the `dist` folder** to [Netlify Drop](https://app.netlify.com/drop)

#### Option 2: Netlify CLI

1. **Install Netlify CLI:**
```bash
npm install -g netlify-cli
```

2. **Build your project:**
```bash
npm run build
```

3. **Deploy:**
```bash
netlify deploy --prod
```

Select `dist` as the publish directory when prompted.

#### Option 3: Continuous Deployment from Git

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [Netlify](https://app.netlify.com)
3. Click "New site from Git"
4. Connect your repository
5. **Build settings:**
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click "Deploy site"

### Environment Variables (If Needed)

If you add API keys later (e.g., for analytics), add them to your hosting platform:

**Vercel:**
- Go to Project Settings → Environment Variables
- Add your variables (e.g., `VITE_ANALYTICS_ID`)

**Netlify:**
- Go to Site Settings → Environment Variables
- Add your variables

**Important:** Vite requires environment variables to be prefixed with `VITE_` to be exposed to the client.

---

## 🎨 Customization Guide

### Colors

Edit `tailwind.config.js` to modify the color palette:

```javascript
colors: {
  luxury: {
    black: '#0A0A0A',
    charcoal: '#1A1A1A',
    gray: '#2A2A2A',
    beige: '#E8E3D8',
    cream: '#F5F1E8',
    white: '#FAFAFA',
  }
}
```

### Fonts

The project uses:
- **Playfair Display** (serif) for headlines
- **Inter** (sans-serif) for body text

Both are loaded from Google Fonts in `src/index.css`.

### Animations

All animations use Framer Motion. Adjust timing/effects in individual component files.

---

## 📦 Dependencies

- **React** (v18+) - UI library
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

---

## 🚢 Deployment

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag the `dist/` folder to [Netlify Drop](https://app.netlify.com/drop)

### Deploy to Vercel

1. Push your code to GitHub
2. Import the repo in [Vercel](https://vercel.com)
3. Vercel auto-detects Vite configuration

### Deploy to GitHub Pages

```bash
npm run build
# Push the dist/ folder to a gh-pages branch
```

---

## ✅ Final Checklist

Before going live, make sure you've:

- [ ] Updated all `[MANUAL FIX]` sections
- [ ] Added your actual photo
- [ ] Replaced placeholder ventures with real projects
- [ ] Updated all social media links
- [ ] Changed meta tags in `index.html`
- [ ] Tested all links and navigation
- [ ] Tested mobile responsiveness
- [ ] Run `npm run build` to ensure no errors
- [ ] Added a favicon (replace `/vite.svg` in `public/`)

---

## 📄 License

This project is open-source and available for personal use. Modify freely.

---

## 🙏 Credits

Built with modern web technologies:
- Design inspired by minimalist luxury aesthetics
- Icons by [Lucide](https://lucide.dev)
- Fonts from [Google Fonts](https://fonts.google.com)

---

**Questions or need help?** Reach out via the contact form once the site is live! 🚀
