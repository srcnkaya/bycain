import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Palette, Zap, Database, CreditCard, Brain } from 'lucide-react';

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // [MANUAL FIX]: Update with your actual tech stack
  const techStack = [
    {
      id: 1,
      name: "React",
      icon: <Code2 className="w-8 h-8" />,
      category: "Frontend"
    },
    {
      id: 2,
      name: "Vite",
      icon: <Zap className="w-8 h-8" />,
      category: "Build Tool"
    },
    {
      id: 3,
      name: "Tailwind CSS",
      icon: <Palette className="w-8 h-8" />,
      category: "Styling"
    },
    {
      id: 4,
      name: "Claude AI",
      icon: <Brain className="w-8 h-8" />,
      category: "AI Assistant"
    },
    {
      id: 5,
      name: "Stripe",
      icon: <CreditCard className="w-8 h-8" />,
      category: "Payments"
    },
    {
      id: 6,
      name: "Figma",
      icon: <Palette className="w-8 h-8" />,
      category: "Design"
    },
    {
      id: 7,
      name: "PostgreSQL",
      icon: <Database className="w-8 h-8" />,
      category: "Database"
    },
    {
      id: 8,
      name: "Node.js",
      icon: <Code2 className="w-8 h-8" />,
      category: "Backend"
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="tech-stack" className="section-padding bg-luxury-black text-luxury-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Tech Stack
          </h2>
          <p className="text-luxury-platinum max-w-2xl mx-auto text-lg">
            {/* [MANUAL FIX]: Update tech stack description */}
            The tools and technologies I use to build fast, scalable, and beautiful digital products.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {techStack.map((tech) => (
            <motion.div
              key={tech.id}
              variants={itemVariants}
              className="group relative bg-luxury-charcoal border border-luxury-gray hover:border-luxury-slate p-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-luxury-slate/20"
            >
              {/* Icon */}
              <div className="text-luxury-slate group-hover:text-luxury-platinum transition-colors mb-4">
                {tech.icon}
              </div>

              {/* Name */}
              <h3 className="text-lg font-semibold mb-1 group-hover:text-luxury-slate transition-colors">
                {tech.name}
              </h3>

              {/* Category */}
              <p className="text-sm text-luxury-slate/60 group-hover:text-luxury-slate/80 transition-colors">
                {tech.category}
              </p>

              {/* Hover effect border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-luxury-slate opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16 pt-12 border-t border-luxury-gray"
        >
          <p className="text-luxury-platinum/70">
            Always learning and exploring new technologies to deliver better solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
