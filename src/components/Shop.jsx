import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Tag, ExternalLink, Eye } from 'lucide-react';
import { products, categories } from '../data/products';
import PreviewModal from './PreviewModal';

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [previewModal, setPreviewModal] = useState({ isOpen: false, url: '', title: '' });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Filter products based on selected category
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
    // Open Lemon Squeezy checkout in new tab
    window.open(lemonSqueezyUrl, '_blank', 'noopener,noreferrer');
  };

  const handlePreview = (previewUrl, title) => {
    setPreviewModal({ isOpen: true, url: previewUrl, title });
  };

  const closePreview = () => {
    setPreviewModal({ isOpen: false, url: '', title: '' });
  };

  return (
    <section id="shop" className="section-padding bg-luxury-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <ShoppingBag className="w-8 h-8 text-luxury-charcoal" />
            <h2 className="text-5xl md:text-6xl font-bold">
              Digital Store
            </h2>
          </div>
          <p className="text-luxury-charcoal/70 max-w-2xl mx-auto text-lg">
            {/* [MANUAL FIX]: Update store description */}
            Premium templates and UI kits crafted with attention to detail. 
            Download instantly and start building.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 border transition-all duration-300 rounded-xl ${
                activeCategory === category
                  ? 'bg-luxury-slate text-luxury-white border-luxury-slate shadow-lg shadow-luxury-slate/20'
                  : 'bg-transparent text-luxury-charcoal border-luxury-slateLight hover:border-luxury-slate'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                custom={index}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={itemVariants}
                className="bg-white border border-luxury-slateLight overflow-hidden group hover:shadow-xl hover:shadow-luxury-slate/10 hover:border-luxury-slate transition-all duration-500 rounded-2xl"
              >
              {/* Product Image */}
              <div className="aspect-[4/3] bg-luxury-slateLight relative overflow-hidden">
                {/* [MANUAL FIX]: Replace this with actual product images */}
                <div className="w-full h-full flex items-center justify-center text-luxury-slate">
                  <div className="text-center">
                    <ShoppingBag className="w-12 h-12 mx-auto mb-2 opacity-30" />
                    <span className="text-sm">Product Image</span>
                  </div>
                </div>
                {/* Uncomment when you have images: */}
                {/* <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                /> */}
                
                {/* Featured Badge */}
                {product.featured && (
                  <div className="absolute top-4 right-4 bg-luxury-black text-luxury-white px-3 py-1 text-xs tracking-wider">
                    FEATURED
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                {/* Category & Tags */}
                <div className="flex items-center gap-2 mb-3">
                  <Tag className="w-4 h-4 text-luxury-gray" />
                  <span className="text-xs text-luxury-gray uppercase tracking-wide">
                    {product.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-luxury-charcoal transition-colors">
                  {product.title}
                </h3>

                {/* Description */}
                <p className="text-luxury-charcoal/70 leading-relaxed mb-4 text-sm">
                  {product.description}
                </p>

                {/* Tech Tags */}
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

                {/* Price & Buttons */}
                <div className="pt-4 border-t border-luxury-slateLight space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-luxury-black">
                      ${product.price}
                    </span>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleBuyNow(product.lemonSqueezyUrl)}
                      className="flex-1 bg-luxury-slate text-white px-4 py-2 rounded-xl hover:bg-luxury-slate/90 hover:shadow-lg hover:shadow-luxury-slate/30 transition-all duration-300 flex items-center justify-center gap-2 text-sm font-medium"
                    >
                      Buy Now
                      <ExternalLink className="w-4 h-4" />
                    </button>
                    
                    <button
                      onClick={() => handlePreview(product.previewUrl, product.title)}
                      className="flex-1 border-2 border-luxury-slate text-luxury-slate px-4 py-2 rounded-xl hover:bg-luxury-slate hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-sm font-medium"
                    >
                      <Eye className="w-4 h-4" />
                      Preview
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
        </div>

        {/* No products message */}
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

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-20 pt-12 border-t border-luxury-slateLight"
        >
          <p className="text-luxury-charcoal/70 mb-4">
            Need a custom solution?
          </p>
          <a href="#contact" className="luxury-button">
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Preview Modal */}
      <PreviewModal
        isOpen={previewModal.isOpen}
        onClose={closePreview}
        previewUrl={previewModal.url}
        productTitle={previewModal.title}
      />
    </section>
  );
};

export default Shop;
