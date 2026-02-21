# 🍔 BurgerBros - Restaurant Website Template

A delicious, modern, and fully responsive website template designed for burger joints, steakhouses, and casual dining restaurants.

## 🎨 Design Specifications

- **Primary Color:** #FF9F1C (Orange) - Energetic and appetizing
- **Secondary Color:** #2D3436 (Dark Grey) - Bold and modern
- **Typography:** 
  - Headers: 'Lilita One' (fun, bold)
  - Body: 'Open Sans' (clean, readable)

## 📁 File Structure

```
Delicious/
├── index.html          # Homepage with hero section
├── menu.html           # Full menu with categories
├── contact.html        # Reservation form
├── assets/
│   ├── css/
│   │   └── style.css   # All styles
│   └── js/
│       └── main.js     # Mobile menu & form handling
└── README.md           # This file
```

## 🚀 Quick Start

1. **Open the website:** Simply open `index.html` in your browser
2. **No build process required:** Pure HTML, CSS, and vanilla JavaScript
3. **Works offline:** All dependencies loaded from CDN

## ✏️ How to Customize

### Change Prices

Prices are displayed in `.price` or `.item-price` classes. Search for these in the HTML files:

**Example in menu.html:**
```html
<span class="item-price">$12.99</span>
```

Simply change the dollar amount to update pricing.

### Change Menu Items

Menu items are in `menu.html`. Each item follows this structure:

```html
<div class="menu-item">
    <img src="IMAGE_URL" alt="Item Name">
    <div class="item-info">
        <div class="item-header">
            <h3>Item Name</h3>
            <span class="item-price">$12.99</span>
        </div>
        <p>Description goes here</p>
    </div>
</div>
```

### Change Images

All images use Unsplash placeholders. To use your own:

1. Replace the `src` URL in `<img>` tags
2. Use your own images from a folder like `assets/images/`
3. Example: `<img src="assets/images/burger1.jpg" alt="Burger">`

**Current Unsplash keywords used:**
- Burgers: `photo-1568901346375-23c9450c58cd`
- Food close-ups: Various food photography IDs
- Restaurant ambiance: Interior shots

### Change Colors

Colors are defined in CSS variables at the top of `style.css`:

```css
:root {
    --primary-orange: #FF9F1C;
    --dark-grey: #2D3436;
    --light-grey: #636E72;
    --bg-light: #F8F9FA;
    --white: #FFFFFF;
}
```

Change these hex values to instantly update the entire site's color scheme.

### Change Restaurant Information

Update these sections in all HTML files:

**Footer contact info** (appears on every page):
```html
<div class="footer-col">
    <h4>Contact</h4>
    <p>📍 123 Burger Street<br>
    📞 (555) 123-4567<br>
    ✉️ hello@burgerbros.com</p>
</div>
```

**Hours of operation:**
```html
<p>Mon-Thu: 11am - 10pm<br>
Fri-Sat: 11am - 12am<br>
Sunday: 12pm - 9pm</p>
```

## 📱 Features

✅ Fully responsive (mobile, tablet, desktop)  
✅ Mobile hamburger menu  
✅ Smooth scroll animations  
✅ Reservation form with validation  
✅ Clean, appetizing design  
✅ Fast loading (no frameworks)  
✅ SEO-friendly structure  

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📋 Form Handling

The reservation form currently logs to the console. To connect it to a backend:

1. Open `assets/js/main.js`
2. Find the form submit handler
3. Replace `console.log()` with your API call:

```javascript
// Example with fetch API
fetch('https://your-api.com/reservations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(result => {
    // Handle success
});
```

## 🎯 Target Audience

- Modern burger joints
- Steakhouses
- Casual dining restaurants
- Food trucks expanding online
- New restaurant launches

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Flexbox & Grid layouts
- **Vanilla JavaScript** - No frameworks
- **Google Fonts** - Lilita One & Open Sans
- **Unsplash** - Placeholder images

## 📝 License

Free to use for personal and commercial projects. Attribution appreciated but not required.

## 🤝 Need Help?

Common customizations:
- **Add new menu categories:** Copy the `.menu-category` div in `menu.html`
- **Change fonts:** Update Google Fonts link and font-family in CSS
- **Add more pages:** Copy structure from existing pages
- **Change logo:** Replace emoji in `.logo h1` with an `<img>` tag

---

**Built with ❤️ and 🍔 for the food industry**

Enjoy your new restaurant website! 🎉
