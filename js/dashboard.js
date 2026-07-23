/* ═══════════════════════════════════════════
   📊 DASHBOARD UPDATE
   ═══════════════════════════════════════════ */
function updateDashboard() {
  const dl = document.getElementById('dashLessons');
  const dv = document.getElementById('dashVocab');
  const dc = document.getElementById('dashCards');
  const dq = document.getElementById('dashQuiz');
  if (dl) {
    const total = SECTIONS.length;
    const done = completed.filter(c => SECTIONS.includes(c)).length;
    dl.textContent = Math.round((done/total)*100) + '%';
  }
  if (dv) dv.textContent = fcKnown.length;
  if (dc) dc.textContent = fcDeck.length;
  if (dq) dq.textContent = fcQuizScore;
  // Update flashcard page if visible
  renderFcPage();
}
