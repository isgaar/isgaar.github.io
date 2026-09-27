/* ==========================================================================
   DEMO MODAL CONTROLLER
   ========================================================================== */

(function () {
  const demoModal = document.getElementById('demoModal');
  const demoIframe = document.getElementById('demoModalIframe');
  const demoHeading = document.getElementById('demoModalHeading');
  const demoExtLink = document.getElementById('demoModalExternalLink');
  const demoClose = document.getElementById('demoModalClose');

  function openDemo(url, title) {
    if (!demoModal || !demoIframe) return;
    if (demoHeading) demoHeading.textContent = title;
    if (demoExtLink) demoExtLink.href = url;
    demoIframe.src = url;
    demoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDemo() {
    if (!demoModal || !demoIframe) return;
    demoModal.classList.remove('active');
    document.body.style.overflow = '';
    demoIframe.src = 'about:blank';
  }

  document.querySelectorAll('.proj-demo-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const url = btn.getAttribute('data-demo-url');
      const title = btn.getAttribute('data-demo-title') || 'Demo Interactivo';
      if (url) openDemo(url, title);
    });
  });

  if (demoClose) demoClose.addEventListener('click', closeDemo);

  if (demoModal) {
    demoModal.addEventListener('click', (e) => {
      if (e.target === demoModal) {
        closeDemo();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (demoModal && demoModal.classList.contains('active') && e.key === 'Escape') {
      closeDemo();
    }
  });
})();
