/* ═══════════════════════════════════════════
   🧠 QUIZ SCORING — track correct answers
   ═══════════════════════════════════════════ */
document.querySelectorAll('.quiz-card').forEach(card => {
  card.addEventListener('click', function() {
    if (!this.classList.contains('revealed')) {
      this.classList.add('revealed');
      // Count as quiz attempt — score +1 each reveal
      fcQuizScore++;
      localStorage.setItem('devguide-quiz-score', fcQuizScore.toString());
      updateDashboard();
    }
  });
});
