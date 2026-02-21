import React from 'react';
import './App.css';

function App() {
  // ========================================
  // 👇 CHANGE YOUR PROFILE INFO HERE
  // ========================================
  const profile = {
    name: "Alex Rivera",
    title: "Digital Creator & Entrepreneur",
    avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300&h=300&fit=crop",
    
    // Social Media Links - Change these URLs
    social: {
      instagram: "https://instagram.com/yourhandle",
      twitter: "https://twitter.com/yourhandle",
      youtube: "https://youtube.com/@yourchannel",
      email: "mailto:hello@youremail.com"
    },
    
    // Main Links - Add/Remove/Edit as needed
    links: [
      { emoji: "🌐", text: "Visit My Website", url: "https://yourwebsite.com" },
      { emoji: "🎥", text: "Watch My Latest Video", url: "https://youtube.com/watch?v=example" },
      { emoji: "🛍️", text: "Buy My Merch", url: "https://shop.yourstore.com" },
      { emoji: "💎", text: "Support Me on Patreon", url: "https://patreon.com/yourpage" },
      { emoji: "📅", text: "Book a 1:1 Call", url: "https://calendly.com/yourlink" },
      { emoji: "📧", text: "Join My Newsletter", url: "https://newsletter.yoursite.com" }
    ],
    
    footer: "© 2026 Alex Rivera • Made with BioLink Pro"
  };

  return (
    <div className="app-container">
      {/* Animated Gradient Background */}
      <div className="gradient-bg" />
      
      {/* Main Container */}
      <div className="min-h-screen flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-md space-y-6">
          
          {/* Profile Section */}
          <div className="text-center space-y-4">
            <img 
              src={profile.avatarUrl} 
              alt="Profile Picture" 
              className="w-32 h-32 rounded-full mx-auto object-cover avatar-glow border-4 border-white/30"
            />
            <h1 className="text-3xl font-bold text-white drop-shadow-lg">
              {profile.name}
            </h1>
            <p className="text-lg text-white/90 font-light">
              {profile.title}
            </p>
          </div>
          
          {/* Social Media Row */}
          <div className="flex justify-center gap-6">
            
            {/* Instagram */}
            <a href={profile.social.instagram} target="_blank" rel="noopener noreferrer" className="social-icon">
              <div className="glass-card w-14 h-14 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
            </a>
            
            {/* Twitter/X */}
            <a href={profile.social.twitter} target="_blank" rel="noopener noreferrer" className="social-icon">
              <div className="glass-card w-14 h-14 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
            </a>
            
            {/* YouTube */}
            <a href={profile.social.youtube} target="_blank" rel="noopener noreferrer" className="social-icon">
              <div className="glass-card w-14 h-14 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
            </a>
            
            {/* Email */}
            <a href={profile.social.email} className="social-icon">
              <div className="glass-card w-14 h-14 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
            </a>
            
          </div>
          
          {/* Links Stack */}
          <div className="space-y-4">
            {profile.links.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="block">
                <div className="glass-card rounded-2xl p-4 text-center cursor-pointer">
                  <p className="text-white font-semibold text-lg">
                    {link.emoji} {link.text}
                  </p>
                </div>
              </a>
            ))}
          </div>
          
          {/* Footer */}
          <div className="text-center pt-8 pb-4">
            <p className="text-white/60 text-sm">
              {profile.footer}
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;