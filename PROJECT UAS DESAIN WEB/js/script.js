/**
 * EduTrip - Core Shared Script
 * Mengelola state navigasi, autentikasi user, favorit, drawer mobile, dan sistem toast
 */

(function () {
  'use strict';

  // Inisialisasi Mock User pertama kali jika belum ada
  const DEFAULT_USER = {
    id: "usr_101",
    name: "Budi Santoso",
    email: "budi.santoso@edutrip.id",
    school: "SMA Negeri 1 Yogyakarta",
    role: "Pelajar / Siswa",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
    phone: "081234567890",
    joinedDate: "Agustus 2026"
  };

  // State Manager Autentikasi
  window.EduTripAuth = {
    getUser: function () {
      const user = localStorage.getItem('edutrip_user');
      return user ? JSON.parse(user) : null;
    },
    setUser: function (userData) {
      localStorage.setItem('edutrip_user', JSON.stringify(userData));
      window.EduTripNav.updateAuthUI();
    },
    logout: function () {
      localStorage.removeItem('edutrip_user');
      window.EduTripNav.updateAuthUI();
      window.EduTripToast.show("Berhasil Keluar", "Anda telah keluar dari akun EduTrip.", "info");
      // Jika berada di halaman profil, arahkan ke login
      if (window.location.pathname.includes('profil.html')) {
        setTimeout(() => {
          window.location.href = 'login.html';
        }, 1000);
      }
    },
    isLoggedIn: function () {
      return this.getUser() !== null;
    },
    loginDemo: function () {
      this.setUser(DEFAULT_USER);
      window.EduTripToast.show("Selamat Datang!", "Berhasil masuk sebagai " + DEFAULT_USER.name, "success");
      return DEFAULT_USER;
    }
  };

  // State Manager Favorit Destinasi
  window.EduTripFavs = {
    getFavorites: function () {
      const favs = localStorage.getItem('edutrip_favorites');
      return favs ? JSON.parse(favs) : [1, 2, 4]; // Default awal 3 destinasi favorit
    },
    isFavorited: function (id) {
      const favs = this.getFavorites();
      return favs.includes(Number(id));
    },
    toggleFavorite: function (id, event) {
      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }
      id = Number(id);
      let favs = this.getFavorites();
      const index = favs.indexOf(id);
      let isAdded = false;

      if (index > -1) {
        favs.splice(index, 1);
        isAdded = false;
      } else {
        favs.push(id);
        isAdded = true;
      }

      localStorage.setItem('edutrip_favorites', JSON.stringify(favs));
      this.updateBadges();

      // Cari data nama destinasi
      const item = typeof EDUTRIP_DATA !== 'undefined' ? EDUTRIP_DATA.find(d => d.id === id) : null;
      const title = item ? item.name : "Destinasi";

      if (isAdded) {
        window.EduTripToast.show("Tersimpan!", `${title} ditambahkan ke Favorit.`, "success");
      } else {
        window.EduTripToast.show("Dihapus", `${title} dihapus dari Favorit.`, "info");
      }

      // Update button state pada seluruh halaman yang menampilkan card dengan id tersebut
      document.querySelectorAll(`[data-fav-id="${id}"]`).forEach(btn => {
        if (isAdded) {
          btn.classList.add('favorited');
          btn.innerHTML = '<i class="fa-solid fa-heart"></i>';
        } else {
          btn.classList.remove('favorited');
          btn.innerHTML = '<i class="fa-regular fa-heart"></i>';
        }
      });

      // Dispatch custom event untuk listener lain (misal halaman profil)
      window.dispatchEvent(new CustomEvent('edutrip_favorites_changed', { detail: { id, isAdded, favs } }));

      return isAdded;
    },
    updateBadges: function () {
      const favs = this.getFavorites();
      const count = favs.length;
      document.querySelectorAll('.nav-badge-count').forEach(badge => {
        badge.textContent = count;
        badge.style.display = count > 0 ? 'flex' : 'none';
      });
    }
  };

  // Toast Notification System
  window.EduTripToast = {
    container: null,
    init: function () {
      if (!this.container) {
        this.container = document.createElement('div');
        this.container.className = 'toast-container';
        document.body.appendChild(this.container);
      }
    },
    show: function (title, message, type = 'success') {
      this.init();

      const toast = document.createElement('div');
      toast.className = `toast ${type}`;

      let iconClass = 'fa-circle-check';
      if (type === 'info') iconClass = 'fa-circle-info';
      if (type === 'warning') iconClass = 'fa-triangle-exclamation';
      if (type === 'danger') iconClass = 'fa-circle-xmark';

      toast.innerHTML = `
        <div class="toast-icon">
          <i class="fa-solid ${iconClass}"></i>
        </div>
        <div class="toast-message">
          <h5>${escapeHtml(title)}</h5>
          <p>${escapeHtml(message)}</p>
        </div>
        <button class="toast-close" aria-label="Tutup notifikasi">
          <i class="fa-solid fa-xmark"></i>
        </button>
      `;

      const closeBtn = toast.querySelector('.toast-close');
      const dismiss = () => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(40px)';
        setTimeout(() => {
          if (toast.parentNode) {
            toast.parentNode.removeChild(toast);
          }
        }, 300);
      };

      closeBtn.addEventListener('click', dismiss);
      this.container.appendChild(toast);

      // Auto dismiss after 3.8s
      setTimeout(dismiss, 3800);
    }
  };

  // Helper Sanitasi Teks
  function escapeHtml(string) {
    if (!string) return '';
    return String(string)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function getLocalImageFallback(itemName, fallbackName = 'destinasi-lainnya.svg') {
    const normalizedName = (itemName || '').toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .trim();

    const knownFallbacks = [
      'destinasi-lainnya.svg',
      'museum-geologi.jpg',
      'taman-pintar.jpg',
      'borobudur.jpg',
      'saung-angklung-udjo.jpg',
      'kebun-raya-bogor.jpg'
    ];

    const maybeLocal = normalizedName ? `assets/images/destinasi/${normalizedName}.jpg` : '';
    return maybeLocal || `assets/images/destinasi/${fallbackName}`;
  }

  function getSafeImageSrc(src, fallbackName) {
    if (!src || typeof src !== 'string') return `assets/images/destinasi/${fallbackName}`;
    return src;
  }

  function getDestinationImage(item) {
    if (item && item.heroImage) {
      return item.heroImage;
    }

    return getLocalImageFallback(item && item.name ? item.name : 'Destinasi');
  }

  // Render Template Kartu Destinasi (Re-usable across pages)
  window.renderDestinationCard = function (item) {
    const isFav = window.EduTripFavs.isFavorited(item.id);
    const favClass = isFav ? 'favorited' : '';
    const heartIcon = isFav ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
    const cardImage = getSafeImageSrc(getDestinationImage(item), 'destinasi-lainnya.svg');

    return `
      <article class="destination-card" data-category="${escapeHtml(item.category)}" data-id="${item.id}">
        <div class="card-media">
          <span class="card-category-badge">
            <i class="fa-solid ${item.categoryIcon || 'fa-landmark'}"></i>
            ${escapeHtml(item.category)}
          </span>
          <button class="card-favorite-btn ${favClass}" data-fav-id="${item.id}" onclick="window.EduTripFavs.toggleFavorite(${item.id}, event)" title="${isFav ? 'Hapus dari Favorit' : 'Tambah ke Favorit'}" aria-label="Favorit">
            <i class="${heartIcon}"></i>
          </button>
          <img src="${escapeHtml(cardImage)}" alt="${escapeHtml(item.name)}" class="card-img" loading="lazy" onerror="this.onerror=null; this.src='assets/images/destinasi/destinasi-lainnya.svg'">
        </div>
        <div class="card-body">
          <div class="card-location-meta">
            <span class="card-location">
              <i class="fa-solid fa-location-dot"></i>
              ${escapeHtml(item.location)}
            </span>
            <span class="card-rating">
              <i class="fa-solid fa-star"></i>
              ${item.rating.toFixed(1)}
              <span class="card-rating-count">(${item.reviewsCount})</span>
            </span>
          </div>
          <h3 class="card-title">
            <a href="detail.html?id=${item.id}">${escapeHtml(item.name)}</a>
          </h3>
          <p class="card-tagline">${escapeHtml(item.tagline)}</p>
          <div class="card-footer">
            <div class="card-price-wrap">
              <span class="price-sub">Tiket Pelajar</span>
              <span class="price-val">${escapeHtml(formatRupiah(item.price))}</span>
            </div>
            <a href="detail.html?id=${item.id}" class="btn btn-primary btn-sm">
              <span>Detail</span>
              <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </article>
    `;
  };

  // Navigasi & Mobile Menu Handler
  window.EduTripNav = {
    init: function () {
      this.initSticky();
      this.initMobileDrawer();
      this.initActiveLinks();
      this.updateAuthUI();
      window.EduTripFavs.updateBadges();
      this.initUserDropdown();
    },

    initSticky: function () {
      const header = document.querySelector('.site-header');
      if (!header) return;
      window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }, { passive: true });
    },

    initMobileDrawer: function () {
      const hamburger = document.querySelector('.hamburger-btn');
      const drawer = document.querySelector('.mobile-drawer');
      const overlay = document.querySelector('.drawer-overlay');
      const closeBtn = document.querySelector('.drawer-close');

      if (!hamburger || !drawer || !overlay) return;

      const openDrawer = () => {
        hamburger.classList.add('active');
        drawer.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      };

      const closeDrawer = () => {
        hamburger.classList.remove('active');
        drawer.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      };

      hamburger.addEventListener('click', () => {
        if (drawer.classList.contains('active')) {
          closeDrawer();
        } else {
          openDrawer();
        }
      });

      if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
      overlay.addEventListener('click', closeDrawer);

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && drawer.classList.contains('active')) {
          closeDrawer();
        }
      });
    },

    initActiveLinks: function () {
      const currentPath = window.location.pathname.split('/').pop() || 'index.html';
      const navLinks = document.querySelectorAll('.nav-link, .drawer-nav-item a');

      navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath || (currentPath === '' && href === 'index.html')) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    },

    initUserDropdown: function () {
      document.addEventListener('click', (e) => {
        const dropdown = document.querySelector('.user-dropdown');
        const trigger = document.querySelector('.user-profile-btn');

        if (!dropdown || !trigger) return;

        if (trigger.contains(e.target)) {
          dropdown.classList.toggle('show');
        } else if (!dropdown.contains(e.target)) {
          dropdown.classList.remove('show');
        }
      });
    },

    updateAuthUI: function () {
      const user = window.EduTripAuth.getUser();
      const authDesktopContainer = document.getElementById('nav-auth-desktop');
      const authDrawerContainer = document.getElementById('nav-auth-drawer');

      if (authDesktopContainer) {
        if (user) {
          authDesktopContainer.innerHTML = `
            <div class="user-menu-wrapper">
              <button class="user-profile-btn" aria-haspopup="true" aria-label="Menu Pengguna">
                <img src="${escapeHtml(user.avatar)}" alt="${escapeHtml(user.name)}" class="user-avatar-sm" onerror="this.src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80'">
                <span class="user-name-label">${escapeHtml(user.name)}</span>
                <i class="fa-solid fa-angle-down" style="font-size: 0.75rem; color: var(--text-muted);"></i>
              </button>
              <div class="user-dropdown">
                <div class="user-dropdown-header">
                  <div class="dropdown-user-name">${escapeHtml(user.name)}</div>
                  <div class="dropdown-user-role">${escapeHtml(user.school || 'Pelajar')}</div>
                </div>
                <a href="profil.html" class="dropdown-item">
                  <i class="fa-regular fa-user"></i>
                  <span>Profil Saya</span>
                </a>
                <a href="profil.html?tab=favorites" class="dropdown-item">
                  <i class="fa-regular fa-heart"></i>
                  <span>Destinasi Favorit</span>
                </a>
                <a href="profil.html?tab=history" class="dropdown-item">
                  <i class="fa-solid fa-ticket"></i>
                  <span>Riwayat Tiket</span>
                </a>
                <hr style="border: none; border-top: 1px solid var(--border-color); margin: 4px 0;">
                <button type="button" class="dropdown-item danger" onclick="window.EduTripAuth.logout()">
                  <i class="fa-solid fa-right-from-bracket"></i>
                  <span>Keluar</span>
                </button>
              </div>
            </div>
          `;
        } else {
          authDesktopContainer.innerHTML = `
            <a href="login.html" class="btn btn-secondary btn-sm">Masuk</a>
            <a href="register.html" class="btn btn-primary btn-sm">Daftar</a>
          `;
        }
      }

      if (authDrawerContainer) {
        if (user) {
          authDrawerContainer.innerHTML = `
            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem; padding: 0.5rem; background: var(--bg-surface-alt); border-radius: var(--radius-sm);">
              <img src="${escapeHtml(user.avatar)}" alt="${escapeHtml(user.name)}" class="user-avatar-sm" style="width: 40px; height: 40px;">
              <div>
                <div style="font-weight: 700; font-size: 0.9rem; color: var(--text-main);">${escapeHtml(user.name)}</div>
                <div style="font-size: 0.75rem; color: var(--text-muted);">${escapeHtml(user.school || 'Pelajar')}</div>
              </div>
            </div>
            <a href="profil.html" class="btn btn-secondary btn-sm btn-full">
              <i class="fa-regular fa-user"></i>
              <span>Profil Pengguna</span>
            </a>
            <button type="button" class="btn btn-outline btn-sm btn-full" onclick="window.EduTripAuth.logout()">
              <i class="fa-solid fa-right-from-bracket"></i>
              <span>Keluar</span>
            </button>
          `;
        } else {
          authDrawerContainer.innerHTML = `
            <a href="login.html" class="btn btn-secondary btn-full">Masuk</a>
            <a href="register.html" class="btn btn-primary btn-full">Daftar Akun Baru</a>
          `;
        }
      }
    }
  };

  // Jalankan inisialisasi saat DOM siap
  document.addEventListener('DOMContentLoaded', function () {
    window.EduTripNav.init();
  });

})();
