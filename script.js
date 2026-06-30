/* ============================================
   SRIRAM PORTFOLIO - WORLD-CLASS JAVASCRIPT
   ============================================ */

// === Loader ===
document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.classList.add('hidden');
        document.body.style.overflow = 'auto';
        initAll();
    }, 600);
    document.body.style.overflow = 'hidden';
});

// === Initialize Everything ===
function initAll() {
    initNavbar();
    initMobileMenu();
    initThemeToggle();
    initTypedText();
    initScrollReveal();
    initProjectFilter();
    initContactForm();
    initBackToTop();
    initStatCounters();
    initSmoothScroll();
}


// === Navbar ===
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section, .hero');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 200;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === current) {
                link.classList.add('active');
            }
        });
    });
}

// === Mobile Menu ===
function initMobileMenu() {
    const hamburger = document.getElementById('navHamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : 'auto';
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
}

// === Theme Toggle ===
function initThemeToggle() {
    const toggle = document.getElementById('themeToggle');
    const saved = localStorage.getItem('theme');
    if (saved) document.documentElement.setAttribute('data-theme', saved);

    toggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
    });
}

// === Typed Text Effect ===
function initTypedText() {
    const typedEl = document.getElementById('typedText');
    const words = ['beautiful websites', 'scalable apps', 'amazing UIs', 'creative solutions', 'digital experiences'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        const currentWord = words[wordIndex];

        if (isDeleting) {
            typedEl.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            typedEl.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100;
        }

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            typeSpeed = 2000;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 300;
        }

        setTimeout(type, typeSpeed);
    }

    setTimeout(type, 1000);
}

// === Scroll Reveal ===
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    reveals.forEach(el => observer.observe(el));
}

// === Project Filter ===
function initProjectFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            projectCards.forEach((card, index) => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.classList.remove('hidden');
                    card.style.animation = `fadeIn 0.4s ${index * 0.1}s both`;
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
}

// === Contact Form ===
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const btn = form.querySelector('.btn-submit .btn-text');
        const btnIcon = form.querySelector('.btn-submit .btn-icon');
        const originalText = btn.textContent;
        btn.textContent = 'Sending...';
        btnIcon.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';

        const data = {
            access_key: '4f29e442-a602-4596-9cf9-fff06de19fbf',
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value,
        };

        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            const result = await res.json();
            if (result.success) {
                btn.textContent = 'Message Sent! ✓';
                btnIcon.innerHTML = '<i class="fas fa-check"></i>';
                form.reset();
            } else {
                btn.textContent = 'Error! Try Again';
                btnIcon.innerHTML = '<i class="fas fa-exclamation-triangle"></i>';
            }
        } catch {
            btn.textContent = 'Error! Try Again';
            btnIcon.innerHTML = '<i class="fas fa-exclamation-triangle"></i>';
        }

        setTimeout(() => {
            btn.textContent = originalText;
            btnIcon.innerHTML = '<i class="fas fa-paper-plane"></i>';
        }, 3000);
    });
}

// === Back to Top ===
function initBackToTop() {
    const btn = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// === Stat Counters ===
function initStatCounters() {
    const counters = document.querySelectorAll('.stat-number');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-count'));
                animateCounter(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(el, target) {
    let current = 0;
    const increment = target / 40;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        el.textContent = Math.floor(current);
    }, 40);
}

// === Smooth Scroll ===
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80;
                const top = target.offsetTop - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });
}
