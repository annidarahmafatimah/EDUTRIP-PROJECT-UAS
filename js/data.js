/**
 * EduTrip - Destination Data & Constants
 * Website Edukasi Wisata Terpadu
 */

const localDestinasiImage = (filename) => `assets/images/destinasi/${filename}`;
function formatRupiah(amount) {
  return `Rp${Number(amount).toLocaleString('id-ID')}`;
}

const EDUTRIP_DATA = [
  {
    id: 1,
    name: "Taman Pintar Yogyakarta",
    slug: "taman-pintar-yogyakarta",
    category: "Sains & Teknologi",
    categoryIcon: "fa-atom",
    tagline: "Wahana Ekspresi, Apresiasi, dan Kreasi Sains Anak Bangsa",
    location: "Yogyakarta, D.I. Yogyakarta",
    address: "Jl. Panembahan Senopati No.1-3, Ngupasan, Kec. Gondomanan, Kota Yogyakarta, D.I. Yogyakarta 55122",
    rating: 4.8,
    reviewsCount: 1240,
    price: 25000,
    openHours: "Selasa - Minggu: 08.30 - 16.00 WIB (Senin Tutup)",
    heroImage: localDestinasiImage("taman-pintar.jpg"),
    gallery: [
      localDestinasiImage("taman-pintar.jpg"),
      localDestinasiImage("taman-pintar-1.jpg"),
      localDestinasiImage("taman-pintar-2.jpg"),
      localDestinasiImage("taman-pintar-3.jpg")
    ],
    isFeatured: true,
    badges: ["Populer Pelajar", "Lab Terlengkap"],
    overview: "Taman Pintar Yogyakarta merupakan laboratorium rekreasi sains terpadu yang memadukan rekreasi dan pembelajaran secara interaktif. Tempat ini memiliki berbagai zona seperti Gedung Oval, Gedung Kotak, Planetarium, Wahana Bahari, dan Ruang Agro. Dirancang khusus untuk memantik rasa ingin tahu anak-anak dan generasi muda dalam mengeksplorasi hukum-hukum fisika, biologi, astronomi, dan teknologi robotika modern.",
    curriculumMatches: [
      "Fisika Terapan & Mekanika Dasar",
      "Astronomi & Tata Surya (Planetarium)",
      "Teknologi Digital & Pengenalan Robotika",
      "Pengolahan Sumber Daya Alam & Air Bersih"
    ],
    facilities: [
      "Planetarium Mini Ber-AC",
      "Pemandu Khusus Kelompok Sekolah",
      "Laboratorium Eksperimen Fisika",
      "Food Court & Kantin Higienis",
      "Musholla & Toilet Difabel",
      "Toko Buku & Souvenir Edukasi",
      "Area Parkir Bus Sekolah Luas"
    ],
    targetAudience: "TK, SD, SMP, SMA, dan Mahasiswa",
    coordinates: { lat: -7.8006, lng: 110.3688 },
    reviews: [
      {
        user: "Budi Prasetyo, S.Pd",
        role: "Guru Fisika SMPN 1 Sleman",
        rating: 5,
        date: "12 September 2026",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80",
        comment: "Sangat direkomendasikan untuk study tour! Anak-anak sangat antusias mencoba alat peraga gaya gravitasi dan simulasi gempa bumi. Pemandunya sangat sabar menjelaskan."
      },
      {
        user: "Ratna Sari",
        role: "Mahasiswa Pendidikan Biologi",
        rating: 5,
        date: "28 Agustus 2026",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
        comment: "Zona tata surya di Planetarium sangat visual dan detail. Tiket masuk sangat terjangkau bagi kantong pelajar."
      }
    ]
  },
  {
    id: 2,
    name: "Museum Nasional Indonesia (Museum Gajah)",
    slug: "museum-nasional-indonesia",
    category: "Sejarah & Budaya",
    categoryIcon: "fa-landmark",
    tagline: "Menelusuri Jejak Peradaban Nusantara Sejak Abad Purba",
    location: "Jakarta Pusat, DKI Jakarta",
    address: "Jl. Medan Merdeka Barat No.12, Gambir, Jakarta Pusat, DKI Jakarta 10110",
    rating: 4.9,
    reviewsCount: 2150,
    price: 15000,
    openHours: "Selasa - Minggu: 08.00 - 16.00 WIB (Senin & Libur Nasional Tutup)",
    heroImage: localDestinasiImage("museum-nasional.jpg"),
    gallery: [
      localDestinasiImage("museum-nasional.jpg"),
      localDestinasiImage("museum-nasional-1.jpg"),
      localDestinasiImage("museum-nasional-2.jpg"),
      localDestinasiImage("museum-nasional-3.jpg")
    ],
    isFeatured: true,
    badges: ["Heritage UNESCO", "Ruang ImersifA 360°"],
    overview: "Museum Nasional Indonesia adalah museum pertama dan terbesar di Asia Tenggara dengan koleksi lebih dari 140.000 benda bersejarah nusantara. Koleksinya mencakup prasasti kuno, arca peradaban Hindu-Buddha, pusaka kerajaan emas, tekstil wastra nusantara, hingga Ruang ImersifA interaktif berteknologi video mapping 360 derajat.",
    curriculumMatches: [
      "Sejarah Kerajaan Hindu, Buddha & Islam di Nusantara",
      "Antropologi & Etnografi Suku Bangsa Indonesia",
      "Prasejarah & Evolusi Manusia di Kepulauan Nusantara",
      "Arkeologi & Seni Logam Klasik"
    ],
    facilities: [
      "Ruang Teater ImersifA Interaktif",
      "Audio Guide Multi-bahasa",
      "Perpustakaan Sejarah Kuno",
      "Akses Ramah Kursi Roda",
      "Loker Penitipan Barang Gratis",
      "Kafe Museum & Toko Cinderamata",
      "Ruang Seminar & Workshop Edukasi"
    ],
    targetAudience: "SD, SMP, SMA, Mahasiswa, Peneliti, dan Publik",
    coordinates: { lat: -6.1751, lng: 106.8222 },
    reviews: [
      {
        user: "Hendri Wicaksono",
        role: "Kurator Budaya & Guru IPS",
        rating: 5,
        date: "04 September 2026",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
        comment: "Ruang ImersifA luar biasa memukau! Siswa-siswi kami terkagum-kagum melihat sejarah maritim Indonesia disajikan dengan animasi 3D 360 derajat. Wajib dikunjungi!"
      }
    ]
  },
  {
    id: 3,
    name: "Puspa Iptek Sundial Bandung",
    slug: "puspa-iptek-sundial-bandung",
    category: "Sains & Teknologi",
    categoryIcon: "fa-sun",
    tagline: "Pusat Peraga IPTEK & Jam Matahari Terbesar di Asia Pasifik",
    location: "Padalarang, Bandung Barat",
    address: "Jl. Raya Padalarang No.427, Kertajaya, Padalarang, Kabupaten Bandung Barat, Jawa Barat 40553",
    rating: 4.7,
    reviewsCount: 890,
    price: 30000,
    openHours: "Setiap Hari: 08.30 - 16.30 WIB",
    heroImage: localDestinasiImage("puspa-iptek.jpg"),
    gallery: [
      localDestinasiImage("puspa-iptek.jpg"),
      localDestinasiImage("puspa-iptek-1.jpg"),
      localDestinasiImage("puspa-iptek-2.jpg"),
      localDestinasiImage("puspa-iptek-3.jpg")
    ],
    isFeatured: true,
    badges: ["Rekor MURI", "Wahana Interaktif"],
    overview: "Puspa Iptek Sundial adalah pusat peragaan ilmu pengetahuan dan teknologi yang terintegrasi langsung dengan jam matahari horizontal dan vertikal raksasa di atas bangunan gerbang Kota Baru Parahyangan. Memiliki lebih dari 180 alat peraga sains hands-on yang mengupas mekanika, ilusi optik, magnetisme, dan optik cahaya.",
    curriculumMatches: [
      "Ilmu Astronomi & Rotasi Bumi (Jam Matahari)",
      "Fisika Optik & Refleksi Cahaya",
      "Prinsip Energi Kinetik & Magnetik"
    ],
    facilities: [
      "Wahana Jam Matahari MURI",
      "Lab Percobaan Interaktif Mandiri",
      "Pemandu Instruktur IPTEK",
      "Auditorium Film Dokumenter Sains",
      "Area Istirahat Rombongan Bus",
      "Kantin Pelajar"
    ],
    targetAudience: "SD, SMP, SMA, dan Keluarga",
    coordinates: { lat: -6.8434, lng: 107.4912 },
    reviews: [
      {
        user: "Dewi Anggraini",
        role: "Orang Tua Siswa",
        rating: 5,
        date: "19 Agustus 2026",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80",
        comment: "Bagus sekali untuk mengajarkan anak-anak sains tanpa membosankan. Konsep jam mataharinya benar-benar edukatif!"
      }
    ]
  },
  {
    id: 4,
    name: "Kebun Raya Bogor & Museum Zoologi",
    slug: "kebun-raya-bogor-museum-zoologi",
    category: "Alam & Satwa",
    categoryIcon: "fa-leaf",
    tagline: "Oase Riset Botani Tertua di Asia & Koleksi Hayati Nusantara",
    location: "Bogor, Jawa Barat",
    address: "Jl. Ir. H. Juanda No.13, Paledang, Kecamatan Bogor Tengah, Kota Bogor, Jawa Barat 16122",
    rating: 4.8,
    reviewsCount: 3420,
    price: 35000,
    openHours: "Senin - Jumat: 08.00 - 16.00 WIB | Sabtu - Minggu: 07.00 - 16.00 WIB",
    heroImage: localDestinasiImage("kebun-raya-bogor.jpg"),
    gallery: [
      localDestinasiImage("kebun-raya-bogor.jpg"),
      localDestinasiImage("kebun-raya-bogor-1.jpg"),
      localDestinasiImage("kebun-raya-bogor-2.jpg"),
      localDestinasiImage("kebun-raya-bogor-3.jpg")
    ],
    isFeatured: true,
    badges: ["Konservasi Dunia", "Paus Biru Raksasa"],
    overview: "Kebun Raya Bogor didirikan sejak 1817 dan menjadi pusat konservasi botani penting dunia dengan koleksi lebih dari 15.000 jenis pohon dan anggrek hutan tropis. Di dalamnya terdapat Museum Zoologi Bogor yang memamerkan ribuan spesimen satwa langka, termasuk kerangka utuh Paus Biru sepanjang 27 meter dan satwa endemik Indonesia.",
    curriculumMatches: [
      "Biologi Tumbuhan (Taksonomi & Morfologi)",
      "Ekologi & Konservasi Hutan Tropis",
      "Zoologi Satwa Langka Endemik Nusantara",
      "Eksplorasi Fotosintesis & Ekosistem Perairan"
    ],
    facilities: [
      "Museum Zoologi Bersejarah",
      "Penyewaan Sepeda & Skuter Listrik",
      "Pemandu Khusus Botani & Ekologi",
      "Griya Anggrek Raksasa",
      "Restoran Grand Garden",
      "Masjid & Pusat Informasi Turis"
    ],
    targetAudience: "Semua Jenjang Pendidikan & Peneliti",
    coordinates: { lat: -6.5976, lng: 106.7996 },
    reviews: [
      {
        user: "drh. Faisal Hakim",
        role: "Peneliti Satwa & Dosen",
        rating: 5,
        date: "01 September 2026",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
        comment: "Koleksi spesimen di Museum Zoologi sangat berharga untuk pengenalan biodiversitas. Suasananya sejuk dan sangat kondusif untuk kegiatan riset lapangan."
      }
    ]
  },
  {
    id: 5,
    name: "Saung Angklung Udjo",
    slug: "saung-angklung-udjo",
    category: "Seni & Budaya",
    categoryIcon: "fa-guitar",
    tagline: "Laboratorium Musik Bambu & Warisan Mahakarya UNESCO",
    location: "Padasuka, Kota Bandung",
    address: "Jl. Padasuka No.118, Pasirlayung, Kec. Cibeunying Kidul, Kota Bandung, Jawa Barat 40192",
    rating: 4.9,
    reviewsCount: 1800,
    price: 75000,
    packagePrices: { individual: 75000, family: 250000, school: 500000 },
    openHours: "Setiap Hari: 08.00 - 17.00 WIB (Pertunjukan Utama Pukul 15.30 WIB)",
    heroImage: localDestinasiImage("saung-angklung-udjo.jpg"),
    gallery: [
      localDestinasiImage("saung-angklung-udjo.jpg"),
      localDestinasiImage("saung-angklung-udjo-1.jpg"),
      localDestinasiImage("saung-angklung-udjo-2.jpg"),
      localDestinasiImage("saung-angklung-udjo-3.jpg")
    ],
    isFeatured: true,
    badges: ["Warisan UNESCO", "Workshop Interaktif"],
    overview: "Saung Angklung Udjo adalah pusat pelestarian dan pertunjukan seni musik bambu tradisional Sunda yang telah diakui UNESCO sebagai Warisan Budaya Takbenda Dunia. Di sini para pelajar diajak tidak hanya menonton pertunjukan wayang golek dan tari topeng, namun memegang angklung langsung dan bermain harmonisasi musik bersama konduktor kelas dunia.",
    curriculumMatches: [
      "Seni Musik Tradisional & Harmonisasi Nada Pentatonis",
      "Pelestarian Budaya Lokal & Kearifan Sunda",
      "Kriya Bambu & Industri Kreatif Berkelanjutan"
    ],
    facilities: [
      "Amfiteater Bambu Alami Beratap",
      "Workshop Pembuatan Angklung",
      "Instruktur Musik Interaktif",
      "Restoran Khas Parahyangan",
      "Pusat Kerajinan Bambu & Souvenir",
      "Area Parkir Bus Wisatawan"
    ],
    targetAudience: "SD, SMP, SMA, Mahasiswa, Turis Mancanegara",
    coordinates: { lat: -6.8979, lng: 107.6548 },
    reviews: [
      {
        user: "Theresia Lindawaty",
        role: "Guru Kesenian SMA Santa Maria",
        rating: 5,
        date: "14 Agustus 2026",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
        comment: "Momen saat ratusan siswa serentak memainkan angklung dengan lagu nusantara benar-benar membuat merinding bangga. Pengalaman edukasi terbaik!"
      }
    ]
  },
  {
    id: 6,
    name: "Batu Secret Zoo & Eco Green Park",
    slug: "batu-secret-zoo-eco-green-park",
    category: "Alam & Satwa",
    categoryIcon: "fa-hippo",
    tagline: "Konservasi Satwa Modern & Edukasi Energi Terbarukan",
    location: "Batu, Jawa Timur",
    address: "Jl. Oro-Oro Ombo No.9A, Temas, Kec. Batu, Kota Batu, Jawa Timur 65315",
    rating: 4.8,
    reviewsCount: 2780,
    price: 100000,
    openHours: "Setiap Hari: 08.30 - 16.30 WIB",
    heroImage: localDestinasiImage("batu-secret-zoo.jpg"),
    gallery: [
      localDestinasiImage("batu-secret-zoo.jpg"),
      localDestinasiImage("batu-secret-zoo-1.jpg"),
      localDestinasiImage("batu-secret-zoo-2.jpg"),
      localDestinasiImage("batu-secret-zoo-3.jpg")
    ],
    isFeatured: true,
    badges: ["Standar Internasional", "Eko-Edukasi"],
    overview: "Batu Secret Zoo di Jawa Timur Park 2 merupakan kebun binatang modern bertaraf internasional seluas 14 hektare dengan habitat replika alami dari Afrika hingga Arktik. Berdampingan dengan Eco Green Park yang memfokuskan pembelajaran pada daur ulang limbah, pembangkit listrik tenaga surya & angin, pertanian hidroponik, dan konservasi serangga.",
    curriculumMatches: [
      "Konservasi Satwa Langka & Adaptasi Biologis",
      "Energi Terbarukan (Solar Cell & Kincir Angin)",
      "Pengolahan Limbah & Kompos Organik (Zero Waste)",
      "Rantai Makanan & Keseimbangan Ekosistem"
    ],
    facilities: [
      "Wahana Safari Sungai & Perahu",
      "Plaza Edukasi Serangga & Burung Terbuka",
      "Simulator Gempa & Angin Topan",
      "Klinik Dokter Hewan Edukasi",
      "Food Court Ramah Anak",
      "Kereta Wisata Keliling Gratis"
    ],
    targetAudience: "SD, SMP, SMA, dan Komunitas Lingkungan",
    coordinates: { lat: -7.8893, lng: 112.5284 },
    reviews: [
      {
        user: "Agus Setyawan",
        role: "Koordinator Pramuka Kwarda Jatim",
        rating: 5,
        date: "22 Agustus 2026",
        avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=120&q=80",
        comment: "Kombinasi antara konservasi hewan dan teknologi ramah lingkungan sangat pas untuk pembelajaran kontekstual kurikulum merdeka."
      }
    ]
  },
  {
    id: 7,
    name: "Museum Geologi Bandung",
    slug: "museum-geologi-bandung",
    category: "Sains & Teknologi",
    categoryIcon: "fa-gem",
    tagline: "Eksplorasi Fosil Purba, Mineral Langka, dan Tektonik Bumi",
    location: "Kota Bandung, Jawa Barat",
    address: "Jl. Diponegoro No.57, Cihaur Geulis, Kec. Cibeunying Kaler, Kota Bandung, Jawa Barat 40122",
    rating: 4.7,
    reviewsCount: 1920,
    price: 15000,
    openHours: "Senin - Kamis: 09.00 - 15.00 WIB | Sabtu - Minggu: 09.00 - 14.00 WIB (Jumat Tutup)",
    heroImage: localDestinasiImage("museum-geologi.jpg"),
    gallery: [
      localDestinasiImage("museum-geologi.jpg"),
      localDestinasiImage("museum-geologi-1.jpg"),
      localDestinasiImage("museum-geologi-2.jpg"),
      localDestinasiImage("museum-geologi-3.jpg")
    ],
    isFeatured: false,
    badges: ["Tiket Super Hemat", "Fosil T-Rex & Mammut"],
    overview: "Museum Geologi Bandung didirikan pada 16 Mei 1928 dan menjadi rujukan utama ilmu kebumian di Indonesia. Memamerkan fosil tengkorak manusia purba Homo erectus, fosil gajah purba Blora (Elephas hysudrindicus), replika dinosaurus Tyrannosaurus rex, batuan meteorit antariksa, serta peragaan interaktif bencana gempa dan gunung berapi di kepulauan cincin api nusantara.",
    curriculumMatches: [
      "Struktur Lapisan Bumi & Lempeng Tektonik",
      "Paleontologi & Fosil Prasejarah",
      "Mitigasi Bencana Gempa & Vulkanisme",
      "Kekayaan Mineral & Energi Geotermal"
    ],
    facilities: [
      "Ruang 3D Geologi Simulator",
      "Pemandu Khusus Geolog Muda",
      "Ruang Pameran Mineral Fluoresensi",
      "Perpustakaan Geologi Nasional",
      "Toko Fosil Miniatur & Buku Ilmiah",
      "Area Parkir & Tempat Istirahat"
    ],
    targetAudience: "SD, SMP, SMA, Mahasiswa Teknik Geologi, Publik",
    coordinates: { lat: -6.9006, lng: 107.6214 },
    reviews: [
      {
        user: "Dina Mariana",
        role: "Guru Geografi SMAN 3 Bandung",
        rating: 5,
        date: "10 September 2026",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80",
        comment: "Tiketnya sangat terjangkau hanya 2 ribu rupiah, namun wawasannya tak ternilai! Sangat membantu siswa memahami materi vulkanisme dan sejarah pembentukan kepulauan Indonesia."
      }
    ]
  },
  {
    id: 8,
    name: "Desa Wisata Penglipuran Bali",
    slug: "desa-wisata-penglipuran-bali",
    category: "Sejarah & Budaya",
    categoryIcon: "fa-torii-gate",
    tagline: "Desa Terbersih di Dunia & Kearifan Tradisi Tri Hita Karana",
    location: "Bangli, Bali",
    address: "Jl. Penglipuran, Kubu, Kec. Bangli, Kabupaten Bangli, Bali 80611",
    rating: 4.9,
    reviewsCount: 4100,
    price: 25000,
    openHours: "Setiap Hari: 08.00 - 18.00 WITA",
    heroImage: localDestinasiImage("penglipuran-bali.jpg"),
    gallery: [
      localDestinasiImage("penglipuran-bali.jpg"),
      localDestinasiImage("penglipuran-bali-1.jpg"),
      localDestinasiImage("penglipuran-bali-2.jpg"),
      localDestinasiImage("penglipuran-bali-3.jpg")
    ],
    isFeatured: false,
    badges: ["Green Destinations Top 100", "Bebas Polusi Motor"],
    overview: "Desa Penglipuran adalah desa adat tradisional Bali yang tersohor karena kebersihannya dan tata ruang arsitektur berakar pada filosofi Tri Hita Karana (harmoni antara manusia, alam, dan Sang Pencipta). Desa ini melarang kendaraan bermotor di area pemukiman utama, menjaga kelestarian hutan bambu 45 hektare sebagai sumber mata air, serta mempertahankan struktur rumah adat bambu leluhur.",
    curriculumMatches: [
      "Kearifan Lokal Pengelolaan Lingkungan Berkelanjutan",
      "Sosiologi & Tata Adat Komunitas Tradisional",
      "Arsitektur Tradisional Ramah Lingkungan",
      "Konservasi Hutan Bambu & Pengelolaan Air"
    ],
    facilities: [
      "Jalur Pedestrian Bebas Polusi",
      "Hutan Bambu Ekowisata Edukasi",
      "Homestay Penduduk Berbasis Budaya",
      "Pusat Kuliner Loloh Cemcem Tradisional",
      "Sentra Kerajinan Anyaman Bambu",
      "Pemandu Adat Berbahasa Daerah & Inggris"
    ],
    targetAudience: "SMP, SMA, Mahasiswa Arsitektur & Sosiologi, Umum",
    coordinates: { lat: -8.4526, lng: 115.3562 },
    reviews: [
      {
        user: "I Wayan Kertayasa",
        role: "Dosen Pariwisata Budaya",
        rating: 5,
        date: "05 Agustus 2026",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80",
        comment: "Contoh nyata bagaimana nilai kearifan leluhur mampu memecahkan masalah modern penumpukan sampah dan polusi udara. Mahasiswa kami belajar banyak hal tentang tata kelola sosial."
      }
    ]
  },
  {
    id: 9,
    name: "Observatorium Bosscha",
    slug: "observatorium-bosscha",
    category: "Sains & Teknologi",
    categoryIcon: "fa-telescope",
    tagline: "Stasiun Penelitian Antariksa Tertua & Kubah Teleskop Bersejarah",
    location: "Lembang, Bandung Barat",
    address: "Jl. Peneropongan Bintang No.45, Lembang, Kec. Lembang, Kabupaten Bandung Barat, Jawa Barat 40391",
    rating: 4.8,
    reviewsCount: 950,
    price: 25000,
    openHours: "Kunjungan Siang Edukasi: Sabtu 09.00 - 13.00 WIB (Reservasi Online)",
    heroImage: localDestinasiImage("bosscha.jpg"),
    gallery: [
      localDestinasiImage("bosscha.jpg"),
      localDestinasiImage("bosscha-1.jpg"),
      localDestinasiImage("bosscha-2.jpg"),
      localDestinasiImage("bosscha-3.jpg")
    ],
    isFeatured: false,
    badges: ["Heritage Sains", "Teleskop Ganda Zeiss"],
    overview: "Observatorium Bosscha adalah fasilitas riset astronomi modern pertama di Asia Tenggara yang dikelola oleh Institut Teknologi Bandung (ITB). Terkenal dengan kubah teleskop refraktor ganda Zeiss berdiameter 60 cm. Melalui program edukasi publik, siswa diajak memahami cara kerja optika teleskop, orbit planet, siklus hidup bintang, dan penelitian galaksi bimasakti.",
    curriculumMatches: [
      "Fisika Astrofisika & Spektroskopi Cahaya",
      "Hukum Kepler & Mekanika Orbit Planet",
      "Optik Cermin Cekung & Lensa Teleskop",
      "Fenomena Gerhana Matahari & Bulan"
    ],
    facilities: [
      "Kubah Kubah Teleskop Berputar 360°",
      "Pemandu Astronom ITB Berpengalaman",
      "Ruang Audio-Visual Bintang & Galaksi",
      "Taman Teropong Matahari Mini",
      "Perpustakaan Astronomi Bersejarah",
      "Spot Panorama Kota Bandung dari Ketinggian"
    ],
    targetAudience: "SMP, SMA, Mahasiswa Sains, Komunitas Astronomi",
    coordinates: { lat: -6.8249, lng: 107.6158 },
    reviews: [
      {
        user: "Rizky Firmansyah",
        role: "Anggota Klub Astronomi Pelajar",
        rating: 5,
        date: "17 Juli 2026",
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&q=80",
        comment: "Kubah teleskopnya bergerak dengan suara mekanik megah. Penjelasan pemandu dari mahasiswa astronomi ITB sangat jelas dan menginspirasi saya untuk kuliah fisika!"
      }
    ]
  },
  {
    id: 10,
    name: "Taman Mini Indonesia Indah (TMII) - Museum & PP-IPTEK",
    slug: "taman-mini-indonesia-indah",
    category: "Sejarah & Budaya",
    categoryIcon: "fa-monument",
    tagline: "Rangkuman Budaya 38 Provinsi & Wahana Peragaan Sains Terbuka",
    location: "Jakarta Timur, DKI Jakarta",
    address: "Jl. Taman Mini Indonesia Indah, Ceger, Kec. Cipayung, Kota Jakarta Timur, DKI Jakarta 13820",
    rating: 4.7,
    reviewsCount: 5200,
    price: 25000,
    openHours: "Setiap Hari: 06.00 - 20.00 WIB (Wahana Buka 08.00 - 17.00 WIB)",
    heroImage: localDestinasiImage("tmii.jpg"),
    gallery: [
      localDestinasiImage("tmii.jpg"),
      localDestinasiImage("tmii-1.jpg"),
      localDestinasiImage("tmii-2.jpg"),
      localDestinasiImage("tmii-3.jpg")
    ],
    isFeatured: true,
    badges: ["Wajah Baru Ramah Lingkungan", "Pusat Riset Budaya"],
    overview: "Wajah Baru TMII kini bertransformasi menjadi kawasan hijau inklusif dan ramah pejalan kaki. Menghadirkan anjungan rumah adat 38 provinsi di Indonesia, Museum Pusaka, Museum Serangga, Taman Burung, dan Pusat Peragaan IPTEK (PP-IPTEK) yang menyajikan lebih dari 400 alat peraga sains interaktif.",
    curriculumMatches: [
      "Keberagaman Suku, Rumah Adat & Pakaian Daerah",
      "Biodiversitas Burung Endemik Kepulauan Nusantara",
      "Fisika Praktik & Inovasi Energi Hijau",
      "Sejarah Kemerdekaan & Arsitektur Tradisional"
    ],
    facilities: [
      "Kereta Gantung Modern Cable Car",
      "Bus Listrik Keliling Kawasan Gratis",
      "Museum Indonesia & Museum Pusaka",
      "Danau Miniatur Kepulauan Indonesia & Air Mancur Menari",
      "Area Kuliner Kuliner Nusantara",
      "Penyewaan Sepeda Listrik Terintegrasi"
    ],
    targetAudience: "Semua Jenjang Pendidikan & Keluarga",
    coordinates: { lat: -6.3024, lng: 106.8952 },
    reviews: [
      {
        user: "Nurhasanah",
        role: "Wakil Kepala Sekolah Bidang Kesiswaan",
        rating: 5,
        date: "25 Agustus 2026",
        avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=120&q=80",
        comment: "Revitalisasi TMII sangat bagus, sekarang bebas asap knalpot dan sangat aman bagi anak-anak sekolah yang berkeliling dengan bus listrik ramah lingkungan."
      }
    ]
  },
  {
    id: 11,
    name: "Agrowisata Bhumi Merapi Yogyakarta",
    slug: "agrowisata-bhumi-merapi-yogyakarta",
    category: "Pertanian & Kreativitas",
    categoryIcon: "fa-seedling",
    tagline: "Edukasi Pertanian Organik, Peternakan, dan Pengolahan Susu",
    location: "Sleman, D.I. Yogyakarta",
    address: "Jl. Kaliurang KM.20, Sawungan, Hargobinangun, Kec. Pakem, Kabupaten Sleman, D.I. Yogyakarta 55582",
    rating: 4.6,
    reviewsCount: 1150,
    price: 30000,
    openHours: "Setiap Hari: 08.30 - 17.00 WIB",
    heroImage: localDestinasiImage("bhumi-merapi.jpg"),
    gallery: [
      localDestinasiImage("bhumi-merapi.jpg"),
      localDestinasiImage("bhumi-merapi-1.jpg"),
      localDestinasiImage("bhumi-merapi-2.jpg"),
      localDestinasiImage("bhumi-merapi-3.jpg")
    ],
    isFeatured: false,
    badges: ["Pertanian Berkelanjutan", "Hands-on Farming"],
    overview: "Agrowisata Bhumi Merapi terletak di lereng Gunung Merapi dengan udara sejuk. Tempat ini dirancang sebagai sarana edukasi praktis agrikultur bagi pelajar: belajar bercocok tanam hidroponik, memerah susu kambing etawa, memberi makan kelinci dan reptil jinak, serta memahami proses pembuatan kopi luwak dan biogas organik.",
    curriculumMatches: [
      "Teknik Pertanian Modern & Hidroponik",
      "Peternakan Ruminansia & Pemeliharaan Satwa",
      "Siklus Biogas dari Limbah Ternak",
      "Kewirausahaan Berbasis Agribisnis Pedesaan"
    ],
    facilities: [
      "Kebun Hidroponik & Pembibitan Sayuran",
      "Kandang Perah Kambing Etawa",
      "Instruktur Peternakan Ramah Anak",
      "Kafe Susu Murni & Olahan Kopi",
      "Gazebo Istirahat & Playground Outbound",
      "Parkir Kendaraan Luas"
    ],
    targetAudience: "PAUD, TK, SD, SMP, dan Komunitas Urban Farming",
    coordinates: { lat: -7.6322, lng: 110.4243 },
    reviews: [
      {
        user: "Siti Rahmawati",
        role: "Guru Kelas 4 SDN Condongcatur",
        rating: 5,
        date: "03 September 2026",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80",
        comment: "Siswa sangat senang bisa memegang kelinci dan belajar menanam sawi hidroponik yang boleh dibawa pulang ke rumah. Praktik lapangannya sangat mendidik."
      }
    ]
  },
  {
    id: 12,
    name: "Candi Borobudur & Museum Samudra Raksa",
    slug: "candi-borobudur-museum-samudra-raksa",
    category: "Sejarah & Budaya",
    categoryIcon: "fa-archway",
    tagline: "Keajaiban Arsitektur Candi Buddha Terbesar & Jalur Maritim Kuno",
    location: "Magelang, Jawa Tengah",
    address: "Jl. Badrawati, Kw. Candi Borobudur, Borobudur, Kec. Borobudur, Kabupaten Magelang, Jawa Tengah 56553",
    rating: 4.9,
    reviewsCount: 8900,
    price: 500000,
    openHours: "Setiap Hari: 06.30 - 17.00 WIB",
    heroImage: localDestinasiImage("borobudur.jpg"),
    gallery: [
      localDestinasiImage("borobudur.jpg"),
      localDestinasiImage("borobudur-1.jpg"),
      localDestinasiImage("borobudur-2.jpg"),
      localDestinasiImage("borobudur-3.jpg")
    ],
    isFeatured: true,
    badges: ["Situs Warisan Dunia UNESCO", "Masterpiece Arsitektur"],
    overview: "Candi Borobudur dibangun pada abad ke-8 oleh Dinasti Syailendra dan diakui UNESCO sebagai monumen Buddha terbesar di bumi dengan 2.672 panel relief dan 504 arca Buddha. Di kompleks candi juga berdiri Museum Samudra Raksa yang memamerkan replika kapal bercadik legendaris yang membuktikan kehebatan pelaut nusantara mengarungi Jalur Kayu Manis hingga Afrika pada abad purba.",
    curriculumMatches: [
      "Arsitektur Megalitikum & Teknik Pahat Batu Klasik",
      "Sejarah Peradaban Mataram Kuno & Toleransi Beragama",
      "Kajian Jalur Rempah & Kejayaan Bahari Nusantara",
      "Kajian Relief Cerita Karmawibhangga & Lalitavistara"
    ],
    facilities: [
      "Sandal Upanat Khusus Naik Candi Ramah Batu",
      "Museum Samudra Raksa & Bioskop Sinema Sejarah",
      "Pemandu Khusus Berlisensi Arkeologi",
      "Kendaraan Listrik Shuttle Ramah Lingkungan",
      "Pusat Cinderamata & Sentra Batik Magelang",
      "Area Parkir & Pusat Konsultasi Wisata Pelajar"
    ],
    targetAudience: "Semua Tingkat Pendidikan, Peneliti Sejarah Dunia",
    coordinates: { lat: -7.6079, lng: 110.2038 },
    reviews: [
      {
        user: "Bambang Sudarmono, M.Hum",
        role: "Sejarawan & Dosen Sejarah Kuno",
        rating: 5,
        date: "30 Agustus 2026",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80",
        comment: "Kajian relief di Borobudur merupakan ensiklopedia visual peradaban nusantara. Mengajak siswa kemari membuka wawasan tentang tingginya peradaban nenek moyang bangsa kita."
      }
    ]
  }
];

