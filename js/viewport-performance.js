/* Reveals content once and lets the browser skip off-screen layout/paint. */
(function () {
  'use strict';
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const items = document.querySelectorAll('.reveal');
  if (reduce || !('IntersectionObserver' in window)) { items.forEach(item => item.classList.add('is-visible')); return; }
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-visible', 'visible');
    observer.unobserve(entry.target);
  }), { rootMargin: '0px 0px -80px 0px', threshold: 0.2 });
  items.forEach(item => observer.observe(item));
})();
