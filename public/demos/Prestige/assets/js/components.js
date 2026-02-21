/**
 * Prestige Estates - Components Module
 * OOP Style Navbar and Footer Classes
 */

class Navbar {
    constructor(containerId, options = {}) {
        this.container = document.getElementById(containerId);
        this.options = {
            logoText: 'Prestige',
            logoLink: 'index.html',
            phoneNumber: '+1 (310) 555-1234',
            links: [
                { text: 'Home', href: 'index.html' },
                { text: 'Listings', href: 'listings.html' },
                { text: 'Contact', href: 'contact.html' }
            ],
            ...options
        };
        this.isScrolled = false;
        this.mobileMenuOpen = false;
    }

    render() {
        if (!this.container) return;
        
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        const navbarHTML = `
            <nav class="navbar" id="navbar">
                <div class="navbar-container">
                    <a href="${this.options.logoLink}" class="navbar-logo">
                        <span class="logo-icon">&#9733;</span>
                        <span class="logo-text">${this.options.logoText}</span>
                    </a>
                    
                    <button class="mobile-menu-toggle" id="mobileMenuToggle" aria-label="Toggle menu">
                        <span class="hamburger-line"></span>
                        <span class="hamburger-line"></span>
                        <span class="hamburger-line"></span>
                    </button>
                    
                    <div class="navbar-menu" id="navbarMenu">
                        <ul class="navbar-links">
                            ${this.options.links.map(link => `
                                <li class="navbar-item">
                                    <a href="${link.href}" class="navbar-link ${currentPage === link.href ? 'active' : ''}">
                                        ${link.text}
                                    </a>
                                </li>
                            `).join('')}
                        </ul>
                        <a href="tel:${this.options.phoneNumber.replace(/\s/g, '')}" class="btn btn-gold navbar-cta">
                            <span class="cta-icon">&#9742;</span>
                            <span class="cta-text">Call Agent</span>
                        </a>
                    </div>
                </div>
            </nav>
            <div class="navbar-spacer"></div>
        `;
        
        this.container.innerHTML = navbarHTML;
        this.attachEventListeners();
    }

    attachEventListeners() {
        // Scroll effect
        window.addEventListener('scroll', () => this.handleScroll());
        
        // Mobile menu toggle
        const mobileToggle = document.getElementById('mobileMenuToggle');
        const navbarMenu = document.getElementById('navbarMenu');
        
        if (mobileToggle) {
            mobileToggle.addEventListener('click', () => {
                this.mobileMenuOpen = !this.mobileMenuOpen;
                mobileToggle.classList.toggle('active');
                navbarMenu.classList.toggle('active');
                document.body.classList.toggle('menu-open');
            });
        }

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.navbar-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (this.mobileMenuOpen) {
                    this.mobileMenuOpen = false;
                    mobileToggle.classList.remove('active');
                    navbarMenu.classList.remove('active');
                    document.body.classList.remove('menu-open');
                }
            });
        });
    }

    handleScroll() {
        const navbar = document.getElementById('navbar');
        if (!navbar) return;

        const scrollY = window.scrollY;
        const threshold = 50;

        if (scrollY > threshold && !this.isScrolled) {
            this.isScrolled = true;
            navbar.classList.add('scrolled');
        } else if (scrollY <= threshold && this.isScrolled) {
            this.isScrolled = false;
            navbar.classList.remove('scrolled');
        }
    }
}

class Footer {
    constructor(containerId, options = {}) {
        this.container = document.getElementById(containerId);
        this.options = {
            companyName: 'Prestige Estates',
            tagline: 'Luxury Real Estate Specialists',
            email: 'estates@prestige.com',
            phone: '+1 (310) 555-1234',
            address: '9876 Wilshire Boulevard, Beverly Hills, CA 90210',
            socialLinks: [
                { platform: 'Instagram', icon: '&#9733;', url: '#' },
                { platform: 'LinkedIn', icon: '&#9733;', url: '#' },
                { platform: 'Facebook', icon: '&#9733;', url: '#' }
            ],
            quickLinks: [
                { text: 'Home', href: 'index.html' },
                { text: 'Listings', href: 'listings.html' },
                { text: 'Contact', href: 'contact.html' },
                { text: 'Privacy Policy', href: 'privacy-policy.html' },
                { text: 'Terms of Service', href: 'terms-of-service.html' }
            ],
            disclaimer: 'All information deemed reliable but not guaranteed. Prices and availability subject to change.',
            copyrightYear: new Date().getFullYear(),
            ...options
        };
    }

    render() {
        if (!this.container) return;

        const footerHTML = `
            <footer class="footer">
                <div class="footer-main">
                    <div class="container">
                        <div class="footer-grid">
                            <!-- Brand Column -->
                            <div class="footer-brand">
                                <a href="index.html" class="footer-logo">
                                    <span class="logo-icon">&#9733;</span>
                                    <span class="logo-text">${this.options.companyName}</span>
                                </a>
                                <p class="footer-tagline">${this.options.tagline}</p>
                                <div class="footer-contact">
                                    <p><a href="tel:${this.options.phone.replace(/\s/g, '')}">${this.options.phone}</a></p>
                                    <p><a href="mailto:${this.options.email}">${this.options.email}</a></p>
                                </div>
                                <div class="social-links">
                                    ${this.options.socialLinks.map(social => `
                                        <a href="${social.url}" class="social-link" aria-label="${social.platform}">
                                            ${social.icon}
                                        </a>
                                    `).join('')}
                                </div>
                            </div>

                            <!-- Quick Links -->
                            <div class="footer-links-column">
                                <h4 class="footer-heading">Quick Links</h4>
                                <ul class="footer-links">
                                    ${this.options.quickLinks.map(link => `
                                        <li><a href="${link.href}">${link.text}</a></li>
                                    `).join('')}
                                </ul>
                            </div>

                            <!-- Office Locations -->
                            <div class="footer-links-column">
                                <h4 class="footer-heading">Our Offices</h4>
                                <ul class="footer-links">
                                    <li>Beverly Hills</li>
                                    <li>New York</li>
                                    <li>London</li>
                                    <li>Dubai</li>
                                    <li>Monaco</li>
                                    <li>Singapore</li>
                                </ul>
                            </div>

                            <!-- Newsletter -->
                            <div class="footer-newsletter">
                                <h4 class="footer-heading">Stay Informed</h4>
                                <p>Receive exclusive listings and market insights.</p>
                                <form class="footer-form" onsubmit="return false;">
                                    <input type="email" placeholder="Your email" class="footer-input">
                                    <button type="submit" class="btn btn-gold btn-small">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="footer-bottom">
                    <div class="container">
                        <div class="footer-bottom-content">
                            <p class="copyright">
                                &copy; ${this.options.copyrightYear} ${this.options.companyName}. All rights reserved.
                            </p>
                            <p class="disclaimer">${this.options.disclaimer}</p>
                        </div>
                    </div>
                </div>
            </footer>
        `;

        this.container.innerHTML = footerHTML;
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Navbar, Footer };
}
