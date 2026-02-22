import { writeFileSync } from 'node:fs';
import { blogPosts } from '../src/data/blogPosts.js';

const BASE_URL = 'https://www.bycain.com';
const TODAY = new Date().toISOString().slice(0, 10);

const staticRoutes = [
  { path: '/', changefreq: 'weekly', priority: '1.0', lastmod: TODAY },
  { path: '/privacy', changefreq: 'yearly', priority: '0.4', lastmod: TODAY },
  { path: '/terms', changefreq: 'yearly', priority: '0.4', lastmod: TODAY },
  { path: '/blog', changefreq: 'weekly', priority: '0.9', lastmod: TODAY }
];

const blogRoutes = blogPosts.map((post) => ({
  path: `/blog/${post.slug}`,
  changefreq: 'monthly',
  priority: '0.8',
  lastmod: post.date || TODAY
}));

const urls = [...staticRoutes, ...blogRoutes]
  .map(
    (route) => `  <url>\n    <loc>${BASE_URL}${route.path}</loc>\n    <lastmod>${route.lastmod}</lastmod>\n    <changefreq>${route.changefreq}</changefreq>\n    <priority>${route.priority}</priority>\n  </url>`
  )
  .join('\n\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

writeFileSync('public/sitemap.xml', sitemap, 'utf8');
console.log(`Sitemap generated: ${staticRoutes.length + blogRoutes.length} URLs`);
