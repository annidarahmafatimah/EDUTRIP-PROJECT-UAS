/**
 * EduTrip - Autentikasi Frontend Controller
 * Mengelola validasi form login, form registrasi, password toggle, dan akun demo
 */

document.addEventListener('DOMContentLoaded', function () {
  // Toggle Password Visibility
  document.querySelectorAll('.toggle-pwd-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const input = this.previousElementSibling;
      if (!input) return;

      if (input.type === 'password') {
        input.type = 'text';
        this.innerHTML = '<i class="fa-regular fa-eye-slash"></i>';
      } else {
        input.type = 'password';
        this.innerHTML = '<i class="fa-regular fa-eye"></i>';
      }
    });
  });

  // Tombol Demo Login Cepat (Tersedia di halaman login)
  const demoLoginBtn = document.getElementById('btn-demo-login');
  if (demoLoginBtn) {
    demoLoginBtn.addEventListener('click', function () {
      window.EduTripAuth.loginDemo();
      setTimeout(() => {
        window.location.href = 'profil.html';
      }, 700);
    });
  }

  // Login Form Handling
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const emailInput = document.getElementById('login-email');
      const pwdInput = document.getElementById('login-password');
      const emailError = document.getElementById('login-email-error');
      const pwdError = document.getElementById('login-password-error');

      let isValid = true;

      // Reset errors
      if (emailError) emailError.classList.remove('show');
      if (pwdError) pwdError.classList.remove('show');
      emailInput.closest('.form-input-wrap').classList.remove('error');
      pwdInput.closest('.form-input-wrap').classList.remove('error');

      // Validasi Email
      const emailVal = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailVal || !emailRegex.test(emailVal)) {
        isValid = false;
        if (emailError) {
          emailError.textContent = 'Masukkan alamat email yang valid.';
          emailError.classList.add('show');
        }
        emailInput.closest('.form-input-wrap').classList.add('error');
      }

      // Validasi Password
      const pwdVal = pwdInput.value;
      if (!pwdVal || pwdVal.length < 6) {
        isValid = false;
        if (pwdError) {
          pwdError.textContent = 'Kata sandi minimal 6 karakter.';
          pwdError.classList.add('show');
        }
        pwdInput.closest('.form-input-wrap').classList.add('error');
      }

      if (!isValid) return;

      // Cek apakah ada user terdaftar di localStorage
      let existingUser = window.EduTripAuth.getUser();
      const userName = (existingUser && existingUser.email === emailVal)
        ? existingUser.name
        : (emailVal.split('@')[0].charAt(0).toUpperCase() + emailVal.split('@')[0].slice(1));

      const loggedUser = {
        id: "usr_" + Math.floor(100 + Math.random() * 900),
        name: userName,
        email: emailVal,
        school: existingUser ? existingUser.school : "Pelajar / Siswa Aktif",
        role: "Pelajar / Siswa",
        avatar: existingUser ? existingUser.avatar : "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
        phone: existingUser ? existingUser.phone : "081234567890",
        joinedDate: "September 2026"
      };

      window.EduTripAuth.setUser(loggedUser);
      window.EduTripToast.show("Berhasil Masuk!", `Selamat datang kembali, ${loggedUser.name}!`, "success");

      setTimeout(() => {
        window.location.href = 'profil.html';
      }, 900);
    });
  }

  // Register Form Handling
  const registerForm = document.getElementById('register-form');
  if (registerForm) {
    registerForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const nameInput = document.getElementById('reg-name');
      const schoolInput = document.getElementById('reg-school');
      const emailInput = document.getElementById('reg-email');
      const pwdInput = document.getElementById('reg-password');
      const pwdConfirmInput = document.getElementById('reg-confirm-password');

      let isValid = true;

      // Reset error styles
      document.querySelectorAll('.form-error-msg').forEach(el => el.classList.remove('show'));
      document.querySelectorAll('.form-input-wrap').forEach(el => el.classList.remove('error'));

      // Validate Nama
      if (!nameInput.value.trim()) {
        isValid = false;
        showError('reg-name-error', nameInput, 'Nama lengkap wajib diisi.');
      }

      // Validate Sekolah
      if (!schoolInput.value.trim()) {
        isValid = false;
        showError('reg-school-error', schoolInput, 'Asal sekolah atau universitas wajib diisi.');
      }

      // Validate Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!nameInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
        isValid = false;
        showError('reg-email-error', emailInput, 'Masukkan email yang valid.');
      }

      // Validate Password
      if (pwdInput.value.length < 6) {
        isValid = false;
        showError('reg-password-error', pwdInput, 'Kata sandi minimal 6 karakter.');
      }

      // Validate Confirm Password
      if (pwdInput.value !== pwdConfirmInput.value) {
        isValid = false;
        showError('reg-confirm-password-error', pwdConfirmInput, 'Konfirmasi kata sandi tidak cocok.');
      }

      if (!isValid) return;

      const newUser = {
        id: "usr_" + Math.floor(100 + Math.random() * 900),
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        school: schoolInput.value.trim(),
        role: "Pelajar / Siswa",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
        phone: "081234567890",
        joinedDate: "September 2026"
      };

      window.EduTripAuth.setUser(newUser);
      window.EduTripToast.show("Registrasi Berhasil!", `Akun ${newUser.name} siap digunakan.`, "success");

      setTimeout(() => {
        window.location.href = 'profil.html';
      }, 1000);
    });
  }

  function showError(errorId, inputEl, message) {
    const errorEl = document.getElementById(errorId);
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.classList.add('show');
    }
    if (inputEl) {
      const wrap = inputEl.closest('.form-input-wrap');
      if (wrap) wrap.classList.add('error');
    }
  }
});
