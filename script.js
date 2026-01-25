// SECTION OBSERVER
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('nav a');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
            // Highlight nav link
            navLinks.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
            });
        }
    });
}, { threshold: 0.3 });

sections.forEach(sec => observer.observe(sec));
