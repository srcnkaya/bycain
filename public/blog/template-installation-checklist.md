# Template Installation Checklist (No Headaches Version)

You've found the perfect website template, bought it, and deployed it. Awesome! But before you share that link with the world, let's make sure everything actually works. Trust me, spending 20 minutes on this checklist now will save you from embarrassing broken links and angry customers later.

## Pre-Launch: The "Does This Actually Work?" Checklist

These are the things you need to check *before* anyone sees your site. Think of this as your safety net.

### 1. Click Through Every Single Link

Yes, every single one. Open your site and pretend you're a curious visitor.

**What to check:**
- Navigation menu items go to the right pages
- Footer links don't lead to 404 errors
- Logo clicks back to homepage
- Button links in hero sections actually work

**Pro tip:** Open your browser's developer console (F12) and look for any red error messages. If you see `404` or `Failed to load`, you've got a broken link.

**Common culprit:** Templates often have `/pages/about.html` hardcoded, but your routes might be `/about`. Fix these!

### 2. Test Every Form and Button

Nothing screams "amateur hour" like a contact form that goes nowhere.

**Forms to test:**
- Contact forms (do you actually receive the email?)
- Newsletter signups (check if they integrate with your email service)
- Demo request forms
- "Get Started" buttons

**CTA buttons to verify:**
- "Buy Now" links to your actual payment page (not the template's demo)
- "Download" buttons have real files attached
- Social media icons link to *your* profiles, not the template author's

**Quick test:** Fill out your own contact form. If you don't get an email in 5 minutes, something's broken.

### 3. Hunt Down Placeholder Content

Templates come with dummy text and stock photos. You need to replace ALL of it.

**Text to find and destroy:**
- "Lorem ipsum dolor sit amet..."
- "Your Company Name Here"
- "Email us at hello@company.com" (with a generic email)
- Phone numbers like `+1 (555) 123-4567`
- Addresses like "123 Main St, Anytown, USA"

**Images to replace:**
- Generic stock photos of people in suits pointing at laptops
- Placeholder logos in the header
- Team member photos (unless you actually hired those models)
- Product screenshots showing competitor websites

**Where to look:** Don't just check the homepage. Go through every page: About, Services, Contact, Blog, Privacy Policy, Terms of Service.

### 4. Check Mobile Layout (Seriously, Do This)

Over 60% of web traffic is mobile. If your site looks broken on phones, you're losing more than half your visitors.

**Common mobile disasters:**
- Text overlapping images
- Buttons too small to tap
- Footer elements stacked weirdly
- Horizontal scrolling (this should never happen)
- Giant gaps between sections

**How to test:**
- Use Chrome DevTools (F12 → click the phone icon)
- Test on your actual phone
- Check both portrait and landscape orientations
- Test on a tablet too if you have one

**Special attention to footers:** Templates love to mess up footer spacing on mobile. Make sure your footer doesn't overlap content or have huge empty spaces.

### 5. Validate Your Meta Tags

These are invisible to visitors but crucial for Google and social media.

**What to check on every page:**

```html
<title>Your Actual Page Title - Not "Template Demo"</title>
<meta name="description" content="A real description of your page, not the template's example text">
```

**Use this tool:** [metatags.io](https://metatags.io) – paste any page URL and it'll show you what's missing.

**Red flags:**
- Title tags over 60 characters (Google cuts them off)
- Missing descriptions
- Duplicate titles across multiple pages
- Still says "Bootstrap Template" or "React Template"

---

## Post-Launch: The "Make It Professional" Checklist

Your site is live! But you're not done yet. These steps ensure your site performs well and looks good when shared.

### 1. Run Lighthouse Audits

Lighthouse is built into Chrome and tells you exactly what's wrong with your site.

**How to run it:**
1. Open your site in Chrome
2. Press F12 (opens DevTools)
3. Click "Lighthouse" tab
4. Click "Analyze page load"

**What to aim for:**
- Performance: 90+ (green)
- Accessibility: 90+ (green)
- Best Practices: 90+ (green)
- SEO: 90+ (green)

**Common issues Lighthouse finds:**
- Images too large (compress them!)
- Missing alt text on images
- Buttons without proper labels
- Slow server response time

**Don't stress perfection:** Scoring 85+ is totally fine. Anything in the green zone is good.

### 2. Submit Your Sitemap to Google

A sitemap tells Google which pages exist on your site. Without it, Google might miss important pages.

**Where's your sitemap?**
Most frameworks generate one automatically at `yoursite.com/sitemap.xml`. Visit that URL – if you see XML code listing your pages, you're good.

**How to submit:**
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property (your domain)
3. Go to "Sitemaps" in the left menu
4. Enter `sitemap.xml`
5. Click Submit

**Why this matters:** Pages in your sitemap get crawled and indexed faster. You'll start appearing in search results sooner.

### 3. Double-Check Your robots.txt

This file tells search engines which pages they can and can't crawl.

**Visit:** `yoursite.com/robots.txt`

**What you should see:**

```
User-agent: *
Allow: /
Sitemap: https://yoursite.com/sitemap.xml
```

**What you DON'T want to see:**

```
User-agent: *
Disallow: /
```

That second one blocks ALL search engines from your entire site. If you see this, your site will never appear in Google. Remove it immediately!

**Common template mistake:** Some developers forget to remove `Disallow: /` from staging environments.

### 4. Test Social Sharing Previews

When someone shares your site on Facebook, Twitter, or LinkedIn, what shows up?

**Test it here:**
- Facebook: [developers.facebook.com/tools/debug](https://developers.facebook.com/tools/debug)
- Twitter: [cards-dev.twitter.com/validator](https://cards-dev.twitter.com/validator)
- LinkedIn: Just paste the URL in a post draft and see the preview

**What you're checking:**
- Does the right image appear?
- Is the title correct?
- Is the description compelling?
- Is the URL clean (no weird parameters)?

**If it looks wrong:**
You need Open Graph tags in your HTML:

```html
<meta property="og:title" content="Your Page Title">
<meta property="og:description" content="Your compelling description">
<meta property="og:image" content="https://yoursite.com/social-image.jpg">
<meta property="og:url" content="https://yoursite.com">
```

**Image tips:**
- Use 1200x630 pixels for best results
- Keep important content in the center (edges get cropped on mobile)
- Include your logo or brand elements

### 5. Set Up Conversion Tracking

You need to know if people are actually clicking your important buttons.

**What to track:**
- "Buy Now" button clicks
- "Request Demo" form submissions
- "Download" button clicks
- Newsletter signups
- "Contact Us" clicks

**How to set this up:**

**For Google Analytics 4:**
1. Go to your GA4 property
2. Navigate to "Events"
3. Click "Create Event"
4. Set up triggers for your key buttons

**For simple tracking without GA:**
Use services like:
- Plausible Analytics (privacy-friendly, super simple)
- Fathom (minimal setup, clear dashboard)
- Vercel Analytics (if you're hosting on Vercel)

**What good tracking looks like:**
You can answer these questions:
- How many people clicked "Buy Now" today?
- What's my newsletter signup rate?
- Which page gets the most demo requests?

**Without tracking:** You're flying blind. You won't know if your CTAs work or if you need to change your approach.

---

## The 5-Minute Final Check

Before you call it done, do this quick walkthrough:

1. ✅ Open your site on your phone – does it look good?
2. ✅ Click your main CTA button – does it work?
3. ✅ Search for your site on Google – does your listing look professional?
4. ✅ Share your site in a Slack or WhatsApp message – does the preview look good?
5. ✅ Open your site in an incognito window – does everything still work?

If all five checks pass, you're golden!

---

## One More Thing

Templates are great starting points, but they're not finished products. Think of them like IKEA furniture – you still need to assemble it properly, tighten all the screws, and make sure it doesn't wobble.

**Bookmark this checklist** and run through it every time you launch a new template-based site. It becomes second nature after a few times, and you'll catch issues before they become problems.

Your site is your first impression. Make it count! 🚀

**Bonus tip:** Set a calendar reminder for 1 week and 1 month after launch to re-run this checklist. Sometimes issues only surface once real users start clicking around.
