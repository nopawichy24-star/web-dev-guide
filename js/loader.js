const PAGE_IDS = ['home', 'getting-started', 'web-basics', 'cli', 'install', 'react', 'git', 'github', 'vercel', 'gh-vercel', 'supabase', 'connect-supa', 'env-vars', 'auth', 'database', 'storage', 'security', 'deployment', 'project', 'ai-coding', 'troubleshoot', 'env-dev-prod', 'ai-workflow', 'debugging', 'testing', 'performance', 'flashcard', 'checklist', 'glossary', 'faq'];

const SCRIPT_FILES = ['core.js', 'theme.js', 'mobile-sidebar.js', 'english-popup.js', 'vocabulary.js', 'flashcard-engine.js', 'dashboard.js', 'flashcard-page.js', 'copy-code.js', 'quiz.js', 'search.js', 'scroll-top.js', 'keyboard.js', 'checklist-storage.js', 'init.js'];

function loadScript(filename) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = `js/${filename}`;
    script.onload = resolve;
    script.onerror = () => reject(new Error(`โหลด ${filename} ไม่สำเร็จ`));
    document.body.appendChild(script);
  });
}

async function loadPageFragment(pageId) {
  const response = await fetch(`pages/${pageId}.html`);

  if (!response.ok) {
    throw new Error(`โหลด pages/${pageId}.html ไม่สำเร็จ`);
  }

  return response.text();
}

async function startWebsite() {
  const container = document.querySelector('.content');

  const pageFragments = await Promise.all(
    PAGE_IDS.map(loadPageFragment)
  );

  container.innerHTML = pageFragments.join('\n');

  for (const filename of SCRIPT_FILES) {
    await loadScript(filename);
  }
}

startWebsite().catch((error) => {
  console.error(error);

  const container = document.querySelector('.content');

  if (container) {
    container.innerHTML = `
      <div class="callout danger">
        <div class="callout-title">❌ เปิดเว็บไซต์ไม่สำเร็จ</div>
        <p>เว็บไซต์นี้ต้องเปิดผ่าน Live Server, GitHub Pages หรือ Vercel</p>
        <p>ไม่ควรดับเบิลคลิกไฟล์ index.html โดยตรง</p>
        <p><code>${error.message}</code></p>
      </div>
    `;
  }
});
