/* ═══════════════════════════════════════════
   🃏 FLASHCARD PAGE ENGINE
   ═══════════════════════════════════════════ */
let fcPracQueue = [];
let fcPracIdx = 0;

function renderFcPage() {
  const totalEl = document.getElementById('fpsTotal');
  if (!totalEl) return;
  
  const total = fcDeck.length + fcKnown.length;
  document.getElementById('fpsTotal').textContent = total;
  document.getElementById('fpsKnown').textContent = fcKnown.length;
  document.getElementById('fpsUnknown').textContent = fcDeck.length;
  document.getElementById('fcUnknownCount').textContent = fcDeck.length;
  document.getElementById('fcKnownCount').textContent = fcKnown.length;

  // Render unknown list
  const unknownList = document.getElementById('fcUnknownList');
  if (fcDeck.length === 0) {
    unknownList.innerHTML = '<p style="color:var(--text-muted)">ยังไม่มี — กดคำศัพท์ในบทเรียนแล้วกด "❌ จำไม่ได้" เพื่อเพิ่ม หรือกด "📥 เพิ่มศัพท์ทั้งหมด"</p>';
  } else {
    unknownList.innerHTML = fcDeck.map((c, i) =>
      `<div class="fc-card-item">
        <span class="fci-term">${c.term}</span>
        <span class="fci-meaning">${c.meaning}</span>
        <button class="fci-delete" onclick="fcRemoveCard(${i},'deck')" title="ลบ">✕</button>
      </div>`
    ).join('');
  }

  // Render known list
  const knownList = document.getElementById('fcKnownList');
  if (fcKnown.length === 0) {
    knownList.innerHTML = '<p style="color:var(--text-muted)">ยังไม่มี — ฝึกแล้วกด "😊 จำได้" เพื่อย้ายมาที่นี่</p>';
  } else {
    // Lookup meanings for known terms
    knownList.innerHTML = fcKnown.map((term, i) => {
      const v = lookupVocab(term);
      return `<div class="fc-card-item known">
        <span class="fci-term">${term}</span>
        <span class="fci-meaning">${v ? v.th : ''}</span>
        <button class="fci-delete" onclick="fcRemoveCard(${i},'known')" title="ลบ">✕</button>
      </div>`;
    }).join('');
  }
}

function fcRemoveCard(idx, list) {
  if (list === 'deck') {
    fcDeck.splice(idx, 1);
    localStorage.setItem('devguide-fc', JSON.stringify(fcDeck));
  } else {
    fcKnown.splice(idx, 1);
    localStorage.setItem('devguide-fc-known', JSON.stringify(fcKnown));
  }
  renderFcPage();
  updateDashboard();
}

function fcAddAllVocab() {
  let added = 0;
  for (const [term, info] of Object.entries(VOCAB)) {
    if (!fcDeck.find(c => c.term === term) && !fcKnown.includes(term)) {
      fcDeck.push({
        term, meaning: info.th, ipa: info.ipa || '', cmp: info.cmp || '',
        added: Date.now(), nextReview: Date.now(), interval: 1
      });
      added++;
    }
  }
  localStorage.setItem('devguide-fc', JSON.stringify(fcDeck));
  renderFcPage();
  updateDashboard();
  alert(`เพิ่ม ${added} คำใหม่! (ข้าม ${Object.keys(VOCAB).length - added} คำที่มีอยู่แล้ว)`);
}

function fcClearAll() {
  if (!confirm('ลบ Flashcard ทั้งหมด? (ทั้งจำได้และจำไม่ได้)')) return;
  fcDeck = [];
  fcKnown = [];
  localStorage.setItem('devguide-fc', '[]');
  localStorage.setItem('devguide-fc-known', '[]');
  renderFcPage();
  updateDashboard();
}

