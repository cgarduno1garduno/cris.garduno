document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const sidebarToggle = document.querySelector('.sidebar-toggle');

    sidebarToggle?.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    // Close sidebar when clicking outside
    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        }
    });

    // Add scroll handler for navbar shrinking
    const navbar = document.querySelector('.navbar');
    let ticking = false;
    const SCROLL_THRESHOLD = 50;
    const TRANSITION_ZONE = 20;
    
    const updateNavbar = (scrollPos) => {
        // Calculate shrink amount based on scroll position
        if (scrollPos <= SCROLL_THRESHOLD - TRANSITION_ZONE) {
            // Fully expanded
            navbar.style.transform = 'none';
            navbar.classList.remove('shrink');
        } else if (scrollPos >= SCROLL_THRESHOLD + TRANSITION_ZONE) {
            // Fully shrunk
            navbar.classList.add('shrink');
        } else {
            // In transition zone - smooth scaling
            const progress = (scrollPos - (SCROLL_THRESHOLD - TRANSITION_ZONE)) / (TRANSITION_ZONE * 2);
            navbar.style.transform = `scale(${1 - (0.1 * progress)})`;
        }
    };

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateNavbar(window.pageYOffset);
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });

    // Initial check
    updateNavbar(window.pageYOffset);
}); 