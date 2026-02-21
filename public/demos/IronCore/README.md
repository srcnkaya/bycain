# IronCore Athletics - Premium Landing Page

A high-conversion, dark-themed landing page for a premium personal training studio. Built with HTML, Tailwind CSS, and vanilla JavaScript.

![IronCore Athletics](assets/images/preview.png)

---

## 📁 Project Structure

```
IronCore/
├── index.html          # Main HTML file (all sections)
├── README.md           # This file - how to use the theme
└── assets/
    ├── css/
    │   └── style.css   # Custom animations & styles
    ├── js/
    │   └── main.js     # Mobile menu & interactions
    └── images/         # Put your images here
```

---

## 🚀 Getting Started (For Beginners)

### Option 1: Open Directly (Easiest)
1. Double-click the `index.html` file
2. It opens in your default browser
3. Done! 🎉

### Option 2: Use a Local Server (Better for Development)
If you want to make changes and see them update:

**Windows (PowerShell):**
```powershell
# Navigate to the IronCore folder
cd IronCore

# Python 3 (most common)
python -m http.server 8000

# OR if you have Node.js installed
npx serve
```

**Then open:** `http://localhost:8000` in your browser

---

## 🎨 Customization Guide

### 1. Change the Brand Name
**File:** `index.html`

Find this code (around line 35):
```html
<a href="#" class="font-oswald text-2xl md:text-3xl font-bold tracking-wider text-white">
    IRON<span class="text-cyan-accent">CORE</span>
</a>
```

Change `IRON` and `CORE` to your brand name.

---

### 2. Change Colors
**File:** `index.html` (in the `<script>` tag around line 20)

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'iron-dark': '#0f172a',    // Main background
                'iron-darker': '#0a0f1c',  // Darker sections
                'cyan-accent': '#06b6d4',  // Main accent color
                'cyan-glow': '#22d3ee',    // Hover accent
            }
        }
    }
}
```

**Tip:** Use [colorhexa.com](https://www.colorhexa.com) to find color codes.

---

### 3. Change Hero Text
**File:** `index.html` (around line 85)

```html
<h1 class="font-oswald text-5xl md:text-7xl...">
    Redefine Your<br>
    <span class="text-transparent...">Limits</span>
</h1>
```

Replace "Redefine Your Limits" with your headline.

---

### 4. Update Trainer Photos
**File:** `index.html` (around line 200)

Find the trainer sections and replace the `src` URL:

```html
<img src="YOUR_IMAGE_URL_HERE" alt="Trainer Name">
```

**Options for images:**
- Use a URL from [Unsplash](https://unsplash.com) (free)
- Put your own images in `assets/images/` folder
- Reference local image: `src="assets/images/trainer1.jpg"`

---

### 5. Change Pricing
**File:** `index.html` (around line 280)

Each pricing card has a structure like this:
```html
<div class="flex items-baseline gap-1 mb-6">
    <span class="font-oswald text-5xl font-bold text-white">$299</span>
    <span class="text-gray-500">/month</span>
</div>
```

Change the `$299` to your price.

---

### 6. Update Contact Info
**File:** `index.html` (around line 370, in the footer)

Find and update:
```html
<li class="flex items-start gap-3">
    <i class="fas fa-map-marker-alt text-cyan-accent mt-1"></i>
    <span>123 King Street West<br>Toronto, ON M5X 1A1</span>
</li>
<li class="flex items-center gap-3">
    <i class="fas fa-phone text-cyan-accent"></i>
    <span>(416) 555-IRON</span>
</li>
```

---

## 📱 Sections Explained

| Section | Purpose | How to Edit |
|---------|---------|-------------|
| **Navbar** | Navigation + Logo | Lines 32-65 |
| **Hero** | Big headline + CTA | Lines 75-105 |
| **Programs** | 3 service cards | Lines 110-165 |
| **Why Us** | Benefits/features | Lines 170-235 |
| **Trainers** | Team profiles | Lines 240-305 |
| **Pricing** | 3 pricing tiers | Lines 310-395 |
| **CTA** | Call-to-action | Lines 400-415 |
| **Footer** | Contact info + links | Lines 420-480 |

---

## 🔧 Common Code Patterns

### Adding a New Program Card
Copy this template and paste in the Programs section:

```html
<div class="program-card group relative bg-iron-darker border border-gray-800 p-8 transition-all duration-500 hover:border-cyan-accent hover:transform hover:-translate-y-2 overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-cyan-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div class="relative z-10">
        <div class="w-16 h-16 mb-6 flex items-center justify-center bg-cyan-accent/10 rounded-none group-hover:bg-cyan-accent/20 transition-colors duration-300">
            <i class="fas fa-icon-name text-3xl text-cyan-accent"></i>
        </div>
        <h3 class="font-oswald text-2xl font-bold uppercase mb-3 tracking-wide">Program Name</h3>
        <p class="text-gray-400 mb-6 leading-relaxed">Description of the program.</p>
        <a href="#" class="inline-flex items-center text-cyan-accent font-semibold uppercase tracking-wider text-sm group-hover:gap-3 transition-all duration-300">
            Learn More <i class="fas fa-arrow-right ml-2 transition-transform group-hover:translate-x-1"></i>
        </a>
    </div>
