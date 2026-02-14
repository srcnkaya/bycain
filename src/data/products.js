// Product Data File
// Add, remove, or edit products here without touching the Shop component

export const products = [
  {
    id: 1,
    title: "Artisty V1",
    description: "A premium artist landing page template with smooth animations and modern design. Perfect for creative studios.",
    price: 19,
    category: "Templates",
    tags: ["React", "Tailwind"],
    image: "/products/agency-template.jpg", // [MANUAL FIX]: Add your product image path
    // [MANUAL FIX]: Paste your Lemon Squeezy Checkout URL here
    lemonSqueezyUrl: "https://yourstorename.lemonsqueezy.com/checkout/buy/xxxxxxxx",
    // [MANUAL FIX]: Add your live preview/demo URL here
    previewUrl: "https://your-demo-site.vercel.app",
    featured: true,
  },
  {
    id: 2,
    title: "BarberKing Landing Page",
    description: "A premium Barber landing page template with modern design.",
    price: 19,
    category: "Templates",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/products/saas-starter.jpg", // [MANUAL FIX]: Add your product image path
    // [MANUAL FIX]: Paste your Lemon Squeezy Checkout URL here
    lemonSqueezyUrl: "https://yourstorename.lemonsqueezy.com/checkout/buy/xxxxxxxx",
    // [MANUAL FIX]: Add your live preview/demo URL here
    previewUrl: "https://your-saas-demo.vercel.app",
    featured: true,
  },
  {
    id: 3,
    title: "BioLink",
    description: "A stunning, mobile-first \"link in bio\" page with a premium glassmorphism design. The perfect Linktree alternative for creators, influencers, and professionals who want to stand out.",
    price: 19,
    category: "Templates",
    tags: ["HTML", "CSS", "JavaScript",'React','tailwind'],
    image: "/products/portfolio-dark.jpg", // [MANUAL FIX]: Add your product image path
    // [MANUAL FIX]: Paste your Lemon Squeezy Checkout URL here
    lemonSqueezyUrl: "https://yourstorename.lemonsqueezy.com/checkout/buy/xxxxxxxx",
    // [MANUAL FIX]: Add your live preview/demo URL here
    previewUrl: "https://your-portfolio-demo.vercel.app",
    featured: false,
  },
  {
    id: 4,
    title: "Delicious",
    description: "A delicious, modern, and fully responsive website template designed for burger joints, steakhouses, and casual dining restaurants.",
    price: 19,
    category: "Templates",
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: "/products/ui-kit.jpg", // [MANUAL FIX]: Add your product image path
    // [MANUAL FIX]: Paste your Lemon Squeezy Checkout URL here
    lemonSqueezyUrl: "https://yourstorename.lemonsqueezy.com/checkout/buy/xxxxxxxx",
    // [MANUAL FIX]: Add your live preview/demo URL here
    previewUrl: "https://your-components-demo.vercel.app",
    featured: true,
  },
  {
    id: 5,
    title: "IronCore Athletics ",
    description: "A high-conversion, dark-themed landing page for a premium personal training studio.",
    price: 19,
    category: "Templates",
    tags: ["HTML", "CSS", "JavaScript",'tailwind'],
    image: "/products/ecommerce-ui.jpg", // [MANUAL FIX]: Add your product image path
    // [MANUAL FIX]: Paste your Lemon Squeezy Checkout URL here
    lemonSqueezyUrl: "https://yourstorename.lemonsqueezy.com/checkout/buy/xxxxxxxx",
    // [MANUAL FIX]: Add your live preview/demo URL here
    previewUrl: "https://your-ecommerce-demo.vercel.app",
    featured: false,
  },
  {
    id: 6,
    title: "NeonWave Audio",
    description: "A professional, cyberpunk-themed website template designed specifically for **Music Producers**, **Beatmakers**, and **DJs** looking to sell instrumentals online.",
    price: 19,
    category: "Templates",
    tags: ["HTML", "Tailwind", "JavaScript"],
    image: "/products/landing-bundle.jpg", // [MANUAL FIX]: Add your product image path
    // [MANUAL FIX]: Paste your Lemon Squeezy Checkout URL here
    lemonSqueezyUrl: "https://yourstorename.lemonsqueezy.com/checkout/buy/xxxxxxxx",
    // [MANUAL FIX]: Add your live preview/demo URL here
    previewUrl: "https://your-landing-demo.vercel.app",
    featured: true,
  },
];

// Get all unique categories
export const categories = ["All", ...new Set(products.map(p => p.category))];

// Get featured products
export const getFeaturedProducts = () => products.filter(p => p.featured);

// Get products by category
export const getProductsByCategory = (category) => {
  if (category === "All") return products;
  return products.filter(p => p.category === category);
};
