function goLogin() {
  window.location.href = "login/index.html";
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = form.querySelector('input[type="text"]').value;
      const password = form.querySelector('input[type="password"]').value;

      if (email && password) {
        alert("Login berhasil!");

        // contoh simpan status login
        localStorage.setItem("user", email);

        window.location.href = "../index.html";
      } else {
        alert("Isi email dan password!");
      }
    });
  }
});
