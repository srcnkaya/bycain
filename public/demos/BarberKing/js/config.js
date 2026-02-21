/**
 * BarberKing Configuration File
 * 
 * CUSTOMIZE YOUR TEMPLATE HERE
 * This file contains all the key settings you need to personalize your website.
 * Simply update the values below to match your business information.
 */

const CONFIG = {
    
    // ===========================================
    // BUSINESS INFORMATION
    // ===========================================
    business: {
        name: 'BarberKing',                     // CHANGE: Your barbershop name
        tagline: 'Premium Barber Shop',        // CHANGE: Your tagline/slogan
        description: 'Premium barbershop providing luxury grooming services for the modern gentleman since 2015.',  // CHANGE: About your business
        foundedYear: 2015                       // CHANGE: Year your business was established
    },

    // ===========================================
    // CONTACT INFORMATION
    // ===========================================
    contact: {
        address: {
            street: '123 King Street West',     // CHANGE: Street address
            city: 'Toronto',                    // CHANGE: City
            state: 'ON',                        // CHANGE: State/Province
            zip: 'M5H 2Y4',                     // CHANGE: ZIP/Postal code
            country: 'Canada'                   // CHANGE: Country
        },
        phone: '(416) 555-1234',               // CHANGE: Phone number (display format)
        phoneLink: '+14165551234',             // CHANGE: Phone number (tel: link format, no spaces/dashes)
        email: 'info@barberking.com',          // CHANGE: Email address
        
        // Business Hours
        hours: {
            weekdays: '9:00 AM - 8:00 PM',     // CHANGE: Monday-Friday hours
            saturday: '10:00 AM - 6:00 PM',    // CHANGE: Saturday hours
            sunday: 'Closed'                    // CHANGE: Sunday hours (or set actual hours)
        }
    },

    // ===========================================
    // SOCIAL MEDIA LINKS
    // ===========================================
    social: {
        facebook: '#',      // CHANGE: Full Facebook page URL (e.g., 'https://facebook.com/yourpage')
        instagram: '#',     // CHANGE: Full Instagram profile URL (e.g., 'https://instagram.com/yourprofile')
        twitter: '#',       // CHANGE: Full Twitter/X profile URL (e.g., 'https://twitter.com/yourprofile')
        youtube: '#'        // CHANGE: Full YouTube channel URL (e.g., 'https://youtube.com/@yourchannel')
    },

    // ===========================================
    // SERVICES & PRICING
    // ===========================================
    services: {
        // Main Services (displayed as large cards)
        main: [
            {
                icon: 'fa-scissors',                    // CHANGE: Font Awesome icon class (without 'fas')
                name: 'Classic Haircut',                // CHANGE: Service name
                description: 'Precision haircut tailored to your face shape and style preference', // CHANGE: Service description
                price: '$30'                            // CHANGE: Service price
            },
            {
                icon: 'fa-face-smile',
                name: 'Beard Trim & Shape',
                description: 'Expert beard trimming and styling for a sharp, refined look',
                price: '$15'
            },
            {
                icon: 'fa-star',
                name: 'Royal Shave',
                description: 'Traditional hot towel shave with premium products and techniques',
                price: '$40'
            }
        ],

        // Additional Services (displayed as smaller items)
        additional: [
            { icon: 'fa-spray-can', name: 'Hair Styling', price: '$20' },
            { icon: 'fa-paintbrush', name: 'Hair Coloring', price: '$50+' },
            { icon: 'fa-spa', name: 'Facial Treatment', price: '$35' },
            { icon: 'fa-crown', name: 'Full Package', price: '$75' }
        ]
    },

    // ===========================================
    // GALLERY IMAGES
    // ===========================================
    gallery: {
        // OPTION 1: Use placeholder images from Unsplash (current setup)
        // OPTION 2: Replace with your own images in the images/gallery/ folder
        // Format: { src: 'path/to/image.jpg', alt: 'Description of image' }
        
        images: [
            {
                src: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80',
                alt: 'Modern Haircut Style'
            },
            {
                src: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80',
                alt: 'Beard Trim Service'
            },
            {
                src: 'https://images.unsplash.com/photo-1599351431613-18ef1fdd27e1?w=800&q=80',
                alt: 'Professional Barber at Work'
            },
            {
                src: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=800&q=80',
                alt: 'Classic Cut and Style'
            },
            {
                src: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&q=80',
                alt: 'Modern Styling Techniques'
            },
            {
                src: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&q=80',
                alt: 'Luxury Barbershop Interior'
            }
        ]
    },

    // ===========================================
    // HERO SECTION
    // ===========================================
    hero: {
        // Background image for hero section
        backgroundImage: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=1920&q=80',  // CHANGE: Hero background image URL
        
        headline: {
            text: 'Refine Your',                        // CHANGE: First part of headline
            highlightText: 'Style'                      // CHANGE: Highlighted part of headline (in gold)
        },
        
        subheadline: 'Premium grooming services for the modern gentleman. Experience luxury, precision, and style.',  // CHANGE: Hero subheadline text
        
        buttons: {
            primary: {
                text: 'Our Services',                   // CHANGE: Primary button text
                link: '#services'                       // CHANGE: Primary button link (use # for page sections)
            },
            secondary: {
                text: 'Book Appointment',               // CHANGE: Secondary button text
                link: '#contact'                        // CHANGE: Secondary button link
            }
        }
    },

    // ===========================================
    // NAVIGATION MENU
    // ===========================================
    navigation: {
        links: [
            { text: 'Home', href: '#home' },           // CHANGE/ADD/REMOVE: Navigation links
            { text: 'Services', href: '#services' },
            { text: 'Gallery', href: '#gallery' },
            { text: 'Contact', href: '#contact' }
        ]
    },

    // ===========================================
    // THEME COLORS
    // ===========================================
    // NOTE: These colors are also set in Tailwind config in index.html
    // Make sure to update both locations if you change colors
    colors: {
        primary: '#D4AF37',      // Gold - main accent color
        primaryLight: '#E5C158', // Light gold - hover states
        dark: '#111111',         // Main background
        darkGray: '#1a1a1a',     // Card backgrounds
        text: '#f3f4f6'          // Main text color
    }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
