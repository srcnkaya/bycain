import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // [MANUAL FIX]: Update all social links and email with your actual information
  const socialLinks = [
    {
      name: "Email",
      icon: <Mail className="w-6 h-6" />,
      link: "mailto:your.email@example.com", // Update with your email
      handle: "your.email@example.com"
    },
    {
      name: "GitHub",
      icon: <Github className="w-6 h-6" />,
      link: "https://github.com/yourusername", // Update with your GitHub
      handle: "@yourusername"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
      link: "https://linkedin.com/in/yourprofile", // Update with your LinkedIn
      handle: "/yourprofile"
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-6 h-6" />,
      link: "https://twitter.com/yourusername", // Update with your Twitter
      handle: "@yourusername"
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-6 h-6" />,
      link: "https://instagram.com/yourusername", // Update with your Instagram
      handle: "@yourusername"
    },
  ];

  return (
    <section id="contact" className="section-padding bg-luxury-black text-luxury-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-center">
            Let's Connect
          </h2>
          
          <p className="text-center text-luxury-platinum/70 mb-16 max-w-2xl mx-auto text-lg">
            {/* [MANUAL FIX]: Update your contact section intro text */}
            Open to collaborations, opportunities, and interesting conversations.
            Reach out through any channel below.
          </p>
        </motion.div>

        {/* Social links grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
              className="border border-luxury-gray rounded-2xl p-6 hover:bg-luxury-charcoal hover:border-luxury-slate transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="text-luxury-slate group-hover:text-luxury-platinum transition-colors">
                  {social.icon}
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">{social.name}</h3>
                  <p className="text-sm text-luxury-platinum/70 group-hover:text-luxury-platinum transition-colors">
                    {social.handle}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center pt-12 border-t border-luxury-gray"
        >
          <p className="text-luxury-platinum/50 text-sm">
            © {new Date().getFullYear()} ByCain. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
