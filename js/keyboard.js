/* ═══════════════════════════════════════════
   ⌨️ KEYBOARD NAVIGATION
   ═══════════════════════════════════════════ */
document.addEventListener('keydown', (e) => {
  // Ctrl+K = Search (already handled above)
  // Left/Right arrows = prev/next section
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

  if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
    const activeNav = document.querySelector('.nav-item.active');
    if (!activeNav) return;
    const currentId = activeNav.dataset.section;
    const idx = SECTIONS.indexOf(currentId);
    if (idx === -1) return;

    let nextIdx;
    if (e.key === 'ArrowRight') {
      nextIdx = Math.min(idx + 1, SECTIONS.length - 1);
    } else {
      nextIdx = Math.max(idx - 1, 0);
    }
    if (nextIdx !== idx) goTo(SECTIONS[nextIdx]);
  }
});
