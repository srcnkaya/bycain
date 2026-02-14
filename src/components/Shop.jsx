import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Tag, ExternalLink } from 'lucide-react';
import { products, categories } from '../data/products';
import ImageGallery from './ImageGallery';

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.4,
        delay: i * 0.05 
      }
    }),
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 }
    }
  };

  const handleBuyNow = (lemonSqueezyUrl) => {
    window.open(lemonSqueezyUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="shop" className="py-20 px-4 md:px-8 lg:px-20 bg-luxury-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <ShoppingBag className="w-6 h-6 sm:w-8 sm:h-8 text-luxury-charcoal" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              Digital Store
            </h2>
          </div>
          <p className="text-luxury-charcoal/70 max-w-2xl mx-auto text-base sm:text-lg px-4">
            Premium templates and UI kits crafted with attention to detail. 
            Download instantly and start building.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 px-4"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 sm:px-6 py-2 border transition-all duration-300 rounded-xl text-sm sm:text-base ${
                activeCategory === category
                  ? 'bg-luxury-slate text-luxury-white border-luxury-slate shadow-lg shadow-luxury-slate/20'
                  : 'bg-transparent text-luxury-charcoal border-luxury-slateLight hover:border-luxury-slate'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                custom={index}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={itemVariants}
                className="bg-white border border-luxury-slateLight overflow-hidden group hover:shadow-xl hover:shadow-luxury-slate/10 hover:border-luxury-slate transition-all duration-500 rounded-2xl flex flex-col"
              >
              <ImageGallery 
                images={product.images} 
                productTitle={product.title}
                featured={product.featured}
              />

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <Tag className="w-4 h-4 text-luxury-gray" />
                  <span className="text-xs text-luxury-gray uppercase tracking-wide">
                    {product.category}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold mb-3 group-hover:text-luxury-charcoal transition-colors">
                  {product.title}
                </h3>

                <p className="text-luxury-charcoal/70 leading-relaxed mb-4 text-sm">
                  {product.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {product.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-luxury-slateLight text-xs text-luxury-charcoal rounded-lg border border-luxury-slate/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-luxury-slateLight space-y-3 mt-auto">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-luxury-black">
                      ${product.price}
                    </span>
                  </div>
                  
                  <button
                    onClick={() => handleBuyNow(product.lemonSqueezyUrl)}
                    className="w-full bg-luxury-slate text-white px-4 py-2 rounded-xl hover:bg-luxury-slate/90 hover:shadow-lg hover:shadow-luxury-slate/30 transition-all duration-300 flex items-center justify-center gap-2 text-sm font-medium"
                  >
                    Buy Now
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {filteredProducts.length === 0 && (
            <motion.div
              key="no-products"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center py-20 col-span-full"
            >
              <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-luxury-gray opacity-30" />
              <p className="text-luxury-charcoal/50 text-lg">
                No products found in this category.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-20 pt-12 border-t border-luxury-slateLight px-4"
        >
          <p className="text-luxury-charcoal/70 mb-4">
            Need a custom solution?
          </p>
          <a href="#contact" className="luxury-button">
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Shop;
