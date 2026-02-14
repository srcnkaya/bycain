// Product Data File
// Add, remove, or edit products here without touching the Shop component
// IMAGES: Now supports multiple images per product - use images array instead of single image

export const products = [
  {
    id: 1,
    title: "Artisty V1",
    description: "A premium artist landing page template with smooth animations and modern design. Perfect for creative studios.",
    price: 19,
    category: "Templates",
    tags: ["React", "Tailwind"],
    images: ["/products/artisty1.jpeg","/products/artisty2.jpeg","/products/artisty3.jpeg",
      "/products/artisty4.jpeg","/products/artisty6.jpeg","/products/artisty5.jpeg","/products/artisty.jpeg"], // Add multiple images: ["/products/img1.jpg", "/products/img2.jpg"]
    lemonSqueezyUrl: "https://yourstorename.lemonsqueezy.com/checkout/buy/xxxxxxxx",
    previewUrl: "https://your-demo-site.vercel.app",
    featured: false,
  },
  {
    id: 2,
    title: "BarberKing Landing Page",
    description: "A premium Barber landing page template with modern design.",
    price: 19,
    category: "Templates",
    tags: ["HTML", "CSS", "JavaScript"],
    images: ["/products/barber3.jpeg","/products/barber4.jpeg","/products/barber5.jpeg","/products/barber6.jpeg","/products/barber.jpeg","/products/barber1.jpeg","/products/barber2.jpeg"], // Add multiple images here
    lemonSqueezyUrl: "https://yourstorename.lemonsqueezy.com/checkout/buy/xxxxxxxx",
    previewUrl: "https://your-saas-demo.vercel.app",
    featured: false,
  },
  {
    id: 3,
    title: "BioLink",
    description: "A stunning, mobile-first \"link in bio\" page with a premium glassmorphism design. The perfect Linktree alternative for creators, influencers, and professionals who want to stand out.",
    price: 19,
    category: "Templates",
    tags: ["HTML", "CSS", "JavaScript",'React','tailwind'],
    images: ["/products/bio.png","/products/bio2.png"], // Example: Multiple images
    lemonSqueezyUrl: "https://yourstorename.lemonsqueezy.com/checkout/buy/xxxxxxxx",
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
    images: ["/products/deli.jpeg","/products/deli1.jpeg","/products/deli2.jpeg","/products/deli3.jpeg",
      "/products/deli4.jpeg","/products/deli5.jpeg","/products/deli6.jpeg","/products/deli7.jpeg"], // Add multiple images here
    lemonSqueezyUrl: "https://yourstorename.lemonsqueezy.com/checkout/buy/xxxxxxxx",
    previewUrl: "https://your-components-demo.vercel.app",
    featured: false,
  },
  {
    id: 5,
    title: "IronCore Athletics ",
    description: "A high-conversion, dark-themed landing page for a premium personal training studio.",
    price: 19,
    category: "Templates",
    tags: ["HTML", "CSS", "JavaScript",'tailwind'],
    images: ["/products/gym5.jpeg","/products/gym1.jpeg","/products/gym2.jpeg","/products/gym3.jpeg","/products/gym4.jpeg",
      "/products/gym6.jpeg","/products/gym7.jpeg","/products/gym8.jpeg","/products/gym9.jpeg","/products/gym10.jpeg","/products/gym11.jpeg"
    ], // Add multiple images here
    lemonSqueezyUrl: "https://yourstorename.lemonsqueezy.com/checkout/buy/xxxxxxxx",
    previewUrl: "https://your-ecommerce-demo.vercel.app",
    featured: false,
  },
  {
    id: 6,
    title: "NeonWave Audio",
    description: "A professional, cyberpunk-themed website template designed specifically for Music Producers, Beatmakers, and DJs looking to sell instrumentals online.",
    price: 19,
    category: "Templates",
    tags: ["HTML", "Tailwind", "JavaScript"],
    images: ["/products/neon7.jpeg","/products/neon.jpeg","/products/neon1.jpeg","/products/neon2.jpeg","/products/neon3.jpeg","/products/neon4.jpeg","/products/neon5.jpeg","/products/neon6.jpeg"], // Add multiple images here
    lemonSqueezyUrl: "https://yourstorename.lemonsqueezy.com/checkout/buy/xxxxxxxx",
    previewUrl: "https://your-landing-demo.vercel.app",
    featured: false,
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
