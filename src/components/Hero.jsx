import { ChevronDown } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-luxury-black text-luxury-white py-20 px-4 md:px-8 lg:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <div className="animate-fadeIn">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
            Turn clicks into clients.
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-luxury-platinum/80 max-w-3xl mx-auto mb-12 leading-relaxed px-4">
            We build fast, conversion-focused websites that help your business get more qualified leads.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <a
              href="#contact"
              onClick={() => trackEvent('quote_cta_click', { source: 'hero' })}
              className="luxury-button bg-luxury-slate text-luxury-white border-luxury-slate hover:shadow-lg hover:shadow-luxury-slate/30"
            >
              Get a Quote
            </a>
            <a
              href="#work"
              className="luxury-button border-luxury-platinum text-luxury-platinum hover:bg-luxury-platinum hover:text-luxury-black"
            >
              View Our Work
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-luxury-slate" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
