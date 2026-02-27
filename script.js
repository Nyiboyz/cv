// --- Smooth Scroll & Reveal Animation ---
const sections = document.querySelectorAll('.popup');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.15 });

sections.forEach(s => observer.observe(s));

// --- Mobile Menu Toggle ---
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

// --- Matrix Binary Code Animation ---
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const binary = "01";
const fontSize = 16;
const columns = canvas.width / fontSize;

const drops = [];
for(let x = 0; x < columns; x++) {
    drops[x] = 1;
}

function drawMatrix() {
    ctx.fillStyle = 'rgba(2, 6, 23, 0.05)'; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#38bdf8'; 
    ctx.font = fontSize + 'px monospace';

    for(let i = 0; i < drops.length; i++) {
        const text = binary.charAt(Math.floor(Math.random() * binary.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if(drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}
setInterval(drawMatrix, 50);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// --- Mouse Cursor Star Twinkle Effect ---
let lastStarTime = 0;

document.addEventListener('mousemove', function(e) {
    const now = Date.now();
    // Limit star creation (every 40ms) to prevent lagging the browser
    if (now - lastStarTime < 40) return;
    lastStarTime = now;

    const star = document.createElement('i');
    star.className = 'fa-solid fa-star magic-star';
    
    // Randomize star size slightly between 8px and 16px
    const size = Math.random() * 8 + 8; 
    star.style.fontSize = size + 'px';
    
    // Position exactly at the cursor
    star.style.left = (e.pageX - size/2) + 'px';
    star.style.top = (e.pageY - size/2) + 'px';
    
    document.body.appendChild(star);
    
    // Remove the star from the HTML after the animation completes (800ms)
    setTimeout(() => {
        star.remove();
    }, 800);
});
