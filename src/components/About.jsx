import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-luxury-white">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-12">
            About
          </h2>

          {/* Bio text - Minimalist, Text-Only */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* [MANUAL FIX]: Write your minimalist bio here */}
            <p className="text-lg leading-relaxed text-luxury-charcoal">
              I'm ByCain, a developer and entrepreneur based in Toronto, focused on building 
              digital products that solve real problems.
            </p>

            <p className="text-lg leading-relaxed text-luxury-charcoal">
              I create premium templates, UI kits, and tools for developers and designers 
              who want to ship faster without compromising on quality.
            </p>

            <p className="text-lg leading-relaxed text-luxury-charcoal">
              Every product I build is crafted with attention to detail, modern design 
              principles, and a focus on delivering exceptional user experiences.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
