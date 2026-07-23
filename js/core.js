/* ═══════════════════════════════════════════
   🧠 CORE ENGINE
   ═══════════════════════════════════════════ */

// Section mapping
const SECTIONS = [
  'home','getting-started','web-basics','cli','install',
  'react',
  'git','github','vercel','gh-vercel',
  'supabase','connect-supa','env-vars','auth','database','storage','security',
  'env-dev-prod',
  'deployment','project','ai-coding','ai-workflow','debugging','testing',
  'troubleshoot','performance',
  'flashcard','checklist','glossary','faq'
];

const SECTION_TITLES = {
  'home':'🏠 หน้าแรก','getting-started':'🎯 เริ่มต้นใช้งาน','web-basics':'🌐 พื้นฐานเว็บ',
  'cli':'⌨️ Command Line','install':'🔧 ติดตั้งเครื่องมือ',
  'react':'⚛️ React Fundamentals',
  'git':'📦 คู่มือ Git',
  'github':'🐙 คู่มือ GitHub','vercel':'▲ คู่มือ Vercel','gh-vercel':'🔗 GitHub+Vercel',
  'supabase':'⚡ คู่มือ Supabase','connect-supa':'🔌 เชื่อมเว็บ+Supabase',
  'env-vars':'🔐 Env Variables','auth':'👤 Authentication','database':'🗄️ Database',
  'storage':'📁 Storage','security':'🛡️ Security & RLS',
  'env-dev-prod':'🌍 Dev vs Production',
  'deployment':'🚀 Deployment',
  'project':'📋 Task App','ai-coding':'🤖 AI ช่วยเขียนโค้ด',
  'ai-workflow':'🔄 AI Workflow','debugging':'🐛 Debugging','testing':'🧪 Testing',
  'troubleshoot':'🔧 แก้ปัญหา','performance':'⚡ Performance',
  'checklist':'✅ Checklist','glossary':'📖 คำศัพท์','faq':'❓ FAQ',
  'flashcard':'🃏 Flashcard'
};

// Completed sections (persist in localStorage)
let completed = JSON.parse(localStorage.getItem('devguide-completed') || '[]');

// Navigate to section
function goTo(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  const sec = document.getElementById('sec-' + id);
  if (sec) sec.classList.add('active');

  // Update sidebar active
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const navItem = document.querySelector(`.nav-item[data-section="${id}"]`);
  if (navItem) {
    navItem.classList.add('active');
    navItem.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }

  // Update topbar
  document.getElementById('topbarTitle').textContent = SECTION_TITLES[id] || id;

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Close sidebar on mobile
  closeSidebar();

  // Update complete button state
  updateCompleteBtn(id);
}

// Toggle section completion
function toggleComplete(id) {
  const idx = completed.indexOf(id);
  if (idx === -1) { completed.push(id); } else { completed.splice(idx, 1); }
  localStorage.setItem('devguide-completed', JSON.stringify(completed));
  updateCompleteBtn(id);
  updateProgress();
  updateNavBadges();
}

function updateCompleteBtn(id) {
  const sec = document.getElementById('sec-' + id);
  if (!sec) return;
  const btn = sec.querySelector('.section-complete-btn');
  if (!btn) return;
  if (completed.includes(id)) {
    btn.classList.add('done');
    btn.textContent = '🎉 เรียนจบแล้ว! (กดเพื่อยกเลิก)';
  } else {
    btn.classList.remove('done');
    btn.textContent = '✅ เรียนจบหน้านี้แล้ว';
  }
}

function updateProgress() {
  const total = SECTIONS.length; // all sections
  const done = completed.filter(c => SECTIONS.includes(c)).length;
  const pct = Math.round((done / total) * 100);
  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('progressText').textContent = pct + '%';
}

function updateNavBadges() {
  document.querySelectorAll('.nav-item').forEach(item => {
    const sec = item.dataset.section;
    if (!sec) return;
    const existing = item.querySelector('.badge-done');
    if (completed.includes(sec)) {
      if (!existing) {
        const badge = document.createElement('span');
        badge.className = 'badge-done';
        badge.textContent = '✅';
        // Remove "เร็วๆนี้" badge if exists
        const soon = item.querySelector('.badge-soon');
        if (soon && ['home','getting-started','web-basics','cli','install'].includes(sec)) soon.remove();
        item.appendChild(badge);
      }
    } else if (existing) {
      existing.remove();
    }
  });
}