</div>
```

**Find icons:** [FontAwesome Icons](https://fontawesome.com/icons)

---

### Adding a New Trainer
Copy this template in the Trainers section:

```html
<div class="trainer-card group text-center">
    <div class="relative mb-6 mx-auto w-48 h-48">
        <div class="w-full h-full rounded-full overflow-hidden border-4 border-gray-800 group-hover:border-cyan-accent transition-colors duration-300">
            <img src="IMAGE_URL" alt="Name" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
        </div>
        <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-cyan-accent text-iron-dark px-4 py-1 font-bold text-sm uppercase tracking-wider">
            Role
        </div>
    </div>
    <h3 class="font-oswald text-2xl font-bold uppercase mb-2">Name</h3>
    <p class="text-gray-500 text-sm mb-4">Title</p>
    <div class="flex justify-center gap-4">
        <a href="#" class="w-10 h-10 flex items-center justify-center bg-gray-800 text-gray-400 hover:bg-cyan-accent hover:text-iron-dark transition-all duration-300">
            <i class="fab fa-instagram"></i>
        </a>
    </div>
</div>
```

---

## 🎯 Understanding the CSS Classes

### Layout Classes (Tailwind)
- `container` / `max-w-7xl` - Centers content with max width
- `grid grid-cols-3` - 3-column grid
- `flex` - Flexible box layout
- `gap-8` - Gap between items (2rem)
- `py-24` - Padding top & bottom (6rem)
- `px-4` - Padding left & right (1rem)

### Color Classes
- `bg-iron-dark` - Dark blue background (#0f172a)
- `text-cyan-accent` - Cyan text color (#06b6d4)
- `border-gray-800` - Dark gray border

### Typography Classes
- `font-oswald` - Bold header font
- `font-inter` - Body text font
- `text-5xl` - Extra large text (3rem)
- `uppercase` - ALL CAPS
- `tracking-wider` - Spaced out letters

### Responsive Classes
- `md:` - Applies on medium screens (768px+)
- `lg:` - Applies on large screens (1024px+)
- `hidden md:block` - Hide on mobile, show on desktop

---

## 🐛 Troubleshooting

### "Page looks weird on mobile"
Make sure this line is in your `<head>`:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### "Images not showing"
- Check the URL is correct
- For local images: make sure they're in `assets/images/`
- Try right-click > "Open image in new tab" to test the URL

### "Colors didn't change"
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check for typos in color codes (must be 6 digits: #FF0000)

### "Mobile menu not working"
- Make sure `assets/js/main.js` file exists
- Open browser console (F12) and check for red errors

---

## 📚 Resources

| Resource | Link | Purpose |
|----------|------|---------|
| Tailwind Docs | [tailwindcss.com](https://tailwindcss.com) | CSS framework reference |
| FontAwesome | [fontawesome.com/icons](https://fontawesome.com/icons) | Icons library |
| Google Fonts | [fonts.google.com](https://fonts.google.com) | Typography |
| Unsplash | [unsplash.com](https://unsplash.com) | Free stock photos |

---

## 📝 License

Free to use for personal and commercial projects. Attribution appreciated but not required.

---

## 💡 Pro Tips

1. **Always backup** before making big changes
2. **Use VS Code** with "Live Server" extension for instant previews
3. **Test on real devices** - not just browser resize
4. **Compress images** before uploading (use [tinypng.com](https://tinypng.com))
5. **Check contrast** - make sure text is readable on backgrounds

---

**Need help?** This is a static HTML site - any web developer can assist, or search for "Tailwind CSS tutorials" to learn more.

**Built with 💪 by IronCore Athletics**