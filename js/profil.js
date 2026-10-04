/**
 * EduTrip - Profil Pengguna Controller
 * Mengelola kustomisasi profil, upload foto/avatar, persona demo,
 * daftar favorit tersimpan, dan riwayat pemesanan tiket
 */

document.addEventListener('DOMContentLoaded', function () {
  // Elemen Tampilan Profil Utama
  const userAvatarEl = document.getElementById('profile-avatar');
  const userNameEl = document.getElementById('profile-name');
  const userSchoolEl = document.getElementById('profile-school');
  const userEmailEl = document.getElementById('profile-email');
  const userPhoneEl = document.getElementById('profile-phone');
  const userRoleEl = document.getElementById('profile-role');
  const userBioEl = document.getElementById('profile-bio');
  const userCoinEl = document.getElementById('profile-coin-count');

  // Elemen Counter
  const favoritesGrid = document.getElementById('profile-favorites-grid');
  const favoritesCountEl = document.getElementById('profile-fav-count');
  const favBadgeInner = document.getElementById('fav-badge-inner');
  const bookingsContainer = document.getElementById('profile-bookings-container');
  const bookingsCountEl = document.getElementById('profile-book-count');

  // Elemen Form Modal Edit
  const editProfileForm = document.getElementById('edit-profile-form');
  const editAvatarPreview = document.getElementById('edit-avatar-preview');
  const avatarFileInput = document.getElementById('avatar-file-input');
  const editNameInput = document.getElementById('edit-name');
  const editRoleSelect = document.getElementById('edit-role');
  const editSchoolInput = document.getElementById('edit-school');
  const editEmailInput = document.getElementById('edit-email');
  const editPhoneInput = document.getElementById('edit-phone');
  const editBioInput = document.getElementById('edit-bio');

  // State Avatar yang sedang dipilih untuk modal
  let tempAvatarSrc = '';

  // Pastikan ada user (buat demo user jika belum login)
  let currentUser = window.EduTripAuth.getUser();
  if (!currentUser) {
    currentUser = window.EduTripAuth.loginDemo();
  }

  // Load User Data ke Halaman dan Form Modal
  function loadUserData() {
    currentUser = window.EduTripAuth.getUser();
    if (!currentUser) return;

    tempAvatarSrc = currentUser.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80";

    // Update Kartu Profil Utama
    if (userAvatarEl) userAvatarEl.src = tempAvatarSrc;
    if (userNameEl) userNameEl.textContent = currentUser.name || "Budi Santoso";
    if (userSchoolEl) userSchoolEl.innerHTML = `<i class="fa-solid fa-graduation-cap"></i> ${currentUser.school || 'SMA Negeri 1 Yogyakarta'}`;
    if (userEmailEl) userEmailEl.textContent = currentUser.email || "budi.santoso@edutrip.id";
    if (userPhoneEl) userPhoneEl.textContent = currentUser.phone || "081234567890";
    if (userRoleEl) userRoleEl.textContent = currentUser.role || "Pelajar / Siswa";
    if (userBioEl) userBioEl.textContent = `"${currentUser.bio || 'Belajar sains dan eksplorasi cagar budaya nusantara.'}"`;
    if (userCoinEl) userCoinEl.textContent = (currentUser.coins || 150) + ' Poin';

    // Update Input di Modal Edit
    if (editAvatarPreview) editAvatarPreview.src = tempAvatarSrc;
    if (editNameInput) editNameInput.value = currentUser.name || '';
    if (editRoleSelect) editRoleSelect.value = currentUser.role || 'Pelajar / Siswa';
    if (editSchoolInput) editSchoolInput.value = currentUser.school || '';
    if (editEmailInput) editEmailInput.value = currentUser.email || '';
    if (editPhoneInput) editPhoneInput.value = currentUser.phone || '';
    if (editBioInput) editBioInput.value = currentUser.bio || '';
  }

  // Pilihan Preset Avatar Siap Pakai
  window.choosePresetAvatar = function (src) {
    tempAvatarSrc = src;
    if (editAvatarPreview) editAvatarPreview.src = src;

    // Highlight aktif pada preset
    document.querySelectorAll('.preset-avatar-item').forEach(img => {
      if (img.src === src) {
        img.classList.add('active');
      } else {
        img.classList.remove('active');
      }
    });

    window.EduTripToast.show("Avatar Dipilih", "Klik Simpan Perubahan untuk menerapkan foto baru.", "info");
  };

  // Upload Foto Sendiri dari Komputer / HP
  if (avatarFileInput) {
    avatarFileInput.addEventListener('change', function (e) {
      const file = e.target.files[0];
      if (!file) return;

      if (!file.type.startsWith('image/')) {
        window.EduTripToast.show("Gagal", "File yang diunggah harus berupa gambar.", "danger");
        return;
      }

      const reader = new FileReader();
      reader.onload = function (event) {
        tempAvatarSrc = event.target.result;
        if (editAvatarPreview) editAvatarPreview.src = tempAvatarSrc;
        window.EduTripToast.show("Foto Dimuat", "Foto Anda siap disimpan ke profil.", "success");
      };
      reader.readAsDataURL(file);
    });
  }

  // Tukar Profil Cepat (Mode Demo UAS Persona)
  window.switchPersona = function (type) {
    let personaData = {};

    if (type === 'budi') {
      personaData = {
        id: "usr_101",
        name: "Budi Santoso",
        role: "Pelajar / Siswa",
        school: "SMA Negeri 1 Yogyakarta",
        email: "budi.santoso@edutrip.id",
        phone: "081234567890",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
        bio: "Belajar sains dan eksplorasi cagar budaya nusantara.",
        coins: 150
      };
    } else if (type === 'ratna') {
      personaData = {
        id: "usr_102",
        name: "Ratna Sari, S.Pd",
        role: "Guru / Tenaga Pendidik",
        school: "SMP Negeri 5 Bandung",
        email: "ratna.sari@edutrip.id",
        phone: "081987654321",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
        bio: "Koordinator field trip sekolah & penggiat Kurikulum Merdeka.",
        coins: 320
      };
    } else if (type === 'dimas') {
      personaData = {
        id: "usr_103",
        name: "Dimas Aditya Pratama",
        role: "Mahasiswa / Akademisi",
        school: "Universitas Gadjah Mada",
        email: "dimas.aditya@edutrip.id",
        phone: "085612349999",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
        bio: "Peneliti muda arkeologi nusantara dan konservasi cagar budaya.",
        coins: 250
      };
    }

    window.EduTripAuth.setUser(personaData);
    loadUserData();
    window.EduTripToast.show("Profil Beralih!", `Sekarang masuk sebagai: ${personaData.name} (${personaData.role})`, "success");
  };

  // Submit Formulir Edit Profil
  if (editProfileForm) {
    editProfileForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const newName = editNameInput.value.trim();
      const newEmail = editEmailInput.value.trim();

      if (!newName || !newEmail) {
        window.EduTripToast.show("Peringatan", "Nama lengkap dan email tidak boleh kosong.", "warning");
        return;
      }

      const updatedUser = {
        ...currentUser,
        avatar: tempAvatarSrc || currentUser.avatar,
        name: newName,
        role: editRoleSelect ? editRoleSelect.value : (currentUser.role || 'Pelajar / Siswa'),
        school: editSchoolInput.value.trim() || 'SMA Negeri 1 Yogyakarta',
        email: newEmail,
        phone: editPhoneInput.value.trim() || '081234567890',
        bio: editBioInput.value.trim() || 'Semangat belajar dan eksplorasi wisata edukasi!'
      };

      // Simpan ke localStorage & update UI Navbar
      window.EduTripAuth.setUser(updatedUser);
      loadUserData();

      // Tutup Modal
      const modal = document.getElementById('edit-profile-modal');
      if (modal) modal.classList.remove('active');

      window.EduTripToast.show("Profil Berhasil Diperbarui!", `Data atas nama ${updatedUser.name} telah disimpan.`, "success");
    });
  }

  // Modal Open & Close Helpers
  window.showSettingsModal = function () {
    loadUserData();
    const modal = document.getElementById('edit-profile-modal');
    if (modal) modal.classList.add('active');
  };

  window.closeSettingsModal = function () {
    const modal = document.getElementById('edit-profile-modal');
    if (modal) modal.classList.remove('active');
  };

  // Render Destinasi Favorit
  function renderFavorites() {
    if (!favoritesGrid || typeof EDUTRIP_DATA === 'undefined') return;

    const favIds = window.EduTripFavs.getFavorites();
    const favDestinations = EDUTRIP_DATA.filter(item => favIds.includes(item.id));

    if (favoritesCountEl) favoritesCountEl.textContent = favDestinations.length;
    if (favBadgeInner) favBadgeInner.textContent = `${favDestinations.length} Tersimpan`;

    if (favDestinations.length === 0) {
      favoritesGrid.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1;">
          <div class="empty-state-icon">
            <i class="fa-regular fa-heart"></i>
          </div>
          <h3>Belum Ada Destinasi Favorit</h3>
          <p>Tandai destinasi wisata edukasi favoritmu dengan mengklik tombol ikon hati pada kartu destinasi.</p>
          <a href="destinasi.html" class="btn btn-primary btn-sm">
            <i class="fa-solid fa-compass"></i>
            <span>Jelajahi Katalog Sekarang</span>
          </a>
        </div>
      `;
      return;
    }

    favoritesGrid.innerHTML = favDestinations.map(item => window.renderDestinationCard(item)).join('');
  }

  // Render Riwayat Booking Tiket (Sesuai Desain Figma)
  function renderBookings() {
    if (!bookingsContainer) return;

    let bookings = JSON.parse(localStorage.getItem('edutrip_bookings') || '[]');
    if (bookings.length === 0) {
      bookings = [
        {
          id: 'EDT-619280',
          destId: 5,
          destName: 'Saung Angklung Udjo',
          destLocation: 'Bandung',
          packageName: 'Paket Rombongan Sekolah',
          visitDate: '15 Okt 2026',
          students: 20,
          teachers: 2,
          totalAmount: EDUTRIP_DATA.find(destination => destination.id === 5).packagePrices.school,
          buyerName: currentUser ? currentUser.name : 'Budi Santoso',
          buyerSchool: currentUser ? currentUser.school : 'SMA Negeri 1 Yogyakarta',
          status: 'Terkonfirmasi',
          createdAt: '20 September 2026'
        }
      ];
      localStorage.setItem('edutrip_bookings', JSON.stringify(bookings));
    }

    if (bookingsCountEl) bookingsCountEl.textContent = bookings.length;

    bookingsContainer.innerHTML = bookings.map(b => `
      <div class="ticket-history-card">
        <div style="display: flex; align-items: center; gap: 1.25rem;">
          <div style="width: 52px; height: 52px; border-radius: var(--radius-md); background: var(--primary-light); color: var(--primary); display: flex; align-items: center; justify-content: center; font-size: 1.5rem;">
            <i class="fa-solid fa-ticket"></i>
          </div>
          <div>
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.25rem;">
              <span class="badge badge-green" style="font-family: monospace;">#${b.id}</span>
              <span class="badge badge-green">${b.status}</span>
            </div>
            <h4 style="font-size: 1.15rem; font-weight: 800; color: var(--text-main); margin-bottom: 0.2rem;">${b.destName}</h4>
            <div style="font-size: 0.82rem; color: var(--text-muted); display: flex; gap: 1rem; flex-wrap: wrap;">
              <span><i class="fa-regular fa-calendar"></i> Tanggal: ${b.visitDate}</span>
              <span><i class="fa-solid fa-box"></i> ${b.packageName || 'Paket Sekolah'}</span>
            </div>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;">
          <div style="font-size: 1.25rem; font-weight: 800; color: var(--primary-dark);">
            ${formatRupiah(b.totalAmount)}
          </div>
          <div style="display: flex; gap: 0.5rem;">
            <button type="button" class="btn btn-primary btn-sm" onclick="window.printTicketInvoice('${b.id}')">
              <i class="fa-solid fa-qrcode"></i>
              <span>E-Tiket</span>
            </button>
            <a href="survey.html" class="btn btn-secondary btn-sm" title="Beri Evaluasi">
              <i class="fa-regular fa-star"></i>
              <span>Isi Survey</span>
            </a>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Cetak E-Tiket Modal
  window.printTicketInvoice = function (bookingId) {
    const bookings = JSON.parse(localStorage.getItem('edutrip_bookings') || '[]');
    let b = bookings.find(item => item.id === bookingId);
    if (!b) b = bookings[0];
    if (!b) return;

    const modal = document.getElementById('ticket-view-modal');
    if (modal) {
      document.getElementById('ticket-modal-id').textContent = '#' + b.id;
      document.getElementById('ticket-modal-dest').textContent = b.destName;
      document.getElementById('ticket-modal-date').textContent = b.visitDate;
      document.getElementById('ticket-modal-buyer').textContent = b.buyerName || currentUser.name;
      document.getElementById('ticket-modal-school').textContent = b.buyerSchool || currentUser.school || '-';
      document.getElementById('ticket-modal-pax').textContent = b.packageName || `${b.students} Siswa + ${b.teachers} Guru`;
      document.getElementById('ticket-modal-total').textContent = formatRupiah(b.totalAmount);
      modal.classList.add('active');
    }
  };

  // Listener favorit diubah
  window.addEventListener('edutrip_favorites_changed', function () {
    renderFavorites();
  });

  // Inisialisasi awal
  loadUserData();
  renderFavorites();
  renderBookings();
});
