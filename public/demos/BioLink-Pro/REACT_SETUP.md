# ⚛️ React Setup Guide

Quick guide to get the React version running.

---

## 🚀 Quick Start

### Option 1: Create React App (Easiest)

```powershell
# 1. Create a new React app
npx create-react-app biolink-pro
cd biolink-pro

# 2. Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 3. Copy the files from this folder:
# - Copy App.jsx to src/App.jsx
# - Copy App.css to src/App.css
# - Copy tailwind.config.js to root (replace existing)

# 4. Update src/index.css (replace everything with this):
```

**src/index.css:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```powershell
# 5. Start the development server
npm start
```

Your app will open at `http://localhost:3000`

---

### Option 2: Vite (Faster)

```powershell
# 1. Create a new Vite project
npm create vite@latest biolink-pro -- --template react
cd biolink-pro

# 2. Install dependencies
npm install

# 3. Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 4. Copy files:
# - App.jsx to src/App.jsx
# - App.css to src/App.css
# - tailwind.config.js to root

# 5. Update src/index.css:
```

**src/index.css:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```powershell
# 6. Start dev server
npm run dev
```

---

## ✏️ Editing Your Info

Open `src/App.jsx` and find the `profile` object at the top:

```javascript
const profile = {
  name: "Alex Rivera",  // 👈 Change this
  title: "Digital Creator & Entrepreneur",  // 👈 Change this
  avatarUrl: "https://...",  // 👈 Your photo URL
  
  social: {
    instagram: "https://instagram.com/yourhandle",  // 👈 Change these
    twitter: "https://twitter.com/yourhandle",
    youtube: "https://youtube.com/@yourchannel",
    email: "mailto:hello@youremail.com"
  },
  
  links: [
    { emoji: "🌐", text: "Visit My Website", url: "https://yourwebsite.com" },
    // 👆 Add/remove/edit links here
  ],
  
  footer: "© 2026 Your Name • Made with BioLink Pro"
};
```

Save the file and your browser will auto-reload.

---

## 🎨 Customizing Styles

All animations and glassmorphism effects are in `App.css`.

**Change background colors:**
```css
.gradient-bg {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #667eea 100%);
  /* 👆 Change these color codes */
}
```

**Change animation speed:**
```css
animation: gradientShift 15s ease infinite;
/* 👆 Change 15s to faster (10s) or slower (25s) */
```

---

## 📦 Building for Production

```powershell
# Create React App:
npm run build

# Vite:
npm run build
```

Your production files will be in the `build/` or `dist/` folder.

---

## 🚀 Deploying

### Netlify (Easiest)
```powershell
# 1. Install Netlify CLI
npm install -g netlify-cli

# 2. Build your app
npm run build

# 3. Deploy
netlify deploy --prod
```

### Vercel
```powershell
# 1. Install Vercel CLI
npm install -g vercel

# 2. Deploy
vercel
```

### GitHub Pages
```powershell
# 1. Install gh-pages
npm install -D gh-pages

# 2. Add to package.json:
"homepage": "https://yourusername.github.io/biolink-pro",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}

# 3. Deploy
npm run deploy
```

---

## 🆘 Troubleshooting

**Issue: Styles not showing**
- Make sure `@tailwind` directives are in `src/index.css`
- Restart the dev server

**Issue: Build fails**
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again

**Issue: Background not animating**
- Check `App.css` is imported in `App.jsx`
- Clear browser cache

---

## 📚 Learn More

- [React Docs](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Vite Docs](https://vitejs.dev)

---

**Need help? Check the comments in the code — everything is documented!**