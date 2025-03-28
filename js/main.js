document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector("#hamburger");
    const navMenu = document.querySelector(".header2-menues");
  
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  });
  