import { useEffect } from 'react';

const SITE_NAME = 'By Cain';
const DEFAULT_IMAGE = 'https://www.bycain.com/logo/logo.png';

const upsertMeta = (selector, attributes) => {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
};

const upsertLink = (rel, href) => {
  let element = document.head.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
};

const SEO = ({ title, description, path = '/', image = DEFAULT_IMAGE, type = 'website', robots = 'index, follow', jsonLd }) => {
  useEffect(() => {
    const canonical = `https://www.bycain.com${path}`;
    const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Premium Developer Templates & Digital Products`;

    document.title = fullTitle;
    upsertMeta('meta[name="description"]', { name: 'description', content: description });
    upsertMeta('meta[name="robots"]', { name: 'robots', content: robots });

    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: fullTitle });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description });
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: type });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonical });
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: image });

    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: fullTitle });
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description });
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: image });

    upsertLink('canonical', canonical);

    const existingJsonLd = document.head.querySelector('script[data-seo-jsonld="dynamic"]');
    if (existingJsonLd) existingJsonLd.remove();

    if (jsonLd) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-jsonld', 'dynamic');
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    return () => {
      const dynamic = document.head.querySelector('script[data-seo-jsonld="dynamic"]');
      if (dynamic) dynamic.remove();
    };
  }, [title, description, path, image, type, robots, jsonLd]);

  return null;
};

export default SEO;
