document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navLinks = document.querySelector(".nav-links");

  mobileMenuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    const icon = this.querySelector("i");
    if (navLinks.classList.contains("active")) {
      icon.classList.replace("fa-bars", "fa-times");
    } else {
      icon.classList.replace("fa-times", "fa-bars");
    }
  });
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 768) {
        navLinks.classList.remove("active");
        mobileMenuBtn
          .querySelector("i")
          .classList.replace("fa-times", "fa-bars");
      }
    });
  });
});
