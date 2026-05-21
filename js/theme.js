(function () {
  // Apply the saved theme as early as possible to avoid a flash. Default: light.
  try {
    document.documentElement.setAttribute('data-theme', localStorage.getItem('theme') || 'light');
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'light');
  }

  // Wire up the toggle button once the DOM is ready.
  document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.getElementById('themeToggle');
    if (!toggle) return;
    toggle.addEventListener('click', function () {
      var root = document.documentElement;
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  });
})();