// Kategori Destinasi
const EDUTRIP_CATEGORIES = [
  { id: "all", name: "Semua Kategori", icon: "fa-compass", count: 12 },
  { id: "Sains & Teknologi", name: "Sains & Teknologi", icon: "fa-atom", count: 4 },
  { id: "Sejarah & Budaya", name: "Sejarah & Budaya", icon: "fa-landmark", count: 4 },
  { id: "Alam & Satwa", name: "Alam & Satwa", icon: "fa-leaf", count: 2 },
  { id: "Seni & Budaya", name: "Seni Musik & Tari", icon: "fa-guitar", count: 1 },
  { id: "Pertanian & Kreativitas", name: "Pertanian & Kreativitas", icon: "fa-seedling", count: 1 }
];

// Testimoni EduTrip
const EDUTRIP_TESTIMONIALS = [
  {
    name: "Dr. Sri Mulyani, M.Pd",
    role: "Kepala SMA Negeri 5 Jakarta",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80",
    text: "EduTrip mempermudah tim kesiswaan kami dalam merancang field trip tematik kurikulum merdeka. Semua informasi fasilitas dan silabus pembelajarannya sangat akurat!",
    rating: 5
  },
  {
    name: "Rizky Ramadhan",
    role: "Ketua OSIS SMP Labschool",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80",
    text: "Fitur simpan destinasi favorit sangat membantu pas lagi voting bareng temen-temen sekelas buat study tour tahunan. Desain websitenya keren dan gampang dipakai!",
    rating: 5
  },
  {
    name: "Maya Kusuma Dewi",
    role: "Orang Tua Siswa & Komite Sekolah",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80",
    text: "Kami jadi tahu tempat wisata mana yang punya nilai edukasi tinggi dan harga tiket yang ramah untuk anak-anak. EduTrip sangat inspiratif!",
    rating: 5
  }
];

