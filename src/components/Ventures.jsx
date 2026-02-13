import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Code, Music, Sparkles } from 'lucide-react';

const Ventures = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // [MANUAL FIX]: Replace these placeholder ventures with your actual projects
  const ventures = [
    {
      id: 1,
      title: "Project Alpha",
      category: "SaaS Platform",
      description: "A revolutionary tool that transforms how creators work.",
      icon: <Code className="w-8 h-8" />,
      link: "#", // Add actual project link
      status: "Live"
    },
    {
      id: 2,
      title: "Sonic Studio",
      category: "Music Tech",
      description: "AI-powered music composition and production suite.",
      icon: <Music className="w-8 h-8" />,
      link: "#",
      status: "Coming Soon"
    },
    {
      id: 3,
      title: "Venture Beta",
      category: "Creative Tools",
      description: "Empowering artists with intuitive digital tools.",
      icon: <Sparkles className="w-8 h-8" />,
      link: "#",
      status: "In Development"
    },
    // Add more projects as needed
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="ventures" className="section-padding bg-luxury-cream">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-center">
            Ventures
          </h2>
          <p className="text-center text-luxury-charcoal/70 mb-16 max-w-2xl mx-auto text-lg">
            {/* [MANUAL FIX]: Update ventures section description */}
            A curated collection of projects spanning software, music, and creative technology.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {ventures.map((venture) => (
            <motion.div
              key={venture.id}
              variants={itemVariants}
              className="luxury-card group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="text-luxury-black group-hover:text-luxury-charcoal transition-colors">
                  {venture.icon}
                </div>
                <span className="text-xs tracking-widest uppercase text-luxury-gray">
                  {venture.status}
                </span>
              </div>

              <h3 className="text-2xl font-semibold mb-2 group-hover:text-luxury-charcoal transition-colors">
                {venture.title}
              </h3>
              
              <p className="text-sm text-luxury-gray mb-4 uppercase tracking-wide">
                {venture.category}
              </p>

              <p className="text-luxury-charcoal/80 leading-relaxed mb-6">
                {venture.description}
              </p>

              <a 
                href={venture.link}
                className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all"
              >
                Learn More <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-20"
        >
          <p className="text-luxury-charcoal/70 mb-6">
            Have an idea or want to collaborate?
          </p>
          <a href="#contact" className="luxury-button">
            Start a Conversation
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Ventures;
