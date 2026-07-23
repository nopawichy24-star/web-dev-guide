/* ═══════════════════════════════════════════
   🔤 VOCABULARY DATABASE + ENHANCED POPUP
   ═══════════════════════════════════════════ */
const VOCAB = {
  'Git':{ipa:'/ɡɪt/',th:'ระบบควบคุมเวอร์ชัน',cmp:'📸 เหมือนประวัติการแก้ไขใน Google Docs'},
  'GitHub':{ipa:'/ˈɡɪt.hʌb/',th:'เว็บไซต์เก็บโค้ดบนคลาวด์',cmp:'☁️ เหมือน Google Drive สำหรับโค้ด'},
  'Vercel':{ipa:'/vɜːrˈsɛl/',th:'แพลตฟอร์มเผยแพร่เว็บไซต์',cmp:'🏗️ ช่างก่อสร้างที่สร้างบ้านจากแบบแปลน'},
  'Supabase':{ipa:'/ˈsuː.pə.beɪs/',th:'ระบบฐานข้อมูลสำเร็จรูป',cmp:'🗄️ ตู้เก็บเอกสารอัจฉริยะ'},
  'Deploy':{ipa:'/dɪˈplɔɪ/',th:'การนำเว็บไซต์ขึ้นออนไลน์',cmp:'📦 ส่งสินค้าออกจากโรงงาน'},
  'Repository':{ipa:'/rɪˈpɒz.ɪ.tɔːr.i/',th:'ที่เก็บโค้ดทั้งโปรเจกต์',cmp:'📁 โฟลเดอร์โปรเจกต์ทั้งหมด'},
  'Commit':{ipa:'/kəˈmɪt/',th:'จุดบันทึกสถานะโค้ด',cmp:'📸 เซฟเกม — บันทึกแล้วย้อนกลับได้'},
  'Branch':{ipa:'/bræntʃ/',th:'สายงานแยก ทำงานไม่กระทบ Branch อื่น',cmp:'🌿 กิ่งก้านที่แตกออกจากลำต้น'},
  'Merge':{ipa:'/mɜːrdʒ/',th:'การรวม Branch เข้าด้วยกัน',cmp:'🔀 รวมถนน 2 สายเข้าเป็นสายเดียว'},
  'Push':{ipa:'/pʊʃ/',th:'ส่งโค้ดจากเครื่องเราขึ้น GitHub',cmp:'📤 อัปโหลดไฟล์ขึ้นคลาวด์'},
  'Pull':{ipa:'/pʊl/',th:'ดึงโค้ดล่าสุดจาก GitHub มาเครื่องเรา',cmp:'📥 ดาวน์โหลดอัปเดตล่าสุด'},
  'Frontend':{ipa:'/ˈfrʌnt.ɛnd/',th:'ส่วนที่ผู้ใช้เห็นและโต้ตอบได้',cmp:'🏠 หน้าบ้านที่แขกเห็น'},
  'Backend':{ipa:'/ˈbæk.ɛnd/',th:'ส่วนที่ทำงานเบื้องหลัง',cmp:'🍳 ห้องครัวที่ทำอาหาร'},
  'Database':{ipa:'/ˈdeɪ.tə.beɪs/',th:'ที่เก็บข้อมูลทั้งหมดอย่างเป็นระบบ',cmp:'🗄️ ตู้เก็บเอกสาร'},
  'API':{ipa:'/ˌeɪ.piːˈaɪ/',th:'ช่องทางที่โปรแกรมสื่อสารกัน',cmp:'🧑‍🍳 พนักงานเสิร์ฟระหว่างลูกค้ากับห้องครัว'},
  'Component':{ipa:'/kəmˈpoʊ.nənt/',th:'ชิ้นส่วน UI ที่นำกลับมาใช้ซ้ำได้',cmp:'🧱 เลโก้ 1 ชิ้น ประกอบเป็นหน้าเว็บ'},
  'State':{ipa:'/steɪt/',th:'ข้อมูลที่เปลี่ยนได้ใน Component',cmp:'📊 สถานะปัจจุบัน เช่น จำนวนสินค้าในตะกร้า'},
  'Hook':{ipa:'/hʊk/',th:'ฟังก์ชันพิเศษของ React ใช้จัดการ State',cmp:'🎣 เบ็ดตกปลา — ดึงความสามารถพิเศษมาใช้'},
  'Terminal':{ipa:'/ˈtɜːr.mɪ.nəl/',th:'หน้าต่างพิมพ์คำสั่งคอมพิวเตอร์',cmp:'⌨️ จอดำที่เห็นในหนัง'},
  'npm':{ipa:'/ɛn.piːˈɛm/',th:'ตัวจัดการ package ของ Node.js',cmp:'📦 ร้านสะดวกซื้อสำหรับโค้ด'},
  'JSON':{ipa:'/ˈdʒeɪ.sɒn/',th:'รูปแบบข้อมูลที่ทุกภาษาเข้าใจ',cmp:'📋 ภาษากลางแลกเปลี่ยนข้อมูล'},
  'RLS':{ipa:'',th:'Row Level Security — กำหนดว่าใครเห็นข้อมูลแถวไหน',cmp:'🛡️ รปภ.ที่ตรวจบัตรก่อนเข้า'},
  'Authentication':{ipa:'/ɔːˌθɛn.tɪˈkeɪ.ʃən/',th:'ระบบยืนยันตัวตน — Login/Signup',cmp:'🪪 ตรวจบัตรประชาชนก่อนเข้า'},
  'Hosting':{ipa:'/ˈhoʊ.stɪŋ/',th:'บริการเก็บเว็บไซต์ให้ออนไลน์ 24 ชม.',cmp:'🏨 โรงแรมที่เว็บพักอยู่'},
  'Environment Variables':{ipa:'',th:'ค่าตั้งค่าที่เก็บแยกจากโค้ด',cmp:'🔐 ตู้เซฟเก็บกุญแจ'},
  'Build':{ipa:'/bɪld/',th:'กระบวนการแปลงโค้ดเป็นเว็บที่พร้อมใช้',cmp:'🏗️ สร้างบ้านจากพิมพ์เขียว'},
  'Middleware':{ipa:'/ˈmɪd.əl.wɛr/',th:'โค้ดที่ทำงานก่อนหน้าเว็บโหลด',cmp:'🚪 รปภ.หน้าประตู ตรวจก่อนให้เข้า'},
  'Pagination':{ipa:'/ˌpædʒ.ɪˈneɪ.ʃən/',th:'แบ่งข้อมูลเป็นหน้าๆ',cmp:'📖 เหมือนหนังสือแบ่งเป็นหน้า'},
  'Cache':{ipa:'/kæʃ/',th:'เก็บข้อมูลไว้ชั่วคราว ไม่ต้องโหลดซ้ำ',cmp:'🧊 ตู้เย็น เก็บของกินไว้หยิบง่าย'},
  'Render':{ipa:'/ˈrɛn.dər/',th:'แสดงผลหน้าเว็บ',cmp:'🎨 วาดภาพบนผืนผ้าใบ'},
  'Props':{ipa:'/prɒps/',th:'ข้อมูลที่ส่งจาก Component แม่ไป Component ลูก',cmp:'📬 จดหมายที่แม่ส่งให้ลูก'},
  'JSX':{ipa:'/ˌdʒeɪ.ɛs.ˈɛks/',th:'ภาษาผสม HTML + JavaScript ใช้ใน React',cmp:'🧬 ลูกผสมระหว่าง HTML กับ JS'},
  'useState':{ipa:'',th:'Hook สำหรับเก็บข้อมูลที่เปลี่ยนได้ใน Component',cmp:'📦 กล่องเก็บของที่เปิดปิดได้'},
  'useEffect':{ipa:'',th:'Hook สำหรับทำงานหลัง Render เช่น โหลดข้อมูล',cmp:'⏰ นาฬิกาปลุก ทำงานหลังตื่น'},
  'TypeScript':{ipa:'/ˈtaɪp.skrɪpt/',th:'JavaScript ที่มีระบบ Type ช่วยหาบั๊ก',cmp:'📐 ไม้บรรทัด ช่วยวัดให้ตรง'},
  'Tailwind':{ipa:'/ˈteɪl.wɪnd/',th:'CSS Framework ที่เขียน Style ใน Class โดยตรง',cmp:'🎨 สีสำเร็จรูป ไม่ต้องผสมเอง'},
  'Next.js':{ipa:'/nɛkst/',th:'Framework ของ React ที่มี Routing + Server Rendering',cmp:'🏠 บ้านสำเร็จรูป พร้อมอยู่'},
  'Route':{ipa:'/ruːt/',th:'เส้นทาง URL เช่น /login, /tasks',cmp:'🛤️ ถนนที่พาไปหน้าต่างๆ'},
  'Async':{ipa:'/eɪˈsɪŋk/',th:'ทำงานแบบไม่รอ — ส่งคำขอแล้วทำอย่างอื่นต่อ',cmp:'📱 สั่งอาหารแล้วเล่นมือถือรอ'},
  'Await':{ipa:'/əˈweɪt/',th:'รอจนกว่าจะทำเสร็จ — ใช้คู่กับ Async',cmp:'⏳ รอพัสดุมาส่ง'},
  'Fetch':{ipa:'/fɛtʃ/',th:'ส่ง HTTP Request ไปดึงข้อมูลจาก API',cmp:'🐕 สุนัขไปเอาของกลับมา'},
  'Token':{ipa:'/ˈtoʊ.kən/',th:'รหัสพิเศษที่ใช้ยืนยันตัวตน',cmp:'🎟️ ตั๋วเข้างาน พิสูจน์ว่าซื้อแล้ว'},
  'Session':{ipa:'/ˈsɛʃ.ən/',th:'สถานะการ Login — มี Token อยู่ระหว่างใช้งาน',cmp:'🪑 นั่งอยู่ในร้าน ยังไม่ลุก'},
  'Cookie':{ipa:'/ˈkʊk.i/',th:'ข้อมูลเล็กๆ ที่เบราว์เซอร์เก็บไว้',cmp:'🍪 คุกกี้ที่เว็บฝากไว้ในเบราว์เซอร์'},
  'CORS':{ipa:'/kɔːrz/',th:'กฎการเข้าถึงข้อมูลข้ามโดเมน',cmp:'🚧 ด่านตรวจระหว่างประเทศ'},
  'CRUD':{ipa:'/krʌd/',th:'Create Read Update Delete — 4 การดำเนินการพื้นฐาน',cmp:'📝 สร้าง-อ่าน-แก้-ลบ'},
  'SQL':{ipa:'/ˌɛs.kjuːˈɛl/',th:'ภาษาสำหรับจัดการฐานข้อมูล',cmp:'📋 ภาษาที่ใช้สั่งงานฐานข้อมูล'},
  'Table':{ipa:'/ˈteɪ.bəl/',th:'ตารางในฐานข้อมูล เก็บข้อมูลประเภทเดียวกัน',cmp:'📊 เหมือนตาราง Excel 1 แผ่น'},
  'Row':{ipa:'/roʊ/',th:'แถวในตาราง = ข้อมูล 1 รายการ',cmp:'📝 บรรทัดใน Excel'},
  'Column':{ipa:'/ˈkɒl.əm/',th:'คอลัมน์ = ช่องข้อมูล 1 ประเภท',cmp:'📊 หัวข้อในตาราง'},
  'Primary Key':{ipa:'',th:'รหัสเฉพาะไม่ซ้ำกัน ใช้ระบุแถว',cmp:'🔑 เลขบัตรประชาชน ไม่ซ้ำใคร'},
  'Foreign Key':{ipa:'',th:'คีย์เชื่อมข้อมูลระหว่างตาราง',cmp:'🔗 ลิงก์จาก Sheet นี้ไป Sheet อื่น'},
  'Index':{ipa:'/ˈɪn.dɛks/',th:'ดัชนีช่วยค้นหาข้อมูลเร็วขึ้น',cmp:'📑 สารบัญหนังสือ'},
  'Migration':{ipa:'/maɪˈɡreɪ.ʃən/',th:'การเปลี่ยนแปลงโครงสร้าง Database อย่างเป็นระบบ',cmp:'🏗️ ปรับปรุงบ้าน มีแบบแปลนชัดเจน'},
  'SSL':{ipa:'',th:'ใบรับรองความปลอดภัย ทำให้เว็บมี https',cmp:'🔒 กุญแจล็อกสีเขียว'},
  'DNS':{ipa:'',th:'แปลงชื่อเว็บเป็น IP address',cmp:'📞 สมุดโทรศัพท์ของอินเทอร์เน็ต'},
  'CDN':{ipa:'',th:'เครือข่ายส่งข้อมูลเร็วจากเซิร์ฟเวอร์ใกล้ผู้ใช้',cmp:'🏪 7-Eleven สาขาใกล้บ้าน'},
  'Serverless':{ipa:'',th:'ฟังก์ชันที่รันเมื่อถูกเรียกเท่านั้น ไม่ต้องมี Server ตลอด',cmp:'💡 ไฟเปิดเฉพาะตอนเดินเข้าห้อง'},
  'OAuth':{ipa:'/oʊ.ɔːθ/',th:'Login ผ่านบริการอื่น เช่น Google',cmp:'🪪 ใช้บัตรพนักงานเข้าตึกอื่น'},
  'Responsive':{ipa:'/rɪˈspɒn.sɪv/',th:'ปรับหน้าตาเว็บตามขนาดหน้าจอ',cmp:'📱 น้ำในแก้ว ปรับรูปตามภาชนะ'},
  'React':{ipa:'/riˈækt/',th:'ไลบรารี่สร้างหน้าเว็บจากชิ้นส่วนเล็กๆ (Component)',cmp:'🧱 เลโก้ — ประกอบชิ้นส่วนเล็กๆ เป็นบ้านหลังใหญ่'},
  'Re-render':{ipa:'',th:'React วาดหน้าจอใหม่เมื่อ State เปลี่ยน',cmp:'🔄 ลบกระดานแล้ววาดใหม่เฉพาะส่วนที่เปลี่ยน'},
  'Context':{ipa:'/ˈkɒn.tɛkst/',th:'แชร์ข้อมูลข้าม Component โดยไม่ต้องส่ง Props ทีละชั้น',cmp:'📻 วิทยุ — ทุกคนรับสัญญาณเดียวกันได้'},
  'Event':{ipa:'/ɪˈvɛnt/',th:'เหตุการณ์ที่เกิดขึ้น เช่น คลิก, พิมพ์, เลื่อน',cmp:'🔔 กดกริ่ง = เกิด event'},
  'Callback':{ipa:'/ˈkɔːl.bæk/',th:'ฟังก์ชันที่ส่งไปเรียกใช้ทีหลังเมื่อเกิดเหตุการณ์',cmp:'📞 ฝากเบอร์ไว้ เดี๋ยวโทรกลับ'},
  'Virtual DOM':{ipa:'',th:'สำเนา DOM ที่ React เก็บไว้ในหน่วยความจำ ใช้เปรียบเทียบก่อนอัปเดตจริง',cmp:'📝 ร่างก่อนส่ง — เขียนแบบลองก่อนแล้วค่อยส่งจริง'},
  'Conditional Rendering':{ipa:'',th:'แสดง Component ตามเงื่อนไข เช่น ถ้า login แล้วแสดง Dashboard',cmp:'🚪 ถ้ามีบัตร → เข้าได้ / ไม่มี → หน้า Login'},
  'Lifting State Up':{ipa:'',th:'ย้าย State ขึ้นไปที่ Component แม่เพื่อแชร์ข้อมูลระหว่างลูก',cmp:'👩‍👧‍👦 แม่ถือรีโมท แล้วส่งให้ลูกแต่ละคน'},
  'useRef':{ipa:'',th:'Hook สำหรับเก็บค่าที่ไม่ทำให้ re-render เช่น อ้างอิง DOM element',cmp:'📌 ปักหมุดไว้ — ค่าไม่เปลี่ยนแม้ re-render'},
  'useCallback':{ipa:'',th:'Hook สำหรับจำฟังก์ชันไว้ ไม่สร้างใหม่ทุกครั้ง',cmp:'📎 คลิปหนีบ — หนีบฟังก์ชันไว้ไม่ให้หลุด'},
  'useMemo':{ipa:'',th:'Hook สำหรับจำผลลัพธ์การคำนวณ ไม่คำนวณซ้ำถ้าข้อมูลไม่เปลี่ยน',cmp:'🧮 จำคำตอบไว้ ไม่ต้องกดเครื่องคิดเลขใหม่'},
};

