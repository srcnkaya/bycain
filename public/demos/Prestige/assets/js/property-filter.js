/**
 * Prestige Estates - Property Filter Module
 * Handles filtering of property listings based on location, price, and bedrooms
 */

class PropertyFilter {
    constructor() {
        this.filterBtn = document.getElementById('filterBtn');
        this.locationFilter = document.getElementById('locationFilter');
        this.priceFilter = document.getElementById('priceFilter');
        this.bedroomsFilter = document.getElementById('bedroomsFilter');
        this.propertyCards = document.querySelectorAll('.property-card');
        this.clearBtn = null;
        
        this.init();
    }

    init() {
        if (!this.filterBtn) return;
        
        // Attach event listener to filter button
        this.filterBtn.addEventListener('click', () => this.applyFilters());
        
        // Optional: Filter on Enter key in dropdowns
        [this.locationFilter, this.priceFilter, this.bedroomsFilter].forEach(select => {
            if (select) {
                select.addEventListener('change', () => {
                    // Optional: Auto-filter on change (comment out if you want manual filter only)
                    // this.applyFilters();
                });
            }
        });
    }

    applyFilters() {
        // Get selected filter values
        const selectedLocation = this.locationFilter?.value || '';
        const selectedPrice = this.priceFilter?.value || '';
        const selectedBedrooms = this.bedroomsFilter?.value || '';

        // Track how many properties are visible
        let visibleCount = 0;

        // Loop through all property cards and show/hide based on filters
        this.propertyCards.forEach(card => {
            let showCard = true;

            // Location filter
            if (selectedLocation && showCard) {
                const cardLocation = card.getAttribute('data-location');
                if (cardLocation !== selectedLocation) {
                    showCard = false;
                }
            }

            // Price filter
            if (selectedPrice && showCard) {
                const cardPrice = parseInt(card.getAttribute('data-price'));
                const [minPrice, maxPrice] = selectedPrice.split('-').map(p => parseInt(p));
                
                if (maxPrice) {
                    // Price range (e.g., "10000000-25000000")
                    if (cardPrice < minPrice || cardPrice > maxPrice) {
                        showCard = false;
                    }
                } else {
                    // Open-ended range (e.g., "50000000-" for $50M+)
                    if (cardPrice < minPrice) {
                        showCard = false;
                    }
                }
            }

            // Bedrooms filter
            if (selectedBedrooms && showCard) {
                const cardBedrooms = parseInt(card.getAttribute('data-bedrooms'));
                const minBedrooms = parseInt(selectedBedrooms);
                
                if (cardBedrooms < minBedrooms) {
                    showCard = false;
                }
            }

            // Show or hide the card with animation
            if (showCard) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 10);
                visibleCount++;
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });

        // Show filter results message
        this.showFilterResults(visibleCount);

        // Show/hide clear button
        if (selectedLocation || selectedPrice || selectedBedrooms) {
            this.showClearButton();
        }
    }

    showFilterResults(count) {
        // Remove existing message if any
        const existingMessage = document.querySelector('.filter-results-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        // Create new message
        const message = document.createElement('div');
        message.className = 'filter-results-message';
        message.innerHTML = `
            <p>Showing <strong>${count}</strong> ${count === 1 ? 'property' : 'properties'}</p>
        `;

        // Insert message after filter bar
        const filterBar = document.querySelector('.filter-bar');
        if (filterBar && filterBar.parentNode) {
            filterBar.parentNode.insertBefore(message, filterBar.nextSibling);
        }

        // Scroll to results
        setTimeout(() => {
            message.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    }

    showClearButton() {
        // Only create clear button once
        if (this.clearBtn) return;

        this.clearBtn = document.createElement('button');
        this.clearBtn.className = 'btn btn-outline btn-small clear-filters-btn';
        this.clearBtn.textContent = 'Clear Filters';
        this.clearBtn.style.marginLeft = '10px';
        
        // Insert after filter button
        this.filterBtn.parentNode.insertBefore(this.clearBtn, this.filterBtn.nextSibling);
        
        // Add event listener
        this.clearBtn.addEventListener('click', () => this.clearFilters());
    }

    clearFilters() {
        // Reset all dropdowns
        if (this.locationFilter) this.locationFilter.value = '';
        if (this.priceFilter) this.priceFilter.value = '';
        if (this.bedroomsFilter) this.bedroomsFilter.value = '';

        // Show all properties
        this.propertyCards.forEach(card => {
            card.style.display = 'block';
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
        });

        // Remove clear button
        if (this.clearBtn) {
            this.clearBtn.remove();
            this.clearBtn = null;
        }

        // Remove results message
        const existingMessage = document.querySelector('.filter-results-message');
        if (existingMessage) {
            existingMessage.remove();
        }
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Only initialize if we're on the listings page
    if (document.getElementById('filterBtn')) {
        new PropertyFilter();
        console.log('Property filter initialized');
    }
});
