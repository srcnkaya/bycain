# 🚀 Quick Start Guide

Get your BarberKing website up and running in **5 minutes**!

---

## Step 1: Open the Template (30 seconds)

**Option A: Direct Open**
- Double-click `index.html`
- Your default browser will open the template

**Option B: Live Preview (Recommended)**
- Install VS Code + "Live Server" extension
- Right-click `index.html` → "Open with Live Server"

---

## Step 2: Update Business Info (2 minutes)

### Open `js/config.js` and change:

```javascript
// Line 18 - Your business name
name: 'YOUR SHOP NAME',

// Line 29-34 - Your address
street: '123 Your Street',
city: 'Your City',
state: 'XX',
zip: '12345',

// Line 37-38 - Contact info
phone: '(555) 123-4567',
email: 'info@yourshop.com',

// Line 56-59 - Social media
facebook: 'https://facebook.com/yourpage',
instagram: 'https://instagram.com/yourprofile',
```

**Save the file** and refresh your browser.

---

## Step 3: Update Services & Prices (1 minute)

### Open `index.html` and find line ~210:

```html
<!-- SERVICE CARD 1 -->
<h3>YOUR SERVICE NAME</h3>
<p>Service description</p>
<div class="price">$XX</div>
```

Change the service names and prices for all three main services.

**Save and refresh.**

---

## Step 4: Replace Images (1 minute)

### Hero Background (line ~140 in `index.html`)

```html
<!-- BEFORE -->
<img src="https://images.unsplash.com/photo-123..." alt="Old">

<!-- AFTER (use your own image) -->
<img src="images/hero-bg.jpg" alt="My Barber Shop">
```

### Gallery Images (line ~260)

```html
<img src="images/gallery/photo1.jpg" alt="Haircut Style">
```

Save your images in the `images/` and `images/gallery/` folders first.

**Save and refresh.**

---

## Step 5: Test & Deploy (30 seconds)

### Quick Test
- ✅ Click all navigation links
- ✅ Test mobile menu (shrink browser window)
- ✅ Verify contact info is correct
- ✅ Check that images load

### Deploy
- **Option 1:** Upload to your web host via FTP
- **Option 2:** Drag folder to [Netlify.com](https://netlify.com) (free)
- **Option 3:** Push to GitHub Pages

---

## 🎉 Done!

Your barbershop website is ready!

---

## Next Steps (Optional)

### Customize Colors
Edit `css/style.css` line 15:
```css
--color-primary: #D4AF37;  /* Change to your color */
```

### Add More Services
Copy a service card in `index.html` and paste it after the last one.

### Update Business Hours
Edit footer in `index.html` line ~475.

---

## Need More Help?

- **Full documentation:** See `README.md`
- **Detailed customization:** See `CUSTOMIZATION_GUIDE.md`
- **Image guide:** See `images/README.md`

---

## Troubleshooting

### Images Not Showing?
- Check that image files are in the `images/` folder
- Verify file paths match (use forward slashes: `images/photo.jpg`)

### Mobile Menu Not Working?
- Ensure `js/script.js` is loaded
- Check browser console for errors (press F12)

### Colors Not Changing?
- Update in BOTH `index.html` (Tailwind config) AND `css/style.css`
- Hard refresh: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)

---

**That's it! You're all set. 🎉**

For advanced customization, refer to the full README.md documentation.