// Flashcard storage
let fcDeck = JSON.parse(localStorage.getItem('devguide-fc') || '[]');
let fcKnown = JSON.parse(localStorage.getItem('devguide-fc-known') || '[]');
let fcQuizScore = parseInt(localStorage.getItem('devguide-quiz-score') || '0');
let currentFcIdx = 0;
let currentPopupTerm = '';

const popup = document.getElementById('enPopup');
let popupTimeout;

// Lookup vocab by term
function lookupVocab(term) {
  // Exact match
  if (VOCAB[term]) return { term, ...VOCAB[term] };
  // Case-insensitive
  const key = Object.keys(VOCAB).find(k => k.toLowerCase() === term.toLowerCase());
  if (key) return { term: key, ...VOCAB[key] };
  return null;
}

// Enhanced popup click handler
document.addEventListener('click', (e) => {
  const en = e.target.closest('.en');
  if (en) {
    e.preventDefault();
    const term = en.textContent.trim();
    const dataTh = en.dataset.th || '';
    const vocab = lookupVocab(term);
    currentPopupTerm = term;

    popup.querySelector('.popup-term').textContent = term;
    popup.querySelector('.popup-ipa').textContent = vocab ? vocab.ipa : '';
    popup.querySelector('.popup-def').textContent = vocab ? vocab.th : dataTh.split('—')[0].trim();
    const cmpEl = popup.querySelector('.popup-compare');
    if (vocab && vocab.cmp) {
      cmpEl.textContent = vocab.cmp;
      cmpEl.style.display = 'block';
    } else if (dataTh.includes('—')) {
      cmpEl.textContent = dataTh.split('—').slice(1).join('—').trim();
      cmpEl.style.display = 'block';
    } else {
      cmpEl.style.display = 'none';
    }

    const rect = en.getBoundingClientRect();
    const popupW = 300;
    let left = rect.left + rect.width / 2 - popupW / 2;
    if (left < 8) left = 8;
    if (left + popupW > window.innerWidth - 8) left = window.innerWidth - popupW - 8;
    popup.style.left = left + 'px';
    popup.style.top = (rect.bottom + 8) + 'px';
    popup.style.maxWidth = popupW + 'px';
    popup.classList.add('show');

    clearTimeout(popupTimeout);
    popupTimeout = setTimeout(() => popup.classList.remove('show'), 8000);
  } else if (!e.target.closest('.en-popup')) {
    popup.classList.remove('show');
  }
});

