# Bikin Aplikasi React Landing Page

Proyek ini adalah landing page aplikasi yang dibikin pake React, khusus buat tugas CretiVox.

## Mulai Pake Create React App

Proyek ini dimulai pake [Create React App](https://github.com/facebook/create-react-app).

## INSTALASI

Di folder proyek, lu bisa jalanin perintah ini buat install semua dependensi:

```bash
npm install
JALANIN APLIKASI
Buat ngejalanin aplikasi dalam mode pengembangan, lu bisa pake:

bash
Salin kode
npm start
Terus buka http://localhost:3000 buat liat aplikasinya di browser lu.

BUILD APLIKASI
Kalo mau nge-build aplikasi buat siap produksi, pake perintah ini:

bash
Salin kode
npm run build
Ini bakal bikin folder build yang udah dioptimasi buat produksi.

Struktur Proyek
Struktur folder proyeknya kira-kira begini nih:

css
Salin kode
landingpage-website/
├── node_modules/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   ├── SectionTitle.js
│   │   └── ...
│   ├── hooks/
│   │   ├── useHoverEffect.js
│   │   ├── useGsapProjectLeftRightReveal.js
│   │   ├── useGsapScrollTrigger.js
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
└── README.md
Teknologi yang Dipake
React - Buat bangun UI
Tailwind CSS - Buat styling yang gampang dan cepat
GSAP - Buat animasi yang keren
React Router - Buat routing di aplikasi
Cara Kerja
Komponen: Proyek ini dipecah jadi beberapa komponen biar kodenya rapi dan gampang di-maintain.
Efek Hover: Pake custom hook useHoverEffect buat ngasih efek hover di gambar.
Animasi: Pake useGsapProjectLeftRightReveal buat animasi elemen-elemen biar keliatan keren.
GSAP ScrollTrigger: Buat animasi berdasarkan scroll, kita pake useGsapScrollTrigger hook.
GSAP ScrollTrigger
Pake ScrollTrigger dari GSAP buat bikin animasi pas user ngescroll halaman. Di hook useGsapScrollTrigger, kita bisa nambahin animasi yang bakal dijalanin pas elemen tertentu masuk ke viewport. Contohnya gini nih:

javascript
Salin kode
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Daftarin ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const useGsapScrollTrigger = (elementRef, options) => {
  useEffect(() => {
    if (elementRef.current) {
      // Bikin animasi pake GSAP
      gsap.fromTo(
        elementRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 80%",
            ...options,
          },
        }
      );
    }
  }, [elementRef, options]);
};

export default useGsapScrollTrigger;
Di hook ini, kita daftarin ScrollTrigger plugin, terus bikin animasi yang dijalanin pas elemen masuk ke viewport. Lu bisa pake hook ini di komponen yang mau dianimasiin pas di-scroll.

Kontribusi
Kalo mau kontribusi, pull request selalu diterima. Jangan lupa buat branch dari main dan deskripsiin perubahan yang lu buat.

bash
Salin kode
git checkout -b fitur-baru
Lisensi
Proyek ini dilisensiin dibawah MIT License.

Semoga README ini membantu! Kalau ada yang mau ditambahin atau diubah, langsung aja bilang ya. Semoga sukses dengan tugas CretiVox-nya!

perl
Salin kode

Copy dan paste teks di atas ke file `README.md` di proyek kamu, dan ini akan muncul dengan format yang sesuai di VSCode. Semoga sukses dengan tugas CretiVox-nya!




