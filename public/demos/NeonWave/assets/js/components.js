// ==========================================
// NEONWAVE AUDIO - Dynamic Components
// Injects Navbar & Footer across all pages
// ==========================================

class NeonWaveComponents {
    constructor() {
        this.init();
    }

    init() {
        this.injectNavbar();
        this.injectFooter();
        this.setActiveNav();
    }

    injectNavbar() {
        const navHTML = `
            <nav class="navbar">
                <div class="navbar-container">
                    <a href="index.html" class="logo">NEONWAVE</a>
                    <ul class="nav-links">
                        <li><a href="index.html" data-page="index">Home</a></li>
                        <li><a href="beats.html" data-page="beats">Beats</a></li>
                        <li><a href="contact.html" data-page="contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
        `;

        // Insert navbar at the beginning of body
        document.body.insertAdjacentHTML('afterbegin', navHTML);
    }

    injectFooter() {
        const footerHTML = `
            <footer class="footer">
                <div class="footer-content">
                    <div class="footer-section">
                        <h3>NeonWave Audio</h3>
                        <p>Premium beats for artists, producers, and content creators. Elevate your sound with our cyberpunk-inspired instrumentals.</p>
                    </div>
                    
                    <div class="footer-section">
                        <h3>Quick Links</h3>
                        <ul style="list-style: none; line-height: 2;">
                            <li><a href="index.html" style="color: #b3b3b3; text-decoration: none;">Home</a></li>
                            <li><a href="beats.html" style="color: #b3b3b3; text-decoration: none;">Browse Beats</a></li>
                            <li><a href="contact.html" style="color: #b3b3b3; text-decoration: none;">Collaborate</a></li>
                            <li><a href="#" style="color: #b3b3b3; text-decoration: none;">Licensing Info</a></li>
                        </ul>
                    </div>
                    
                    <div class="footer-section">
                        <h3>Connect</h3>
                        <div class="social-links">
                            <a href="#" class="social-icon" aria-label="Instagram">IG</a>
                            <a href="#" class="social-icon" aria-label="Twitter">TW</a>
                            <a href="#" class="social-icon" aria-label="YouTube">YT</a>
                            <a href="#" class="social-icon" aria-label="SoundCloud">SC</a>
                        </div>
                        <p style="margin-top: 1rem; color: #666; font-size: 0.9rem;">
                            📧 info@neonwaveaudio.com
                        </p>
                    </div>
                </div>
                
                <div class="copyright">
                    <p>&copy; 2026 NeonWave Audio. All Rights Reserved. | Designed for Music Producers</p>
                </div>
            </footer>
        `;

        // Append footer at the end of body
        document.body.insertAdjacentHTML('beforeend', footerHTML);
    }

    setActiveNav() {
        // Get current page filename
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        // Find and activate the matching nav link
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach(link => {
            const linkPage = link.getAttribute('data-page');
            if (currentPage.includes(linkPage) || (currentPage === '' && linkPage === 'index')) {
                link.classList.add('active');
            }
        });
    }
}

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new NeonWaveComponents();
});
