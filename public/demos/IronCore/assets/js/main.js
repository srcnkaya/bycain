/**
 * IronCore Athletics - Main JavaScript
 * ============================================
 * This file handles:
 * 1. Mobile menu toggle (hamburger icon)
 * 2. Navbar scroll effects (background change)
 * 3. Smooth scrolling for anchor links
 * 4. Active section highlighting
 * 5. Scroll reveal animations
 * 
 * No external libraries needed - vanilla JavaScript!
 */

// ============================================
// WAIT FOR PAGE TO LOAD
// ============================================
// DOMContentLoaded = fires when HTML is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // GET HTML ELEMENTS
    // ============================================
    // We "grab" elements from HTML so we can manipulate them
    // getElementById: finds element with specific ID
    // querySelectorAll: finds all elements matching a CSS selector
    //
    // NAVBAR: Fixed header at top of page
    const navbar = document.getElementById('navbar');
    // MOBILE MENU BUTTON: Hamburger icon (3 lines)
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    // MOBILE MENU: Hidden menu that slides down
    const mobileMenu = document.getElementById('mobile-menu');
    // MOBILE LINKS: Menu items in mobile dropdown
    const mobileLinks = document.querySelectorAll('.mobile-link');
    // NAV LINKS: Desktop navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    // ============================================
    // MOBILE MENU TOGGLE FUNCTION
    // ============================================
    // This function opens/closes the mobile menu
    // Called when hamburger button is clicked
    function toggleMobileMenu() {
        // Check if menu is currently open
        // classList.contains('active') returns true/false
        const isOpen = mobileMenu.classList.contains('active');
        
        if (isOpen) {
            // ========== CLOSE MENU ==========
            // 1. Remove 'active' class (triggers CSS transition)
            mobileMenu.classList.remove('active');
            // 2. Add 'hidden' class (display: none after animation)
            mobileMenu.classList.add('hidden');
            // 3. Remove active state from button
            mobileMenuBtn.classList.remove('active');
            // 4. Change icon back to hamburger (3 lines)
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars text-2xl"></i>';
            // 5. Update accessibility attribute for screen readers
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        } else {
            // ========== OPEN MENU ==========
            // 1. Remove hidden so menu is visible
            mobileMenu.classList.remove('hidden');
            // 2. Small delay (10ms) allows browser to render before animation
            //    This ensures the transition animation plays
            setTimeout(() => {
                mobileMenu.classList.add('active');
            }, 10);
            // 3. Add active state to button (for styling)
            mobileMenuBtn.classList.add('active');
            // 4. Change icon to X (close symbol)
            mobileMenuBtn.innerHTML = '<i class="fas fa-times text-2xl"></i>';
            // 5. Update accessibility attribute
            mobileMenuBtn.setAttribute('aria-expanded', 'true');
        }
    }
    
    // Mobile menu button click
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            toggleMobileMenu();
        });
    }
    
    // Close mobile menu when clicking a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            toggleMobileMenu();
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (mobileMenu && mobileMenu.classList.contains('active')) {
            if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                toggleMobileMenu();
            }
        }
    });
    
    // ============================================
    // NAVBAR SCROLL EFFECT
    // ============================================
    // Changes navbar appearance when user scrolls down
    // 1. Adds background color when scrolled past 50px
    // 2. Highlights the nav link for current section
    function handleScroll() {
        // window.scrollY = how many pixels user has scrolled down
        const scrollY = window.scrollY;
        
        // If scrolled more than 50 pixels down...
        if (scrollY > 50) {
            // Add 'scrolled' class (see style.css for styling)
            // This adds: dark background, blur effect, shadow
            navbar.classList.add('scrolled');
        } else {
            // At top of page - remove background
            navbar.classList.remove('scrolled');
        }
        
        // Update which nav link is highlighted
        highlightActiveSection();
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // ============================================
    // Active Section Highlighting
    // ============================================
    function highlightActiveSection() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                // Remove active class from all nav links
                navLinks.forEach(link => {
                    link.classList.remove('text-cyan-accent');
                    link.classList.add('text-gray-300');
                });
                
                // Add active class to current nav link
                const activeLink = document.querySelector(`a[href="#${sectionId}"]`);
                if (activeLink && activeLink.classList.contains('nav-link')) {
                    activeLink.classList.remove('text-gray-300');
                    activeLink.classList.add('text-cyan-accent');
                }
            }
        });
    }
    
    // ============================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ============================================
    // Makes clicking navigation links smooth instead of jumping
    // Example: Click "Pricing" → smoothly scrolls to pricing section
    
    // Find all links that start with # (anchor links)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        // Add click event listener to each link
        anchor.addEventListener('click', function(e) {
            // Get the target ID (e.g., "#pricing")
            const targetId = this.getAttribute('href');
            
            // Skip if link is just "#" with nothing after
            if (targetId === '#') return;
            
            // Find the target element on the page
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Prevent default jump behavior
                e.preventDefault();
                
                // Get navbar height so content isn't hidden behind it
                const navbarHeight = navbar.offsetHeight;
                
                // Calculate scroll position:
                // Element's top position - navbar height = scroll to just above navbar
                const targetPosition = targetElement.offsetTop - navbarHeight;
                
                // Perform smooth scroll
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'  // Smooth animation instead of instant jump
                });
            }
        });
    });
    
    // ============================================
    // Scroll Reveal Animation
    // ============================================
    const revealElements = document.querySelectorAll('.program-card, .benefit-item, .trainer-card');
    
    function revealOnScroll() {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('revealed');
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Initialize reveal elements
    revealElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    window.addEventListener('scroll', revealOnScroll, { passive: true });
    revealOnScroll(); // Check on load
    
    // ============================================
    // Parallax Effect for Hero
    // ============================================
    const hero = document.getElementById('hero');
    
    function parallaxEffect() {
        if (hero) {
            const scrolled = window.scrollY;
            const rate = scrolled * 0.5;
            
            if (scrolled < window.innerHeight) {
                hero.style.backgroundPositionY = `${rate}px`;
            }
        }
    }
    
    window.addEventListener('scroll', parallaxEffect, { passive: true });
    
    // ============================================
    // Button Click Feedback
    // ============================================
    const buttons = document.querySelectorAll('.btn-primary, a[href="#contact"]');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.background = 'rgba(255, 255, 255, 0.3)';
            ripple.style.borderRadius = '50%';
            ripple.style.transform = 'translate(-50%, -50%)';
            ripple.style.pointerEvents = 'none';
            ripple.style.animation = 'ripple 0.6s ease-out';
            
            const rect = this.getBoundingClientRect();
            ripple.style.left = `${e.clientX - rect.left}px`;
            ripple.style.top = `${e.clientY - rect.top}px`;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
    
    // Add ripple keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                width: 200px;
                height: 200px;
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // ============================================
    // Form Validation (if forms exist)
    // ============================================
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            let isValid = true;
            const requiredFields = form.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('border-red-500');
                } else {
                    field.classList.remove('border-red-500');
                }
            });
            
            if (!isValid) {
                e.preventDefault();
                alert('Please fill in all required fields.');
            }
        });
    });
    
    // ============================================
    // Image Lazy Loading
    // ============================================
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for browsers without IntersectionObserver
        images.forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    }
    
    // ============================================
    // Keyboard Navigation
    // ============================================
    document.addEventListener('keydown', function(e) {
        // ESC to close mobile menu
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            toggleMobileMenu();
        }
    });
    
    // ============================================
    // Performance: Disable animations on touch devices
    // if reduced motion is preferred
    // ============================================
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (prefersReducedMotion.matches) {
        document.documentElement.style.setProperty('--animation-duration', '0.01ms');
        revealElements.forEach(element => {
            element.style.opacity = '1';
            element.style.transform = 'none';
        });
    }
    
    // ============================================
    // Console Branding
    // ============================================
    console.log(
        '%c IronCore Athletics ',
        'background: #06b6d4; color: #0f172a; font-size: 20px; font-weight: bold; padding: 10px;'
    );
    console.log(
        '%c Toronto\'s Elite Private Training Facility ',
        'color: #06b6d4; font-size: 14px;'
    );
});

// ============================================
// Utility Functions
// ============================================

/**
 * Debounce function for performance optimization
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Throttle function for scroll events
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Export for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { debounce, throttle };}