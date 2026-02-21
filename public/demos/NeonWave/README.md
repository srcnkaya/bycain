# 🌟 NeonWave Audio - Premium Beat Selling Template

A professional, cyberpunk-themed website template designed specifically for **Music Producers**, **Beatmakers**, and **DJs** looking to sell instrumentals online.

**Theme:** Spotify meets Blade Runner — High-energy, neon-infused design with dark mode aesthetics.

---

## 📦 What's Included

```
NeonWave/
├── index.html              # Home page with hero & featured beats
├── beats.html              # Full beat catalog & licensing options
├── contact.html            # Collaboration request form
├── README.md               # This documentation
└── assets/
    ├── css/
    │   └── style.css       # Complete styling (cyberpunk theme)
    ├── js/
    │   ├── components.js   # Dynamic navbar & footer
    │   └── player.js       # Audio player logic
    └── audio/              # Place your beat files here
```

---

## 🚀 Quick Start

### 1. **Upload to Your Hosting**
Upload the entire `NeonWave` folder to your web hosting provider (Netlify, Vercel, GoDaddy, Bluehost, etc.).

### 2. **Add Your Audio Files**
Place your beat MP3/WAV files in `assets/audio/` folder:
```
assets/audio/
├── cyber-dreams.mp3
├── neon-nights.mp3
├── electric-pulse.mp3
└── ...
```

### 3. **Update Beat Information**
Edit `index.html` and `beats.html` to customize:
- Beat titles
- Genres & BPM
- Prices
- Audio file paths (see section below)

### 4. **Connect Payment Links**
See "Payment Integration" section below.

---

## 🎵 How to Link Real Audio Files

Currently, the template uses **simulated** audio players. To link actual audio:

### Option A: Use HTML5 Audio (Simple)
Replace the simulated player in each beat card with:

```html
<audio controls style="width: 100%; margin-bottom: 1rem;">
    <source src="assets/audio/your-beat.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
</audio>
```

### Option B: Extend the JavaScript Player (Advanced)
Edit `assets/js/player.js` and modify the `NeonWavePlayer` class to use the HTML5 Audio API:

```javascript
this.audioElement = new Audio('assets/audio/beat-name.mp3');
this.audioElement.play();
```

### Option C: Use a Third-Party Player
Integrate services like:
- **Beatstars Widget** - Beatstars.com
- **Airbit Player** - Airbit.com
- **SoundCloud Player** - SoundCloud.com/developers

---

## 💳 Payment Integration

The template includes placeholder "Buy License" buttons. Here's how to connect them to real payment systems:

### PayPal
1. Create a PayPal.me link or PayPal button
2. Edit `assets/js/player.js` line ~135:
```javascript
window.location.href = 'https://paypal.me/yourhandle/29.99';
```

### Stripe Payment Links
1. Create a product in Stripe Dashboard
2. Generate a Payment Link
3. Replace the `alert()` in `player.js` with:
```javascript
window.location.href = 'https://buy.stripe.com/your_payment_link';
```

### Beatstars / Airbit Integration
If you use Beatstars or Airbit:
1. Get your beat's purchase link from their dashboard
2. Link the "Buy License" button to that URL

### Custom E-Commerce
For advanced setups, integrate with:
- **Shopify** (use Buy Button)
- **WooCommerce** (WordPress plugin)
- **Gumroad** (digital product sales)

---

## 📧 Contact Form Setup

The contact form currently shows an alert. To make it functional:

