/* ═══════════════════════════════════════════
   🌙 DARK MODE
   ═══════════════════════════════════════════ */
const themeToggle = document.getElementById('themeToggle');
let theme = localStorage.getItem('devguide-theme') || 'light';
applyTheme(theme);

themeToggle.addEventListener('click', () => {
  theme = theme === 'light' ? 'dark' : 'light';
  applyTheme(theme);
  localStorage.setItem('devguide-theme', theme);
});

function applyTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  themeToggle.textContent = t === 'dark' ? '☀️' : '🌙';
}
