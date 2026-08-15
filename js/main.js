/* ==========================================================================
   JUNAID IRFAN PORTFOLIO - MAIN INTERACTIVITY & NAVIGATION
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // --------------------------------------------------------------------------
  // 1. Executive Dynamic Typewriter Effect in Hero
  // --------------------------------------------------------------------------
  const typingTarget = document.getElementById('typing-target');
  if (typingTarget) {
    const titles = [
      'Full-Stack Software Engineer',
      'Mobile App Developer (iOS & Android)',
      'Python & Django Backend Architect',
      'Digital Marketing & SEO Specialist'
    ];
    let titleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function typeEffect() {
      const currentTitle = titles[titleIdx];

      if (isDeleting) {
        typingTarget.textContent = currentTitle.substring(0, charIdx - 1);
        charIdx--;
        typeSpeed = 40;
      } else {
        typingTarget.textContent = currentTitle.substring(0, charIdx + 1);
        charIdx++;
        typeSpeed = 100;
      }

      if (!isDeleting && charIdx === currentTitle.length) {
        isDeleting = true;
        typeSpeed = 2200; // Pause at full title
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        titleIdx = (titleIdx + 1) % titles.length;
        typeSpeed = 400; // Pause before next title
      }

      setTimeout(typeEffect, typeSpeed);
    }

    typeEffect();
  }

  // --------------------------------------------------------------------------
  // 2. Header Scroll Effect & Active Section Highlighting
  // --------------------------------------------------------------------------
  const header = document.getElementById('header');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  const sections = document.querySelectorAll('section[id]');
  const backToTopBtn = document.getElementById('back-to-top');

  function handleScroll() {
    const scrollY = window.scrollY;

    if (header) {
      if (scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', handleScroll);

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --------------------------------------------------------------------------
  // 3. Mobile Navigation Menu Toggle
  // --------------------------------------------------------------------------
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('active');
      mobileNav.classList.toggle('active');
    });

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        mobileNav.classList.remove('active');
      });
    });
  }

  // --------------------------------------------------------------------------
  // 4. About Tab Switcher
  // --------------------------------------------------------------------------
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.dataset.tab;

      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const pane = document.getElementById(`tab-${targetTab}`);
      if (pane) pane.classList.add('active');
    });
  });

  // --------------------------------------------------------------------------
  // 5. Animated Number Counters
  // --------------------------------------------------------------------------
  let countersTriggered = false;
  const statNumbers = document.querySelectorAll('.stat-number');

  function animateCounters() {
    statNumbers.forEach(counter => {
      const target = parseInt(counter.dataset.target);
      const suffix = counter.dataset.suffix || '';
      let count = 0;
      const duration = 1600;
      const stepTime = Math.abs(Math.floor(duration / target));

      const timer = setInterval(() => {
        count += 1;
        counter.textContent = count + suffix;
        if (count >= target) {
          counter.textContent = target + suffix;
          clearInterval(timer);
        }
      }, stepTime);
    });
  }

  // --------------------------------------------------------------------------
  // 6. Scroll Reveal Observer
  // --------------------------------------------------------------------------
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');

        if (entry.target.classList.contains('skill-card')) {
          const fill = entry.target.querySelector('.progress-bar-fill');
          if (fill) {
            fill.style.width = fill.dataset.progress + '%';
          }
        }

        if (entry.target.id === 'stats-container' && !countersTriggered) {
          countersTriggered = true;
          animateCounters();
        }
      }
    });
  }, observerOptions);

  function refreshObserver() {
    document.querySelectorAll('.reveal, .skill-card, #stats-container').forEach(el => {
      revealObserver.observe(el);
    });
  }

  window.refreshObserver = refreshObserver;
  refreshObserver();
});
