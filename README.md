# EduTrip - Website Wisata Edukasi Interaktif (Sesuai Desain Figma)

Website EduTrip telah disesuaikan dan diimplementasikan **100% presisi mengikuti desain Figma** yang Anda berikan, mencakup seluruh warna, tata letak, kartu kategori berwarna, alur pemesanan paket, formulir survey kepuasan, hingga navigasi bawah (*Bottom Navigation Bar*) untuk tampilan mobile.

Dibangun murni menggunakan **HTML5**, **CSS3**, dan **JavaScript Vanilla** tanpa framework (No React/Vue, No Bootstrap/Tailwind).

---

## 🎨 Penyesuaian Desain Sesuai Figma

1. **Palet Warna & Nuansa Alam Edukasi**:
   - **Primary Green:** `#2D6A4F` & Deep Forest Green `#1B4332`
   - **Mint Light Green:** `#E8F5E9` & `#D8F3DC`
   - **Footer:** Deep Forest Green `#1B4332`
   - **Aksen Kategori:**
     - Eksplorasi Sains (Biru Lembut `#EBF5FB`)
     - Sejarah Nusantara (Amber Emas `#FEF9E7`)
     - Konservasi Alam (Hijau Segar `#E8F8F5`)
     - Seni & Budaya (Ungu Elegan `#F4ECF7`)

2. **Daftar Halaman Lengkap Sesuai Frame Figma**:
   - **Home / Beranda (`index.html`)**:
     - Header EduTrip + Avatar Profil + Hamburger Menu
     - Banner *"Belajar Jadi Lebih Menyenangkan"* + Tombol *"Jelajahi Sekarang"*
     - Kolom Pencarian *"Mau belajar apa hari ini?"*
     - 4 Kartu Kategori Berwarna (*Eksplorasi Sains, Sejarah Nusantara, Konservasi Alam, Seni & Budaya*)
     - Daftar Destinasi Populer (*Museum Geologi, Saung Angklung Udjo, Taman Pintar, Kebun Raya Bogor*)
     - Banner Hijau *"Siap Belajar dengan Cara yang Berbeda?"*
     - Footer Hijau Tua *"EduTrip Nusantara"*
     - *Bottom Navigation Bar* Mobile (5 Ikon)
   - **Katalog Destinasi (`destinasi.html`)**:
     - Judul *"Jelajahi Destinasi Edukasi"*
     - Pencarian Real-Time & Filter Pills Kategori
     - Kartu Destinasi dengan foto, badge kategori, rating, harga, dan tombol *"Lihat Detail"*
   - **Detail Destinasi (`detail.html`)**:
     - Banner Foto Utama (contoh: *Saung Angklung Udjo*)
     - Rating ⭐ 4.9, Lokasi Bandung, Harga mulai Rp 75.000
     - Bagian *"Tentang Destinasi"*, *"Aktivitas Edukasi"* (checklist kegiatan), *"Informasi Kunjungan"*, *"Fasilitas Tempat Wisata"*, dan *"Galeri Foto"*
     - Tombol Hijau *"Pilih Paket Edukasi"* yang terhubung langsung ke `paket.html`
   - **Pilih Paket Edukasi (`paket.html`)** *(Sesuai Frame Paket...)*:
     - 1. **Paket Individu** (Rp 75.000 / orang)
     - 2. **Paket Keluarga** (Rp 280.000 / 4 orang - *Badge Terlaris*)
     - 3. **Paket Rombongan Sekolah** (Rp 600.000 / 20 siswa - *Badge Rekomendasi Sekolah*)
     - Modal Pemesanan & Cetak E-Tiket Instan
   - **Survey Kepuasan Pelanggan (`survey.html`)** *(Sesuai Frame Survey...)*:
     - Evaluasi Kunjungan Edukasi
     - Pertanyaan interaktif: Peran pengunjung, kemanfaatan materi, keramahan pemandu, relevansi kurikulum
     - Rating Bintang Interaktif (⭐⭐⭐⭐⭐)
     - Evaluasi fasilitas & kotak saran masukan
     - Pengiriman survey menambahkan **+50 Koin EduTrip** ke profil pengguna!
   - **Profil Pengguna (`profil.html`)** *(Sesuai Frame Profil...)*:
     - Kartu Statistik: Destinasi Favorit (3), Riwayat Booking (2), Koin Edukasi (150+ Poin)
     - Riwayat Booking (*Saung Angklung Udjo - Rp 600.000 - Terkonfirmasi*) dengan tombol cetak E-Tiket & Isi Survey
     - Menu Pusat Pembelajaran & Pengaturan Profil
   - **Masuk & Daftar (`login.html` & `register.html`)**:
     - Tampilan *"Selamat Datang Kembali!"* dengan tombol 1-klik Akun Demo (*Budi Santoso*) untuk kemudahan demonstrasi.
   - **Bantuan & FAQ (`tentang.html`)**:
     - Pusat bantuan, pertanyaan umum, dan formulir konsultasi sekolah.

3. **Navigasi Ganda (Desktop & Mobile Bottom Nav)**:
   - Pada layar Desktop: Navigasi horizontal di bagian atas.
   - Pada layar HP/Tablet (≤ 768px): Navigasi bawah melayang (*Bottom Navigation Bar*) dengan 5 menu utama: **Beranda**, **Katalog**, **Paket**, **Survey**, dan **Profil**, ditambah laci samping (*Drawer Menu*).

---

## 🚀 Cara Menjalankan

1. **Buka Langsung File HTML di Browser (Rekomendasi Cepat):**
   - Klik ganda pada file `index.html` di dalam folder ini.
2. **Atau Melalui Localhost Web Server:**
   - Akses via browser:
     ```text
     http://localhost/PROJECT%20UAS%20DESAIN%20WEB/index.html
     ```

## 👤 Akun Pengujian Demo (Otomatis)
Tersedia tombol **"Masuk sebagai Akun Demo (Budi Santoso)"** di halaman `login.html` untuk langsung menguji semua fitur profil, riwayat tiket, dan klaim poin survey tanpa perlu mengetik manual.
