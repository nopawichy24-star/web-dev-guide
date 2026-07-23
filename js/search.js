/* ═══════════════════════════════════════════
   🔍 SEARCH
   ═══════════════════════════════════════════ */
const searchOverlay = document.getElementById('searchOverlay');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

// Build search index from sections
const searchIndex = [];
document.querySelectorAll('.section').forEach(sec => {
  const id = sec.id.replace('sec-', '');
  const title = SECTION_TITLES[id] || id;
  const text = sec.textContent.substring(0, 500);
  searchIndex.push({ id, title, text });
});

function openSearch() {
  searchOverlay.classList.add('show');
  searchInput.value = '';
  searchInput.focus();
  searchResults.innerHTML = '<div class="search-empty">พิมพ์เพื่อค้นหา...</div>';
}

searchOverlay.addEventListener('click', (e) => {
  if (e.target === searchOverlay) searchOverlay.classList.remove('show');
});

searchInput.addEventListener('input', () => {
  const q = searchInput.value.toLowerCase().trim();
  if (!q) {
    searchResults.innerHTML = '<div class="search-empty">พิมพ์เพื่อค้นหา...</div>';
    return;
  }
  const matches = searchIndex.filter(item =>
    item.title.toLowerCase().includes(q) || item.text.toLowerCase().includes(q)
  );
  if (matches.length === 0) {
    searchResults.innerHTML = '<div class="search-empty">ไม่พบผลลัพธ์ 😔</div>';
    return;
  }
  searchResults.innerHTML = matches.map(m => {
    const idx = m.text.toLowerCase().indexOf(q);
    const preview = idx > -1 ? '...' + m.text.substring(Math.max(0, idx - 30), idx + 60) + '...' : '';
    return `<div class="search-result-item" onclick="goTo('${m.id}'); searchOverlay.classList.remove('show');">
      <div class="sr-title">${m.title}</div>
      <div class="sr-preview">${preview}</div>
    </div>`;
  }).join('');
});

// Keyboard shortcut
document.addEventListener('keydown', (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); openSearch(); }
  if (e.key === 'Escape') { searchOverlay.classList.remove('show'); }
});
