let navToggle = document.querySelector(".navbar-toggler");
let navMenu = document.querySelector(".navbar-nav");


navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("navbar-nav_visible");
  
    if (navMenu.classList.contains("navbar-nav_visible")) {
      navToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
      navToggle.setAttribute("aria-label", "Abrir menú");
    }
  });