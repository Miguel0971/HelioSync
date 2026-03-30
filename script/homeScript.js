window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animação dos cards ao scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card').forEach(card => {
    observer.observe(card);
});

// Partículas mais dinâmicas
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.width = (4 + Math.random() * 12) + 'px';
    particle.style.height = particle.style.width;
    particle.style.background = `rgba(${Math.random() * 50 + 200}, ${Math.random() * 50 + 200}, 50, ${0.4 + Math.random() * 0.4})`;
    particle.style.animationDuration = (8 + Math.random() * 8) + 's';
    particle.style.animationDelay = Math.random() * 5 + 's';
    document.querySelector('.particles').appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 20000);
}

// Criar partículas dinamicamente
setInterval(createParticle, 3000);

// Efeito de parallax no lotus hero
window.addEventListener('mousemove', (e) => {
    const lotus = document.querySelector('.lotus-hero');
    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;
    lotus.style.transform = `translate(${x}px, ${y}px) rotateY(${x * 0.5}deg) rotateX(${y * 0.5}deg)`;
});

// Reset do lotus no mouse leave
document.querySelector('.hero').addEventListener('mouseleave', () => {
    const lotus = document.querySelector('.lotus-hero');
    lotus.style.transform = 'rotate(0deg)';
});

// Contador animado para estatísticas (futuro)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            start = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(start);
    }, 16);
}