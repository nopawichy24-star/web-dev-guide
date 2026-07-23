/* ═══════════════════════════════════════════
   📋 COPY CODE
   ═══════════════════════════════════════════ */
function copyCode(btn) {
  const block = btn.closest('.code-block');
  const code = block.querySelector('code').textContent;
  navigator.clipboard.writeText(code).then(() => {
    btn.textContent = '✅ คัดลอกแล้ว!';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = '📋 คัดลอก'; btn.classList.remove('copied'); }, 2000);
  });
}
