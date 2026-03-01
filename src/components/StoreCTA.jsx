import { ExternalLink, ShoppingBag } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

const STORE_URL = 'https://bycain.lemonsqueezy.com';

const StoreCTA = () => {
  const onStoreClick = () => {
    trackEvent('store_cta_click', { source: 'home_store_section' });
  };

  const onCustomClick = () => {
    trackEvent('quote_cta_click', { source: 'home_store_section' });
  };

  return (
    <section id="store" className="py-20 px-4 md:px-8 lg:px-20 bg-luxury-white">
      <div className="max-w-5xl mx-auto border border-luxury-slateLight rounded-2xl p-8 md:p-12 text-center bg-white shadow-sm">
        <div className="flex items-center justify-center gap-3 mb-4">
          <ShoppingBag className="w-7 h-7 text-luxury-charcoal" />
          <h2 className="text-3xl sm:text-4xl font-bold">Prefer a Ready-Made Option?</h2>
        </div>

        <p className="text-luxury-charcoal/70 text-base sm:text-lg max-w-3xl mx-auto mb-8">
          If you need a faster launch, you can purchase one of our ready-made website templates from our Lemon Squeezy store.
          If you need a fully custom website for your business, contact us and we can build it for you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onStoreClick}
            className="luxury-button bg-luxury-slate text-luxury-white border-luxury-slate hover:shadow-lg hover:shadow-luxury-slate/30 inline-flex items-center gap-2"
          >
            Buy from Store
            <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            onClick={onCustomClick}
            className="luxury-button border-luxury-slate text-luxury-slate hover:bg-luxury-slate hover:text-white"
          >
            Need a Custom Website? Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default StoreCTA;
