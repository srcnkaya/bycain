import { useState, useRef } from 'react';
import { ShoppingBag, Tag, ExternalLink, ChevronLeft, ChevronRight, Search, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import ImageGallery from './ImageGallery';

const PRODUCTS_PER_PAGE = 9;

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  const toggleDescription = (productId) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

  // Filter by category first
  let filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  // Then filter by search query
  if (searchQuery.trim()) {
    const query = searchQuery.toLowerCase();
    filteredProducts = filteredProducts.filter(product => 
      product.title.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.tags.some(tag => tag.toLowerCase().includes(query))
    );
  }

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  // Handle category change
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1); // Reset to first page when category changes
  };

  // Handle search change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Scroll to shop section when changing pages
    document.getElementById('shop').scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleBuyNow = (lemonSqueezyUrl) => {
    window.open(lemonSqueezyUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="shop" className="py-20 px-4 md:px-8 lg:px-20 bg-luxury-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
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
        </div>

        {/* Search Box */}
        <div className="max-w-2xl mx-auto mb-8 px-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-luxury-gray" />
            <input
              type="text"
              placeholder="Search templates..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full pl-12 pr-4 py-3 border border-luxury-slateLight rounded-xl bg-white text-luxury-black placeholder-luxury-gray/50 focus:outline-none focus:border-luxury-slate focus:ring-2 focus:ring-luxury-slate/20 transition-all duration-300"
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 px-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 sm:px-6 py-2 border transition-all duration-300 rounded-xl text-sm sm:text-base ${
                activeCategory === category
                  ? 'bg-luxury-slate text-luxury-white border-luxury-slate shadow-lg shadow-luxury-slate/20'
                  : 'bg-transparent text-luxury-charcoal border-luxury-slateLight hover:border-luxury-slate'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {currentProducts.map((product, index) => (
              <div
                key={product.id}
                className="bg-white border border-luxury-slateLight overflow-hidden group hover:shadow-xl hover:shadow-luxury-slate/10 hover:border-luxury-slate transition-all duration-300 rounded-2xl flex flex-col"
              >
              <ImageGallery 
                images={product.images} 
                productTitle={product.title}
                featured={product.featured}
                priority={startIndex + index < 3}
              />

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <Tag className="w-4 h-4 text-luxury-gray" />
                  <span className="text-xs text-luxury-gray uppercase tracking-wide">
                    {product.category}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold mb-3 group-hover:text-luxury-charcoal transition-colors line-clamp-2 min-h-[56px]">
                  {product.title}
                </h3>

                <div className="mb-4 min-h-[84px]">
                  <p className={`text-luxury-charcoal/70 leading-relaxed text-sm ${
                    expandedDescriptions[product.id] ? '' : 'line-clamp-3'
                  }`}>
                    {product.description}
                  </p>
                  {product.description.length > 120 && (
                    <button
                      onClick={() => toggleDescription(product.id)}
                      className="text-luxury-slate text-xs mt-1 hover:text-luxury-charcoal transition-colors flex items-center gap-1"
                    >
                      {expandedDescriptions[product.id] ? 'Show less' : 'Read more'}
                      <ChevronDown className={`w-3 h-3 transition-transform ${
                        expandedDescriptions[product.id] ? 'rotate-180' : ''
                      }`} />
                    </button>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 mb-6 min-h-[32px]">
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
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20 col-span-full">
            <Search className="w-16 h-16 mx-auto mb-4 text-luxury-gray opacity-30" />
            <p className="text-luxury-charcoal/50 text-lg">
              {searchQuery.trim() 
                ? `No products found for "${searchQuery}"`
                : 'No products found in this category.'
              }
            </p>
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12">
            {/* Previous Button */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-2 rounded-xl border transition-all duration-300 ${
                currentPage === 1
                  ? 'border-luxury-slateLight text-luxury-gray cursor-not-allowed opacity-50'
                  : 'border-luxury-slate text-luxury-slate hover:bg-luxury-slate hover:text-white'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Page Numbers */}
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, index) => {
                const pageNumber = index + 1;
                return (
                  <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    className={`w-10 h-10 rounded-xl border transition-all duration-300 text-sm font-medium ${
                      currentPage === pageNumber
                        ? 'bg-luxury-slate text-white border-luxury-slate shadow-lg shadow-luxury-slate/20'
                        : 'border-luxury-slateLight text-luxury-charcoal hover:border-luxury-slate hover:text-luxury-slate'
                    }`}
                  >
                    {pageNumber}
                  </button>
                );
              })}
            </div>

            {/* Next Button */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-xl border transition-all duration-300 ${
                currentPage === totalPages
                  ? 'border-luxury-slateLight text-luxury-gray cursor-not-allowed opacity-50'
                  : 'border-luxury-slate text-luxury-slate hover:bg-luxury-slate hover:text-white'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        <div className="text-center mt-20 pt-12 border-t border-luxury-slateLight px-4">
          <p className="text-luxury-charcoal/70 mb-4">
            Need a custom solution?
          </p>
          <a href="#contact" className="luxury-button">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Shop;
