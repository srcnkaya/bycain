import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-luxury-black text-luxury-white py-12 px-4 md:px-8 lg:px-20 border-t border-luxury-gray">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-luxury-platinum/50 text-sm text-center md:text-left">
            © {new Date().getFullYear()} ByCain. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link 
              to="/privacy" 
              className="text-luxury-platinum/70 hover:text-luxury-slate transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms" 
              className="text-luxury-platinum/70 hover:text-luxury-slate transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