// Practice modes
function fcPracticeAll() {
  const all = [...fcDeck];
  // Add known terms with vocab lookup
  fcKnown.forEach(term => {
    const v = lookupVocab(term);
    if (v) all.push({ term, meaning: v.th, ipa: v.ipa || '', cmp: v.cmp || '' });
  });
  if (all.length === 0) { alert('ยังไม่มี Flashcard! กด "📥 เพิ่มศัพท์ทั้งหมด" ก่อน'); return; }
  startFcPractice(shuffleArray(all));
}

function fcPracticeUnknown() {
  if (fcDeck.length === 0) { alert('ไม่มีการ์ดที่ต้องทบทวน! 🎉'); return; }
  startFcPractice(shuffleArray([...fcDeck]));
}

function fcPracticeKnown() {
  const cards = [];
  fcKnown.forEach(term => {
    const v = lookupVocab(term);
    if (v) cards.push({ term, meaning: v.th, ipa: v.ipa || '', cmp: v.cmp || '' });
  });
  if (cards.length === 0) { alert('ยังไม่มีการ์ดที่จำได้!'); return; }
  startFcPractice(shuffleArray(cards));
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function startFcPractice(cards) {
  fcPracQueue = cards;
  fcPracIdx = 0;
  document.getElementById('fcPracticeArea').style.display = 'block';
  document.getElementById('fcPracticeArea').scrollIntoView({ behavior: 'smooth' });
  showFcPracCard();
}

function showFcPracCard() {
  const card = document.getElementById('fcPracCard');
  const btns = document.getElementById('fcPracBtns');
  
  if (fcPracIdx >= fcPracQueue.length) {
    document.getElementById('fcPracTerm').textContent = '🎉 ครบแล้ว!';
    document.getElementById('fcPracIpa').textContent = '';
    document.getElementById('fcPracAnswer').style.display = 'none';
    document.getElementById('fcPracCmp').style.display = 'none';
    card.querySelector('.fpc-hint').textContent = 'ทำได้ดีมาก!';
    card.querySelector('.fpc-hint').style.display = 'block';
    btns.style.display = 'none';
    document.getElementById('fcPracProgress').textContent = `${fcPracQueue.length} / ${fcPracQueue.length} ✅`;
    return;
  }

  const c = fcPracQueue[fcPracIdx];
  document.getElementById('fcPracTerm').textContent = c.term;
  document.getElementById('fcPracIpa').textContent = c.ipa || '';
  document.getElementById('fcPracAnswer').textContent = c.meaning;
  document.getElementById('fcPracCmp').textContent = c.cmp || '';
  card.classList.remove('flipped');
  btns.style.display = 'none';
  card.querySelector('.fpc-hint').style.display = 'block';
  document.getElementById('fcPracProgress').textContent = `${fcPracIdx + 1} / ${fcPracQueue.length}`;
}

function fcFlipCard() {
  const card = document.getElementById('fcPracCard');
  if (fcPracIdx >= fcPracQueue.length) return;
  if (!card.classList.contains('flipped')) {
    card.classList.add('flipped');
    document.getElementById('fcPracBtns').style.display = 'flex';
  }
}

function fcPracKnow() {
  const c = fcPracQueue[fcPracIdx];
  // Move to known
  if (!fcKnown.includes(c.term)) fcKnown.push(c.term);
  fcDeck = fcDeck.filter(d => d.term !== c.term);
  saveFcState();
  fcPracIdx++;
  showFcPracCard();
}

function fcPracDunno() {
  const c = fcPracQueue[fcPracIdx];
  // Make sure it's in deck
  if (!fcDeck.find(d => d.term === c.term)) {
    fcDeck.push({
      term: c.term, meaning: c.meaning, ipa: c.ipa || '', cmp: c.cmp || '',
      added: Date.now(), nextReview: Date.now(), interval: 1
    });
  }
  // Remove from known
  fcKnown = fcKnown.filter(k => k !== c.term);
  saveFcState();
  fcPracIdx++;
  showFcPracCard();
}
