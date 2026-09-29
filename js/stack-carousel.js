/**
 * stack-carousel.js
 * Carrusel infinito basado en requestAnimationFrame.
 * Evita los saltos del marquee CSS causados por resets de transform,
 * pérdida de foco del tab y sub-píxeles en la animación.
 */
(function () {
  'use strict';

  const SPEED = 0.55; // px por frame a 60 fps ≈ 33 px/s

  function init() {
    const track = document.querySelector('.stack-carousel-track');
    if (!track) return;

    // Espera a que las fuentes (devicons) estén cargadas para medir correctamente
    (document.fonts ? document.fonts.ready : Promise.resolve()).then(function () {
      let x = 0;
      let paused = false;
      let halfWidth = 0;

      function measure() {
        // El track tiene dos copias idénticas; la mitad es el ancho de un set
        halfWidth = track.scrollWidth / 2;
      }

      measure();

      // Re-mide si la ventana cambia de tamaño
      window.addEventListener('resize', measure, { passive: true });

      // Pausa al hover sobre el área de overflow (los iconos)
      const wrap = track.closest('.stack-carousel-overflow-wrap');
      if (wrap) {
        wrap.addEventListener('mouseenter', function () { paused = true; });
        wrap.addEventListener('mouseleave', function () { paused = false; });
      }

      // Detiene la animación si el usuario prefiere movimiento reducido
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
      if (mq.matches) return;

      function tick() {
        if (!paused) {
          x -= SPEED;
          // Reset atómico: en cuanto llegamos a -halfWidth volvemos a 0
          // sin pasar por cero (evita el flash de salto)
          if (x <= -halfWidth) x += halfWidth;
          track.style.transform = 'translateX(' + x + 'px)';
        }
        requestAnimationFrame(tick);
      }

      requestAnimationFrame(tick);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
