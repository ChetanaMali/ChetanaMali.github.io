/* ================================================
   CHETANA MALI — Portfolio JS
   Features:
   - Navbar scroll effect + active link
   - Mobile menu toggle
   - Typed text animation (hero)
   - Scroll-triggered fade-in animations
   - Proficiency bar animations
   - Smooth scroll
   - Back to top button
   - Contact form (mailto fallback)
================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ============ NAVBAR ============ */
  const navbar    = document.getElementById('navbar');
  const navLinks  = document.querySelectorAll('.nav-link');
  const navLinksEl = document.getElementById('navLinks');
  const navToggle = document.getElementById('navToggle');

  // Scroll: add .scrolled class
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
    updateActiveNavLink();
    toggleBackToTop();
  });

  // Mobile toggle
  navToggle.addEventListener('click', () => {
    navLinksEl.classList.toggle('open');
  });

  // Close mobile menu on link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinksEl.classList.remove('open');
    });
  });

  // Active nav link based on scroll position
  function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }

  /* ============ TYPED TEXT ANIMATION ============ */
  const typedEl = document.getElementById('typedText');
  const phrases = [
    'Cloud & DevOps Engineer',
    'AWS Infrastructure Builder',
    'Docker & Kubernetes Enthusiast',
    'CI/CD Pipeline Architect',
    'Automation First Mindset',
  ];

  let phraseIndex = 0;
  let charIndex   = 0;
  let isDeleting  = false;
  let typingSpeed = 80;

  function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      typedEl.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 40;
    } else {
      typedEl.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 80;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      typingSpeed = 2000; // pause at end
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 400;
    }

    setTimeout(type, typingSpeed);
  }

  if (typedEl) type();

  /* ============ SCROLL FADE-IN ANIMATIONS ============ */
  // Add fade-in class to elements we want to animate
  const animatableSelectors = [
    '.project-card',
    '.skill-category',
    '.cert-card',
    '.exp-item',
    '.contact-card',
    '.about-text',
    '.about-journey',
    '.timeline-item',
    '.resume-cta-block',
    '.hero-stats .stat',
    '.focus-item',
  ];

  animatableSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      el.classList.add('fade-in');
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');

        // Trigger proficiency bars when they come into view
        if (entry.target.classList.contains('proficiency-section') ||
            entry.target.closest('.proficiency-section')) {
          animateProfBars();
        }
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // Also observe the proficiency section specifically
  const profSection = document.querySelector('.proficiency-section');
  if (profSection) observer.observe(profSection);

  /* ============ PROFICIENCY BAR ANIMATION ============ */
  let profAnimated = false;

  function animateProfBars() {
    if (profAnimated) return;
    profAnimated = true;

    document.querySelectorAll('.prof-fill').forEach(bar => {
      const targetWidth = bar.style.getPropertyValue('--w');
      // Trigger by setting the actual width after a tiny delay
      requestAnimationFrame(() => {
        bar.style.width = targetWidth;
      });
    });
  }

  // Also trigger if proficiency section is already visible on load
  const profObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) animateProfBars();
    });
  }, { threshold: 0.3 });

  if (profSection) profObserver.observe(profSection);

  /* ============ BACK TO TOP ============ */
  const backToTop = document.getElementById('backToTop');

  function toggleBackToTop() {
    backToTop.classList.toggle('visible', window.scrollY > 400);
  }

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ============ CONTACT FORM ============ */
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name    = document.getElementById('name').value.trim();
      const email   = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) return;

      // Mailto fallback — opens email client
      const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
      const body    = encodeURIComponent(
        `Hi Chetana,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\nSent from portfolio contact form.`
      );

      window.location.href = `mailto:chetana.mali@email.com?subject=${subject}&body=${body}`;
    });
  }

  /* ============ SMOOTH SCROLL FOR ALL ANCHOR LINKS ============ */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      const offset = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    });
  });

  /* ============ TERMINAL TYPING EFFECT (additional) ============ */
  // Subtle stagger for terminal lines
  const termLines = document.querySelectorAll('.t-line');
  termLines.forEach((line, i) => {
    line.style.opacity = '0';
    line.style.transform = 'translateX(-8px)';
    line.style.transition = `opacity 0.3s ease ${i * 0.1}s, transform 0.3s ease ${i * 0.1}s`;

    setTimeout(() => {
      line.style.opacity = '1';
      line.style.transform = 'translateX(0)';
    }, 800 + i * 100);
  });

});
