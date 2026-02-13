import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-luxury-white/95 backdrop-blur-sm shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
        {/* Logo / Brand */}
        <a 
          href="#" 
          className={`text-2xl font-bold tracking-tight transition-colors ${
            isScrolled ? 'text-luxury-black' : 'text-luxury-white'
          }`}
        >
          ByCain
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
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
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-luxury-white border-t border-luxury-slateLight rounded-b-2xl"
        >
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-luxury-black font-medium py-2 hover:text-luxury-charcoal transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
