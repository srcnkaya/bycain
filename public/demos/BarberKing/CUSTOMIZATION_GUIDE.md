# Quick Customization Guide

This guide provides a quick reference for the most common customizations. For detailed instructions, see the full README.md file.

---

## 🎯 Quick Start: 5-Minute Setup

### Step 1: Update Business Information (config.js)

Open `js/config.js` and update:

```javascript
// Line 18: Business name
name: 'Your Shop Name',

// Line 29-36: Address
street: '123 Your Street',
city: 'Your City',
state: 'XX',
zip: '12345',

// Line 37-38: Contact
phone: '(555) 123-4567',
email: 'info@yourshop.com',
```

### Step 2: Update Social Media Links (config.js)

```javascript
// Line 56-59: Social media URLs
facebook: 'https://facebook.com/yourpage',
instagram: 'https://instagram.com/yourprofile',
twitter: 'https://twitter.com/yourprofile',
youtube: 'https://youtube.com/@yourchannel'
```

### Step 3: Update Services & Prices (index.html)

Find service cards around line 210:

```html
<!-- SERVICE CARD -->
<h3>Your Service Name</h3>
<p>Service description here</p>
<div class="price">$XX</div>
```

### Step 4: Replace Images

- **Hero image:** Replace image URL at line ~140 in `index.html`
- **Gallery images:** Replace URLs at lines ~260-330 in `index.html`
- Or save your images in `images/` folder and update paths

### Step 5: Test Your Site

1. Open `index.html` in a web browser
2. Check mobile view (press F12, click device icon)
3. Test all navigation links
4. Verify contact information is correct

---

## 🎨 Color Customization

### Option 1: Quick Color Change (Tailwind Config)

In `index.html`, find line ~50:

```javascript
colors: {
    'barber-gold': '#D4AF37',  // CHANGE THIS to your primary color
}
```

### Option 2: Full Color Control (CSS Variables)

In `css/style.css`, line ~15:

```css
:root {
    --color-primary: #D4AF37;        /* Your main color */
    --color-primary-light: #E5C158;  /* Lighter version for hovers */
}
```

### Popular Color Schemes

```css
/* Classic Gold (Default) */
--color-primary: #D4AF37;

/* Royal Blue */
--color-primary: #1E3A8A;

/* Emerald Green */
--color-primary: #059669;

/* Ruby Red */
--color-primary: #DC2626;

/* Silver/Gray */
--color-primary: #9CA3AF;
```

---

## 🖼️ Image Replacement Guide

### Hero Background

**Location:** `index.html` line ~140

```html
<!-- BEFORE -->
<img src="https://images.unsplash.com/photo-123..." alt="Old image">

<!-- AFTER -->
<img src="images/my-hero-image.jpg" alt="My Barber Shop">
```

**Requirements:**
- Size: 1920x1080px minimum
- Format: JPG or WebP
- File size: Under 500KB (use TinyPNG.com to compress)

### Gallery Images

**Location:** `index.html` starting at line ~260

```html
<!-- Gallery Item -->
<img src="images/gallery/photo1.jpg" alt="Haircut Style">
```

**Requirements:**
- Size: 800x800px (square)
- Format: JPG or WebP
- File size: Under 200KB each
- Save in `images/gallery/` folder

### Favicon

Replace `images/favicon.png` with:
- Size: 32x32px or 16x16px
- Format: PNG or ICO
- Transparent background recommended

---

## 📝 Text Content Updates

### Business Name

Replace in **3 places**:

1. **Navbar Logo** - `index.html` line ~95
2. **Footer Logo** - `index.html` line ~445
3. **Copyright** - `index.html` line ~480

Find all instances:
- Search for "BarberKing" (use Ctrl+F)
- Replace with your business name

### Hero Headline

**Location:** `index.html` line ~150

```html
<h1>
    Your Headline <span class="text-barber-gold">Highlighted Text</span>
</h1>
```

### Services

**Location:** `index.html` lines ~210-290

For each service, update:
- Icon class (find icons at fontawesome.com/icons)
- Service name
- Description
- Price

---

## 🔗 Navigation Links

### Desktop & Mobile Menu

**Location:** `index.html` lines ~85 and ~105

```html
<!-- Current links -->
<a href="#home">Home</a>
<a href="#services">Services</a>
<a href="#gallery">Gallery</a>
<a href="#contact">Contact</a>

<!-- To add a new link -->
<a href="#about">About</a>

<!-- To link to external page -->
<a href="booking.html">Book Now</a>
```

