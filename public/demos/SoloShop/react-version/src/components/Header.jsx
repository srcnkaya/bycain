// Header Component
// USER: You can customize the navigation links and logo here

function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo - USER: Change this to your brand name or add logo image */}
          <div className="text-2xl font-extrabold text-black">
            <a href="#home">SoloShop</a>
          </div>
          
          {/* Navigation Links - USER: Add/remove links as needed */}
          <div className="hidden md:flex space-x-8">
            <a href="#product" className="text-gray-700 hover:text-vibrant-blue font-semibold transition">
              Product
            </a>
            <a href="#features" className="text-gray-700 hover:text-vibrant-blue font-semibold transition">
              Features
            </a>
            <a href="#reviews" className="text-gray-700 hover:text-vibrant-blue font-semibold transition">
              Reviews
            </a>
            <a href="#about" className="text-gray-700 hover:text-vibrant-blue font-semibold transition">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-vibrant-blue font-semibold transition">
              Contact
            </a>
          </div>
          
          {/* CTA Button */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-vibrant-blue hover:bg-blue-700 text-white font-bold px-6 py-2 rounded-full transition"
          >
            Buy Now
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;