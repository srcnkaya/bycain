/**
 * gallery.js - Gallery and Lightbox Management
 * ARTISTRY Artist Portfolio
 */

class Gallery {
    constructor() {
        // Lightbox elements
        this.lightbox = document.getElementById('lightbox');
        this.lightboxImg = document.getElementById('lightbox-img');
        this.lightboxCaption = document.getElementById('lightbox-caption');
        this.closeBtn = document.querySelector('.lightbox-close');
        
        // Initialize event listeners
        this.init();
    }

    init() {
        // Add click events to all gallery images
        const galleryImages = document.querySelectorAll('.masonry-item img');
        
        galleryImages.forEach(img => {
            img.addEventListener('click', () => this.openLightbox(img));
        });
        
        // Close button event
        if (this.closeBtn) {
            this.closeBtn.addEventListener('click', () => this.closeLightbox());
        }
        
        // Close on background click
        if (this.lightbox) {
            this.lightbox.addEventListener('click', (e) => {
                if (e.target === this.lightbox) {
                    this.closeLightbox();
                }
            });
        }
        
        // Close on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.lightbox.style.display === 'flex') {
                this.closeLightbox();
            }
        });
    }

    openLightbox(imgElement) {
        if (!this.lightbox) return;
        
        // Load image into lightbox
        this.lightboxImg.src = imgElement.src;
        this.lightboxCaption.textContent = imgElement.alt || 'Artwork';
        
        // Show lightbox
        this.lightbox.style.display = 'flex';
        
        // Lock background scroll
        document.body.style.overflow = 'hidden';
    }

    closeLightbox() {
        if (!this.lightbox) return;
        
        // Hide lightbox
        this.lightbox.style.display = 'none';
        
        // Clear image
        this.lightboxImg.src = '';
        
        // Unlock background scroll
        document.body.style.overflow = 'auto';
    }
}

// Initialize Gallery
document.addEventListener('DOMContentLoaded', () => {
    new Gallery();
});
