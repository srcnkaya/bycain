export const blogPosts = [
  {
    slug: 'how-to-deploy-template-on-vercel',
    title: 'How to Deploy a Website Template on Vercel (Step by Step)',
    excerpt: 'A practical guide to go live fast with your template using GitHub + Vercel, with common deployment issues and fixes.',
    date: '2026-01-25',
    readingTime: '8 min read',
    tags: ['Vercel', 'Deployment', 'Templates'],
    contentPath: '/blog/how-to-deploy-template-on-vercel.md'
  },
  {
    slug: 'how-to-buy-domain-and-connect-hosting',
    title: 'How to Buy a Domain and Connect It to Hosting',
    excerpt: 'Domain and DNS basics for creators: what to buy, where to point records, and how to avoid common mistakes.',
    date: '2026-02-01',
    readingTime: '7 min read',
    tags: ['Domain', 'DNS', 'Hosting'],
    contentPath: '/blog/how-to-buy-domain-and-connect-hosting.md'
  },
  {
    slug: 'template-installation-checklist',
    title: 'Template Installation Checklist (No Headaches Version)',
    excerpt: 'Use this checklist before and after launch to avoid broken assets, missing pages, and SEO gaps.',
    date: '2026-02-08',
    readingTime: '5 min read',
    tags: ['Checklist', 'Setup', 'SEO'],
    contentPath: '/blog/template-installation-checklist.md'
  },
  {
    slug: 'github-beginners-guide',
    title: 'GitHub for Beginners: A Practical Guide to Upload and Pull Projects Like a Pro',
    excerpt: 'Learn how to use GitHub for version control and collaboration with this beginner-friendly guide.',
    date: '2026-02-15',
    readingTime: '8 min read',
    tags: ['GitHub', 'Version Control', 'Collaboration'],
    contentPath: '/blog/github-beginner-guide.md'
  },
    {
    slug: 'landing-page-best-practices',
    title: 'Landing Page Best Practices for Maximum Conversion',
    excerpt: 'Learn how to design and optimize landing pages for better user engagement and conversion rates.',
    date: '2026-02-22',
    readingTime: '10 min read',
    tags: ['Landing Page', 'Conversion', 'UX'],
    contentPath: '/blog/landing-page-conversion-tips.md'
  },
    {
    slug: 'vibe-coding-ai-development',
    title: 'Vibe Coding: Cheating or Just Coding Smarter?',
    excerpt: 'An honest take on AI-assisted coding: what it is, whether it replaces traditional development, and why using AI tools isn\'t cheating. The future of software development is here.',
    date: '2026-03-01',
    readingTime: '11 min read',
    tags: ['AI', 'Development', 'vibe coding', "copilot", "development", "opinion","future-of-coding"],
    contentPath: '/blog/vibe-coding.md'
  },
     {
    slug: 'is-seo-dead-in-the-age-of-ai',
    title: 'Is SEO Dead in the Age of AI? What Google\'s AI Search Means for Your Website',
    excerpt: 'Google\'s AI Overviews are changing how people search — and how websites survive. Here\'s what\'s actually dying, what\'s thriving, and how to protect your traffic and ad revenue in the AI era.',
    date: '2026-03-07',
    readingTime: '6 min read',
    tags: ['SEO', 'AI', 'Google', 'Digital Marketing', 'Content Strategy', 'Website Traffic', 'AI Search', 'Blogging', 'Ad Revenue', 'Google AI Overviews'],
    contentPath: '/blog/is-seo-dead-in-the-age-of-ai.md'
  },
];

export const getPostBySlug = (slug) => blogPosts.find((post) => post.slug === slug);
