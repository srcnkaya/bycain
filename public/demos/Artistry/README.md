# ARTISTRY - Minimalist Artist Portfolio Template

A high-end, Awwwards-level website template designed for painters, sculptors, and photographers. Ultra-minimalist design with elegant animations and a professional gallery layout.

---

## 🎨 Features

- **Masonry Gallery** - Pinterest-style responsive grid for artwork display
- **Lightbox Viewer** - Click to view images in full-screen modal
- **Modular Components** - Navbar and Footer are dynamically injected (OOP JavaScript)
- **Minimalist Design** - Clean, white space-heavy aesthetic with subtle animations
- **Fully Responsive** - Mobile-first design optimized for all screen sizes (desktop, tablet, and mobile)
- **Touch-Optimized** - Enhanced mobile interactions with proper touch targets
- **SEO-Friendly** - Semantic HTML5 structure with proper meta tags

---

## 📁 File Structure

```
Artistry/
│
├── index.html              # Main Gallery Page (Masonry Layout)
├── about.html              # Artist Biography & Photo
├── contact.html            # Commission Request Form
├── README.md               # Documentation (You are here!)
│
└── assets/
    ├── css/
    │   └── style.css       # Custom styles & animations
    │
    ├── js/
    │   ├── components.js   # Navbar & Footer (injected dynamically)
    │   └── gallery.js      # Lightbox logic for image viewing
    │
    └── images/
        └── (Place your artwork images here)
```

---

## 🚀 Quick Start Guide

### 1️⃣ Add Your Artwork Images

**Option A: Use Local Images**
1. Upload your images to `assets/images/`
2. Open `index.html`
3. Find the gallery section:
```html
<div class="masonry-item">
    <img src="assets/images/your-artwork.jpg" alt="Artwork Title">
</div>
```

**Option B: Use External URLs**
- Replace placeholder Unsplash URLs with your own hosted images

---

### 2️⃣ Change Artist Name & Branding

**Update Site Title:**
- Open `index.html`, `about.html`, and `contact.html`
- Find `<title>ARTISTRY</title>` and replace "ARTISTRY" with your name

**Update Logo in Navbar:**
- Open `assets/js/components.js`
- Find line with `<a href="index.html" class="nav-logo">ARTISTRY</a>`
- Replace "ARTISTRY" with your artist name

**Update Hero Section:**
- Open `index.html`
- Find `<h1 class="hero-title">ARTISTRY</h1>`
- Replace with your tagline

---

### 3️⃣ Customize About Page

- Open `about.html`
- Replace the artist photo URL with your own image
- Edit the biography text in the `<p class="about-text">` sections
- Update education/exhibitions lists

---

### 4️⃣ Connect Contact Form

The contact form currently shows a placeholder success message. To make it functional:

**Option 1: Use FormSpree (Easiest)**
1. Go to [https://formspree.io](https://formspree.io) and create a free account
2. Get your form endpoint URL
3. Open `contact.html`
4. Replace `<form action="#">` with:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

**Option 2: Use Netlify Forms**
- If hosting on Netlify, add `netlify` attribute:
  ```html
  <form name="contact" method="POST" data-netlify="true">
  ```

**Option 3: Custom Backend**
- Replace the JavaScript in `contact.html` with your own AJAX submission logic

---

### 5️⃣ Update Social Media Links

- Open `assets/js/components.js`
- Find the `Footer` class constructor
- Update the `socialLinks` array with your profiles:
```javascript
this.socialLinks = [
    { platform: 'Instagram', url: 'https://instagram.com/yourhandle', icon: '📷' },
    { platform: 'Behance', url: 'https://behance.net/yourhandle', icon: '🎨' },
    // Add more or remove as needed
];
```

---

## 🎨 Customization Guide

### Change Colors

Open `assets/css/style.css` and edit the CSS variables:

```css
:root {
    --bg-color: #ffffff;        /* Background color */
    --text-color: #1a1a1a;      /* Text color */
    --accent-color: #e2e2e2;    /* Borders & accents */
}
```

### Change Fonts

Current fonts:
- **Headings:** Cormorant Garamond (Elegant Serif)
- **Body:** Montserrat (Modern Sans-Serif)

To change fonts:
1. Visit [Google Fonts](https://fonts.google.com)
2. Select your desired fonts
3. Replace the `<link>` tag in all HTML files
4. Update CSS variables in `style.css`:
```css
--font-serif: 'Your-Serif-Font', serif;
--font-sans: 'Your-Sans-Font', sans-serif;
```

### Adjust Spacing

Spacing is controlled by CSS variables in `style.css`:
```css
--spacing-xs: 0.5rem;
--spacing-sm: 1rem;
--spacing-md: 2rem;
--spacing-lg: 4rem;
--spacing-xl: 6rem;
```

---

## 🌐 Deployment

### Hosting Recommendations:

1. **Netlify** (Free, Easy)
   - Drag & drop the `Artistry` folder
   - Automatic SSL & CDN

2. **Vercel** (Free, Fast)
   - Connect GitHub repo or upload manually

3. **GitHub Pages** (Free)
   - Push to GitHub and enable Pages in settings

4. **Traditional Hosting** (Bluehost, SiteGround, etc.)
   - Upload via FTP/SFTP

---

## 📱 Browser Support

- ✅ Chrome (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Edge (Latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🐛 Troubleshooting

**Q: Images not loading?**
- Check file paths in `index.html`
- Ensure images are in `assets/images/` folder
- File names are case-sensitive on some servers

**Q: Navbar/Footer not showing?**
- Check browser console for JavaScript errors
- Ensure `components.js` is loaded before closing `</body>` tag

**Q: Lightbox not working?**
- Ensure `gallery.js` is loaded on the page
- Check that images have the class `masonry-item`

---

## 📄 License

This template is provided as-is for personal and commercial use. You are free to:
- ✅ Use for client projects
- ✅ Modify and customize
- ✅ Use for commercial purposes

**Credit appreciated but not required!**

---

## 🤝 Support

For questions or customization help:
- **Email:** support@artistry-template.com *(Replace with your support contact)*
- **Documentation:** Check comments in HTML/CSS/JS files for inline guidance

---

## 🎉 Final Notes

Thank you for choosing **ARTISTRY**! This template was crafted with attention to detail and modern web standards. 

**Pro Tips:**
- Keep your image file sizes optimized (use tools like TinyPNG)
- Add your own favicon (`favicon.ico`) in the root directory
- Consider adding Google Analytics for visitor tracking
- Set up an email newsletter popup for collecting leads

**Need more features?** Consider adding:
- Blog section for artist statements
- Shop integration (Shopify, Gumroad)
- Instagram feed embed
- Video gallery for process videos

---

**Enjoy building your portfolio! 🌟**
