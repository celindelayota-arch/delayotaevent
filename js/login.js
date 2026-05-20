function goLogin() {
  window.location.href = "login/index.html";
}

document.addEventListener("DOMContentLoaded", function () {

  // =========================
  // CEK STATUS LOGIN
  // =========================
  const user = localStorage.getItem("user");
  const statusText = document.getElementById("loginStatus");

  if (statusText) {
    if (user) {
      statusText.innerText = "Sudah login sebagai " + user;
    } else {
      statusText.innerText = "Belum Login";
    }
  }

  // =========================
  // PROSES LOGIN
  // =========================
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = form.querySelector('input[type="text"]').value;
      const password = form.querySelector('input[type="password"]').value;

      if (email && password) {
        alert("Login berhasil!");

        // simpan status login
        localStorage.setItem("user", email);

        // pindah ke halaman utama
        window.location.href = "../index.html";
      } else {
        alert("Isi email dan password!");
      }
    });
  }
});

// =========================
// LOGOUT
// =========================
function logout() {
  localStorage.removeItem("user");
  alert("Berhasil logout!");
  location.reload();
}
