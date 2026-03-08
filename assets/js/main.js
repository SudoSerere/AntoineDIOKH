/* ============================================================
   Antoine DIOKH — Portfolio · main.js
   ============================================================ */

(function () {
  'use strict';

  /* ── Nav scroll behavior ──────────────────────────────────── */
  const nav = document.getElementById('nav');
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── Mobile nav toggle ────────────────────────────────────── */
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');

  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
  });

  // Close on link click
  links.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', false);
    });
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (!nav.contains(e.target)) {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', false);
    }
  });

  /* ── Active nav link on scroll ────────────────────────────── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.nav__link[href="#${id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => observer.observe(s));

  /* ── Fade-in on scroll ────────────────────────────────────── */
  const fadeEls = document.querySelectorAll(
    '.section__header, .about__text, .about__stats, .stat, ' +
    '.skill-group, .timeline__item, .edu__item, .certif, ' +
    '.contact__info, .contact__form'
  );

  fadeEls.forEach(el => el.classList.add('fade-up'));

  const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger siblings slightly
        const delay = (entry.target.dataset.delay || 0);
        setTimeout(() => entry.target.classList.add('visible'), delay);
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  // Add stagger delays to grid items
  document.querySelectorAll('.about__stats .stat').forEach((el, i) => {
    el.dataset.delay = i * 80;
  });
  document.querySelectorAll('.skill-group').forEach((el, i) => {
    el.dataset.delay = i * 80;
  });
  document.querySelectorAll('.edu__item').forEach((el, i) => {
    el.dataset.delay = i * 60;
  });

  fadeEls.forEach(el => fadeObserver.observe(el));

  /* ── Contact form (Formspree) ─────────────────────────────── */
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');

  if (form) {
    form.addEventListener('submit', async e => {
      e.preventDefault();

      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.innerHTML;

      btn.disabled = true;
      btn.innerHTML = '<span>Envoi en cours...</span>';

      try {
        const res = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });

        if (res.ok) {
          form.reset();
          success.textContent = 'Message envoyé ! Je vous répondrai très bientôt.';
          btn.innerHTML = '<span>Message envoyé ✓</span>';
          setTimeout(() => {
            success.textContent = '';
            btn.disabled = false;
            btn.innerHTML = originalText;
          }, 5000);
        } else {
          throw new Error('Erreur serveur');
        }
      } catch {
        success.style.color = '#EF4444';
        success.textContent = 'Erreur lors de l\'envoi. Contactez-moi directement par email.';
        btn.disabled = false;
        btn.innerHTML = originalText;
        setTimeout(() => {
          success.textContent = '';
          success.style.color = '';
        }, 6000);
      }
    });
  }

})();
