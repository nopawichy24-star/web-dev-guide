# Web Dev Guide — Fully Modular

โปรเจกต์นี้แยกจาก HTML ขนาดใหญ่ไฟล์เดียวออกเป็นส่วนย่อยทั้งหมด

## จำนวนไฟล์ที่แยก

- HTML บทเรียน: 30 ไฟล์
- CSS: 23 ไฟล์
- JavaScript ระบบต่าง ๆ: 16 ไฟล์ รวม `loader.js`
- Asset folders: images, icons, fonts, files

## โครงสร้าง

```text
web-dev-guide-fully-modular/
├── index.html
├── README.md
├── pages/
├── css/
├── js/
└── assets/
    ├── images/
    ├── icons/
    ├── fonts/
    └── files/
```

## เปิดในเครื่อง

โปรเจกต์ใช้ `fetch()` โหลดบทเรียนจากโฟลเดอร์ `pages/`

1. เปิดโฟลเดอร์นี้ใน VS Code
2. ติดตั้ง Extension **Live Server**
3. คลิกขวา `index.html`
4. เลือก **Open with Live Server**

## อัปโหลด GitHub

อัปโหลดสิ่งที่อยู่ภายในโฟลเดอร์นี้ทั้งหมดไปยัง root ของ Repository:

- `index.html`
- `README.md`
- `pages/`
- `css/`
- `js/`
- `assets/`

อย่าอัปโหลดโดยให้เกิดโฟลเดอร์ซ้อนอีกชั้น
