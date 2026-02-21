import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

// Custom Telegram Icon Component
const TelegramIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-8.609 3.33c-2.068.8-4.133 1.598-5.724 2.21a405.15 405.15 0 0 1-2.849 1.09c-.42.147-.99.332-1.473.901-.728.968.193 1.798.919 2.286 1.61.626 3.225 1.241 4.84 1.858.224.86.439 1.718.67 2.574.174.654.729 1.17 1.416 1.164.39-.018.77-.21 1.07-.474 1.007-.88 2.016-1.757 3.025-2.635 1.407 1.177 2.817 2.355 4.227 3.533.448.318 1.013.465 1.578.436 1.124-.045 1.653-.98 1.902-2.033.777-3.265 1.556-6.532 2.335-9.797.312-1.31.62-2.619.927-3.928.248-1.06-.102-2.247-1.232-2.73z" />
    <path d="M9.37 11.947 11 16l2-5.5" />
  </svg>
);

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // [MANUAL FIX]: Update all social links and email with your actual information
  const socialLinks = [
    {
      name: "Email",
      icon: <Mail className="w-6 h-6" />,
      link: "mailto:info@bycain.com", // Update with your email
      handle: "info@bycain.com"
    },
    /*{
      name: "GitHub",
      icon: <Github className="w-6 h-6" />,
      link: "https://github.com/yourusername", // Update with your GitHub
      handle: "@yourusername"
    },*/
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
      link: "https://www.linkedin.com/in/bycain/", // Update with your LinkedIn
      handle: "ByCain"
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-6 h-6" />,
      link: "https://twitter.com/heyimcain", // Update with your Twitter
      handle: "@heyimcain"
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-6 h-6" />,
      link: "https://instagram.com/heyimcain", // Update with your Instagram
      handle: "@heyimcain"
    },
     {
      name: "Telegram",
      icon: <TelegramIcon className="w-6 h-6" />,
      link: "https://t.me/heyimcain",
      handle: "@heyimcain"
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
