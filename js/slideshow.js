/* Lazy project media: only the visible preview is mounted. */
(function () {
  'use strict';
  const projects = {
    ssap: ['./src/ssap/ssap-screenshot.png', './src/ssap/ssap-screenshot1.png', './src/ssap/ssap-screenshot2.png', './src/ssap/ssap-screenshot3.png', './src/ssap/ssap-screenshot4.png', './src/ssap/ssap-screenshot5.png'],
    pipelinebooks: ['./src/pipelinebooks/pipeline_srecord.mp4', './src/pipelinebooks/pipelinebooks-screensho1.png', './src/pipelinebooks/pipelinebooks-screensho2.png', './src/pipelinebooks/pipelinebooks-screensho3.png', './src/pipelinebooks/pipelinebooks-screensho4.png', './src/pipelinebooks/pipelinebooks-screensho5.png', './src/pipelinebooks/pipelinebooks-screensho6.png', './src/pipelinebooks/pipelinebooks-screensho7.png', './src/pipelinebooks/pipelinebooks-screensho8.png'],
    atomos: ['./src/atomos-virtuales/atomos-screenshot.png', './src/atomos-virtuales/atomos-screenshot1.png', './src/atomos-virtuales/atomos-screenshot2.png', './src/atomos-virtuales/atomos-screenshot3.png', './src/atomos-virtuales/atomos-screenshot4.png'],
    linuxtools: ['./src/linux-tools/linuxtools-screenshot.png', './src/linux-tools/linuxtools-screenshot1.png', './src/linux-tools/linuxtools-screenshot2.png', './src/linux-tools/linuxtools-screenshot3.png', './src/linux-tools/linuxtools-screenshot4.png'],
    frangy: ['./src/frangy-control/frangy-screenshot.png', './src/frangy-control/frangy-screenshot2.png', './src/frangy-control/frangy-screenshot3.png', './src/frangy-control/frangy-screenshot4.png']
  };
  const state = {};
  const isVideo = src => src.endsWith('.mp4');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function render(key) {
    const s = state[key]; if (!s || !s.mounted) return;
    const src = s.items[s.current], track = s.track;
    const previous = track.firstElementChild;
    const slide = document.createElement('div');
    slide.className = 'slide-item' + (s.hasRendered ? ' slide-enter-from-right' : '');
    const media = document.createElement(isVideo(src) ? 'video' : 'img');
    if (isVideo(src)) { media.src = src; media.muted = true; media.loop = true; media.playsInline = true; media.preload = 'metadata'; if (!reduced) media.play().catch(() => {}); }
    else { media.src = src; media.alt = s.name + ' — captura ' + (s.current + 1); media.loading = 'lazy'; media.decoding = 'async'; }
    slide.append(media);
    if (previous && !reduced) {
      previous.classList.add('slide-exit-to-left');
      previous.addEventListener('animationend', () => previous.remove(), { once: true });
    } else if (previous) {
      previous.remove();
    }
    track.append(slide);
    s.hasRendered = true;
    s.counter.textContent = (s.current + 1) + ' / ' + s.items.length;
    s.dots.querySelectorAll('button').forEach((dot, i) => dot.classList.toggle('active', i === s.current));
  }
  function change(key, index) { const s = state[key]; s.current = (index + s.items.length) % s.items.length; render(key); }
  function stopAuto(key) { const s = state[key]; if (s && s.timer) { window.clearInterval(s.timer); s.timer = null; } }
  function startAuto(key) {
    const s = state[key];
    if (!s || reduced || s.items.length < 2) return;
    stopAuto(key);
    s.timer = window.setInterval(() => { if (!active && s.mounted) change(key, s.current + 1); }, 5000);
  }
  function mount(key) {
    const s = state[key];
    if (s.mounted) return;
    s.mounted = true;
    render(key);
    startAuto(key);
  }
  function unmount(key) {
    const s = state[key];
    s.mounted = false;
    stopAuto(key);
    s.track.replaceChildren();
  }
  Object.entries(projects).forEach(([key, items]) => {
    const track = document.getElementById('track-' + key), dots = document.getElementById('dots-' + key), counter = document.getElementById('counter-' + key);
    if (!track || !dots || !counter) return;
    const wrap = track.closest('.slideshow-wrap');
    state[key] = { key, name: wrap.dataset.project, items, track, dots, counter, current: 0, mounted: false, hasRendered: false, timer: null };
    items.forEach((_, i) => { const dot = document.createElement('button'); dot.className = 'slide-dot'; dot.type = 'button'; dot.setAttribute('aria-label', 'Ver captura ' + (i + 1)); dot.addEventListener('click', e => { e.stopPropagation(); change(key, i); startAuto(key); }); dots.append(dot); });
    wrap.addEventListener('click', () => openLightbox(key));
  });
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    const key = entry.target.dataset.slideshow; if (!state[key]) return;
    entry.isIntersecting ? mount(key) : unmount(key);
  }), { rootMargin: '700px 0px' });
  document.querySelectorAll('[data-slideshow]').forEach(el => observer.observe(el));

  const box = document.getElementById('lightbox'), image = document.getElementById('lb-img'), video = document.getElementById('lb-video');
  let active = null;
  function showLightbox() {
    const s = state[active], src = s.items[s.current];
    document.getElementById('lb-project').textContent = s.name; document.getElementById('lb-counter').textContent = (s.current + 1) + ' / ' + s.items.length;
    image.removeAttribute('src'); video.pause(); video.removeAttribute('src');
    if (isVideo(src)) { image.hidden = true; video.hidden = false; video.src = src; video.play().catch(() => {}); }
    else { video.hidden = true; image.hidden = false; image.src = src; image.alt = s.name + ' — captura ' + (s.current + 1); }
  }
  function openLightbox(key) { active = key; stopAuto(key); showLightbox(); box.classList.add('active'); box.setAttribute('aria-hidden', 'false'); document.body.classList.add('modal-open'); }
  function closeLightbox() { const previous = active; video.pause(); video.removeAttribute('src'); box.classList.remove('active'); box.setAttribute('aria-hidden', 'true'); document.body.classList.remove('modal-open'); active = null; if (previous && state[previous].mounted) startAuto(previous); }
  document.getElementById('lb-close').addEventListener('click', closeLightbox);
  document.getElementById('lb-prev').addEventListener('click', () => { if (active) { change(active, state[active].current - 1); showLightbox(); } });
  document.getElementById('lb-next').addEventListener('click', () => { if (active) { change(active, state[active].current + 1); showLightbox(); } });
  box.addEventListener('click', event => { if (event.target === box) closeLightbox(); });
  document.addEventListener('keydown', event => { if (!active) return; if (event.key === 'Escape') closeLightbox(); if (event.key === 'ArrowLeft') document.getElementById('lb-prev').click(); if (event.key === 'ArrowRight') document.getElementById('lb-next').click(); });
})();
