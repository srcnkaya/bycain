# PureLife Wellness - Premium Spa & Beauty Center Template

Welcome to your new premium website template! This guide will help you customize and deploy your beautiful spa website.

## 📦 What's Included

- `index.html` - Main landing page with all sections
- `privacy.html` - Privacy policy page (skeleton)
- `terms.html` - Terms & conditions page (skeleton)
- `README.md` - This guide
- `SITE_INFO.md` - Technical details and features

## 🚀 Quick Start

### 1. Open the Files

You can edit these files with any text editor:
- **Windows:** Notepad, Notepad++, or Visual Studio Code
- **Mac:** TextEdit, Sublime Text, or Visual Studio Code
- **Online:** You can also use online editors like CodePen

### 2. Customize Your Content

All changeable elements have clear comments marked with `<!-- CHANGE: ... -->`. Look for these throughout the code.

#### Essential Changes to Make:

**Business Information:**
- **Line 7:** Change the page title in `<title>` tag
- **Line 8:** Update the meta description for SEO
- **Line 52:** Replace "PureLife Wellness" with your business name
- **Footer sections:** Update business name, address, phone, email

**Hero Section (Lines 105-125):**
- **Line 110:** Replace the hero image URL with your own
- **Line 117-119:** Update your main headline text
- **Line 120-123:** Update your subheadline text

**Services Menu (Lines 140-220):**
- **Each service item** has three parts to change:
  - Service name (e.g., "Signature Massage")
  - Description (e.g., "90 minutes of pure relaxation...")
  - Price (e.g., "$185")
- Add or remove service items by copying/pasting the entire service block

**Experience Images (Lines 246-282):**
- Replace the three Unsplash image URLs with your own photos
- Update the image captions for each section

**Contact Section (Lines 347-400):**
- **Line 356-360:** Replace with your actual business address
- **Line 365-369:** Update your business hours
- **Line 374-377:** Update your phone and email
- **Line 392-401:** Add Google Maps embed code (instructions included in HTML comments)

**Social Media Links (Multiple locations):**
- Search for `href="https://facebook.com"` and replace with your Facebook URL
- Search for `href="https://instagram.com"` and replace with your Instagram URL
- Search for `href="https://twitter.com"` and replace with your Twitter/X URL

### 3. Customize Colors (Optional)