// Vocab know/dunno buttons
function vocabKnow() {
  if (currentPopupTerm && !fcKnown.includes(currentPopupTerm)) {
    fcKnown.push(currentPopupTerm);
    localStorage.setItem('devguide-fc-known', JSON.stringify(fcKnown));
  }
  // Remove from deck if exists
  fcDeck = fcDeck.filter(c => c.term !== currentPopupTerm);
  localStorage.setItem('devguide-fc', JSON.stringify(fcDeck));
  popup.classList.remove('show');
  updateDashboard();
}

function vocabDunno() {
  const vocab = lookupVocab(currentPopupTerm);
  const dataTh = document.querySelector(`.en:hover`)?.dataset?.th || '';
  const card = {
    term: currentPopupTerm,
    meaning: vocab ? vocab.th : dataTh.split('—')[0].trim(),
    ipa: vocab ? vocab.ipa : '',
    cmp: vocab ? vocab.cmp : '',
    added: Date.now(),
    nextReview: Date.now(),
    interval: 1
  };
  // Don't duplicate
  if (!fcDeck.find(c => c.term === currentPopupTerm)) {
    fcDeck.push(card);
    localStorage.setItem('devguide-fc', JSON.stringify(fcDeck));
  }
  // Remove from known
  fcKnown = fcKnown.filter(k => k !== currentPopupTerm);
  localStorage.setItem('devguide-fc-known', JSON.stringify(fcKnown));
  popup.classList.remove('show');
  updateDashboard();
}
