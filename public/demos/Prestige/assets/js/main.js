/**
 * Prestige Estates - Main JavaScript Module
 * Form Validation, Mobile Menu Logic & Security Functions
 */

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initComponents();
    initSlider();
    initContactForm();
    initSmoothScroll();
});

/**
 * Initialize Navbar and Footer Components
 */
function initComponents() {
    // Check if Navbar class exists (components.js loaded)
    if (typeof Navbar !== 'undefined') {
        const navbar = new Navbar('navbar-container');
        navbar.render();
    }

    // Check if Footer class exists
    if (typeof Footer !== 'undefined') {
        const footer = new Footer('footer-container');
        footer.render();
    }
}

/**
 * XSS Sanitization Function
 * Prevents basic XSS attacks by sanitizing user inputs
 * @param {string} input - Raw user input
 * @returns {string} - Sanitized safe string
 */
function sanitizeInput(input) {
    if (typeof input !== 'string') {
        return '';
    }
    
    // Create a temporary element to use browser's built-in HTML escaping
    const tempDiv = document.createElement('div');
    tempDiv.textContent = input;
    let sanitized = tempDiv.innerHTML;
    
    // Additional sanitization for common XSS vectors
    const dangerousPatterns = [
        /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,  // Script tags
        /javascript:/gi,                                        // javascript: protocol
        /on\w+\s*=/gi,                                         // Event handlers
        /<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, // Iframes
        /<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi, // Objects
        /<embed\b[^<]*>/gi,                                     // Embeds
        /data:\s*text\/html/gi,                                // Data URIs with HTML
    ];
    
    dangerousPatterns.forEach(pattern => {
        sanitized = sanitized.replace(pattern, '');
    });
    
    // Remove remaining HTML tags (strict mode)
    sanitized = sanitized.replace(/<[^>]*>/g, '');
    
    // Trim whitespace
    sanitized = sanitized.trim();
    
    // Limit length to prevent buffer overflow attacks
    const MAX_LENGTH = 10000;
    if (sanitized.length > MAX_LENGTH) {
        sanitized = sanitized.substring(0, MAX_LENGTH);
    }
    
    return sanitized;
}

/**
 * Validate email format
 * @param {string} email - Email address to validate
 * @returns {boolean} - True if valid
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Validate phone number format
 * @param {string} phone - Phone number to validate
 * @returns {boolean} - True if valid
 */
function isValidPhone(phone) {
    // Allow various formats: +1 (555) 123-4567, 555-123-4567, etc.
    const phoneRegex = /^[\d\s\-\+\(\)]{10,20}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
}

/**
 * Initialize Contact Form Validation
 */
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Clear previous errors
        clearErrors();
        
        let isValid = true;
        
        // Get and sanitize form fields
        const firstName = sanitizeInput(document.getElementById('firstName').value);
        const lastName = sanitizeInput(document.getElementById('lastName').value);
        const email = sanitizeInput(document.getElementById('email').value);
        const phone = sanitizeInput(document.getElementById('phone').value);
        const message = sanitizeInput(document.getElementById('message').value);
        const privacy = document.getElementById('privacy').checked;
        
        // Validate First Name
        if (!firstName || firstName.length < 2) {
            showError('firstNameError', 'Please enter your first name');
            isValid = false;
        }
        
        // Validate Last Name
        if (!lastName || lastName.length < 2) {
            showError('lastNameError', 'Please enter your last name');
            isValid = false;
        }
        
        // Validate Email
        if (!email) {
            showError('emailError', 'Please enter your email address');
            isValid = false;
        } else if (!isValidEmail(email)) {
            showError('emailError', 'Please enter a valid email address');
            isValid = false;
        }
        
        // Validate Phone
        if (!phone) {
            showError('phoneError', 'Please enter your phone number');
            isValid = false;
        } else if (!isValidPhone(phone)) {
            showError('phoneError', 'Please enter a valid phone number');
            isValid = false;
        }
        
        // Validate Privacy Checkbox
        if (!privacy) {
            showError('privacyError', 'You must agree to the privacy policy');
            isValid = false;
        }
        
        // Check for suspicious content (potential injection attempts)
        const suspiciousPatterns = [
            /<script/i,
            /javascript:/i,
            /on\w+\s*=/i,
            /select\s+from/i,
            /drop\s+table/i,
            /insert\s+into/i,
            /union\s+select/i
        ];
        
        const allInputs = [firstName, lastName, email, phone, message].join(' ');
        suspiciousPatterns.forEach(pattern => {
            if (pattern.test(allInputs)) {
                isValid = false;
                showError('messageError', 'Invalid characters detected in your submission');
            }
        });
        
        if (isValid) {
            // Show loading state
            const submitBtn = form.querySelector('.form-submit');
            const submitText = submitBtn.querySelector('.submit-text');
            const submitLoading = submitBtn.querySelector('.submit-loading');
            
            submitBtn.disabled = true;
            submitText.style.display = 'none';
            submitLoading.style.display = 'inline';
            
            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                // Hide form and show success message
                const formElements = form.querySelectorAll('.form-group, .form-row, .btn');
                formElements.forEach(el => el.style.display = 'none');
                
                const successMessage = document.getElementById('formSuccess');
                if (successMessage) {
                    successMessage.style.display = 'block';
                }
                
                // Log sanitized data (for development)
                console.log('Form submitted with sanitized data:', {
                    firstName,
                    lastName,
                    email,
                    phone,
                    message: message.substring(0, 100) + (message.length > 100 ? '...' : '')
                });
            }, 1500);
        }
    });
    
    // Real-time validation on blur
    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            const errorId = this.id + 'Error';
            const errorElement = document.getElementById(errorId);
            if (errorElement && this.value.trim()) {
                // Clear error if field has content
                errorElement.textContent = '';
                this.classList.remove('error');
            }
        });
    });
}

/**
 * Show error message for a form field
 */
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
    }
    
    // Add error class to input
    const fieldId = elementId.replace('Error', '');
    const field = document.getElementById(fieldId);
    if (field) {
        field.classList.add('error');
    }
}

/**
 * Clear all form errors
 */
function clearErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(el => el.textContent = '');
    
    const inputElements = document.querySelectorAll('.form-input, .form-textarea, .form-select');
    inputElements.forEach(el => el.classList.remove('error'));
}

/**
 * Initialize Hero Slider
 */
function initSlider() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dot');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    
    if (!slides.length) return;
    
    let currentSlide = 0;
    let slideInterval;
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (dots[i]) dots[i].classList.remove('active');
        });
        
        slides[index].classList.add('active');
        if (dots[index]) dots[index].classList.add('active');
        currentSlide = index;
    }
    
    function nextSlide() {
        const next = (currentSlide + 1) % slides.length;
        showSlide(next);
    }
    
    function prevSlide() {
        const prev = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(prev);
    }
    
    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            resetInterval();
        });
    });
    
    // Arrow navigation
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetInterval();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetInterval();
        });
    }
    
    // Auto-advance slides
    function startInterval() {
        slideInterval = setInterval(nextSlide, 6000);
    }
    
    function resetInterval() {
        clearInterval(slideInterval);
        startInterval();
    }
    
    startInterval();
}

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Utility: Debounce function
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
 * Utility: Lazy load images
 */
function initLazyLoad() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
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
        
        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    }
}

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        sanitizeInput,
        isValidEmail,
        isValidPhone
    };
}