---

## 📱 Contact Information

### Phone Number

**Update in 2 places:**

1. **Footer** - `index.html` line ~460
2. **Config** - `js/config.js` line 37

```html
<!-- Display format -->
<a href="tel:+15551234567">(555) 123-4567</a>
```

**Note:** `tel:` link must have no spaces or dashes: `+15551234567`

### Email

**Update in 2 places:**

1. **Footer** - `index.html` line ~465
2. **Config** - `js/config.js` line 38

```html
<a href="mailto:info@yourshop.com">info@yourshop.com</a>
```

### Address

**Location:** `index.html` line ~455

```html
<span>
    123 Your Street<br>
    Your City, ST 12345<br>
    Country
</span>
```

### Business Hours

**Location:** `index.html` lines ~475-485

```html
<li>
    <span>Monday - Friday</span>
    <span class="text-barber-gold">9:00 AM - 6:00 PM</span>
</li>
```

---

## 🎭 Social Media Icons

### Update Links

**Location:** `index.html` lines ~450-460

```html
<a href="https://facebook.com/yourpage" data-social="facebook">
    <i class="fab fa-facebook-f"></i>
</a>
```

### Add New Social Icon

Available icons from Font Awesome:

```html
<!-- TikTok -->
<a href="https://tiktok.com/@yourprofile">
    <i class="fab fa-tiktok"></i>
</a>

<!-- LinkedIn -->
<a href="https://linkedin.com/company/yourcompany">
    <i class="fab fa-linkedin-in"></i>
</a>

<!-- WhatsApp -->
<a href="https://wa.me/15551234567">
    <i class="fab fa-whatsapp"></i>
</a>
```

---

## 🔍 SEO Optimization

### Page Title

**Location:** `index.html` line ~10

```html
<title>Your Shop Name - Premium Barber Shop | Your City</title>
```

### Meta Description

**Location:** `index.html` line ~11

```html
<meta name="description" content="Your shop description here (150-160 characters)">
```

### Keywords

**Location:** `index.html` line ~12

```html
<meta name="keywords" content="barber, haircut, your city, men's grooming">
```

---

## ⚙️ Advanced Customizations

### Add Google Maps

Add this code in the contact section:

```html
<div class="w-full h-64 bg-barber-gray rounded-lg overflow-hidden">
    <iframe 
        src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
        width="100%" 
        height="100%" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy">
    </iframe>
</div>
```

Get your embed code from [Google Maps](https://www.google.com/maps).

### Add Contact Form

See the full README.md for contact form implementation.

### Change Fonts

**Location:** `index.html` line ~40

Current fonts: Oswald (headings) + Roboto (body)

```html
<!-- Change to different Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap" rel="stylesheet">
```

Then update in `index.html` line ~50:

```javascript
fontFamily: {
    'heading': ['YourFont', 'sans-serif'],
    'body': ['YourFont', 'sans-serif'],
}
```

---

## ✅ Pre-Launch Checklist

Before going live, verify:

- [ ] Business name updated in all locations
- [ ] Contact info (phone, email, address) is correct
- [ ] Social media links work
- [ ] All images replaced
- [ ] Services and prices updated
- [ ] Business hours are accurate
- [ ] Page title and meta description updated
- [ ] Tested on mobile phone
- [ ] Tested all navigation links
- [ ] Booking button goes to correct destination
- [ ] No spelling errors
- [ ] Favicon added

---

## 🆘 Common Issues

### Mobile Menu Not Opening
- Check that `js/script.js` is loaded correctly
- Press F12 → Console to check for JavaScript errors

### Images Not Showing
- Verify image paths are correct
- Use forward slashes: `images/photo.jpg` not `images\photo.jpg`
- Check file extensions match (case-sensitive on some servers)

### Colors Not Changing
- Update colors in BOTH places: Tailwind config AND CSS variables
- Clear browser cache (Ctrl+F5)

### Layout Broken on Mobile
- Check that you didn't remove any Tailwind responsive classes (sm:, md:, lg:)
- Test in browser DevTools mobile view

---

## 📞 Need More Help?

Refer to the main **README.md** file for:
- Detailed step-by-step instructions
- Troubleshooting guide
- Deployment instructions
- Technical documentation

---

**Happy customizing! 🎉**
