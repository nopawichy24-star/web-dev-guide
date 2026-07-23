/* ═══════════════════════════════════════════
   🃏 FLASHCARD ENGINE (Spaced Repetition)
   ═══════════════════════════════════════════ */
let fcQueue = [];

function openFlashcard() {
  // Get cards due for review
  const now = Date.now();
  fcQueue = fcDeck.filter(c => (c.nextReview || 0) <= now);
  if (fcQueue.length === 0) {
    // If no cards due, show all
    fcQueue = [...fcDeck];
  }
  if (fcQueue.length === 0) {
    alert('ยังไม่มี Flashcard! กดคำศัพท์แล้วกด "❌ จำไม่ได้" เพื่อเพิ่ม');
    return;
  }
  currentFcIdx = 0;
  showFcCard();
  document.getElementById('fcOverlay').classList.add('show');
}

function closeFlashcard() {
  document.getElementById('fcOverlay').classList.remove('show');
}

function showFcCard() {
  if (currentFcIdx >= fcQueue.length) {
    // Done!
    document.getElementById('fcTerm').textContent = '🎉 ทบทวนครบแล้ว!';
    document.getElementById('fcIpa').textContent = '';
    document.getElementById('fcAnswer').classList.remove('show');
    document.getElementById('fcCompare').classList.remove('show');
    document.getElementById('fcActions').innerHTML = '<button class="fc-btn-show" onclick="closeFlashcard()">✅ เสร็จแล้ว!</button>';
    document.getElementById('fcProgress').textContent = `${fcQueue.length} / ${fcQueue.length}`;
    return;
  }
  const card = fcQueue[currentFcIdx];
  document.getElementById('fcTerm').textContent = card.term;
  document.getElementById('fcIpa').textContent = card.ipa || '';
  document.getElementById('fcAnswer').textContent = card.meaning;
  document.getElementById('fcAnswer').classList.remove('show');
  document.getElementById('fcCompare').textContent = card.cmp || '';
  document.getElementById('fcCompare').classList.remove('show');
  document.getElementById('fcActions').innerHTML = '<button class="fc-btn-show" onclick="showFcAnswer()">👆 แตะเพื่อดูคำตอบ</button>';
  document.getElementById('fcProgress').textContent = `${currentFcIdx + 1} / ${fcQueue.length}`;
}

function showFcAnswer() {
  document.getElementById('fcAnswer').classList.add('show');
  document.getElementById('fcCompare').classList.add('show');
  document.getElementById('fcActions').innerHTML =
    '<button class="fc-btn-know" onclick="fcKnow()">😊 จำได้</button>' +
    '<button class="fc-btn-dunno" onclick="fcDunno()">😵 จำไม่ได้</button>';
}

function fcKnow() {
  const card = fcQueue[currentFcIdx];
  // Spaced repetition: double the interval
  card.interval = Math.min((card.interval || 1) * 2, 30);
  card.nextReview = Date.now() + card.interval * 24 * 60 * 60 * 1000;
  // If interval > 14 days, consider known
  if (card.interval > 14) {
    if (!fcKnown.includes(card.term)) fcKnown.push(card.term);
    fcDeck = fcDeck.filter(c => c.term !== card.term);
  }
  saveFcState();
  currentFcIdx++;
  showFcCard();
}

function fcDunno() {
  const card = fcQueue[currentFcIdx];
  // Reset interval
  card.interval = 1;
  card.nextReview = Date.now() + 60 * 60 * 1000; // review in 1 hour
  saveFcState();
  currentFcIdx++;
  showFcCard();
}

function saveFcState() {
  localStorage.setItem('devguide-fc', JSON.stringify(fcDeck));
  localStorage.setItem('devguide-fc-known', JSON.stringify(fcKnown));
  updateDashboard();
}
