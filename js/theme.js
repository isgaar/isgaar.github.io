/* ==========================================================================
   THEME CONTROLLER (Dark / Light Theme with localStorage)
   ========================================================================== */

(function () {
  var isDark = true;
  var savedTheme = localStorage.getItem('isgaar_theme');
  if (savedTheme === 'light') {
    isDark = false;
  }

  var moonSVG = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';
  var sunSVG = '<circle cx="12" cy="12" r="5"/>'
    + '<line x1="12" y1="1" x2="12" y2="3"/>'
    + '<line x1="12" y1="21" x2="12" y2="23"/>'
    + '<line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>'
    + '<line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>'
    + '<line x1="1" y1="12" x2="3" y2="12"/>'
    + '<line x1="21" y1="12" x2="23" y2="12"/>'
    + '<line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>'
    + '<line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>';

  var btn = document.getElementById('theme-btn');
  var icon = document.getElementById('theme-icon');
  var label = document.getElementById('theme-label');

  function applyTheme() {
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      if (icon) icon.innerHTML = sunSVG;
      if (label) label.textContent = 'Claro';
      localStorage.setItem('isgaar_theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      if (icon) icon.innerHTML = moonSVG;
      if (label) label.textContent = 'Oscuro';
      localStorage.setItem('isgaar_theme', 'light');
    }
  }

  applyTheme();

  if (btn) {
    btn.addEventListener('click', function () {
      isDark = !isDark;
      applyTheme();
    });
  }
})();