### Option 1: Formspree (Easiest - Free Tier Available)
1. Sign up at [Formspree.io](https://formspree.io)
2. Create a form and get your endpoint
3. Edit `contact.html` line 48:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```
4. Remove the `onsubmit="handleSubmit(event)"` attribute

### Option 2: EmailJS
1. Sign up at [EmailJS.com](https://www.emailjs.com)
2. Set up an email service & template
3. Add EmailJS SDK to `contact.html`:
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
```
4. Update the `handleSubmit()` function in `contact.html`

### Option 3: Netlify Forms
If hosting on Netlify:
1. Add `netlify` attribute to form tag:
```html
<form netlify name="contact">
```
2. Netlify automatically handles submissions

### Option 4: Custom Backend
Send form data to your own API endpoint using `fetch()`.

---

## 🎨 Customization Guide

### Change Colors
Edit `assets/css/style.css` lines 17-23:
```css
:root {
    --bg-dark: #0a0a0a;          /* Background color */
    --text-light: #ffffff;        /* Text color */
    --neon-green: #00ff99;        /* Primary accent */
    --neon-magenta: #ff00ff;      /* Secondary accent */
    --neon-cyan: #00ffff;         /* Tertiary accent */
}
```

### Change Fonts
The template uses:
- **Orbitron** (Headers) - Futuristic look
- **Roboto Mono** (Body) - Tech feel

To change fonts, edit line 7 in `style.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont&display=swap');
```

### Update Logo
Replace "NEONWAVE" text in `assets/js/components.js` line 14:
```javascript
<a href="index.html" class="logo">YOUR LOGO</a>
```
Or use an image:
```javascript
<a href="index.html"><img src="assets/logo.png" alt="Logo" style="height: 40px;"></a>
```

### Modify Beat Cards
Edit `index.html` or `beats.html` to:
- Add more beats (duplicate a `.beat-card` div)
- Change beat titles, genres, BPM
- Update pricing

---

## 📱 Social Media Links

Update social links in `assets/js/components.js` lines 35-38:
```javascript
<a href="https://instagram.com/yourhandle" class="social-icon">IG</a>
<a href="https://twitter.com/yourhandle" class="social-icon">TW</a>
<a href="https://youtube.com/@yourhandle" class="social-icon">YT</a>
<a href="https://soundcloud.com/yourhandle" class="social-icon">SC</a>
```

---

## 🌐 SEO Optimization

The template includes basic SEO tags. To improve ranking:

1. **Update meta descriptions** in each HTML file:
```html
<meta name="description" content="Your custom description">
```

2. **Add keywords** relevant to your beats:
```html
<meta name="keywords" content="trap beats, hip hop, instrumentals, your name">
```

3. **Create a sitemap.xml**
4. **Submit to Google Search Console**
5. **Add Google Analytics** (optional):
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

---

## ⚡ Performance Tips

- **Optimize images**: Use compressed PNG/JPG files
- **Minify CSS/JS**: Use tools like [CSS Minifier](https://cssminifier.com/)
- **Use a CDN**: CloudFlare, Netlify CDN
- **Enable caching**: Configure `.htaccess` for Apache hosting

---

## 🔧 Browser Compatibility

Tested and works on:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📄 License & Usage

**This template is provided as-is for commercial use.**

✅ **You CAN:**
- Use it for your beat selling website
- Customize colors, fonts, content
- Sell beats using this template
- Remove the "NeonWave" branding

❌ **You CANNOT:**
- Resell this template itself
- Claim you created the template
- Redistribute without modification

---

## 🆘 Support & Resources

### Helpful Tools
- **Free Hosting**: [Netlify](https://netlify.com), [Vercel](https://vercel.com), [GitHub Pages](https://pages.github.com)
- **Domain Names**: [Namecheap](https://namecheap.com), [Google Domains](https://domains.google)
- **Payment Processing**: [Stripe](https://stripe.com), [PayPal](https://paypal.com), [Beatstars](https://beatstars.com)
- **Email Marketing**: [Mailchimp](https://mailchimp.com), [ConvertKit](https://convertkit.com)

### Learning Resources
- **HTML/CSS Basics**: [MDN Web Docs](https://developer.mozilla.org)
- **JavaScript Tutorials**: [JavaScript.info](https://javascript.info)
- **Payment Integration**: Stripe/PayPal documentation

---

## 🎯 Recommended Next Steps

1. ✅ Upload your best 6-10 beats
2. ✅ Set up payment links (PayPal or Stripe)
3. ✅ Connect contact form (Formspree recommended)
4. ✅ Customize colors to match your brand
5. ✅ Add your logo and social links
6. ✅ Create a custom domain (yourname.com)
7. ✅ Set up Google Analytics
8. ✅ Share on social media (Instagram, Twitter, TikTok)

---

## 🚀 Go Live Checklist

- [ ] All beat files uploaded to `assets/audio/`
- [ ] Beat titles, genres, and prices updated
- [ ] Payment buttons linked to PayPal/Stripe
- [ ] Contact form connected (Formspree/EmailJS)
- [ ] Social media links updated
- [ ] Logo replaced (if using custom logo)
- [ ] Email address changed in footer
- [ ] Tested on mobile devices
- [ ] SEO meta tags customized
- [ ] Domain name connected (if applicable)

---

## 💬 Need Help?

If you run into issues:
1. Check browser console (F12) for JavaScript errors
2. Verify file paths are correct (case-sensitive on some servers)
3. Test in incognito mode to rule out cache issues

---

**Built for producers, by design.** 🎧

*Now go sell some beats.* ⚡

---

**Version:** 1.0  
**Last Updated:** February 2026  
**Template Name:** NeonWave Audio
