document.getElementById('year').textContent = new Date().getFullYear();

var ICONS = {
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="M7 10l5 5 5-5"/><path d="M5 21h14"/></svg>',
  code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l-6-6 6-6"/><path d="M15 6l6 6-6 6"/></svg>',
  function: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 21c2 0 3-1 3-3V9c0-3 1-5 4-5"/><path d="M6 12h6"/></svg>',
  social: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8.2 10.8l7.6-3.6"/><path d="M8.2 13.2l7.6 3.6"/></svg>',
  camera: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h3l2-2h6l2 2h3v11H4z"/><circle cx="12" cy="13.5" r="3.5"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.5 2.6 4 6 4 9s-1.5 6.4-4 9c-2.5-2.6-4-6-4-9s1.5-6.4 4-9z"/></svg>',
  chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V10"/><path d="M12 20V4"/><path d="M20 20v-7"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20l1.3-4.1A8 8 0 1 1 8 18.6z"/><path d="M8.5 9.5c0 3 2.5 5.5 5.5 5.5"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 4h-2a4 4 0 0 0-4 4v3H7v4h2v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h3z"/></svg>'
};

document.querySelectorAll('[data-icon]').forEach(function (el) {
  var name = el.getAttribute('data-icon');
  if (ICONS[name]) el.innerHTML = ICONS[name];
});

var roles = [
  'Développeur Web',
  'Répétiteur en Mathématiques',
  'Community Manager',
  'Créateur de contenu',
  'Étudiant en Sécurité Informatique'
];
var typedEl = document.getElementById('typed');
var ri = 0, ci = 0, deleting = false;

function typeLoop() {
  var word = roles[ri];
  if (!deleting) {
    ci++;
    typedEl.textContent = word.slice(0, ci);
    if (ci === word.length) {
      deleting = true;
      setTimeout(typeLoop, 1400);
      return;
    }
  } else {
    ci--;
    typedEl.textContent = word.slice(0, ci);
    if (ci === 0) {
      deleting = false;
      ri = (ri + 1) % roles.length;
    }
  }
  setTimeout(typeLoop, deleting ? 35 : 65);
}
typeLoop();

var navToggle = document.getElementById('navToggle');
var navLinksWrap = document.querySelector('.nav-links');
if (navToggle) {
  navToggle.addEventListener('click', function () {
    var open = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!open));
    navLinksWrap.style.display = open ? 'none' : 'flex';
    if (!open) {
      navLinksWrap.style.position = 'absolute';
      navLinksWrap.style.top = '64px';
      navLinksWrap.style.left = '0';
      navLinksWrap.style.right = '0';
      navLinksWrap.style.flexDirection = 'column';
      navLinksWrap.style.gap = '0';
      navLinksWrap.style.background = 'rgba(10,18,32,0.98)';
      navLinksWrap.style.borderBottom = '1px solid var(--border)';
      navLinksWrap.querySelectorAll('a').forEach(function (a) {
        a.style.padding = '16px 24px';
        a.style.borderTop = '1px solid var(--border)';
      });
    }
  });
  navLinksWrap.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      if (window.innerWidth <= 880) {
        navToggle.setAttribute('aria-expanded', 'false');
        navLinksWrap.style.display = 'none';
      }
    });
  });
}

var gridBg = document.getElementById('gridBg');
var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (gridBg && !reduceMotion) {
  window.addEventListener('mousemove', function (e) {
    var mx = (e.clientX / window.innerWidth) * 100;
    var my = (e.clientY / window.innerHeight) * 100;
    gridBg.style.setProperty('--mx', mx + '%');
    gridBg.style.setProperty('--my', my + '%');
  });
}
