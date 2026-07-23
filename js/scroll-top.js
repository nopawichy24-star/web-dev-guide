/* ═══════════════════════════════════════════
   ⬆️ SCROLL TO TOP
   ═══════════════════════════════════════════ */
const scrollTopBtn = document.getElementById('scrollTopBtn');
const readingProgressEl = document.getElementById('readingProgress');
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    scrollTopBtn.classList.add('show');
  } else {
    scrollTopBtn.classList.remove('show');
  }
  // Reading progress
  const h = document.documentElement.scrollHeight - window.innerHeight;
  const pct = h > 0 ? (window.scrollY / h) * 100 : 0;
  readingProgressEl.style.width = Math.min(pct, 100) + '%';
});
