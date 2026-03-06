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
    { name: 'Work', href: '#work', type: 'section' },
    { name: 'Services', href: '#services', type: 'section' },
    { name: 'Contact', href: '#contact', type: 'section' },
    { name: 'Blog', href: '/blog', type: 'route' },
  ];

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const handleNavClick = (e, link) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (link.type === 'route') {
      navigate(link.href);
      return;
    }

    const scrollToElement = () => {
      const element = document.querySelector(link.href);
      if (element) {
        const headerOffset = 120;
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
      setTimeout(scrollToElement, 120);
    } else {
      scrollToElement();
    }
  };

  const isHome = location.pathname === '/';
  const forceLightHeader = !isHome;
  const useLightHeader = forceLightHeader || isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        forceLightHeader
          ? 'bg-white shadow-sm'
          : useLightHeader
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
            src="/logo/logo.png?v=20260306" 
            alt="ByCain Logo" 
            width="120"
            height="30"
            fetchPriority="high"
            className={`h-30 w-auto transition-all duration-300 ${
              !useLightHeader ? 'invert' : ''
            }`}
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link)}
              className={`font-medium tracking-wide hover:opacity-70 transition-opacity ${
                useLightHeader ? 'text-black' : 'text-luxury-white'
              }`}
            >
              {link.name}
            </a>
          ))}

          <a
            href="#store"
            onClick={(e) => handleNavClick(e, { href: '#store', type: 'section' })}
            className={`font-medium tracking-wide transition-opacity hover:opacity-70 ${
              useLightHeader ? 'text-black' : 'text-luxury-white'
            }`}
          >
            Store
          </a>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, { href: '#contact', type: 'section' })}
            className="px-4 py-2 rounded-xl bg-luxury-slate text-white text-sm font-medium hover:bg-luxury-slate/90 transition-all"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden transition-colors ${
            useLightHeader ? 'text-black' : 'text-luxury-white'
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
                onClick={(e) => handleNavClick(e, link)}
                className="block text-luxury-black font-medium py-2 hover:text-luxury-charcoal transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#store"
              onClick={(e) => handleNavClick(e, { href: '#store', type: 'section' })}
              className="block text-luxury-black font-medium py-2 hover:text-luxury-charcoal transition-colors"
            >
              Store
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, { href: '#contact', type: 'section' })}
              className="block text-center px-4 py-3 rounded-xl bg-luxury-slate text-white font-medium"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
