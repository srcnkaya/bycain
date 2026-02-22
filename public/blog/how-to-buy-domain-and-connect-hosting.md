# How to Buy a Domain and Connect It to Hosting

Having your own domain name is essential for building a professional online presence. Instead of using a generic subdomain like `yoursite.vercel.app`, you'll have a custom address like `yoursite.com`. This guide will walk you through buying a domain and connecting it to your hosting in simple steps.

---

## Step 1: Choose a Domain Name

Your domain name is your online address, so choose wisely. It's what people will remember and type into their browsers.

### What Makes a Good Domain Name?

**Keep it short**: Aim for 6-14 characters when possible. Shorter names are easier to remember and type.

**Make it brandable**: Your domain should be unique and memorable. Think "Spotify" or "Stripe" rather than "OnlineMusicStreamingService."

**Easy to spell**: Avoid complex spellings, hyphens, or numbers. If you have to explain how to spell it over the phone, it's too complicated.

**Prefer `.com` when available**: While there are hundreds of extensions (.net, .io, .co), `.com` is still the most trusted and recognized. Use alternatives only if your perfect `.com` is taken.

### Quick Checks Before Buying

- **Say it out loud**: Does it sound natural?
- **Social media availability**: Check if matching usernames are available on Instagram, Twitter, etc.
- **Avoid trademark issues**: Do a quick Google search to ensure you're not using someone else's brand name

**Examples of good domains:**
- airbnb.com (short, memorable)
- stripe.com (one word, brandable)
- figma.com (unique, easy to spell)

**Examples to avoid:**
- my-awesome-web-site-123.com (too long, has hyphens and numbers)
- bestonlinestore4u.com (generic, hard to remember)

---

## Step 2: Buy From a Reputable Registrar

A domain registrar is where you purchase and manage your domain. Not all registrars are created equal.

### Recommended Registrars

**Namecheap** (namecheap.com)
- Transparent pricing with no hidden fees
- Free WHOIS privacy protection
- Clean, easy-to-use DNS management interface
- Great customer support

**Cloudflare** (cloudflare.com)
- At-cost pricing (no markup)
- Built-in security features
- Fast DNS propagation
- Free SSL included

**Google Domains** (domains.google) - Note: Now operated by Squarespace
- Simple interface
- Integrated with Google services
- Reliable DNS management

**Porkbun** (porkbun.com)
- Competitive pricing
- Free WHOIS privacy
- Good for bulk domain purchases

### What to Look For

1. **Clean DNS UI**: You'll need to modify DNS records. Make sure the interface is user-friendly.
2. **Two-Factor Authentication (2FA)**: Protect your account from unauthorized access.
3. **Transparent renewal pricing**: Some registrars offer cheap first-year rates but charge much more for renewals. Check the renewal price before buying.
4. **Transfer policy**: Ensure you can easily transfer your domain to another registrar if needed.

### How to Purchase

1. Go to your chosen registrar's website
2. Search for your desired domain name
3. Add it to cart (usually $10-15 per year for `.com`)
4. **Important**: Enable WHOIS privacy protection (hides your personal information from public lookup)
5. Set up 2FA immediately after purchase
6. Consider multi-year registration for peace of mind

**Pro tip**: Don't buy hosting or email from your domain registrar. Keep your domain separate for easier management and portability.

---

## Step 3: Connect Your Domain to Vercel

Now that you own a domain, let's connect it to your Vercel-hosted website.

### Adding Your Domain in Vercel

1. Log in to your Vercel dashboard
2. Select your project
3. Go to **Settings** → **Domains**
4. Enter your domain (e.g., `yourwebsite.com`)
5. Click **Add**

### Configure DNS Records

Vercel will show you exactly which DNS records to add. Typically, you'll need:

