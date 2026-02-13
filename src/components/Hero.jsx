import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-luxury-black text-luxury-white section-padding">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            ByCain
          </h1>
          
          <p className="text-xl md:text-2xl font-light text-luxury-platinum mb-8 tracking-wide">
            Developer & Entrepreneur
          </p>
          
          <motion.p
            className="text-base md:text-lg text-luxury-platinum/80 max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {/* [MANUAL FIX]: Write your personal mission statement here */}
            Building digital products that blend creativity with technology. 
            From templates to tools, each project is crafted with precision and purpose.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex gap-4 justify-center flex-wrap"
          >
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
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-6 h-6 text-luxury-slate" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
