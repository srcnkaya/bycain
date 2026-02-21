# BarberKing - Premium Barber Shop Website Template

A modern, professional, and fully responsive website template designed specifically for barber shops, hair salons, and men's grooming businesses.

![BarberKing Preview](https://via.placeholder.com/1200x600/111111/D4AF37?text=BarberKing+Premium+Template)

---

## 🌟 Features

- **🎨 Modern Dark Design** - Luxurious dark theme with elegant gold accents
- **📱 Fully Responsive** - Looks perfect on all devices (mobile, tablet, desktop)
- **⚡ Fast Loading** - Optimized for performance
- **🎯 SEO Optimized** - Clean semantic HTML5 structure
- **♿ Accessible** - WCAG 2.1 compliant with proper ARIA labels
- **🔧 Easy to Customize** - Well-organized code with clear comments
- **🖼️ Image Gallery** - Click-to-expand fullscreen gallery
- **📜 Smooth Animations** - Elegant scroll animations and hover effects
- **💼 Professional Structure** - Separated CSS, JavaScript, and configuration files
- **🎨 Color Theming** - Easy color customization through config file

---

## 📋 Table of Contents

- [Quick Start](#quick-start)
- [File Structure](#file-structure)
- [Customization Guide](#customization-guide)
  - [Easy Method: Using config.js](#easy-method-using-configjs)
  - [Advanced Method: Editing HTML](#advanced-method-editing-html)
  - [Changing Colors](#changing-colors)
  - [Replacing Images](#replacing-images)
- [Deployment](#deployment)
- [Browser Support](#browser-support)
- [Support](#support)
- [License](#license)

---

## 🚀 Quick Start

### Option 1: Open Directly in Browser
1. Download and extract the template files
2. Double-click `index.html` to open in your web browser
3. Preview the template

### Option 2: Use a Local Development Server (Recommended)

**Using VS Code:**
- Install the "Live Server" extension
- Right-click on `index.html` → "Open with Live Server"

**Using Python:**
```bash
# Navigate to the template directory
cd BarberKing

# Start a simple HTTP server
python -m http.server 8000

# Open http://localhost:8000 in your browser
```

**Using Node.js:**
```bash
# Install serve globally (one-time setup)
npm install -g serve

# Navigate to the template directory and serve
cd BarberKing
serve

# Open http://localhost:3000 in your browser
```

---

## 📁 File Structure

```
BarberKing/
│
├── index.html              # Main HTML file with all page content
│
├── css/
│   └── style.css          # Custom styles and animations
│
├── js/
│   ├── config.js          # ⭐ Easy customization settings
│   └── script.js          # Interactive functionality
│
├── images/                # Your custom images go here
│   ├── gallery/          # Gallery photos
│   └── favicon.png       # Website icon
│
└── README.md             # This documentation file
```

---

## 🎨 Customization Guide

### Easy Method: Using config.js

The **easiest way** to customize your website is by editing the `js/config.js` file. This file contains all your business information in one place.

#### 1. Business Information

Open `js/config.js` and find the `business` section:

```javascript
business: {
    name: 'BarberKing',                     // CHANGE: Your barbershop name
    tagline: 'Premium Barber Shop',        // CHANGE: Your tagline/slogan
    description: 'Premium barbershop...',   // CHANGE: About your business
    foundedYear: 2015                       // CHANGE: Year established
}
```

#### 2. Contact Information

Update your contact details:

```javascript
contact: {
    address: {
        street: '123 King Street West',     // CHANGE: Street address
        city: 'Toronto',                    // CHANGE: City
        state: 'ON',                        // CHANGE: State/Province
        zip: 'M5H 2Y4',                     // CHANGE: ZIP/Postal code
        country: 'Canada'                   // CHANGE: Country
    },
    phone: '(416) 555-1234',               // CHANGE: Display phone number
    phoneLink: '+14165551234',             // CHANGE: Phone for tel: link (no spaces)
    email: 'info@barberking.com',          // CHANGE: Email address
    hours: {
        weekdays: '9:00 AM - 8:00 PM',     // CHANGE: Weekday hours
        saturday: '10:00 AM - 6:00 PM',    // CHANGE: Saturday hours
        sunday: 'Closed'                    // CHANGE: Sunday hours
    }
}
```

#### 3. Social Media Links

Update your social media profiles:

```javascript
social: {
    facebook: 'https://facebook.com/yourpage',      // CHANGE: Your Facebook URL
    instagram: 'https://instagram.com/yourprofile',  // CHANGE: Your Instagram URL
    twitter: 'https://twitter.com/yourprofile',      // CHANGE: Your Twitter URL
    youtube: 'https://youtube.com/@yourchannel'      // CHANGE: Your YouTube URL
}
```

#### 4. Services & Pricing

Customize your services in the `services` section:

```javascript
services: {
    main: [
        {
            icon: 'fa-scissors',                    // Icon class from Font Awesome
            name: 'Classic Haircut',                // Service name
            description: 'Precision haircut...',    // Service description
            price: '$30'                            // Service price
        },
        // Add more services...
    ]
}
```

**Finding Icons:**
- Visit [Font Awesome Icons](https://fontawesome.com/icons)
- Search for an icon (e.g., "scissors", "razor", "beard")
- Use the icon class without "fas" prefix (e.g., `fa-scissors`)

---

### Advanced Method: Editing HTML

For more detailed customization, you can directly edit `index.html`. The file contains **clear comments** marking exactly what to change:

```html
<!-- CUSTOMIZE: Change "BarberKing" to your business name -->
<a href="#home" class="business-name">
    BarberKing
</a>
```

Look for comments starting with:
- `<!-- CUSTOMIZE: ... -->` - Areas you should personalize
- `<!-- CHANGE: ... -->` - Specific values to update

---

### Changing Colors

#### Method 1: Update Tailwind Config (in index.html)

Find this section in `index.html` (around line 50):

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'barber-dark': '#111111',          // Main background
                'barber-gold': '#D4AF37',          // Primary accent
                'barber-gold-light': '#E5C158',    // Hover state
                'barber-text': '#f3f4f6',          // Text color
                'barber-gray': '#1a1a1a',          // Card backgrounds
            }
        }
    }
}
```

#### Method 2: Update CSS Variables (in css/style.css)

Find the `:root` section at the top of `css/style.css`:

```css
:root {
    --color-primary: #D4AF37;           /* Change this for primary color */
    --color-primary-light: #E5C158;     /* Change this for hover states */
    --color-dark: #111111;              /* Background color */
    /* ... more variables ... */
}
```

**Example Color Schemes:**

| Style | Primary Color | Background |
|-------|---------------|------------|
| Classic Gold (Current) | `#D4AF37` | `#111111` |
| Royal Blue | `#1E3A8A` | `#0F172A` |
| Emerald Green | `#059669` | `#064E3B` |
| Crimson Red | `#DC2626` | `#1F1F1F` |

---

### Replacing Images

#### Hero Background Image

In `index.html`, find the hero section (around line 140):

```html
<img src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a..." 
     alt="Premium Barber Shop Interior">
```

**To replace:**
- **Option 1:** Use your own image
  ```html
  <img src="images/hero-bg.jpg" alt="Your Shop">
  ```
- **Option 2:** Find a new Unsplash image at [unsplash.com](https://unsplash.com)

**Recommended size:** 1920x1080px or larger

#### Gallery Images

Find the gallery section (around line 260):

```html
<div class="gallery-item...">
    <img src="https://images.unsplash.com/..." alt="Description">
</div>
```

**To replace:**
1. Save your images in the `images/gallery/` folder
2. Update the `src` attribute:
   ```html
   <img src="images/gallery/photo1.jpg" alt="Haircut Example">
   ```

**Recommended size:** 800x800px (square), optimized for web

**Image Optimization:**
- Use [TinyPNG.com](https://tinypng.com) to compress images
- Convert to WebP format for better performance
- Keep file sizes under 200KB per image

#### Favicon

Replace `images/favicon.png` with your own favicon (32x32px or 16x16px).

---

## 🌐 Deployment

### Deploy to a Web Host

1. **Upload Files:**
   - Connect to your web hosting via FTP (use FileZilla, Cyberduck, etc.)
   - Upload all template files to your `public_html` or `www` directory

2. **Update URLs:**
   - If your site is at `yourdomain.com/barbershop/`, update all links accordingly
   - Change Open Graph image URLs in `index.html` (around line 15)

### Deploy to Free Hosting

#### Netlify (Recommended)
1. Create a free account at [netlify.com](https://www.netlify.com)
2. Drag and drop the `BarberKing` folder into Netlify
3. Your site will be live in seconds at `yoursite.netlify.app`
4. (Optional) Connect your custom domain

#### GitHub Pages
1. Create a GitHub account
2. Create a new repository named `yourname.github.io`
3. Upload all template files
4. Your site will be live at `yourname.github.io`

#### Vercel
1. Sign up at [vercel.com](https://vercel.com)
2. Import the template folder
3. Deploy with one click

---

## 🖥️ Browser Support

| Browser | Supported Versions |
|---------|-------------------|
| Chrome | Latest 2 versions |
| Firefox | Latest 2 versions |
| Safari | Latest 2 versions |
| Edge | Latest 2 versions |
| Opera | Latest 2 versions |

**Mobile Browsers:**
- ✅ Chrome Mobile (Android)
- ✅ Safari Mobile (iOS)
- ✅ Samsung Internet

**Note:** Internet Explorer is NOT supported (uses modern CSS features not available in IE).

---

## 📱 Responsive Breakpoints

| Device | Width | Layout |
|--------|-------|--------|
| Mobile | < 640px | Single column, hamburger menu |
| Tablet | 640px - 1024px | 2 columns, full menu |
| Desktop | > 1024px | 3 columns, full menu |

---

## ⚙️ Technical Details

### Built With

- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first CSS framework (via CDN)
- **Vanilla JavaScript** - No dependencies, no jQuery
- **Font Awesome** - Icon library
- **Google Fonts** - Oswald & Roboto fonts

### Performance

- Lighthouse Score: 95+ (Performance)
- Optimized for Core Web Vitals
- Lazy loading ready (optional)
- Minification recommended for production

---

## 🎓 Customization Tutorials

### How to Add a New Service

1. Open `index.html`
2. Find the services section (around line 210)
3. Copy an existing service card:

```html
<div class="service-card bg-barber-gray border border-gray-800 rounded-lg p-8 text-center">
    <div class="service-icon w-16 h-16 bg-barber-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
        <i class="fas fa-your-icon text-barber-gold text-2xl"></i>
    </div>
    <h3 class="font-oswald text-2xl font-semibold text-white mb-2 uppercase">New Service</h3>
    <p class="text-gray-400 mb-4">Service description here</p>
    <div class="text-barber-gold font-oswald text-3xl font-bold">$XX</div>
</div>
```

4. Paste it after the last service card
5. Update the icon, name, description, and price

### How to Add a Contact Form

Add this code in the footer section:

```html
<form id="contact-form" class="max-w-lg mx-auto">
    <div class="mb-4">
        <input type="text" name="name" placeholder="Your Name" required
               class="w-full px-4 py-2 bg-barber-gray border border-gray-800 rounded text-white">
    </div>
    <div class="mb-4">
        <input type="email" name="email" placeholder="Your Email" required
               class="w-full px-4 py-2 bg-barber-gray border border-gray-800 rounded text-white">
    </div>
    <div class="mb-4">
        <textarea name="message" rows="4" placeholder="Your Message" required
                  class="w-full px-4 py-2 bg-barber-gray border border-gray-800 rounded text-white"></textarea>
    </div>
    <button type="submit" class="w-full bg-barber-gold text-barber-dark py-3 rounded font-oswald font-semibold uppercase">
        Send Message
    </button>
</form>
```

Then add form handling in `js/script.js` (form handler is already included but commented out).

---

## 🛠️ Troubleshooting

### Images Not Displaying
- **Check file paths** - Ensure images are in the correct folder
- **Check file extensions** - Use lowercase (.jpg, .png, not .JPG, .PNG)
- **Use relative paths** - `images/photo.jpg` not `C:/Users/.../images/photo.jpg`

### Mobile Menu Not Working
- **Check JavaScript** - Ensure `js/script.js` is loaded
- **Check console** - Press F12 → Console tab to see errors
- **Clear cache** - Hard refresh with Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)

### Colors Not Changing
- **Update both places** - Change colors in both Tailwind config (index.html) AND css/style.css
- **Clear cache** - Force refresh the page after making changes
- **Check specificity** - Ensure custom styles aren't being overridden

### Smooth Scrolling Not Working
- **Check browser support** - Some older browsers don't support `scroll-behavior: smooth`
- **JavaScript fallback** - The template includes a JavaScript fallback for smooth scrolling

---

## 📞 Need Help?

If you encounter any issues:

1. **Check the comments** - The code includes detailed inline comments
2. **Review this README** - Most questions are answered here
3. **Browser console** - Press F12 to check for error messages
4. **Validate HTML** - Use [validator.w3.org](https://validator.w3.org)

---

## ✅ Pre-Launch Checklist

Before deploying your website, make sure you've:

- [ ] Updated business name throughout the site
- [ ] Changed all contact information (address, phone, email)
- [ ] Updated social media links
- [ ] Replaced hero background image
- [ ] Replaced all gallery images
- [ ] Updated services and pricing
- [ ] Changed business hours
- [ ] Updated page title and meta descriptions (for SEO)
- [ ] Added your favicon
- [ ] Tested on mobile device
- [ ] Tested all navigation links
- [ ] Tested the mobile menu
- [ ] Verified booking/contact button destinations
- [ ] Ran a spell-check
- [ ] Optimized all images for web

---

## 📄 License

This template is provided for commercial and personal use.

**You are free to:**
- ✅ Use for personal or client projects
- ✅ Modify and customize as needed
- ✅ Use for commercial websites

**Please do not:**
- ❌ Resell as a template
- ❌ Claim as your own creation
- ❌ Redistribute the source files

---

## 🎉 Thank You!

Thank you for choosing BarberKing! We hope this template helps you create an amazing website for your barber shop.

If you found this template useful, please consider:
- Sharing it with other barbers and salon owners
- Leaving a review or feedback
- Following us for future updates and templates

---

**Version:** 1.0.0  
**Last Updated:** February 2024  
**Created with ❤️ for barber shops worldwide**