The template uses **Sage Green** (#84a98c) as the primary accent color. To change it:

1. **Find and Replace:** Use your text editor's find/replace function
2. **Search for:** `#84a98c`
3. **Replace with:** Your preferred color code (e.g., `#f4e1d2` for Dusty Rose)

**Alternative Color Option:**
- The template was designed with **Dusty Rose** (#f4e1d2) as an alternative
- Simply replace all instances of `#84a98c` with `#f4e1d2`

### 4. Add Your Images

#### Option A: Use Image URLs
- Upload your images to your web hosting
- Replace the Unsplash URLs with your image URLs

#### Option B: Use Local Images
1. Create an `images` folder in the same location as your HTML files
2. Save your images there (e.g., `hero.jpg`, `service1.jpg`)
3. Replace image URLs with: `images/hero.jpg`

**Image Recommendations:**
- **Hero Image:** At least 1920x1080px, high quality
- **Experience Gallery:** 800x800px minimum, square or landscape
- **File Format:** JPG for photos, PNG for graphics with transparency
- **File Size:** Optimize images to under 500KB each for fast loading

### 5. Legal Pages (Important!)

The `privacy.html` and `terms.html` files contain placeholder content.

**You MUST replace this with your actual legal policies:**
- Consider using a privacy policy generator (search "privacy policy generator")
- For professional results, consult with a legal advisor
- Include information specific to your business practices

## 🌐 How to Deploy (Make Your Site Live)

### Option 1: Traditional Web Hosting

1. **Get Web Hosting:**
   - Popular providers: Bluehost, HostGator, SiteGround, DreamHost
   - Most offer one-click WordPress, but you DON'T need that for this template

2. **Upload Files:**
   - Use FTP software (FileZilla is free) or your host's file manager
   - Upload ALL files to your `public_html` or `www` folder
   - Make sure `index.html` is in the root directory

3. **Point Your Domain:**
   - Update your domain's nameservers to your hosting provider
   - Wait 24-48 hours for DNS propagation

### Option 2: Free Hosting (For Testing)

**GitHub Pages (Free):**
1. Create a free GitHub account
2. Create a new repository named `your-spa-name.github.io`
3. Upload all files to the repository
4. Your site will be live at `https://your-spa-name.github.io`

**Netlify (Free):**
1. Create a free Netlify account
2. Drag and drop your folder into Netlify
3. Your site goes live instantly with a free subdomain
4. You can connect a custom domain later

**Vercel (Free):**
- Similar to Netlify, very easy drag-and-drop deployment

### Option 3: All-in-One Platforms

- **Carrd.co** - Import HTML and host
- **Webflow** - Import and host (learning curve)

## 📱 Mobile Responsiveness

This template is fully responsive and looks great on:
- Desktop computers
- Tablets
- Mobile phones

**No additional work needed!** Tailwind CSS handles all the responsive design automatically.

## 🔧 Troubleshooting

### Images Not Showing?
- Check that image URLs are correct
- If using local images, ensure the path is correct (case-sensitive!)
- Make sure images are uploaded to your server

### Layout Looks Broken?
- Make sure you didn't accidentally delete any HTML tags
- Check that all `<div>` tags have matching closing `</div>` tags
- Validate your HTML at: https://validator.w3.org/

### Mobile Menu Not Working?
- Make sure you didn't remove the `<script>` tag at the bottom of the page
- Check that the mobile menu button wasn't accidentally deleted

### Colors Not Changing?
- Use find/replace to change ALL instances of the color code
- Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)

## 🎨 Design Tips

**Photography:**
- Use high-quality, professional images
- Stick to a consistent style (all bright, all moody, etc.)
- Unsplash.com and Pexels.com offer free high-quality stock photos

**Text:**
- Keep headlines short and impactful
- Use descriptive language that evokes relaxation
- Proofread everything multiple times

**Colors:**
- The template uses calming, natural tones
- If you change colors, stick to 2-3 main colors max
- Test contrast for readability (dark text on light backgrounds)

## 🆘 Need More Help?

**Learning Resources:**
- HTML & CSS basics: [W3Schools](https://www.w3schools.com)
- Tailwind CSS docs: [tailwindcss.com](https://tailwindcss.com)
- Web hosting tutorials: Search YouTube for your specific host

**Testing Your Site:**
- [Google PageSpeed Insights](https://pagespeed.web.dev/) - Check loading speed
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly) - Test mobile display
- Test in multiple browsers: Chrome, Firefox, Safari, Edge

## ✅ Pre-Launch Checklist

Before making your site live, check:

- [ ] All text has been customized (no "PureLife Wellness" placeholders)
- [ ] All images have been replaced with your own
- [ ] Contact information is correct (phone, email, address)
- [ ] Social media links point to your actual profiles
- [ ] Legal pages (privacy & terms) have real content
- [ ] All links work and go to the right places
- [ ] Site has been tested on mobile phone
- [ ] Site has been tested in different browsers
- [ ] Meta description is updated for SEO
- [ ] Google Maps is embedded (if desired)

## 📈 After Launch

**SEO (Search Engine Optimization):**
- Submit your site to Google Search Console
- Create a Google Business Profile
- Add your business to online directories (Yelp, etc.)

**Analytics:**
- Add Google Analytics to track visitors
- Monitor which pages are most popular

**Maintenance:**
- Update content regularly
- Keep prices current
- Add new service photos

---

## 💝 Thank You!

Thank you for choosing this template! We hope it helps your business thrive online.

If you found this template helpful, please consider leaving a review. Good luck with your spa, salon, or wellness center!

---

**Version:** 1.0  
**Last Updated:** February 2024  
**Designed for:** Spa Centers, Beauty Salons, Yoga Studios, Wellness Centers