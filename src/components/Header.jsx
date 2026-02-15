import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Shop', href: '#shop' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const scrollToElement = () => {
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 80; // Header height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    };
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(scrollToElement, 100);
    } else {
      scrollToElement();
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-luxury-white/95 backdrop-blur-sm shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
        {/* Logo / Brand */}
        <a 
          href="/" 
          onClick={handleLogoClick}
          className="transition-opacity hover:opacity-80"
        >
          <img 
            src="/logo/logo.png" 
            alt="ByCain Logo" 
            width="120"
            height="30"
            fetchPriority="high"
            className={`h-30 w-auto transition-all duration-300 ${
              isScrolled ? 'invert' : ''
            }`}
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`font-medium tracking-wide hover:opacity-70 transition-opacity ${
                isScrolled ? 'text-luxury-black' : 'text-luxury-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden transition-colors ${
            isScrolled ? 'text-luxury-black' : 'text-luxury-white'
          }`}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-luxury-white border-t border-luxury-slateLight rounded-b-2xl animate-fadeIn">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block text-luxury-black font-medium py-2 hover:text-luxury-charcoal transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
