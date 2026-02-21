# 🌟 BioLink Pro - Personal Link Hub

**A stunning glassmorphism-style "link in bio" page** — the premium alternative to Linktree.

Perfect for influencers, creators, entrepreneurs, and professionals who want a beautiful, mobile-first digital business card.

---

## ✨ Features

- **Glassmorphism Design:** Frosted glass effect with animated gradient background
- **Mobile-First:** Perfect on phones, beautiful on desktop
- **Fully Customizable:** Change your name, links, colors, and more
- **No Coding Required:** Just edit the marked sections
- **Fast & Lightweight:** Single HTML file or React component

---

## 🚀 Quick Start (HTML Version)

### Step 1: Open the File
1. Double-click `index.html` to open it in your browser
2. You'll see the demo page with placeholder content

### Step 2: Edit Your Info
1. Right-click `index.html` and choose "Open with" → **Notepad** (Windows) or **TextEdit** (Mac)
2. Look for sections marked with:
   ```
   👇 CHANGE YOUR INFO HERE
   ```

### Step 3: What to Change

#### Your Profile
Find this section (~line 95):
```html
<!-- Name - CHANGE YOUR NAME BELOW -->
<h1 class="text-3xl font-bold text-white drop-shadow-lg">
    Alex Rivera
</h1>

<!-- Title/Bio - CHANGE YOUR TITLE BELOW -->
<p class="text-lg text-white/90 font-light">
    Digital Creator & Entrepreneur
</p>
```
- Replace **"Alex Rivera"** with your name
- Replace **"Digital Creator & Entrepreneur"** with your title

#### Your Photo
Find this (~line 88):
```html
<img 
    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300&h=300&fit=crop" 
    alt="Profile Picture" 
```
- Replace the URL with your own photo URL
- Or upload your photo to a free service like [Imgur](https://imgur.com) and paste the link

#### Social Media Links
Find the social section (~line 107):
```html
<!-- Instagram - CHANGE THE URL BELOW -->
<a href="https://instagram.com/yourhandle" target="_blank">
```
- Replace `yourhandle` with your actual username
- Do the same for Twitter, YouTube, and Email

#### Your Links
Find the links section (~line 160):
```html
<!-- Link 1 - CHANGE TEXT AND URL -->
<a href="https://yourwebsite.com" target="_blank">
    <div class="glass-card rounded-2xl p-4 text-center">
        <p class="text-white font-semibold text-lg">🌐 Visit My Website</p>
    </div>
</a>
```
- Replace `https://yourwebsite.com` with your actual link
- Replace `🌐 Visit My Website` with your button text
- Change the emoji if you want

**To add more links:** Copy one entire link block and paste it below the others.

### Step 4: Save & View
1. Save the file (Ctrl+S or Cmd+S)
2. Refresh your browser to see the changes

---

## 📱 Hosting Your Page

### Option 1: Free Hosting (Easiest)

**Netlify Drop** (Recommended):
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag and drop your `index.html` file
3. Get a free `.netlify.app` link instantly
4. Optional: Connect your own domain

**GitHub Pages** (Free):
1. Create a GitHub account
2. Create a new repository named `yourname.github.io`
3. Upload `index.html`
4. Your page will be live at `https://yourname.github.io`

### Option 2: Your Own Domain
1. Buy a domain from [Namecheap](https://namecheap.com) or [Google Domains](https://domains.google)
2. Use Netlify or Vercel to connect your domain
3. Upload your `index.html` file

---

## ⚛️ React Version (For Developers)

If you're a developer or want to use this in a React project:

### Files Included:
- `App.jsx` — Main component
- `App.css` — Styles with animations
- `tailwind.config.js` — Tailwind configuration

### Setup:
```bash
# 1. Create a new React app
npx create-react-app my-biolink

# 2. Install Tailwind CSS
npm install -D tailwindcss
npx tailwindcss init

# 3. Replace the files:
# - Copy App.jsx to src/App.jsx
# - Copy App.css to src/App.css
# - Copy tailwind.config.js to the root

# 4. Update src/index.css:
@tailwind base;
@tailwind components;
@tailwind utilities;

# 5. Start the dev server
npm start
```

### Editing the React Version:
Open `App.jsx` and find the `profile` object at the top (~line 7):
```javascript
const profile = {
  name: "Alex Rivera",
  title: "Digital Creator & Entrepreneur",
  // ... change your info here
};
```

---

## 🎨 Customization Tips

### Change the Background Colors
In `index.html` or `App.css`, find the `.gradient-bg` section:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #667eea 100%);
```
- Replace the color codes (`#667eea`, etc.) with your own
- Use a tool like [Coolors.co](https://coolors.co) to pick colors

### Change Animation Speed
Find this line:
```css
animation: gradientShift 15s ease infinite;
```
- Change `15s` to `10s` for faster, `25s` for slower

### Change Glass Opacity
Find `.glass-card`:
```css
background: rgba(255, 255, 255, 0.1);
```
- Change `0.1` to `0.15` for more opacity, `0.05` for less

---

## ❓ FAQ

**Q: Can I use my own photo?**  
A: Yes! Upload your photo to [Imgur](https://imgur.com), copy the direct link, and replace the `src` URL.

**Q: How do I add more links?**  
A: Copy one entire link block (from `<a href=...` to `</a>`) and paste it. Then change the text and URL.

**Q: Can I change the emojis?**  
A: Yes! Just replace the emoji character (🌐, 🎥, etc.) with any emoji you like.

**Q: Is this mobile-friendly?**  
A: Absolutely! It's designed mobile-first and looks great on all devices.

**Q: Do I need to know coding?**  
A: No! Just follow the comments marked with 👇 and change the text/URLs.

---

## 📞 Support

If you need help, look for the comments in the HTML file that say:
- `👇 CHANGE YOUR INFO HERE`
- `CHANGE TEXT AND URL`

Everything you need to edit is marked clearly!

---

## 📄 License

This template is free to use for personal and commercial projects.

**Made with BioLink Pro** 🌟