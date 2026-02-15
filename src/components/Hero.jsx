import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-luxury-black text-luxury-white py-20 px-4 md:px-8 lg:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <div className="animate-fadeIn">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 tracking-tight">
            ByCain
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl font-light text-luxury-platinum mb-8 tracking-wide">
            Developer & Entrepreneur
          </p>
          
          <p className="text-sm sm:text-base md:text-lg text-luxury-platinum/80 max-w-2xl mx-auto mb-12 leading-relaxed px-4">
            Building digital products that blend creativity with technology. 
            From templates to tools, each project is crafted with precision and purpose.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <a 
              href="#shop" 
              className="luxury-button bg-luxury-slate text-luxury-white border-luxury-slate hover:shadow-lg hover:shadow-luxury-slate/30"
            >
              Browse Store
            </a>
            <a 
              href="#contact" 
              className="luxury-button border-luxury-platinum text-luxury-platinum hover:bg-luxury-platinum hover:text-luxury-black"
            >
              Get in Touch
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
