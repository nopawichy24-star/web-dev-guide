/* ═══════════════════════════════════════════
   ✅ CHECKLIST PERSISTENCE
   ═══════════════════════════════════════════ */
document.querySelectorAll('.checklist input[type="checkbox"]').forEach(cb => {
  const key = 'devguide-cl-' + cb.id;
  cb.checked = localStorage.getItem(key) === '1';
  cb.addEventListener('change', () => {
    localStorage.setItem(key, cb.checked ? '1' : '0');
  });
});
