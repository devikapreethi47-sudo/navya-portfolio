// Scroll Reveal Animation
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
    
    // Smooth page transitions (optional logic)
    console.log("Portfolio Loaded Successfully");
});

// Dynamic Navbar Shadow on Scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
        nav.style.padding = '0.5rem 0';
    } else {
        nav.style.boxShadow = 'none';
        nav.style.padding = '1rem 0';
    }
});