// Frequently Asked Questions
const EDUTRIP_FAQS = [
  {
    q: "Apa itu EduTrip?",
    a: "EduTrip adalah platform direktori dan panduan wisata edukasi terlengkap di Indonesia yang menghubungkan institusi pendidikan, pelajar, orang tua, dan pengelola destinasi wisata ilmiah, budaya, sains, serta alam untuk menciptakan pembelajaran luar ruang yang seru dan bermakna."
  },
  {
    q: "Apakah harga tiket yang tertera khusus untuk rombongan pelajar?",
    a: "Benar. EduTrip mencantumkan harga khusus pelajar dan umum secara transparan, serta rincian fasilitas pemandu khusus sekolah agar pihak sekolah dapat merencanakan anggaran kegiatan secara akurat."
  },
  {
    q: "Bagaimana cara menyimpan destinasi favorit?",
    a: "Cukup klik ikon hati (Favorite) pada setiap kartu destinasi atau halaman detail. Destinasi pilihanmu akan otomatis tersimpan di halaman Profil Pengguna dan dapat diakses kapan saja."
  },
  {
    q: "Apakah EduTrip menyediakan layanan simulasi pemesanan tiket?",
    a: "Ya! Di halaman detail destinasi, kamu bisa menggunakan fitur Simulasi Pemesanan Tiket untuk menghitung total biaya rombongan sekolah dan mencetak rincian perkiraan biaya perjalanan."
  },
  {
    q: "Bagaimana jika destinasi wisata ingin bermitra dengan EduTrip?",
    a: "Pihak pengelola museum atau destinasi edukasi dapat menghubungi tim kami melalui formulir kontak di halaman Tentang Kami untuk mendaftarkan dan memverifikasi profil destinasinya."
  }
];

// Tim Pengembang EduTrip
const EDUTRIP_TEAM = [
  {
    name: "Ahmad Fadhilah",
    role: "Lead UI/UX Designer & Frontend Dev",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    bio: "Pengembang konsep pengalaman pengguna interaktif berfokus pada edutech dan pariwisata berkelanjutan."
  },
  {
    name: "Nabila Putri Kirana",
    role: "Curriculum & Educational Content Specialist",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    bio: "Mengkorelasikan materi destinasi wisata dengan capaian pembelajaran Kurikulum Merdeka Indonesia."
  },
  {
    name: "Dimas Aditya Pratama",
    role: "Research & Destination Field Analyst",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    bio: "Menjalin kemitraan dengan kurator museum, lembaga riset sains, dan desa adat nusantara."
  }
];
