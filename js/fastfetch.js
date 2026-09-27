/* ==========================================================================
   FASTFETCH TERMINAL ANIMATOR
   ========================================================================== */

(function () {
  const terminalSection = document.getElementById('linux-terminal-section');
  const typedCmdEl = document.getElementById('term-typed-cmd');
  const outputEl = document.getElementById('fastfetch-output');
  const cursorEl = document.getElementById('term-cursor');

  if (!terminalSection || !typedCmdEl || !outputEl) return;

  const commandText = 'fastfetch';
  let isAnimated = false;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function runFastfetchInstant() {
    typedCmdEl.textContent = commandText;
    if (cursorEl) cursorEl.style.display = 'none';
    outputEl.classList.add('revealed');
  }

  function startTypingAnimation() {
    let charIndex = 0;
    typedCmdEl.textContent = '';

    const typingInterval = setInterval(() => {
      if (charIndex < commandText.length) {
        typedCmdEl.textContent += commandText.charAt(charIndex);
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          if (cursorEl) cursorEl.style.display = 'none';
          outputEl.classList.add('revealed');
        }, 300);
      }
    }, 85);
  }

  if (prefersReducedMotion) {
    runFastfetchInstant();
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !isAnimated) {
        isAnimated = true;
        startTypingAnimation();
        observer.unobserve(terminalSection);
      }
    });
  }, {
    threshold: 0.35
  });

  observer.observe(terminalSection);
})();
