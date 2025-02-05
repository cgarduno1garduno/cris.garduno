document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu functionality
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu?.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add expandable functionality to project cards
    document.querySelectorAll('[data-expandable]').forEach(card => {
        card.addEventListener('click', (e) => {
            // Don't toggle if clicking a link inside the card
            if (e.target.tagName === 'A') return;
            
            card.classList.toggle('expanded');
            
            const toggle = card.querySelector('.expand-toggle .icon');
            if (card.classList.contains('expanded')) {
                toggle.textContent = '+';
            } else {
                toggle.textContent = '+';
            }
        });
    });

    // Add expandable functionality to research cards
    document.querySelectorAll('.research-card').forEach(card => {
        card.addEventListener('click', (e) => {
            // Don't toggle if clicking the publication link
            if (e.target.tagName === 'A') return;
            
            // Remove expanded class from all other cards
            document.querySelectorAll('.research-card.expanded').forEach(expandedCard => {
                if (expandedCard !== card) {
                    expandedCard.classList.remove('expanded');
                }
            });
            
            // Toggle current card
            card.classList.toggle('expanded');
            
            // Scroll into view if expanded
            if (card.classList.contains('expanded')) {
                card.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}); 