**For the root domain (yourwebsite.com):**
- Type: `A`
- Name: `@` (or leave blank)
- Value: `76.76.21.21` (Vercel's IP)

**For the www subdomain (www.yourwebsite.com):**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`

### Adding Records to Your Registrar

Go to your domain registrar's DNS management page:

1. Find the **DNS Settings** or **DNS Management** section
2. Click **Add Record** or **Add New Record**
3. Enter the records exactly as shown in Vercel
4. Save changes

**Important notes:**
- Delete any conflicting records (like default parking page records)
- DNS changes can take 5 minutes to 48 hours to propagate (usually within an hour)
- Some registrars use `@` for root, others leave it blank

### Verifying the Connection

Back in Vercel, you'll see a status indicator:
- **Pending**: DNS records haven't propagated yet (wait a bit)
- **Valid**: Everything is configured correctly! ✓
- **Invalid**: Double-check your DNS records

Once valid, try visiting your domain. It should show your website within a few minutes.

---

## Step 4: Enable SSL and Redirects

Security and consistency are crucial for a professional website.

### SSL Certificates (HTTPS)

Good news: **Vercel handles this automatically!**

Once your domain is connected and verified, Vercel:
- Issues a free SSL certificate
- Renews it automatically
- Enforces HTTPS by default

You don't need to do anything. Within a few minutes, your site will be accessible via `https://yourwebsite.com` with a secure padlock icon.

### Setting Up Domain Redirects

You now have two versions of your domain:
- `yourwebsite.com` (apex/root domain)
- `www.yourwebsite.com` (www subdomain)

**Best practice**: Choose one as your canonical domain and redirect the other.

**In Vercel:**
1. Go to **Settings** → **Domains**
2. Add both versions (`yourwebsite.com` and `www.yourwebsite.com`)
3. Set one as **Primary** (usually the non-www version)
4. Vercel automatically redirects the non-primary to primary

**Example**: If you set `yourwebsite.com` as primary, visitors to `www.yourwebsite.com` will automatically redirect to `yourwebsite.com`.

### Why This Matters

- **SEO**: Google treats `www` and non-`www` as different sites. Redirects prevent duplicate content issues.
- **Consistency**: All your links and branding use the same domain format.
- **Analytics**: All traffic counts under one domain, giving you accurate statistics.

**Recommendation**: Most modern brands prefer the non-www version (`yourwebsite.com`) as it's shorter and cleaner.

---

## Step 5: Verify Indexing and SEO Setup

Your domain is live, but search engines don't automatically know about it. Let's fix that.

### Set Up Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Click **Add Property**
3. Choose **Domain** property (covers all variants)
4. Verify ownership:
   - **Option A**: Add a TXT record to your DNS (Google will provide the value)
   - **Option B**: Upload an HTML file to your site
5. Submit your sitemap (usually at `yourwebsite.com/sitemap.xml`)

### Check Canonical URLs

Open your website and check these settings:

**View page source** (right-click → View Page Source) and look for:

```html
<link rel="canonical" href="https://yourwebsite.com/about" />
```

This tag tells search engines which version of a page is the "official" one. Make sure:
- All canonical URLs use your chosen domain format (www or non-www)
- All use HTTPS (not HTTP)
- The URL matches your primary domain

### Create a Sitemap

If you don't have a sitemap yet, you need one. It's a file that lists all your pages for search engines.

**For static sites:**
Create a `sitemap.xml` file:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourwebsite.com/</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://yourwebsite.com/about</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

**For Next.js:**
Use the built-in sitemap generation feature.

### Monitor Your Setup

After a few days, check Google Search Console for:
- **Coverage**: Are your pages being indexed?
- **Performance**: How many clicks are you getting?
- **Issues**: Any errors with mobile usability or indexing?

---

## Common Issues and Quick Fixes

### "This site can't be reached"

**Cause**: DNS hasn't propagated yet or records are incorrect.

**Fix**: 
- Wait 30-60 minutes and try again
- Clear your browser cache
- Verify DNS records are exactly as Vercel specified
- Use a DNS checker tool online

### SSL Certificate Not Working

**Cause**: Certificate is still being issued or DNS needs time to propagate.

**Fix**:
- Wait 10-30 minutes after DNS validation
- Make sure DNS records are correct
- Check Vercel dashboard for certificate status

### Website Shows Old Content

**Cause**: Browser or CDN cache.

**Fix**:
- Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
- Try incognito/private browsing mode
- Wait a few minutes for Vercel's CDN to update

### WWW Not Redirecting

**Cause**: CNAME record for www is missing or incorrect.

**Fix**:
- Add CNAME record: `www` → `cname.vercel-dns.com`
- Verify both domains are added in Vercel settings
- Ensure one is set as primary

---

## Quick Summary

1. ✅ **Choose a domain**: Keep it short, brandable, and easy to spell
2. ✅ **Buy from a trusted registrar**: Look for clean DNS UI and good security
3. ✅ **Connect to Vercel**: Add A and CNAME records as specified
4. ✅ **SSL is automatic**: Vercel handles certificates; set up redirects for consistency
5. ✅ **Submit to Google**: Add your sitemap in Search Console and verify canonical URLs

---

## Final Tips

- **Renew early**: Set a calendar reminder a month before your domain expires
- **Keep registrar account secure**: Use a strong password and enable 2FA
- **Monitor your site**: Check Google Search Console monthly for issues
- **Consider privacy**: WHOIS privacy protection keeps your personal info private

Having your own domain makes your website look professional and trustworthy. Once you've done it once, buying and connecting new domains becomes second nature.

Your website is now live on your custom domain—congratulations! 🎉
