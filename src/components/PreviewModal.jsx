import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const PreviewModal = ({ isOpen, onClose, previewUrl, productTitle }) => {
  // Close modal on Escape key
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-black/95 flex flex-col"
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between p-6 border-b border-luxury-gray">
            <div>
              <h3 className="text-xl font-semibold text-luxury-white">
                Live Preview: {productTitle}
              </h3>
              <p className="text-sm text-luxury-platinum/70 mt-1">
                Interactive demo of the template
              </p>
            </div>
            <button
              onClick={onClose}
              className="flex items-center gap-2 px-6 py-2 bg-luxury-slate text-white rounded-xl hover:bg-luxury-slate/90 transition-all duration-300"
            >
              <X className="w-5 h-5" />
              Close Preview
            </button>
          </div>

          {/* Iframe Container */}
          <div className="flex-1 relative overflow-hidden">
            {previewUrl ? (
              <iframe
                src={previewUrl}
                title={`Preview of ${productTitle}`}
                className="w-full h-full border-0"
                sandbox="allow-scripts allow-same-origin allow-forms"
              />
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-luxury-platinum/50">
                  No preview URL available for this product.
                </p>
              </div>
            )}
          </div>

          {/* Footer Info */}
          <div className="p-4 border-t border-luxury-gray text-center">
            <p className="text-sm text-luxury-platinum/60">
              Press <kbd className="px-2 py-1 bg-luxury-charcoal rounded text-luxury-white text-xs">ESC</kbd> or click "Close Preview" to exit
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PreviewModal;
