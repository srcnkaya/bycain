import { Link } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';
import { blogPosts } from '../data/blogPosts';
import { trackEvent } from '../utils/analytics';

const POSTS_PER_PAGE = 10;

const BlogList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return blogPosts;

    return blogPosts.filter((post) =>
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.tags.some((tag) => tag.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-luxury-white pt-40 sm:pt-44 md:pt-48 pb-16 sm:pb-20 px-4 sm:px-6 md:px-8 lg:px-20">
      <SEO
        title="Blog"
        description="Tutorials and practical guides about template setup, hosting, deployment, and website growth."
        path="/blog"
        type="blog"
      />

      <div className="max-w-5xl mx-auto mt-4 sm:mt-6">
        <div className="relative overflow-hidden rounded-3xl border border-luxury-slateLight/80 bg-gradient-to-br from-white via-white to-luxury-slateLight/20 p-6 sm:p-8 mb-8 sm:mb-10 shadow-[0_10px_30px_rgba(17,24,39,0.06)]">
          <div className="absolute -top-20 -right-12 w-44 h-44 rounded-full bg-luxury-slate/10 blur-3xl pointer-events-none" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 relative">ByCain Blog</h1>
          <p className="text-sm sm:text-base text-luxury-charcoal/75 mb-6 relative">Weekly notes on setup, hosting, SEO, and growing template-based websites.</p>

          <div className="relative">
            <Search className="w-4 h-4 sm:w-5 sm:h-5 text-luxury-charcoal/50 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search blog posts..."
              className="w-full border border-luxury-slateLight rounded-xl pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 text-sm sm:text-base bg-white/95 text-luxury-black placeholder:text-luxury-charcoal/40 focus:outline-none focus:ring-2 focus:ring-luxury-slate/20 focus:border-luxury-slate shadow-sm"
            />
          </div>
        </div>

        <div className="grid gap-5 sm:gap-7">
          {currentPosts.map((post) => (
            <article key={post.slug} className="group relative overflow-hidden border border-luxury-slateLight/90 rounded-2xl p-5 sm:p-7 bg-gradient-to-br from-white via-white to-luxury-slateLight/20 shadow-[0_8px_24px_rgba(15,23,42,0.06)] hover:shadow-[0_18px_45px_rgba(15,23,42,0.14)] hover:-translate-y-1 transition-all duration-300">
              <div className="absolute -right-12 -top-12 w-36 h-36 rounded-full bg-luxury-slate/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="text-xs sm:text-sm text-luxury-charcoal/60 mb-2 relative">{post.date} · {post.readingTime}</div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 leading-snug relative group-hover:text-luxury-slate transition-colors">{post.title}</h2>
              <p className="text-sm sm:text-base text-luxury-charcoal/80 mb-5 leading-7 relative">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2 mb-5 relative">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-lg bg-luxury-slateLight/80 border border-luxury-slateLight text-luxury-charcoal">{tag}</span>
                ))}
              </div>
              <Link
                to={`/blog/${post.slug}`}
                onClick={() => trackEvent('blog_read_click', { slug: post.slug, title: post.title })}
                className="inline-flex items-center gap-2 text-luxury-slate hover:text-luxury-charcoal font-semibold relative"
              >
                Read article <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </article>
          ))}
        </div>

        {currentPosts.length === 0 && (
          <p className="text-center text-luxury-charcoal/60 py-10">No posts found for "{searchQuery}".</p>
        )}

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-10">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-2 rounded-lg border ${
                currentPage === 1
                  ? 'border-luxury-slateLight text-luxury-charcoal/30 cursor-not-allowed'
                  : 'border-luxury-slate text-luxury-slate hover:bg-luxury-slate hover:text-white'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {Array.from({ length: totalPages }).map((_, idx) => {
              const page = idx + 1;
              return (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg border text-sm font-medium ${
                    currentPage === page
                      ? 'bg-luxury-slate text-white border-luxury-slate'
                      : 'border-luxury-slateLight text-luxury-charcoal hover:border-luxury-slate hover:text-luxury-slate'
                  }`}
                >
                  {page}
                </button>
              );
            })}

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-lg border ${
                currentPage === totalPages
                  ? 'border-luxury-slateLight text-luxury-charcoal/30 cursor-not-allowed'
                  : 'border-luxury-slate text-luxury-slate hover:bg-luxury-slate hover:text-white'
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogList;
