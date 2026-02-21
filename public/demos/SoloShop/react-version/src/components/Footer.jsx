// Footer Component
// USER: Customize footer links, newsletter, and copyright info

function Footer() {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // USER: Add your newsletter signup logic here (e.g., API call to Mailchimp)
    alert('Newsletter signup - add your email service integration here!');
  };

  return (
    <footer className="bg-black text-white py-12 mb-20 lg:mb-0">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Column - USER: Edit brand description */}
          <div>
            <h3 className="text-xl font-bold mb-4">SoloShop</h3>
            <p className="text-gray-400">Premium products for modern living.</p>
          </div>
          
          {/* Quick Links Column - USER: Edit or add more links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#product" className="hover:text-white transition">Product</a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition">Features</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition">Reviews</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition">About</a>
              </li>
            </ul>
          </div>
          
          {/* Legal Column - USER: Create Privacy.jsx and Terms.jsx pages if needed */}
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms" className="hover:text-white transition">Terms & Conditions</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">Contact Us</a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter Column - USER: Connect to your email service */}
          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4 text-sm">Get exclusive deals and updates.</p>
            <form onSubmit={handleNewsletterSubmit}>
              <input 
                type="email" 
                required
                placeholder="Your email" 
                className="w-full px-4 py-2 rounded-lg text-black mb-2"
              />
              <button 
                type="submit"
                className="w-full bg-vibrant-blue hover:bg-blue-700 text-white font-bold py-2 rounded-lg transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Copyright - USER: Update year and company name */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2026 SoloShop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;