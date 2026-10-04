/**
 * EduTrip - Detail Destinasi Controller
 * Mengelola pemuatan data detail, galeri interaktif, tab konten, ulasan,
 * dan simulasi pemesanan tiket rombongan sekolah
 */

document.addEventListener('DOMContentLoaded', function () {
  if (typeof EDUTRIP_DATA === 'undefined') return;

  // Baca ID dari URL Query
  const urlParams = new URLSearchParams(window.location.search);
  let id = parseInt(urlParams.get('id'), 10);
  if (isNaN(id) || id <= 0) {
    id = 1; // Default fallback ke Taman Pintar Yogyakarta
  }

  const destination = EDUTRIP_DATA.find(d => d.id === id) || EDUTRIP_DATA[0];

  // Render Konten Detail
  renderDestinationDetail(destination);
  initGallery(destination);
  initTabs();
  initFavoriteButton(destination);
  initShareButton(destination);
  initBookingSimulator(destination);
  initReviewForm(destination);
  renderRelatedDestinations(destination);

  // Fungsi Render Detail Utama
  function renderDestinationDetail(data) {
    document.title = `${data.name} - EduTrip Wisata Edukasi`;

    // Breadcrumb
    const bcCurrent = document.getElementById('breadcrumb-current');
    if (bcCurrent) bcCurrent.textContent = data.name;

    // Badges & Categories
    const catBadge = document.getElementById('detail-category-badge');
    if (catBadge) {
      catBadge.innerHTML = `<i class="fa-solid ${data.categoryIcon || 'fa-landmark'}"></i> ${data.category}`;
    }

    const titleEl = document.getElementById('detail-title');
    if (titleEl) titleEl.textContent = data.name;

    const taglineEl = document.getElementById('detail-tagline');
    if (taglineEl) taglineEl.textContent = data.tagline;

    const locEl = document.getElementById('detail-location');
    if (locEl) locEl.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${data.location}`;

    const ratingEl = document.getElementById('detail-rating');
    if (ratingEl) {
      ratingEl.innerHTML = `<i class="fa-solid fa-star"></i> <strong>${data.rating.toFixed(1)}</strong> (${data.reviewsCount.toLocaleString()} ulasan terverifikasi)`;
    }

    const hoursEl = document.getElementById('detail-hours');
    if (hoursEl) {
      hoursEl.innerHTML = `<i class="fa-regular fa-clock"></i> ${data.openHours}`;
    }

    const overviewEl = document.getElementById('detail-overview');
    if (overviewEl) overviewEl.textContent = data.overview;

    const targetEl = document.getElementById('detail-target-audience');
    if (targetEl) targetEl.textContent = data.targetAudience;

    const addressEl = document.getElementById('detail-address');
    if (addressEl) addressEl.textContent = data.address;

    // Kurikulum Edukasi
    const currContainer = document.getElementById('curriculum-list');
    if (currContainer && data.curriculumMatches) {
      currContainer.innerHTML = data.curriculumMatches.map(c => `
        <div class="curriculum-item">
          <i class="fa-solid fa-circle-check"></i>
          <span>${c}</span>
        </div>
      `).join('');
    }

    // Fasilitas
    const facContainer = document.getElementById('facility-list');
    if (facContainer && data.facilities) {
      facContainer.innerHTML = data.facilities.map(f => `
        <div class="facility-card">
          <div class="facility-icon">
            <i class="fa-solid fa-check"></i>
          </div>
          <span style="font-weight: 600; font-size: 0.92rem; color: var(--text-main);">${f}</span>
        </div>
      `).join('');
    }

    // Rincian Harga
    const priceEl = document.getElementById('price-student-val');
    if (priceEl) priceEl.textContent = `${formatRupiah(data.price)} / orang`;
  }

  // Galeri & Lightbox
  function initGallery(data) {
    const mainImg = document.getElementById('gallery-main-img');
    const thumbsContainer = document.getElementById('gallery-thumbs-container');
    if (!mainImg || !thumbsContainer) return;

    const fallbackImage = 'assets/images/destinasi/destinasi-lainnya.svg';
    const resolveImage = (imgUrl) => imgUrl && typeof imgUrl === 'string' ? imgUrl : fallbackImage;

    mainImg.src = resolveImage(data.heroImage);
    mainImg.alt = data.name;
    mainImg.onerror = function () {
      this.onerror = null;
      this.src = fallbackImage;
    };

    const allImages = data.gallery && data.gallery.length > 0 ? data.gallery : [data.heroImage];
    thumbsContainer.innerHTML = allImages.slice(1, 3).map((imgUrl, idx) => {
      const safeImg = resolveImage(imgUrl);
      return `
        <div class="gallery-thumb-item" data-src="${safeImg}">
          <img src="${safeImg}" alt="${data.name} ${idx + 2}" onerror="this.onerror=null; this.src='${fallbackImage}';">
        </div>
      `;
    }).join('');

    // Klik thumbnail untuk tukar gambar utama
    thumbsContainer.querySelectorAll('.gallery-thumb-item').forEach(thumb => {
      thumb.addEventListener('click', function () {
        const clickedSrc = this.dataset.src || fallbackImage;
        const currentMainSrc = mainImg.src || fallbackImage;
        mainImg.src = clickedSrc;
        mainImg.onerror = function () {
          this.onerror = null;
          this.src = fallbackImage;
        };
        this.dataset.src = currentMainSrc;
        this.querySelector('img').src = currentMainSrc;
        this.querySelector('img').onerror = function () {
          this.onerror = null;
          this.src = fallbackImage;
        };
      });
    });
  }

  // Tabs Controller
  function initTabs() {
    const tabBtns = document.querySelectorAll('.detail-nav-tabs .tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.tab;
        tabBtns.forEach(b => b.classList.remove('active'));
        tabPanes.forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        const activePane = document.getElementById(`tab-${target}`);
        if (activePane) activePane.classList.add('active');
      });
    });
  }

  // Favorite Button
  function initFavoriteButton(data) {
    const favBtn = document.getElementById('btn-detail-favorite');
    if (!favBtn) return;

    const updateFavBtn = () => {
      const isFav = window.EduTripFavs.isFavorited(data.id);
      if (isFav) {
        favBtn.classList.add('btn-danger');
        favBtn.classList.remove('btn-secondary');
        favBtn.innerHTML = '<i class="fa-solid fa-heart"></i> <span>Tersimpan di Favorit</span>';
      } else {
        favBtn.classList.remove('btn-danger');
        favBtn.classList.add('btn-secondary');
        favBtn.innerHTML = '<i class="fa-regular fa-heart"></i> <span>Tambah Favorit</span>';
      }
    };

    updateFavBtn();

    favBtn.addEventListener('click', () => {
      window.EduTripFavs.toggleFavorite(data.id);
      updateFavBtn();
    });
  }

  // Share Button
  function initShareButton(data) {
    const shareBtn = document.getElementById('btn-detail-share');
    if (!shareBtn) return;

    shareBtn.addEventListener('click', () => {
      if (navigator.share) {
        navigator.share({
          title: `${data.name} - EduTrip`,
          text: data.tagline,
          url: window.location.href
        }).catch(() => {});
      } else {
        navigator.clipboard.writeText(window.location.href);
        window.EduTripToast.show("Tautan Disalin!", "Tautan destinasi berhasil disalin ke papan klip.", "info");
      }
    });
  }

  // Simulasi Tiket & Kalkulator Harga
  function initBookingSimulator(data) {
    const studentCountEl = document.getElementById('sim-student-count');
    const teacherCountEl = document.getElementById('sim-teacher-count');
    const packageSelect = document.getElementById('sim-package-select');
    const visitDateInput = document.getElementById('sim-visit-date');
    const btnMinusStudent = document.getElementById('btn-student-minus');
    const btnPlusStudent = document.getElementById('btn-student-plus');
    const btnMinusTeacher = document.getElementById('btn-teacher-minus');
    const btnPlusTeacher = document.getElementById('btn-teacher-plus');

    const subtotalStudentEl = document.getElementById('sim-subtotal-student');
    const subtotalTeacherEl = document.getElementById('sim-subtotal-teacher');
    const discountEl = document.getElementById('sim-discount-amount');
    const grandTotalEl = document.getElementById('sim-grand-total');
    const btnOrder = document.getElementById('btn-order-ticket');

    if (!studentCountEl || !grandTotalEl) return;

    // Set default date besok
    if (visitDateInput) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      visitDateInput.value = tomorrow.toISOString().split('T')[0];
      visitDateInput.min = new Date().toISOString().split('T')[0];
    }

    let students = 30; // default 1 kelas
    let teachers = 2;
    let packageMultiplier = 1;

    function recalculate() {
      studentCountEl.textContent = students;
      teacherCountEl.textContent = teachers;

      const studentPrice = data.price;
      const teacherPrice = data.price;
      packageMultiplier = parseFloat(packageSelect ? packageSelect.value : 1) || 1;

      const totalStudentBase = students * studentPrice * packageMultiplier;
      const totalTeacherBase = teachers * teacherPrice * packageMultiplier;

      // Diskon rombongan sekolah: jika siswa >= 25 dapat diskon 10%
      let discount = 0;
      if (students >= 25) {
        discount = totalStudentBase * 0.10;
      }

      const grandTotal = Math.max(0, (totalStudentBase + totalTeacherBase) - discount);

      if (subtotalStudentEl) subtotalStudentEl.textContent = formatRupiah(Math.round(totalStudentBase));
      if (subtotalTeacherEl) subtotalTeacherEl.textContent = formatRupiah(Math.round(totalTeacherBase));
      if (discountEl) discountEl.textContent = discount > 0 ? `-${formatRupiah(Math.round(discount))} (10%)` : formatRupiah(0);
      grandTotalEl.textContent = formatRupiah(Math.round(grandTotal));

      return { students, teachers, totalStudentBase, totalTeacherBase, discount, grandTotal };
    }

    if (btnMinusStudent) {
      btnMinusStudent.addEventListener('click', () => {
        if (students > 5) {
          students -= 5;
          recalculate();
        }
      });
    }

    if (btnPlusStudent) {
      btnPlusStudent.addEventListener('click', () => {
        students += 5;
        recalculate();
      });
    }

    if (btnMinusTeacher) {
      btnMinusTeacher.addEventListener('click', () => {
        if (teachers > 1) {
          teachers -= 1;
          recalculate();
        }
      });
    }

    if (btnPlusTeacher) {
      btnPlusTeacher.addEventListener('click', () => {
        teachers += 1;
        recalculate();
      });
    }

    if (packageSelect) {
      packageSelect.addEventListener('change', recalculate);
    }

    recalculate();

    // Modal Konfirmasi Pesanan Tiket
    if (btnOrder) {
      btnOrder.addEventListener('click', () => {
        const calc = recalculate();
        const user = window.EduTripAuth.getUser();
        const modal = document.getElementById('booking-invoice-modal');

        if (!modal) return;

        // Isi data modal
        document.getElementById('modal-invoice-dest').textContent = data.name;
        document.getElementById('modal-invoice-date').textContent = visitDateInput ? visitDateInput.value : '-';
        document.getElementById('modal-invoice-participants').textContent = `${calc.students} Siswa + ${calc.teachers} Guru Pendamping`;
        document.getElementById('modal-invoice-total').textContent = `Rp ${Math.round(calc.grandTotal).toLocaleString('id-ID')}`;

        // Buyer fields
        const buyerName = document.getElementById('buyer-name');
        const buyerEmail = document.getElementById('buyer-email');
        const buyerSchool = document.getElementById('buyer-school');

        if (user) {
          if (buyerName) buyerName.value = user.name;
          if (buyerEmail) buyerEmail.value = user.email;
          if (buyerSchool) buyerSchool.value = user.school || '';
        }

        modal.classList.add('active');
      });
    }

    // Modal Close Handler
    const modal = document.getElementById('booking-invoice-modal');
    if (modal) {
      modal.querySelectorAll('.modal-close-trigger').forEach(btn => {
        btn.addEventListener('click', () => modal.classList.remove('active'));
      });
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
      });

      // Submit Form Konfirmasi Pemesanan
      const bookingForm = document.getElementById('booking-confirmation-form');
      if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
          e.preventDefault();
          const calc = recalculate();
          const user = window.EduTripAuth.getUser();
          const buyerName = document.getElementById('buyer-name').value || 'Tamu';
          const buyerSchool = document.getElementById('buyer-school').value || 'Institusi Pendidikan';

          const newBooking = {
            id: 'EDT-' + Math.floor(100000 + Math.random() * 900000),
            destId: data.id,
            destName: data.name,
            destLocation: data.location,
            visitDate: visitDateInput ? visitDateInput.value : new Date().toISOString().split('T')[0],
            students: calc.students,
            teachers: calc.teachers,
            totalAmount: calc.grandTotal,
            buyerName: buyerName,
            buyerSchool: buyerSchool,
            status: 'Terkonfirmasi (Lunas)',
            createdAt: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
          };

          // Simpan ke riwayat localStorage
          const bookings = JSON.parse(localStorage.getItem('edutrip_bookings') || '[]');
          bookings.unshift(newBooking);
          localStorage.setItem('edutrip_bookings', JSON.stringify(bookings));

          modal.classList.remove('active');
          window.EduTripToast.show("Pemesanan Berhasil!", `Kode Booking: ${newBooking.id}. Cek riwayat di Profil Anda.`, "success");
        });
      }
    }
  }

  // Form Tambah Ulasan Interaktif
  function initReviewForm(data) {
    const reviewForm = document.getElementById('add-review-form');
    const reviewListContainer = document.getElementById('reviews-container');

    // Render Ulasan Bawaan
    if (reviewListContainer && data.reviews) {
      reviewListContainer.innerHTML = data.reviews.map(r => `
        <div class="review-item">
          <div class="review-user-header">
            <div class="review-user-meta">
              <img src="${r.avatar}" alt="${r.user}" class="review-avatar" onerror="this.src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80'">
              <div>
                <h5 style="font-size: 0.95rem; font-weight: 700; color: var(--text-main); margin-bottom: 2px;">${r.user}</h5>
                <span style="font-size: 0.78rem; color: var(--text-muted);">${r.role} • ${r.date}</span>
              </div>
            </div>
            <div style="color: var(--accent); font-weight: 700; font-size: 0.88rem;">
              ${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}
            </div>
          </div>
          <p style="font-size: 0.9rem; color: var(--text-body); line-height: 1.6;">${r.comment}</p>
        </div>
      `).join('');
    }

    if (reviewForm) {
      reviewForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const userName = document.getElementById('review-author-name').value.trim();
        const userRole = document.getElementById('review-author-role').value.trim() || 'Pelajar';
        const ratingVal = parseInt(document.getElementById('review-rating-select').value, 10) || 5;
        const comment = document.getElementById('review-text').value.trim();

        if (!userName || !comment) {
          window.EduTripToast.show("Peringatan", "Mohon isi nama dan ulasan Anda.", "warning");
          return;
        }

        const newReview = {
          user: userName,
          role: userRole,
          rating: ratingVal,
          date: "Hari Ini",
          avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80",
          comment: comment
        };

        const reviewHtml = `
          <div class="review-item" style="animation: fadeIn 0.4s ease; border-left: 4px solid var(--primary);">
            <div class="review-user-header">
              <div class="review-user-meta">
                <img src="${newReview.avatar}" alt="${newReview.user}" class="review-avatar">
                <div>
                  <h5 style="font-size: 0.95rem; font-weight: 700; color: var(--text-main); margin-bottom: 2px;">${newReview.user}</h5>
                  <span style="font-size: 0.78rem; color: var(--primary); font-weight: 600;">Baru saja • ${newReview.role}</span>
                </div>
              </div>
              <div style="color: var(--accent); font-weight: 700; font-size: 0.88rem;">
                ${'★'.repeat(newReview.rating)}${'☆'.repeat(5 - newReview.rating)}
              </div>
            </div>
            <p style="font-size: 0.9rem; color: var(--text-body); line-height: 1.6;">${newReview.comment}</p>
          </div>
        `;

        if (reviewListContainer) {
          reviewListContainer.insertAdjacentHTML('afterbegin', reviewHtml);
        }

        reviewForm.reset();
        window.EduTripToast.show("Terima Kasih!", "Ulasan Anda berhasil dipublikasikan.", "success");
      });
    }
  }

  // Render Destinasi Terkait
  function renderRelatedDestinations(current) {
    const container = document.getElementById('related-destinations-grid');
    if (!container) return;

    const related = EDUTRIP_DATA
      .filter(d => d.id !== current.id && (d.category === current.category || d.isFeatured))
      .slice(0, 3);

    container.innerHTML = related.map(item => window.renderDestinationCard(item)).join('');
  }
});
