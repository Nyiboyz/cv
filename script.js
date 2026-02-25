// Smooth Scroll & Reveal Animation
const sections = document.querySelectorAll('.popup');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.15 });

sections.forEach(s => observer.observe(s));

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu');
const navMenu = document.getElementById('navMenu');

mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// Close mobile menu automatically when a link is clicked
const navLinks = document.querySelectorAll('#navMenu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show');
    });
});
