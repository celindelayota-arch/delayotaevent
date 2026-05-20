function goLogin() {
  window.location.href = "login/index.html";
}

function logout() {
  localStorage.removeItem("user");
  alert("Logout berhasil!");
  location.reload();
}

document.addEventListener("DOMContentLoaded", function () {

  const user = localStorage.getItem("user");

  const userInfo = document.getElementById("userInfo");
  const authArea = document.getElementById("authArea");

  if (user) {

    // tampilkan email user
    userInfo.innerText = "Login sebagai: " + user;

    // ganti tombol login jadi logout
    authArea.innerHTML = `
      <button onclick="logout()" class="btn custom-btn custom-border-btn">
        Logout
      </button>
    `;

  } else {

    userInfo.innerText = "Belum login";

    authArea.innerHTML = `
      <button onclick="goLogin()" class="btn custom-btn custom-border-btn">
        Login
      </button>
    `;
  }

});
