// Product Data File
// Add, remove, or edit products here without touching the Shop component
// IMAGES: Now supports multiple images per product - use images array instead of single image
// 
// BEST SELLERS CATEGORY:
// To add products to "Best Sellers", change their category to "Best Sellers"
// This category is currently hidden from the filter menu
// When ready to activate, update the categories array to include "Best Sellers"

export const products = [
  {
    id: 1,
    title: "Artistry - Minimalist Creative Portfolio Template",
    description: "A clean, gallery-focused template for designers, photographers, and agencies to showcase their work.",
    price: 19,
    category: "Templates",
    tags: ["React", "Tailwind"],
    images: ["/products/artisty1.jpeg","/products/artisty2.jpeg","/products/artisty3.jpeg",
      "/products/artisty4.jpeg","/products/artisty6.jpeg","/products/artisty5.jpeg","/products/artisty.jpeg"], // Add multiple images: ["/products/img1.jpg", "/products/img2.jpg"]
    lemonSqueezyUrl: "https://bycain.lemonsqueezy.com/checkout/buy/fd7c9be3-b53a-4728-8834-10386bbd50e6",
    previewUrl: "https://your-demo-site.vercel.app",
    featured: false,
  },
  {
    id: 2,
    title: "BarberKing - Modern Barbershop Website Template",
    description: "A masculine, vintage-modern site design for barbershops needing a booking-ready web presence.",
    price: 19,
    category: "Templates",
    tags: ["HTML", "CSS", "JavaScript"],
    images: ["/products/barber3.jpeg","/products/barber4.jpeg","/products/barber5.jpeg","/products/barber6.jpeg","/products/barber.jpeg","/products/barber1.jpeg","/products/barber2.jpeg"], // Add multiple images here
    lemonSqueezyUrl: "https://bycain.lemonsqueezy.com/checkout/buy/1f20e621-a4f1-45df-985c-daa70e300e82",
    previewUrl: "https://your-saas-demo.vercel.app",
    featured: false,
  },
  {
    id: 3,
    title: "BioLink Pro - Premium Link in Bio Template",
    description: "Stop paying for monthly subscriptions. Own your profile with this Glassmorphism-style mobile landing page.",
    price: 19,
    category: "Templates",
    tags: ["HTML", "CSS", "JavaScript",'React','tailwind'],
    images: ["/products/bio.png","/products/bio2.png"], // Example: Multiple images
    lemonSqueezyUrl: "https://bycain.lemonsqueezy.com/checkout/buy/38bc52b6-0ca8-4ea0-b994-5997d3b15045",
    previewUrl: "https://your-portfolio-demo.vercel.app",
    featured: false,
  },
  {
    id: 4,
    title: "Delicious - Restaurant & Cafe Menu Template",
    description: "A mouth-watering template designed to showcase food photography and digital menus elegantly.",
    price: 19,
    category: "Templates",
    tags: ['HTML', 'CSS', 'JavaScript'],
    images: ["/products/deli.jpeg","/products/deli1.jpeg","/products/deli2.jpeg","/products/deli3.jpeg",
      "/products/deli4.jpeg","/products/deli5.jpeg","/products/deli6.jpeg","/products/deli7.jpeg"], // Add multiple images here
    lemonSqueezyUrl: "https://bycain.lemonsqueezy.com/checkout/buy/ecc01d51-98be-46da-a4bd-2a810001b084",
    previewUrl: "https://your-components-demo.vercel.app",
    featured: false,
  },
  {
    id: 5,
    title: "IronCore - High-Energy Gym & Fitness Template",
    description: "A bold, dark-themed landing page designed to convert visitors into gym members.",
    price: 19,
    category: "Templates",
    tags: ["HTML", "CSS", "JavaScript",'tailwind'],
    images: ["/products/gym5.jpeg","/products/gym1.jpeg","/products/gym2.jpeg","/products/gym3.jpeg","/products/gym4.jpeg",
      "/products/gym6.jpeg","/products/gym7.jpeg","/products/gym8.jpeg","/products/gym9.jpeg","/products/gym10.jpeg","/products/gym11.jpeg"
    ], // Add multiple images here
    lemonSqueezyUrl: "https://bycain.lemonsqueezy.com/checkout/buy/a68edf3c-0229-4b31-b713-631758926eb9",
    previewUrl: "https://your-ecommerce-demo.vercel.app",
    featured: false,
  },
  {
    id: 6,
    title: "NeonWave - CyberPunk-Themed Website Template",
    description: "A professional, cyberpunk-themed website template designed specifically for Music Producers, Beatmakers, and DJs looking to sell instrumentals online.",
    price: 19,
    category: "Templates",
    tags: ["HTML", "Tailwind", "JavaScript"],
    images: ["/products/neon7.jpeg","/products/neon.jpeg","/products/neon1.jpeg","/products/neon2.jpeg","/products/neon3.jpeg","/products/neon4.jpeg","/products/neon5.jpeg","/products/neon6.jpeg"], // Add multiple images here
    lemonSqueezyUrl: "https://bycain.lemonsqueezy.com/checkout/buy/3b87fbfe-46a8-46d8-a917-b60f2c83ec24",
    previewUrl: "https://your-landing-demo.vercel.app",
    featured: false,
  },
   {
    id: 7,
    title: "Prestige - Luxury Real Estate & Architecture Template",
    description: "A premium, fully-responsive luxury real estate website featuring elegant design, interactive property listings, and professional contact forms with built-in security features.",
    price: 19,
    category: "Templates",
    tags: ["HTML", "Tailwind", "JavaScript"],
    images: ["/products/estate.jpeg","/products/estate1.jpeg","/products/estate2.jpeg","/products/estate3.jpeg","/products/estate4.jpeg","/products/estate5.jpeg","/products/estate6.jpeg","/products/estate7.jpeg","/products/estate8.jpeg","/products/estate9.jpeg"], // Add multiple images here
    lemonSqueezyUrl: "https://bycain.lemonsqueezy.com/checkout/buy/0350464b-6c90-4127-82a2-b5c101ae41f2",
    previewUrl: "https://your-landing-demo.vercel.app",
    featured: false,
  }, {
    id: 8,
    title: "PureLife - Spa, Yoga & Wellness Center Template ",
    description: "Sell relaxation. A serene, pastel-toned website template designed for beauty and wellness businesses.",
    price: 19,
    category: "Templates",
    tags: ["HTML", "CSS", "JavaScript",'tailwind'],
    images: ["/products/wellness.jpeg","/products/wellness1.jpeg","/products/wellness2.jpeg","/products/wellness3.jpeg","/products/wellness4.jpeg",
      "/products/wellness5.jpeg","/products/wellness6.jpeg","/products/wellness7.jpeg","/products/wellness8.jpeg","/products/wellness9.jpeg","/products/wellness10.jpeg"], // Add multiple images here
    lemonSqueezyUrl: "https://bycain.lemonsqueezy.com/checkout/buy/dadf1448-36fc-4656-9004-25d3c6df3950",
    previewUrl: "https://your-ecommerce-demo.vercel.app",
    featured: false,
  },
   {
    id: 9,
    title: "SoloShop - High Conversion Dropshipping Landing Page",
    description: "Designed to sell ONE thing well. A conversion-focused landing page for single-product brands.",
    price: 19,
    category: "Templates",
    tags: ["HTML", "CSS", "JavaScript",'tailwind'],
    images: ["/products/solo.jpeg","/products/solo1.jpeg","/products/solo2.jpeg","/products/solo3.jpeg","/products/solo4.jpeg","/products/solo5.jpeg",
      "/products/solo6.jpeg","/products/solo7.jpeg","/products/solo8.jpeg","/products/solo9.jpeg","/products/solo10.jpeg"
    ], // Add multiple images here
    lemonSqueezyUrl: "https://bycain.lemonsqueezy.com/checkout/buy/c0277445-a19c-4764-9858-9e79ae6902f5",
    previewUrl: "https://your-ecommerce-demo.vercel.app",
    featured: false,
  },
  {
    id: 11,
    title: "AuthFlow - Premium Login & Signup UI Kit",
    description: "AuthFlow is a curated collection of 5 stunning authentication screens designed for developers who value speed and quality.",
    price: 19,
    category: "UI Kits",
    tags: ["HTML"],
    images: ["/products/auth.jpeg","/products/auth1.jpeg","/products/auth2.jpeg",
      "/products/auth3.jpeg","/products/auth4.jpeg","/products/auth5.jpeg"], // Add multiple images: ["/products/img1.jpg", "/products/img2.jpg"]
    lemonSqueezyUrl: "https://bycain.lemonsqueezy.com/checkout/buy/0f986c40-6e60-4ec4-83e3-420442503c0d",
    previewUrl: "https://your-demo-site.vercel.app",
    featured: false,
  },
  {
    id: 12,
    title: "StatStack - Admin Metrics UI Kit",
    description: "5 premium dashboard metric card designs built with Tailwind CSS. Ready-to-use HTML components for SaaS admin panels, analytics dashboards, and data-heavy applications. No build step required.",
    price: 19,
    category: "UI Kits",
    tags: ["HTML","Tailwind","CSS"],
    images: ["/products/admin.png","/products/admin1.png","/products/admin2.png",
      "/products/admin3.png","/products/admin4.png","/products/admin5.png","/products/admin6.png"], // Add multiple images: ["/products/img1.jpg", "/products/img2.jpg"]
    lemonSqueezyUrl: "https://bycain.lemonsqueezy.com/checkout/buy/10adebfd-2678-43ce-b0fe-03875b92a61b",
    previewUrl: "https://your-demo-site.vercel.app",
    featured: false,
  },
    {
    id: 13,
    title: "PriceTier - 5 High-Converting SaaS Pricing Tables",
    description: "Ready-to-use pricing table designs for SaaS products. Built with Tailwind CSS. No build tools needed. Copy, paste, convert.",
    price: 19,
    category: "UI Kits",
    tags: ["HTML","Tailwind","CSS"],
    images: ["/products/price.png","/products/price1.png","/products/price2.png",
      "/products/price3.png","/products/price4.png"], // Add multiple images: ["/products/img1.jpg", "/products/img2.jpg"]
    lemonSqueezyUrl: "https://bycain.lemonsqueezy.com/checkout/buy/074c980b-f91f-4c0a-8846-06b23108b972",
    previewUrl: "https://your-demo-site.vercel.app",
    featured: false,
  },
     {
    id: 14,
    title: "SaaS Essentials - Free Starter Kit  ",
    description: "9 Essential SaaS UI Components - Free Starter Kit",
    price: 0,
    category: "UI Kits",
    tags: ["HTML","Tailwind","CSS"],
    images: ["/products/free.png","/products/free1.png","/products/free2.png",
      "/products/free3.png","/products/free4.png","/products/free5.png","/products/free6.png","/products/free7.png","/products/free8.png"], // Add multiple images: ["/products/img1.jpg", "/products/img2.jpg"]
    lemonSqueezyUrl: "https://bycain.lemonsqueezy.com/checkout/buy/486f1f63-1df0-4da3-ae7a-3e75cee57b21",
    previewUrl: "https://your-demo-site.vercel.app",
    featured: false,
  },
];

// Get all unique categories (excluding "Best Sellers" for now)
export const categories = ["All", ...new Set(products.map(p => p.category).filter(c => c !== "Best Sellers"))];

// Get featured products
export const getFeaturedProducts = () => products.filter(p => p.featured);

// Get products by category
export const getProductsByCategory = (category) => {
  if (category === "All") return products;
  return products.filter(p => p.category === category);
};

// Best Sellers category (inactive for now, will be populated later)
export const getBestSellers = () => products.filter(p => p.category === "Best Sellers");
