import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  // ========================================
  // CUSTOMIZATION SECTION - EDIT THESE VALUES
  // ========================================
  
  // PRODUCT INFORMATION
  const productName = "The Smart Watch That Does It All"; // Change to your product name
  const productDescription = "Track your health, stay connected, and elevate your style with cutting-edge technology. Designed for modern living."; // Product tagline
  const originalPrice = "$199.99"; // Original price (crossed out)
  const salePrice = "$119.99"; // Sale price (main display)
  const discountBadge = "🔥 LIMITED TIME: 40% OFF"; // Top discount badge text
  
  // PRODUCT IMAGES
  // Place your product images in /public/images/ folder
  // Then reference them like: "/images/your-image.jpg"
  const productImages = [
    {
      thumbnail: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=150&h=150&fit=crop",
      full: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop",
      alt: "Product View 1"
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=150&h=150&fit=crop",
      full: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
      alt: "Product View 2"
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=150&h=150&fit=crop",
      full: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&h=600&fit=crop",
      alt: "Product View 3"
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1495857000853-fe46c8aefc30?w=150&h=150&fit=crop",
      full: "https://images.unsplash.com/photo-1495857000853-fe46c8aefc30?w=600&h=600&fit=crop",
      alt: "Product View 4"
    }
  ];

  // PRODUCT DESCRIPTION (Full details)
  const productFullDescription = `Introducing the ultimate smartwatch designed for those who demand excellence. With advanced health tracking, seamless connectivity, and premium materials, this watch is more than just a timepiece—it's your personal assistant on your wrist.

Whether you're tracking your fitness goals, managing notifications, or simply checking the time in style, our smartwatch delivers unmatched performance and elegance.`;

  // SPECIFICATIONS
  const specifications = [
    "Display: 1.4\" AMOLED, Always-On",
    "Battery Life: Up to 7 days",
    "Water Resistance: 5ATM (50 meters)",
    "Sensors: Heart Rate, SpO2, GPS, Accelerometer",
    "Connectivity: Bluetooth 5.0, Wi-Fi",
    "Compatibility: iOS & Android",
    "Materials: Stainless Steel Case, Silicone Strap"
  ];

  // FEATURES - Edit the 4 key benefits of your product
  const features = [
    {
      title: "24/7 Health Tracking",
      description: "Monitor heart rate, sleep quality, and daily activity with precision sensors.",
      icon: (
        <svg className="w-8 h-8 text-vibrant-blue" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
        </svg>
      )
    },
    {
      title: "Stay Connected",
      description: "Get calls, texts, and app notifications delivered straight to your wrist.",
      icon: (
        <svg className="w-8 h-8 text-vibrant-blue" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
        </svg>
      )
    },
    {
      title: "7-Day Battery Life",
      description: "Long-lasting power means less charging and more doing what you love.",
      icon: (
        <svg className="w-8 h-8 text-vibrant-blue" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
        </svg>
      )
    },
    {
      title: "Fully Customizable",
      description: "Choose from hundreds of watch faces and interchangeable bands.",
      icon: (
        <svg className="w-8 h-8 text-vibrant-blue" fill="currentColor" viewBox="0 0 20 20">
          <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"/>
        </svg>
      )
    }
  ];

  // CUSTOMER REVIEWS
  const reviews = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "Absolutely love this smartwatch! Battery life is incredible and the health tracking features are spot on. Best purchase this year!",
      verified: true
    },
    {
      name: "James K.",
      rating: 5,
      text: "Perfect for my active lifestyle. GPS tracking is accurate and the water resistance has been tested (accidentally!) multiple times. Highly recommend!",
      verified: true
    },
    {
      name: "Emily R.",
      rating: 5,
      text: "Sleek design and works seamlessly with my iPhone. The customizable watch faces are a nice touch. Worth every penny!",
      verified: true
    }
  ];

  // SOCIAL PROOF - Edit rating and customer count
  const rating = "4.9/5 Stars";
  const customerCount = "10,000+";
  const reviewCount = "2,547";

  // ========================================
  // COMPONENT LOGIC (Don't edit unless needed)
  // ========================================
  
  const [isCartAdded, setIsCartAdded] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const handleAddToCart = () => {
    // Add your cart logic here (e.g., add to Shopify cart, trigger checkout)
    setIsCartAdded(true);
    setTimeout(() => setIsCartAdded(false), 2000);
    console.log("Product added to cart!");
  };

  const changeImage = (index) => {
    setCurrentImage(index);
  };

  const StarRating = ({ count = 5 }) => (
    <div className="flex">
      {[...Array(count)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  );

  return (
    <div className="bg-white min-h-screen">
      
      <Header />

      {/* Hero Section with Image Gallery */}
      <section id="product" className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Product Image Gallery - USER: Replace images in productImages array above */}
          <div className="order-2 lg:order-1">
            {/* Main Display Image */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-16 flex items-center justify-center mb-6">
              <img 
                src={productImages[currentImage].full} 
                alt={productImages[currentImage].alt} 
                className="w-full max-w-md rounded-2xl shadow-2xl object-cover"
              />
            </div>
            
            {/* Thumbnail Gallery - Automatically generated from productImages array */}
            <div className="grid grid-cols-4 gap-4">
              {productImages.map((image, index) => (
                <div 
                  key={index}
                  onClick={() => changeImage(index)}
                  className={`cursor-pointer bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-2 border-2 transition-all hover:scale-105 ${
                    currentImage === index ? 'border-vibrant-blue' : 'border-transparent'
                  }`}
                >
                  <img 
                    src={image.thumbnail} 
                    alt={image.alt} 
                    className="w-full rounded-lg object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">Click thumbnails to view different angles</p>
          </div>

          {/* Hero Text & CTA */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            {/* Discount Badge - EDIT discountBadge variable above */}
            <div className="inline-block bg-sales-red text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              {discountBadge}
            </div>
            
            {/* Product Name - EDIT productName variable above */}
            <h1 className="text-4xl lg:text-6xl font-extrabold text-black mb-4 leading-tight">
              {productName}
            </h1>
            
            {/* Product Description - EDIT productDescription variable above */}
            <p className="text-gray-600 text-lg mb-6">
              {productDescription}
            </p>

            {/* Star Rating */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <StarRating />
              <span className="text-gray-700 font-semibold">{rating} ({reviewCount} reviews)</span>
            </div>

            {/* Pricing - EDIT originalPrice and salePrice variables above */}
            <div className="mb-6">
              <span className="text-gray-400 line-through text-2xl mr-3">{originalPrice}</span>
              <span className="text-5xl font-extrabold text-black">{salePrice}</span>
              <span className="text-gray-500 text-lg ml-2">+ Free Shipping</span>
            </div>

            {/* Add to Cart Button */}
            <button 
              onClick={handleAddToCart}
              className="w-full lg:w-auto bg-vibrant-blue hover:bg-blue-700 text-white font-bold text-lg px-12 py-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 mb-4"
            >
              {isCartAdded ? '✓ Added!' : '🛒 Add to Cart'}
            </button>
            
            <p className="text-sm text-gray-500 mb-8">✓ In stock, ships within 24 hours</p>

            {/* Trust Badges - Icons are fixed, but you can change text */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center">
                <svg className="w-10 h-10 text-vibrant-blue mb-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"/>
                </svg>
                <p className="text-xs font-semibold text-gray-700">Free Shipping</p>
              </div>
              <div className="flex flex-col items-center">
                <svg className="w-10 h-10 text-vibrant-blue mb-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <p className="text-xs font-semibold text-gray-700">30-Day Returns</p>
              </div>
              <div className="flex flex-col items-center">
                <svg className="w-10 h-10 text-vibrant-blue mb-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <p className="text-xs font-semibold text-gray-700">Secure Checkout</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Description Section - EDIT productFullDescription and specifications above */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-center text-black mb-8">
              Product Description
            </h2>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <p className="text-gray-700 text-lg leading-relaxed mb-4 whitespace-pre-line">
                {productFullDescription}
              </p>
              <h3 className="text-xl font-bold text-black mb-3">Specifications:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {specifications.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section - EDIT features array above */}
      <section id="features" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-center text-black mb-12">
            Why You'll Love It
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center border border-gray-100">
                <div className="w-16 h-16 bg-vibrant-blue bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section - EDIT reviews array above */}
      <section id="reviews" className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-center text-black mb-12">
            What Our Customers Say
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="mb-3">
                  <StarRating count={review.rating} />
                </div>
                <p className="text-gray-700 mb-4">"{review.text}"</p>
                <p className="text-sm font-bold text-black">— {review.name}</p>
                {review.verified && <p className="text-xs text-gray-500">Verified Buyer</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section - EDIT rating and customerCount variables above */}
      <section className="py-16 bg-vibrant-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col items-center mb-6">
            <div className="flex gap-1 mb-3">
              <StarRating />
            </div>
            <h2 className="text-4xl font-extrabold mb-2">Rated {rating}</h2>
            <p className="text-xl text-blue-100">Loved by over {customerCount} customers worldwide</p>
          </div>

          <div className="mt-10">
            <button 
              onClick={handleAddToCart}
              className="bg-white text-vibrant-blue hover:bg-gray-100 font-bold text-lg px-12 py-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              🛒 Join Thousands of Happy Customers
            </button>
          </div>
        </div>
      </section>

      {/* About Section - USER: Edit this section below */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-extrabold text-black mb-6">
              About SoloShop
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              At SoloShop, we believe in quality over quantity. We carefully curate and offer only the best products that enhance your lifestyle. Our mission is to provide exceptional value, outstanding customer service, and products that truly make a difference.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Founded in 2024, we've served thousands of happy customers worldwide. Every product we sell is backed by our commitment to quality and your satisfaction. We stand behind what we sell with a 30-day money-back guarantee because we believe you deserve the best.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <p className="text-4xl font-extrabold text-vibrant-blue mb-2">{customerCount}</p>
                <p className="text-gray-600">Happy Customers</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-extrabold text-vibrant-blue mb-2">{rating.split(' ')[0]}</p>
                <p className="text-gray-600">Average Rating</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-extrabold text-vibrant-blue mb-2">30-Day</p>
                <p className="text-gray-600">Money-Back Guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - USER: Change contact info below */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-extrabold text-center text-black mb-12">
              Contact Us
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-black mb-6">Send Us a Message</h3>
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Form submitted! Add your email handling logic here.'); }}>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Name</label>
                    <input type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vibrant-blue" placeholder="Your Name" />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Email</label>
                    <input type="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vibrant-blue" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Message</label>
                    <textarea required rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vibrant-blue" placeholder="How can we help you?"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-vibrant-blue hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition">
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Info - USER: Change these details */}
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-vibrant-blue mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                    <div>
                      <h4 className="font-bold text-black mb-1">Email</h4>
                      <p className="text-gray-700">support@soloshop.com</p>
                      <p className="text-sm text-gray-500 mt-1">We reply within 24 hours</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-vibrant-blue mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                    <div>
                      <h4 className="font-bold text-black mb-1">Phone</h4>
                      <p className="text-gray-700">+1 (555) 123-4567</p>
                      <p className="text-sm text-gray-500 mt-1">Mon-Fri, 9AM-6PM EST</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-vibrant-blue mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                    <div>
                      <h4 className="font-bold text-black mb-1">Address</h4>
                      <p className="text-gray-700">123 Commerce Street<br />New York, NY 10001<br />United States</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-vibrant-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-5xl font-extrabold mb-6">
            Don't Miss Out on This Deal
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Limited stock available. Order now and get 40% off + free shipping.
          </p>
          <button 
            onClick={handleAddToCart}
            className="bg-white text-vibrant-blue hover:bg-gray-100 font-bold text-lg px-12 py-5 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            🛒 Add to Cart - {salePrice}
          </button>
        </div>
      </section>

      {/* Sticky Mobile CTA (Shows on mobile only) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-50">
        <button 
          onClick={handleAddToCart}
          className="w-full bg-vibrant-blue hover:bg-blue-700 text-white font-bold text-lg py-4 rounded-full shadow-lg"
        >
          🛒 Buy Now - {salePrice}
        </button>
      </div>

      <Footer />

    </div>
  );
}

export default App;