import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Linkedin, Facebook, MessageCircle, Link2 } from 'lucide-react';
import SEO from '../components/SEO';
import { getPostBySlug } from '../data/blogPosts';
import { trackEvent } from '../utils/analytics';

const XIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M18.244 2H21.5l-7.12 8.14L22 22h-5.96l-4.66-6.1L6.03 22H2.78l7.61-8.7L2 2h6.11l4.2 5.57L18.244 2zm-1.05 18.2h1.8L7.13 3.71H5.2L17.194 20.2z" />
  </svg>
);

const renderInline = (text) => {
  const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*)/g).filter(Boolean);

  return parts.map((part, idx) => {
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code key={idx} className="bg-luxury-black text-luxury-white px-1.5 py-0.5 rounded text-sm font-mono">
          {part.slice(1, -1)}
        </code>
      );
    }

    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={idx} className="font-semibold text-luxury-black">{part.slice(2, -2)}</strong>;
    }

    return <span key={idx}>{part}</span>;
  });
};

const renderMarkdown = (lines) => {
  const elements = [];
  let inCodeBlock = false;
  let codeLines = [];
  let listItems = [];
  let listType = null;

  const flushList = (keyPrefix) => {
    if (!listItems.length) return;

    const ListTag = listType === 'ol' ? 'ol' : 'ul';
    elements.push(
      <ListTag
        key={`${keyPrefix}-list`}
        className={`mb-5 space-y-2 text-base leading-relaxed text-luxury-charcoal/90 ${listType === 'ol' ? 'list-decimal ml-6' : 'list-disc ml-6'}`}
      >
        {listItems}
      </ListTag>
    );

    listItems = [];
    listType = null;
  };

  lines.forEach((rawLine, i) => {
    const line = rawLine ?? '';
    const trimmed = line.trim();

    if (trimmed.startsWith('```')) {
      flushList(`code-${i}`);

      if (inCodeBlock) {
        elements.push(
          <pre key={`code-${i}`} className="bg-luxury-black text-luxury-white rounded-xl p-4 sm:p-5 overflow-x-auto mb-6 border border-luxury-charcoal/10">
            <code className="font-mono text-xs sm:text-sm whitespace-pre">{codeLines.join('\n')}</code>
          </pre>
        );
        codeLines = [];
        inCodeBlock = false;
      } else {
        inCodeBlock = true;
      }
      return;
    }

    if (inCodeBlock) {
      codeLines.push(line);
      return;
    }

    if (trimmed === '') {
      flushList(`sp-${i}`);
      elements.push(<div key={`sp-${i}`} className="h-3" />);
      return;
    }

    if (line.startsWith('# ')) {
      flushList(`h1-${i}`);
      elements.push(
        <h1 key={`h1-${i}`} className="text-2xl sm:text-3xl font-bold mt-8 mb-4 leading-tight">{renderInline(line.replace('# ', ''))}</h1>
      );
      return;
    }

    if (line.startsWith('## ')) {
      flushList(`h2-${i}`);
      elements.push(
        <h2 key={`h2-${i}`} className="text-2xl sm:text-3xl font-semibold mt-10 mb-4 leading-snug">{renderInline(line.replace('## ', ''))}</h2>
      );
      return;
    }

    if (line.startsWith('### ')) {
      flushList(`h3-${i}`);
      elements.push(
        <h3 key={`h3-${i}`} className="text-xl sm:text-2xl font-semibold mt-8 mb-3 leading-snug">{renderInline(line.replace('### ', ''))}</h3>
      );
      return;
    }

    if (line.startsWith('#### ')) {
      flushList(`h4-${i}`);
      elements.push(
        <h4 key={`h4-${i}`} className="text-lg sm:text-xl font-semibold mt-7 mb-3 leading-snug">{renderInline(line.replace('#### ', ''))}</h4>
      );
      return;
    }

    if (line.startsWith('- ') || line.startsWith('* ')) {
      if (listType && listType !== 'ul') {
        flushList(`ul-switch-${i}`);
      }
      listType = 'ul';
      listItems.push(
        <li key={`li-${i}`}>{renderInline(line.slice(2))}</li>
      );
      return;
    }

    if (/^\d+\.\s+/.test(line)) {
      if (listType && listType !== 'ol') {
        flushList(`ol-switch-${i}`);
      }
      listType = 'ol';
      listItems.push(
        <li key={`oli-${i}`}>{renderInline(line.replace(/^\d+\.\s+/, ''))}</li>
      );
      return;
    }

    if (line.startsWith('> ')) {
      flushList(`quote-${i}`);
      elements.push(
        <blockquote key={`quote-${i}`} className="border-l-4 border-luxury-slateLight pl-4 italic text-luxury-charcoal/80 mb-5">
          {renderInline(line.replace('> ', ''))}
        </blockquote>
      );
      return;
    }

    flushList(`p-${i}`);
    elements.push(
      <p key={`p-${i}`} className="text-base sm:text-lg text-luxury-charcoal/90 leading-8 mb-5">{renderInline(line)}</p>
    );
  });

  flushList('last');

  if (inCodeBlock && codeLines.length) {
    elements.push(
      <pre key="code-last" className="bg-luxury-black text-luxury-white rounded-xl p-4 sm:p-5 overflow-x-auto mb-6 border border-luxury-charcoal/10">
        <code className="font-mono text-xs sm:text-sm whitespace-pre">{codeLines.join('\n')}</code>
      </pre>
    );
  }

  return elements;
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug);
  const [contentLines, setContentLines] = useState([]);

  useEffect(() => {
    if (post?.slug) {
      trackEvent('blog_post_view', { slug: post.slug, title: post.title });
    }

    const loadMarkdown = async () => {
      if (!post?.contentPath) {
        setContentLines([]);
        return;
      }

      try {
        const res = await fetch(post.contentPath);
        const text = await res.text();
        setContentLines(text.split('\n'));
      } catch {
        setContentLines(['Content could not be loaded.']);
      }
    };

    loadMarkdown();
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-luxury-white pt-40 sm:pt-44 md:pt-48 px-4 sm:px-6 md:px-8 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-3">Post not found</h1>
          <Link to="/blog" className="text-luxury-slate hover:text-luxury-charcoal">Back to blog</Link>
        </div>
      </div>
    );
  }

  const postUrl = `https://www.bycain.com/blog/${post.slug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Person', name: 'Cain' },
    publisher: { '@type': 'Organization', name: 'By Cain' },
    description: post.excerpt,
    mainEntityOfPage: postUrl
  };

  const shareTo = (platform) => {
    const encodedUrl = encodeURIComponent(postUrl);
    const encodedTitle = encodeURIComponent(post.title);

    const urls = {
      x: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`
    };

    if (urls[platform]) {
      trackEvent('blog_share_click', { platform, slug: post.slug });
      window.open(urls[platform], '_blank', 'noopener,noreferrer');
    }
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(postUrl);
      trackEvent('blog_share_copy_link', { slug: post.slug });
      alert('Link copied');
    } catch {
      alert('Could not copy link');
    }
  };

  return (
    <div className="min-h-screen bg-luxury-white pt-40 sm:pt-44 md:pt-48 pb-16 sm:pb-20 px-4 sm:px-6 md:px-8 lg:px-20">
      <SEO
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        type="article"
        jsonLd={jsonLd}
      />

      <article className="max-w-4xl mx-auto mt-4 sm:mt-6">
        <div className="relative overflow-hidden rounded-3xl border border-luxury-slateLight/90 bg-gradient-to-br from-white via-white to-luxury-slateLight/20 p-6 sm:p-8 shadow-[0_12px_40px_rgba(15,23,42,0.1)] mb-8">
          <div className="absolute -right-16 -top-16 w-52 h-52 rounded-full bg-luxury-slate/10 blur-3xl pointer-events-none" />
          <Link to="/blog" className="text-sm sm:text-base text-luxury-slate hover:text-luxury-charcoal relative">← Back to blog</Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-3 leading-tight relative">{post.title}</h1>
          <div className="text-xs sm:text-sm text-luxury-charcoal/60 mb-4 relative">{post.date} · {post.readingTime}</div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1 sm:mb-0 relative">
            <span className="text-xs sm:text-sm text-luxury-charcoal/60 mr-1">Share:</span>
            <button aria-label="Share on X" title="Share on X" onClick={() => shareTo('x')} className="p-2 rounded-lg border border-luxury-slateLight hover:border-black text-black bg-white/90 hover:shadow-sm transition-all">
              <XIcon className="w-4 h-4" />
            </button>
            <button aria-label="Share on LinkedIn" title="Share on LinkedIn" onClick={() => shareTo('linkedin')} className="p-2 rounded-lg border border-luxury-slateLight hover:border-[#0A66C2] text-[#0A66C2] bg-white/90 hover:shadow-sm transition-all">
              <Linkedin className="w-4 h-4" />
            </button>
            <button aria-label="Share on Facebook" title="Share on Facebook" onClick={() => shareTo('facebook')} className="p-2 rounded-lg border border-luxury-slateLight hover:border-[#1877F2] text-[#1877F2] bg-white/90 hover:shadow-sm transition-all">
              <Facebook className="w-4 h-4" />
            </button>
            <button aria-label="Share on WhatsApp" title="Share on WhatsApp" onClick={() => shareTo('whatsapp')} className="p-2 rounded-lg border border-luxury-slateLight hover:border-[#25D366] text-[#25D366] bg-white/90 hover:shadow-sm transition-all">
              <MessageCircle className="w-4 h-4" />
            </button>
            <button aria-label="Copy link" title="Copy link" onClick={copyLink} className="p-2 rounded-lg border border-luxury-slate text-luxury-slate hover:bg-luxury-slate hover:text-white transition-all">
              <Link2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="max-w-none tracking-[0.01em] rounded-3xl border border-luxury-slateLight/80 bg-white p-6 sm:p-8 md:p-10 shadow-[0_10px_35px_rgba(15,23,42,0.08)]">
          {renderMarkdown(contentLines)}
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
