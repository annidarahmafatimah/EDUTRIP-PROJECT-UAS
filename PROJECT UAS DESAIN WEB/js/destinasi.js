/**
 * EduTrip - Destinasi Catalog Controller
 * Menangani pencarian real-time, multi-filter kategori/harga/rating, dan pengurutan
 */

document.addEventListener('DOMContentLoaded', function () {
  const gridContainer = document.getElementById('destinasi-grid');
  const searchInput = document.getElementById('destinasi-search');
  const categoryPillsContainer = document.getElementById('category-pills');
  const categoryRadios = document.querySelectorAll('input[name="filter-category"]');
  const priceRadios = document.querySelectorAll('input[name="filter-price"]');
  const ratingRadios = document.querySelectorAll('input[name="filter-rating"]');
  const sortSelect = document.getElementById('sort-destinasi');
  const resultCount = document.getElementById('result-count');
  const resetBtn = document.getElementById('reset-filters-btn');

  if (!gridContainer || typeof EDUTRIP_DATA === 'undefined') return;

  // State Filter Aktif
  let currentFilters = {
    search: '',
    category: 'all',
    price: 'all',
    rating: 'all',
    sort: 'popular'
  };

  // Baca URL Query Params (misalnya dikirim dari form Hero di Beranda)
  const urlParams = new URLSearchParams(window.location.search);
  const qSearch = urlParams.get('search');
  const qCategory = urlParams.get('category');
  const qLocation = urlParams.get('location');

  if (qSearch) {
    currentFilters.search = qSearch;
    if (searchInput) searchInput.value = qSearch;
  }
  if (qCategory && qCategory !== 'all') {
    currentFilters.category = qCategory;
  }

  // Render Kategori Pills
  function renderCategoryPills() {
    if (!categoryPillsContainer || typeof EDUTRIP_CATEGORIES === 'undefined') return;

    categoryPillsContainer.innerHTML = EDUTRIP_CATEGORIES.map(cat => {
      const isActive = currentFilters.category === cat.id ? 'active' : '';
      return `
        <button type="button" class="category-pill ${isActive}" data-category-id="${cat.id}">
          <i class="fa-solid ${cat.icon}"></i>
          <span>${cat.name}</span>
          <span style="opacity: 0.7; font-size: 0.78rem;">(${cat.count})</span>
        </button>
      `;
    }).join('');

    categoryPillsContainer.querySelectorAll('.category-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        const catId = pill.dataset.categoryId;
        setCategory(catId);
      });
    });
  }

  function setCategory(catId) {
    currentFilters.category = catId;

    // Update pill active classes
    if (categoryPillsContainer) {
      categoryPillsContainer.querySelectorAll('.category-pill').forEach(p => {
        if (p.dataset.categoryId === catId) {
          p.classList.add('active');
        } else {
          p.classList.remove('active');
        }
      });
    }

    // Sync dengan radio button di sidebar jika ada
    categoryRadios.forEach(radio => {
      radio.checked = (radio.value === catId);
    });

    applyFilters();
  }

  // Terapkan Filter & Sorting
  function applyFilters() {
    let results = EDUTRIP_DATA.slice();

    // 1. Filter Pencarian Teks
    if (currentFilters.search.trim() !== '') {
      const q = currentFilters.search.toLowerCase().trim();
      results = results.filter(item => {
        return (
          item.name.toLowerCase().includes(q) ||
          item.location.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q) ||
          item.tagline.toLowerCase().includes(q) ||
          item.overview.toLowerCase().includes(q)
        );
      });
    }

    // 2. Filter Lokasi dari Query Param jika ada
    if (qLocation && qLocation !== 'all' && qLocation !== '') {
      results = results.filter(item => item.location.toLowerCase().includes(qLocation.toLowerCase()));
    }

    // 3. Filter Kategori
    if (currentFilters.category !== 'all') {
      results = results.filter(item => item.category === currentFilters.category);
    }

    // 4. Filter Rentang Harga Pelajar
    if (currentFilters.price !== 'all') {
      if (currentFilters.price === 'under25k') {
        results = results.filter(item => item.price <= 25000);
      } else if (currentFilters.price === '25k-50k') {
        results = results.filter(item => item.price > 25000 && item.price <= 50000);
      } else if (currentFilters.price === 'above50k') {
        results = results.filter(item => item.price > 50000);
      }
    }

    // 5. Filter Rating
    if (currentFilters.rating !== 'all') {
      const minRating = parseFloat(currentFilters.rating);
      if (!isNaN(minRating)) {
        results = results.filter(item => item.rating >= minRating);
      }
    }

    // 6. Sorting
    if (currentFilters.sort === 'rating-desc') {
      results.sort((a, b) => b.rating - a.rating);
    } else if (currentFilters.sort === 'price-asc') {
      results.sort((a, b) => a.price - b.price);
    } else if (currentFilters.sort === 'price-desc') {
      results.sort((a, b) => b.price - a.price);
    } else if (currentFilters.sort === 'name-asc') {
      results.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      // Default: Paling Populer (jumlah review terbanyak)
      results.sort((a, b) => b.reviewsCount - a.reviewsCount);
    }

    renderCards(results);
  }

  // Render Hasil ke Grid
  function renderCards(destinations) {
    if (resultCount) {
      resultCount.textContent = destinations.length;
    }

    if (destinations.length === 0) {
      gridContainer.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <h3>Tidak Ada Destinasi Ditemukan</h3>
          <p>Coba gunakan kata kunci lain atau setel ulang filter untuk melihat destinasi edukasi lainnya.</p>
          <button type="button" class="btn btn-primary btn-sm" id="empty-reset-btn">
            <i class="fa-solid fa-rotate-left"></i>
            <span>Setel Ulang Filter</span>
          </button>
        </div>
      `;

      const emptyResetBtn = document.getElementById('empty-reset-btn');
      if (emptyResetBtn) {
        emptyResetBtn.addEventListener('click', resetFilters);
      }
      return;
    }

    gridContainer.innerHTML = destinations.map(item => window.renderDestinationCard(item)).join('');
  }

  // Reset Semua Filter
  function resetFilters() {
    currentFilters = {
      search: '',
      category: 'all',
      price: 'all',
      rating: 'all',
      sort: 'popular'
    };

    if (searchInput) searchInput.value = '';
    if (sortSelect) sortSelect.value = 'popular';

    categoryRadios.forEach(radio => radio.checked = (radio.value === 'all'));
    priceRadios.forEach(radio => radio.checked = (radio.value === 'all'));
    ratingRadios.forEach(radio => radio.checked = (radio.value === 'all'));

    renderCategoryPills();
    applyFilters();
  }

  // Event Listeners
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentFilters.search = e.target.value;
      applyFilters();
    });
  }

  categoryRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      setCategory(e.target.value);
    });
  });

  priceRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      currentFilters.price = e.target.value;
      applyFilters();
    });
  });

  ratingRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      currentFilters.rating = e.target.value;
      applyFilters();
    });
  });

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentFilters.sort = e.target.value;
      applyFilters();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', resetFilters);
  }

  // Inisialisasi awal
  renderCategoryPills();
  applyFilters();
});
