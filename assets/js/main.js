/* ============================================================
   Antoine DIOKH — Portfolio · main.js
   Dark mode · Bilingual FR/EN · Portfolio modal
   ============================================================ */

(function () {
  'use strict';

  /* ─── i18n translations ──────────────────────────────────── */
  const translations = {
    fr: {
      'nav.about':      'À propos',
      'nav.skills':     'Compétences',
      'nav.portfolio':  'Portfolio',
      'nav.experience': 'Expérience',
      'nav.contact':    'Contact',
      'hero.available': 'Disponible pour de nouvelles opportunités',
      'hero.role':      'Designer de produit · UX/UI · Motion',
      'hero.desc':      'Créateur de produits à la fois beaux et intelligents. J\'accorde une grande importance à la collaboration avec les développeurs et à l\'expérience que je crée pour les utilisateurs.',
      'hero.cta1':      'Me contacter',
      'hero.cta2':      'Voir mon travail',
      'about.label':    'À propos',
      'about.title':    'Design centré utilisateur,<br>produits qui font sens',
      'about.p1':       'Designer de produit avec une solide formation en design d\'expérience et d\'interface numérique, je m\'attache à créer des interfaces claires, accessibles et cohérentes avec l\'identité de marque.',
      'about.p2':       'Habitué à travailler en proximité avec les équipes de développement, je pilote chaque projet de la recherche utilisateur à la livraison — en passant par la conception, le prototypage et la validation.',
      'about.p3':       'Polyvalent, j\'interviens aussi bien en design de produit qu\'en communication visuelle : print, motion design, illustration. Basé à Bouc-Bel-Air, ouvert à la mobilité nationale.',
      'about.stat1':    'Ans d\'expérience',
      'about.stat2':    'Research & Strategy',
      'about.stat3':    'Interface & Prototype',
      'about.stat4':    'Motion & Print',
      'skills.label':   'Compétences',
      'skills.title':   'Outils & savoir-faire',
      'skills.g1':      'Design & Prototypage',
      'skills.g2':      'Développement web',
      'skills.g4':      'Méthodes UX',
      'tag.interviews': 'Entretiens utilisateurs',
      'tag.tests':      'Tests d\'usabilité',
      'portfolio.label':'Portfolio',
      'portfolio.title':'Travaux & projets',
      'cat.identity':   'Identité visuelle',
      'cat.print':      'Design print',
      'cat.motion':     'Motion design',
      'pf.view':        'Voir le projet →',
      'pf0.title':      'Logo pour une entreprise de logistique',
      'pf1.title':      'Application mobile COVID-19',
      'pf2.title':      'Refonte site web — La RODIA',
      'pf3.title':      'Affiche — Escape game',
      'pf4.title':      'Animation vidéo — Site de rencontre',
      'pf5.title':      'Vectorisation & animation 2D',
      'pf6.title':      'Animation vidéo — Services d\'entreprise',
      'exp.label':      'Expérience',
      'exp.title':      'Parcours professionnel',
      'exp.job1.role':  'Designer de produit',
      'exp.job1.date':  'Sept 2023 — Présent',
      'exp.job1.l1':    'Études utilisateurs : entretiens, tests et observations pour identifier besoins et points de friction',
      'exp.job1.l2':    'Conception du nouveau thème visuel Digdash Entreprise en cohérence avec l\'identité de marque',
      'exp.job1.l3':    'Élaboration de prototypes interactifs et maquettes clients pour valider les parcours utilisateurs',
      'exp.job1.l4':    'Définition et documentation de parcours utilisateurs (user flows, wireframes)',
      'exp.job1.l5':    'Collaboration avec les équipes développement pour assurer la faisabilité et cohérence de l\'intégration UI/UX',
      'exp.job1.l6':    'Design graphique print : brochures, habillage de stands lors de salons BIGDATA',
      'exp.job1.l7':    'Motion design : montage de tutoriels et webinaires, animations 2D',
      'exp.job2.role':  'Stage — Designer & UX Designer',
      'exp.job2.date':  'Mars — Sept 2023',
      'exp.job2.l1':    'Nouvelle ergonomie de l\'accueil du site et refonte de l\'arborescence du menu',
      'exp.job2.l2':    'Conception des icônes de l\'application mobile BiopoolConnect',
      'exp.job2.l3':    'Prototypage des piscines sur 3ds Max',
      'exp.job2.l4':    'Design graphique print : plaquettes, étiquettes produits, habillage de stands',
      'exp.job2.l5':    'Motion design : animations 2D de présentation des produits',
      'edu.label':      'Formation',
      'edu.title':      'Parcours académique',
      'edu.d1':         'Master Design de Produits et Services Multimédias',
      'edu.d1d':        'Ergonomie, design d\'expérience et d\'interface numérique, enseignements techniques et conduite de projets',
      'edu.d2':         'Master 2 Communication des technologies numériques',
      'edu.d2d':        'Méthodologie de recherche scientifique, stratégie de contenu',
      'edu.d3':         'Licence en Infographie',
      'edu.d3d':        'Conception d\'infographie, principes du design, multimédias, CMS',
      'edu.d4':         'Baccalauréat — Série S2, Sciences expérimentales',
      'certif.title':   'Certifications',
      'certif.c1':      'Cybersécurité — MOOC SecNumAcadémie · ANSSI',
      'certif.c2':      'Visualisation des données — Udemy',
      'contact.label':  'Contact',
      'contact.title':  'Travaillons ensemble',
      'contact.desc':   'Vous avez un projet, une opportunité ou simplement une question ? Écrivez-moi, je vous réponds dans les meilleurs délais.',
      'form.name':      'Nom *',
      'form.name.ph':   'Votre nom',
      'form.subject':   'Sujet',
      'form.subject.ph':'Opportunité, projet, collaboration...',
      'form.message':   'Message *',
      'form.message.ph':'Décrivez votre projet ou votre demande...',
      'form.submit':    'Envoyer le message',
      'footer.location':'Basé en France · Ouvert à la mobilité nationale',
      'modal.view':     'Voir le projet',
      'modal.viewMobile': 'Version mobile',
      'modal.viewDesktop': 'Version bureau',
    },
    en: {
      'nav.about':      'About',
      'nav.skills':     'Skills',
      'nav.portfolio':  'Portfolio',
      'nav.experience': 'Experience',
      'nav.contact':    'Contact',
      'hero.available': 'Available for new opportunities',
      'hero.role':      'Product Designer · UX/UI · Motion',
      'hero.desc':      'Creator of beautiful and intelligent products. I place great importance on collaboration with developers and on the experience I create for users.',
      'hero.cta1':      'Contact me',
      'hero.cta2':      'See my work',
      'about.label':    'About',
      'about.title':    'User-centred design,<br>products that make sense',
      'about.p1':       'Product designer with a solid background in UX and digital interface design, I focus on building clear, accessible interfaces that align with brand identity.',
      'about.p2':       'Experienced working closely with development teams, I drive each project from user research through to delivery — covering ideation, prototyping and validation.',
      'about.p3':       'A versatile designer, I work across product design and visual communication: print, motion design, and illustration. Based in Bouc-Bel-Air, open to relocation.',
      'about.stat1':    'Years of experience',
      'about.stat2':    'Research & Strategy',
      'about.stat3':    'Interface & Prototype',
      'about.stat4':    'Motion & Print',
      'skills.label':   'Skills',
      'skills.title':   'Tools & expertise',
      'skills.g1':      'Design & Prototyping',
      'skills.g2':      'Web development',
      'skills.g4':      'UX Methods',
      'tag.interviews': 'User interviews',
      'tag.tests':      'Usability testing',
      'portfolio.label':'Portfolio',
      'portfolio.title':'Works & projects',
      'cat.identity':   'Brand identity',
      'cat.print':      'Print design',
      'cat.motion':     'Motion design',
      'pf.view':        'View project →',
      'pf0.title':      'Logo for a logistics company',
      'pf1.title':      'COVID-19 mobile application',
      'pf2.title':      'Website redesign — La RODIA',
      'pf3.title':      'Poster — Escape game',
      'pf4.title':      'Video animation — Dating website',
      'pf5.title':      'Vectorisation & 2D animation',
      'pf6.title':      'Video animation — Business services',
      'exp.label':      'Experience',
      'exp.title':      'Professional background',
      'exp.job1.role':  'Product Designer',
      'exp.job1.date':  'Sept 2023 — Present',
      'exp.job1.l1':    'User research: interviews, tests and observations to identify needs and pain points',
      'exp.job1.l2':    'Design of the new Digdash Enterprise visual theme, aligned with brand identity',
      'exp.job1.l3':    'Creation of interactive prototypes and client mockups to validate user journeys',
      'exp.job1.l4':    'Definition and documentation of user journeys (user flows, wireframes)',
      'exp.job1.l5':    'Close collaboration with development teams to ensure UI/UX feasibility and consistency',
      'exp.job1.l6':    'Print graphic design: brochures, booth dressing at BIGDATA trade shows',
      'exp.job1.l7':    'Motion design: tutorial and webinar editing, 2D animations',
      'exp.job2.role':  'Internship — Designer & UX Designer',
      'exp.job2.date':  'March — Sept 2023',
      'exp.job2.l1':    'New website homepage ergonomics and menu information architecture redesign',
      'exp.job2.l2':    'Design of icons for the BiopoolConnect mobile application',
      'exp.job2.l3':    'Pool prototyping with 3ds Max',
      'exp.job2.l4':    'Print graphic design: brochures, product labels, booth dressing',
      'exp.job2.l5':    'Motion design: 2D product presentation animations',
      'edu.label':      'Education',
      'edu.title':      'Academic background',
      'edu.d1':         'Master\'s Degree in Multimedia Product & Service Design',
      'edu.d1d':        'Ergonomics, UX & digital interface design, technical courses and project management',
      'edu.d2':         'Master\'s 2 in Digital Technology Communication',
      'edu.d2d':        'Scientific research methodology, content strategy',
      'edu.d3':         'Bachelor\'s Degree in Infographics',
      'edu.d3d':        'Infographic design, design principles, multimedia, CMS',
      'edu.d4':         'Baccalauréat — Scientific series (S2)',
      'certif.title':   'Certifications',
      'certif.c1':      'Cybersecurity — MOOC SecNumAcadémie · ANSSI',
      'certif.c2':      'Data visualisation — Udemy',
      'contact.label':  'Contact',
      'contact.title':  'Let\'s work together',
      'contact.desc':   'Got a project, an opportunity or just a question? Write to me and I\'ll get back to you as soon as possible.',
      'form.name':      'Name *',
      'form.name.ph':   'Your name',
      'form.subject':   'Subject',
      'form.subject.ph':'Opportunity, project, collaboration...',
      'form.message':   'Message *',
      'form.message.ph':'Describe your project or enquiry...',
      'form.submit':    'Send message',
      'footer.location':'Based in France · Open to relocation',
      'modal.view':     'View project',
      'modal.viewMobile': 'Mobile version',
      'modal.viewDesktop': 'Desktop version',
    }
  };

  /* ─── Portfolio data ─────────────────────────────────────── */
  const projects = [
    {
      img:   'assets/image/logoG.png',
      cat:   { fr: 'Identité visuelle', en: 'Brand identity' },
      title: { fr: 'Logo pour une entreprise de logistique', en: 'Logo for a logistics company' },
      desc:  { fr: 'Processus créatif et recherche graphique pour la conception d\'un logo d\'entreprise de logistique. Exploration typographique, symbolique et colorimétrique.', en: 'Creative process and graphic research for designing a logistics company logo. Typographic, symbolic and colour exploration.' },
      links: [{ label: 'modal.view', url: 'https://www.figma.com/proto/9UnTRkB8jRkeRqhKVPPMQA/presentation-greilsalmmer?page-id=0%3A1&node-id=1%3A3&starting-point-node-id=1%3A3', primary: true }]
    },
    {
      img:   'assets/image/applicov.png',
      cat:   { fr: 'UX/UI Design', en: 'UX/UI Design' },
      title: { fr: 'Application mobile COVID-19', en: 'COVID-19 mobile application' },
      desc:  { fr: 'Conception et proposition d\'une nouvelle expérience utilisateur pour les applications COVID. Prototypage sur Figma — refonte des parcours, de l\'interface et de l\'ergonomie.', en: 'Design and proposal for a new user experience for COVID applications. Figma prototyping — redesign of user flows, interface and ergonomics.' },
      links: [{ label: 'modal.view', url: 'https://www.figma.com/proto/RpTAlaN1O2uk8Pq7qrRsC1/projet-covid19-Antoine?page-id=0%3A1&node-id=3%3A185&viewport=384%2C261%2C0.4&scaling=scale-down&starting-point-node-id=3%3A185&show-proto-sidebar=1', primary: true }]
    },
    {
      img:   'assets/image/rodia.png',
      cat:   { fr: 'UX/UI Design', en: 'UX/UI Design' },
      title: { fr: 'Refonte site web — La RODIA', en: 'Website redesign — La RODIA' },
      desc:  { fr: 'Proposition d\'un nouveau design de site pour La RODIA. Conception de deux versions : mobile et bureau, avec refonte complète de l\'expérience utilisateur et de l\'interface.', en: 'New website design proposal for La RODIA. Two versions designed: mobile and desktop, with a complete redesign of the user experience and interface.' },
      links: [
        { label: 'modal.viewMobile',  url: 'https://www.figma.com/proto/iS7UddRdFrbHbrAp9BMQAl/M1-PSM-%E2%80%94-Rodia---Antoine-DIOKH?page-id=1001%3A799&node-id=1001%3A809', primary: true },
        { label: 'modal.viewDesktop', url: 'https://www.figma.com/proto/iS7UddRdFrbHbrAp9BMQAl/M1-PSM-%E2%80%94-Rodia---Antoine-DIOKH?page-id=1001%3A800&node-id=1001%3A813', primary: false }
      ]
    },
    {
      img:   'assets/image/wal.png',
      cat:   { fr: 'Design print', en: 'Print design' },
      title: { fr: 'Affiche — Escape game', en: 'Poster — Escape game' },
      desc:  { fr: 'Conception d\'une affiche et déclinaisons couleur pour un escape game. Travail sur la typographie, la composition et l\'identité visuelle du lieu.', en: 'Design of a poster and colour variations for an escape game. Work on typography, composition and venue visual identity.' },
      links: [{ label: 'modal.view', url: 'assets/image/wal1.png', primary: true }]
    },
    {
      img:   'assets/image/rich.png',
      cat:   { fr: 'Motion design', en: 'Motion design' },
      title: { fr: 'Animation vidéo — Site de rencontre', en: 'Video animation — Dating website' },
      desc:  { fr: 'Réalisation d\'une vidéo animée pour la présentation d\'un site de rencontre. Conception des visuels, animation et montage.', en: 'Production of an animated video to present a dating website. Visual design, animation and editing.' },
      links: [{ label: 'modal.view', url: 'https://drive.google.com/file/d/1eMxyfWCYhAMQDXvZ1D4x0TnjUM_zYlYi/view?usp=sharing', primary: true }]
    },
    {
      img:   'assets/image/cat.png',
      cat:   { fr: 'Motion design', en: 'Motion design' },
      title: { fr: 'Vectorisation & animation 2D', en: 'Vectorisation & 2D animation' },
      desc:  { fr: 'Vidéo de vectorisation et animation 2D réalisée pour présenter un service de secours lors de catastrophes naturelles.', en: '2D vectorisation and animation video created to present an emergency rescue service during natural disasters.' },
      links: [{ label: 'modal.view', url: 'https://youtu.be/YFHvtz9IyHI', primary: true }]
    },
    {
      img:   'assets/image/lam.png',
      cat:   { fr: 'Motion design', en: 'Motion design' },
      title: { fr: 'Animation vidéo — Services d\'entreprise', en: 'Video animation — Business services' },
      desc:  { fr: 'Animation vidéo 2D pour la présentation des services d\'une entreprise. Conception des illustrations, animation et montage final.', en: '2D video animation presenting a company\'s services. Illustration design, animation and final editing.' },
      links: [{ label: 'modal.view', url: 'https://drive.google.com/file/d/1NarmXkKGJUxvmde1luEy8UjPIvljJJEW/view?usp=sharing', primary: true }]
    }
  ];

  /* ─── Language state ─────────────────────────────────────── */
  let currentLang = localStorage.getItem('lang') || 'fr';

  function applyTranslations(lang) {
    const t = translations[lang];
    document.documentElement.lang = lang;

    // Text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (t[key] !== undefined) el.innerHTML = t[key];
    });

    // Placeholders
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.dataset.i18nPh;
      if (t[key] !== undefined) el.placeholder = t[key];
    });

    // Lang toggle label
    document.querySelector('.lang-toggle__label').textContent = lang === 'fr' ? 'EN' : 'FR';
  }

  const langBtn = document.getElementById('langToggle');
  langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'fr' ? 'en' : 'fr';
    localStorage.setItem('lang', currentLang);
    applyTranslations(currentLang);
  });

  applyTranslations(currentLang);

  /* ─── Nav scroll ─────────────────────────────────────────── */
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
  nav.classList.toggle('scrolled', window.scrollY > 20);

  /* ─── Mobile nav toggle ──────────────────────────────────── */
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');

  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
  links.querySelectorAll('.nav__link').forEach(l => {
    l.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', false);
    });
  });
  document.addEventListener('click', e => {
    if (!nav.contains(e.target)) {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', false);
    }
  });

  /* ─── Active nav link ────────────────────────────────────── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav__link');
  const secObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const id = e.target.id;
        navLinks.forEach(l => l.classList.remove('active'));
        const a = document.querySelector(`.nav__link[href="#${id}"]`);
        if (a) a.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(s => secObserver.observe(s));

  /* ─── Fade-in on scroll ──────────────────────────────────── */
  const fadeTargets = document.querySelectorAll(
    '.section__header, .about__text, .about__stats, .stat, ' +
    '.skill-group, .pf-card, .timeline__item, .edu__item, ' +
    '.certif, .contact__info, .contact__form'
  );
  fadeTargets.forEach(el => el.classList.add('fade-up'));

  document.querySelectorAll('.about__stats .stat, .skill-group, .pf-card, .edu__item').forEach((el, i) => {
    el.dataset.delay = (i % 4) * 80;
  });

  const fadeObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), +(e.target.dataset.delay || 0));
        fadeObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  fadeTargets.forEach(el => fadeObs.observe(el));

  /* ─── Portfolio Modal ────────────────────────────────────── */
  const overlay   = document.getElementById('modalOverlay');
  const modalClose = document.getElementById('modalClose');
  const modalImg  = document.getElementById('modalImg');
  const modalCat  = document.getElementById('modalCat');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc  = document.getElementById('modalDesc');
  const modalLinks = document.getElementById('modalLinks');

  function openModal(index) {
    const p = projects[index];
    const lang = currentLang;
    const t = translations[lang];

    modalImg.src = p.img;
    modalImg.alt = p.title[lang];
    modalCat.textContent  = p.cat[lang];
    modalTitle.textContent = p.title[lang];
    modalDesc.textContent  = p.desc[lang];

    modalLinks.innerHTML = '';
    p.links.forEach(link => {
      const a = document.createElement('a');
      a.href = link.url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.className = 'modal__link' + (link.primary ? ' modal__link--primary' : '');
      a.innerHTML = `${t[link.label] || link.label} <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>`;
      modalLinks.appendChild(a);
    });

    overlay.hidden = false;
    document.body.classList.add('modal-open');
    modalClose.focus();
  }

  function closeModal() {
    overlay.hidden = true;
    document.body.classList.remove('modal-open');
  }

  document.querySelectorAll('.pf-card').forEach(card => {
    card.addEventListener('click', () => openModal(+card.dataset.project));
  });

  modalClose.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  /* ─── Contact form ───────────────────────────────────────── */
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');

  if (form) {
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const origHtml = btn.innerHTML;
      const t = translations[currentLang];

      btn.disabled = true;
      btn.innerHTML = `<span>${currentLang === 'fr' ? 'Envoi…' : 'Sending…'}</span>`;

      try {
        const res = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' }
        });
        if (!res.ok) throw new Error();
        form.reset();
        success.style.color = '';
        success.textContent = currentLang === 'fr'
          ? 'Message envoyé ! Je vous réponds très bientôt.'
          : 'Message sent! I\'ll get back to you soon.';
        btn.innerHTML = `<span>${currentLang === 'fr' ? 'Envoyé ✓' : 'Sent ✓'}</span>`;
        setTimeout(() => { success.textContent = ''; btn.disabled = false; btn.innerHTML = origHtml; }, 5000);
      } catch {
        success.style.color = '#F87171';
        success.textContent = currentLang === 'fr'
          ? 'Erreur d\'envoi. Contactez-moi directement par email.'
          : 'Sending failed. Please contact me directly by email.';
        btn.disabled = false;
        btn.innerHTML = origHtml;
        setTimeout(() => { success.textContent = ''; success.style.color = ''; }, 6000);
      }
    });
  }

})();
