/**
 * BarberKing - Main JavaScript File
 * Handles all interactive functionality
 */

// ===========================================
// WAIT FOR DOM TO LOAD
// ===========================================
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all modules
    initMobileMenu();
    initNavbarScroll();
    initSmoothScroll();
    initGalleryModal();
    initScrollAnimations();
    populateContentFromConfig();
    
});

// ===========================================
// MOBILE MENU FUNCTIONALITY
// Toggles the mobile navigation menu
// ===========================================
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (!mobileMenuBtn || !mobileMenu) return;
    
    // Toggle menu on button click
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden-menu');
        
        // Change icon between bars and X
        const icon = mobileMenuBtn.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        }
    });
    
    // Close menu when clicking any link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden-menu');
            
            // Reset icon to bars
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = mobileMenu.contains(event.target);
        const isClickOnButton = mobileMenuBtn.contains(event.target);
        
        if (!isClickInsideMenu && !isClickOnButton && !mobileMenu.classList.contains('hidden-menu')) {
            mobileMenu.classList.add('hidden-menu');
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });
}

// ===========================================
// NAVBAR SCROLL EFFECT
// Changes navbar appearance on scroll
// ===========================================
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            // Scrolled down: add shadow and solid background
            navbar.classList.add('shadow-lg', 'bg-barber-dark');
            navbar.classList.remove('bg-barber-dark/95');
        } else {
            // At top: remove shadow and use transparent background
            navbar.classList.remove('shadow-lg', 'bg-barber-dark');
            navbar.classList.add('bg-barber-dark/95');
        }
    });
}

// ===========================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// Makes navigation smooth when clicking internal links
// ===========================================
function initSmoothScroll() {
    // Select all links that start with #
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Skip empty anchors
            if (targetId === '#' || targetId === '#!') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                // Smooth scroll to target
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update URL without jumping
                history.pushState(null, null, targetId);
            }
        });
    });
}

// ===========================================
// GALLERY IMAGE MODAL
// Click any gallery image to view it fullscreen
// ===========================================
function initGalleryModal() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(function(item) {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            if (!img) return;
            
            const imgSrc = img.getAttribute('src');
            const imgAlt = img.getAttribute('alt') || 'Gallery Image';
            
            // Create modal overlay
            const modal = document.createElement('div');
            modal.className = 'fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 cursor-pointer animate-fadeIn';
            modal.setAttribute('role', 'dialog');
            modal.setAttribute('aria-label', 'Image preview');
            
            modal.innerHTML = `
                <div class="relative max-w-6xl w-full">
                    <img src="${imgSrc}" 
                         alt="${imgAlt}" 
                         class="max-w-full max-h-[90vh] mx-auto rounded-lg shadow-2xl">
                    <button class="absolute top-4 right-4 text-white text-4xl hover:text-barber-gold transition-colors focus:outline-none focus:ring-2 focus:ring-barber-gold rounded-full w-12 h-12 flex items-center justify-center bg-black/50"
                            aria-label="Close preview">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            `;
            
            // Add to page
            document.body.appendChild(modal);
            document.body.style.overflow = 'hidden';
            
            // Close modal on click anywhere
            modal.addEventListener('click', function() {
                modal.remove();
                document.body.style.overflow = '';
            });
            
            // Close on ESC key
            const escHandler = function(e) {
                if (e.key === 'Escape') {
                    modal.remove();
                    document.body.style.overflow = '';
                    document.removeEventListener('keydown', escHandler);
                }
            };
            document.addEventListener('keydown', escHandler);
        });
    });
}

// ===========================================
// SCROLL ANIMATIONS
// Fade in elements as they enter the viewport
// ===========================================
function initScrollAnimations() {
    // Set up intersection observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15  // Trigger when 15% of element is visible
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                // Element is visible, add animation classes
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
                
                // Stop observing this element (animate only once)
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe service cards and gallery items
    const animatedElements = document.querySelectorAll('.service-card, .gallery-item, .animate-on-scroll');
    
    animatedElements.forEach(function(element) {
        // Set initial state
        element.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700');
        // Start observing
        observer.observe(element);
    });
}

// ===========================================
// POPULATE CONTENT FROM CONFIG
// Dynamically updates page content based on config.js
// ===========================================
function populateContentFromConfig() {
    // Only run if CONFIG is available
    if (typeof CONFIG === 'undefined') {
        console.warn('CONFIG not found. Using default content.');
        return;
    }
    
    try {
        // Update business name in navbar and footer
        updateBusinessName();
        
        // Update contact information
        updateContactInfo();
        
        // Update social media links
        updateSocialLinks();
        
        // Update services (if needed dynamically)
        // Note: Services are hard-coded in HTML for better SEO
        // This function can be expanded to generate them dynamically
        
    } catch (error) {
        console.error('Error populating content from config:', error);
    }
}

// ===========================================
// UPDATE BUSINESS NAME
// ===========================================
function updateBusinessName() {
    if (!CONFIG.business) return;
    
    // Update all elements with class 'business-name'
    const nameElements = document.querySelectorAll('.business-name');
    nameElements.forEach(function(el) {
        el.textContent = CONFIG.business.name;
    });
}

// ===========================================
// UPDATE CONTACT INFORMATION
// ===========================================
function updateContactInfo() {
    if (!CONFIG.contact) return;
    
    // Phone
    const phoneElements = document.querySelectorAll('[data-phone]');
    phoneElements.forEach(function(el) {
        el.textContent = CONFIG.contact.phone;
        if (el.tagName === 'A') {
            el.setAttribute('href', `tel:${CONFIG.contact.phoneLink}`);
        }
    });
    
    // Email
    const emailElements = document.querySelectorAll('[data-email]');
    emailElements.forEach(function(el) {
        el.textContent = CONFIG.contact.email;
        if (el.tagName === 'A') {
            el.setAttribute('href', `mailto:${CONFIG.contact.email}`);
        }
    });
}

// ===========================================
// UPDATE SOCIAL MEDIA LINKS
// ===========================================
function updateSocialLinks() {
    if (!CONFIG.social) return;
    
    const socialLinks = {
        'facebook': CONFIG.social.facebook,
        'instagram': CONFIG.social.instagram,
        'twitter': CONFIG.social.twitter,
        'youtube': CONFIG.social.youtube
    };
    
    Object.keys(socialLinks).forEach(function(platform) {
        const link = document.querySelector(`[data-social="${platform}"]`);
        if (link) {
            link.setAttribute('href', socialLinks[platform]);
        }
    });
}

// ===========================================
// UTILITY: DEBOUNCE FUNCTION
// Limits how often a function can run (useful for scroll/resize events)
// ===========================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = function() {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===========================================
// HANDLE FORM SUBMISSIONS (if you add a contact form)
// ===========================================
function handleContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        console.log('Form submitted:', data);
        
        // TODO: Send data to your backend or email service
        // Example: fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })
        
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        form.reset();
    });
}

// ===========================================
// PERFORMANCE: LAZY LOAD IMAGES (optional enhancement)
// ===========================================
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        const lazyImages = document.querySelectorAll('img.lazy');
        lazyImages.forEach(function(img) {
            imageObserver.observe(img);
        });
    }
}

// ===========================================
// CONSOLE MESSAGE (optional branding)
// ===========================================
console.log('%cBarberKing Template', 'color: #D4AF37; font-size: 20px; font-weight: bold;');
console.log('%cCustomize this template in js/config.js', 'color: #888; font-size: 12px;');
