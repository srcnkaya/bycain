import { useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Briefcase } from 'lucide-react';
import { products } from '../data/products';
import { trackEvent } from '../utils/analytics';

const ITEMS_PER_VIEW = 3;

const WorkCard = ({ item, onPreview }) => (
  <article className="border border-luxury-slateLight rounded-2xl overflow-hidden bg-white hover:shadow-xl hover:shadow-luxury-slate/10 transition-all flex flex-col h-full">
    <img src={item.image} alt={item.title} className="w-full h-56 object-cover" loading="lazy" />
    <div className="p-5 flex flex-col flex-1">
      <p className="text-xs uppercase tracking-wide text-luxury-gray mb-2">{item.category}</p>
      <h3 className="text-lg font-semibold text-luxury-black mb-4 line-clamp-2 min-h-[56px]">{item.title}</h3>

      <div className="mt-auto">
        {item.previewUrl ? (
          <button
            onClick={() => onPreview(item)}
            className="w-full border border-luxury-slate text-luxury-slate px-4 py-2 rounded-xl hover:bg-luxury-slate hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-sm font-medium"
          >
            Live Preview
            <ExternalLink className="w-4 h-4" />
          </button>
        ) : (
          <div className="text-sm text-luxury-gray">Preview available on request.</div>
        )}
      </div>
    </div>
  </article>
);

const Work = () => {
  const workItems = useMemo(
    () =>
      products
        .filter((item) => item.images?.length)
        .map((item) => ({
          id: item.id,
          title: item.title,
          category: item.category,
          image: item.images[0],
          previewUrl: item.previewUrl,
        })),
    []
  );

  const [startIndex, setStartIndex] = useState(0);

  const canGoPrev = startIndex > 0;
  const canGoNext = startIndex + ITEMS_PER_VIEW < workItems.length;
  const visibleItems = workItems.slice(startIndex, startIndex + ITEMS_PER_VIEW);

  const goPrev = () => {
    if (!canGoPrev) return;
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const goNext = () => {
    if (!canGoNext) return;
    setStartIndex((prev) => Math.min(workItems.length - ITEMS_PER_VIEW, prev + 1));
  };

  const openPreview = (item) => {
    if (!item.previewUrl) return;
    trackEvent('work_item_click', {
      item_id: item.id,
      item_name: item.title,
      preview_url: item.previewUrl,
    });
    window.open(item.previewUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="work" className="py-20 px-4 md:px-8 lg:px-20 bg-luxury-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Briefcase className="w-7 h-7 text-luxury-charcoal" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Our Work</h2>
          </div>
          <p className="text-luxury-charcoal/70 max-w-2xl mx-auto text-base sm:text-lg">
            Real projects designed and built for performance, clarity, and modern brand presence.
          </p>
        </div>

        <div className="hidden lg:flex items-center justify-end gap-3 mb-6">
          <button
            onClick={goPrev}
            disabled={!canGoPrev}
            className={`p-2 rounded-xl border transition-all ${
              canGoPrev
                ? 'border-luxury-slate text-luxury-slate hover:bg-luxury-slate hover:text-white'
                : 'border-luxury-slateLight text-luxury-gray opacity-50 cursor-not-allowed'
            }`}
            aria-label="Previous work items"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goNext}
            disabled={!canGoNext}
            className={`p-2 rounded-xl border transition-all ${
              canGoNext
                ? 'border-luxury-slate text-luxury-slate hover:bg-luxury-slate hover:text-white'
                : 'border-luxury-slateLight text-luxury-gray opacity-50 cursor-not-allowed'
            }`}
            aria-label="Next work items"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="lg:hidden -mx-4 px-4 overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-4 pb-2">
            {workItems.map((item) => (
              <div key={item.id} className="snap-center shrink-0 w-[86vw] md:w-[70vw] max-w-sm md:max-w-md">
                <WorkCard item={item} onPreview={openPreview} />
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {visibleItems.map((item) => (
            <WorkCard key={item.id} item={item} onPreview={openPreview} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
