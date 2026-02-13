// Product Data File
// Add, remove, or edit products here without touching the Shop component

export const products = [
  {
    id: 1,
    title: "Agency Template V1",
    description: "A premium agency landing page template with smooth animations and modern design. Perfect for creative studios.",
    price: 29,
    category: "Templates",
    tags: ["React", "Tailwind", "Framer Motion"],
    image: "/products/agency-template.jpg", // [MANUAL FIX]: Add your product image path
    // [MANUAL FIX]: Paste your Lemon Squeezy Checkout URL here
    lemonSqueezyUrl: "https://yourstorename.lemonsqueezy.com/checkout/buy/xxxxxxxx",
    // [MANUAL FIX]: Add your live preview/demo URL here
    previewUrl: "https://your-demo-site.vercel.app",
    featured: true,
  },
  {
    id: 2,
    title: "SaaS Starter Kit",
    description: "Complete SaaS boilerplate with authentication, billing, and dashboard. Save weeks of development time.",
    price: 79,
    category: "Templates",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    image: "/products/saas-starter.jpg", // [MANUAL FIX]: Add your product image path
    // [MANUAL FIX]: Paste your Lemon Squeezy Checkout URL here
    lemonSqueezyUrl: "https://yourstorename.lemonsqueezy.com/checkout/buy/xxxxxxxx",
    // [MANUAL FIX]: Add your live preview/demo URL here
    previewUrl: "https://your-saas-demo.vercel.app",
    featured: true,
  },
  {
    id: 3,
    title: "Portfolio Dark Mode",
    description: "Elegant dark mode portfolio template with minimalist design and micro-interactions. Stand out from the crowd.",
    price: 19,
    category: "Templates",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/products/portfolio-dark.jpg", // [MANUAL FIX]: Add your product image path
    // [MANUAL FIX]: Paste your Lemon Squeezy Checkout URL here
    lemonSqueezyUrl: "https://yourstorename.lemonsqueezy.com/checkout/buy/xxxxxxxx",
    // [MANUAL FIX]: Add your live preview/demo URL here
    previewUrl: "https://your-portfolio-demo.vercel.app",
    featured: false,
  },
  {
    id: 4,
    title: "Component Library Pro",
    description: "100+ production-ready React components with Tailwind CSS. Copy, paste, and ship faster.",
    price: 49,
    category: "UI Kits",
    tags: ["React", "Tailwind", "TypeScript"],
    image: "/products/ui-kit.jpg", // [MANUAL FIX]: Add your product image path
    // [MANUAL FIX]: Paste your Lemon Squeezy Checkout URL here
    lemonSqueezyUrl: "https://yourstorename.lemonsqueezy.com/checkout/buy/xxxxxxxx",
    // [MANUAL FIX]: Add your live preview/demo URL here
    previewUrl: "https://your-components-demo.vercel.app",
    featured: true,
  },
  {
    id: 5,
    title: "E-Commerce UI Kit",
    description: "Complete e-commerce interface kit with product pages, checkout flow, and admin dashboard components.",
    price: 59,
    category: "UI Kits",
    tags: ["Figma", "React", "Tailwind"],
    image: "/products/ecommerce-ui.jpg", // [MANUAL FIX]: Add your product image path
    // [MANUAL FIX]: Paste your Lemon Squeezy Checkout URL here
    lemonSqueezyUrl: "https://yourstorename.lemonsqueezy.com/checkout/buy/xxxxxxxx",
    // [MANUAL FIX]: Add your live preview/demo URL here
    previewUrl: "https://your-ecommerce-demo.vercel.app",
    featured: false,
  },
  {
    id: 6,
    title: "Landing Page Bundle",
    description: "Pack of 5 high-converting landing page templates for different industries. Instant download.",
    price: 99,
    category: "Templates",
    tags: ["HTML", "Tailwind", "Alpine.js"],
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
