/**
 * components.js - Reusable UI Components
 * ARTISTRY Artist Portfolio
 */

// Navbar Component
class Navbar {
    constructor() {
        this.currentPage = window.location.pathname.split('/').pop() || 'index.html';
    }

    render() {
        return `
            <nav class="navbar">
                <div class="nav-container">
                    <a href="index.html" class="nav-logo">ARTISTRY</a>
                    
                    <ul class="nav-menu">
                        <li>
                            <a href="index.html" class="nav-link ${this.isActive('index.html') ? 'active' : ''}">
                                Gallery
                            </a>
                        </li>
                        <li>
                            <a href="about.html" class="nav-link ${this.isActive('about.html') ? 'active' : ''}">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="contact.html" class="nav-link ${this.isActive('contact.html') ? 'active' : ''}">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        `;
    }

    isActive(page) {
        return this.currentPage === page || (this.currentPage === '' && page === 'index.html');
    }

    inject() {
        const container = document.getElementById('navbar-container');
        if (container) {
            container.innerHTML = this.render();
        }
    }
}

// Footer Component
class Footer {
    constructor() {
        this.socialLinks = [
            {
                platform: 'Instagram',
                url: 'https://instagram.com/youraccount',
                icon: '📷'
            },
            {
                platform: 'Behance',
                url: 'https://behance.net/youraccount',
                icon: '🎨'
            },
            {
                platform: 'Pinterest',
                url: 'https://pinterest.com/youraccount',
                icon: '📌'
            }
        ];
    }

    render() {
        const socialHTML = this.socialLinks.map(link => 
            `<a href="${link.url}" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="social-link" 
                title="${link.platform}">
                <span>${link.icon}</span>
            </a>`
        ).join('');

        return `
            <footer class="footer">
                <div class="footer-container">
                    <div class="footer-social">
                        ${socialHTML}
                    </div>
                    <p class="footer-text">Created with Passion</p>
                    <p class="footer-copyright">
                        © ${new Date().getFullYear()} ARTISTRY. All rights reserved.
                    </p>
                </div>
            </footer>
        `;
    }

    inject() {
        const container = document.getElementById('footer-container');
        if (container) {
            container.innerHTML = this.render();
        }
    }
}

// Initialize Components
document.addEventListener('DOMContentLoaded', () => {
    const navbar = new Navbar();
    navbar.inject();
    
    const footer = new Footer();
    footer.inject();
});
