let navToggle = document.querySelector(".navbar-toggler");
let navMenu = document.querySelector(".navbar-nav");

let btnMenu = document.querySelector(".navMenu");


navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("navbar-nav_visible");
  
    if (navMenu.classList.contains("navbar-nav_visible")) {
      navToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
      navToggle.setAttribute("aria-label", "Abrir menú");
    }
  });

btnMenu.addEventListener("click", function(){
        window.location.href = "contacto.html";
    });

// // Cargar Navbar
// fetch('./contacto.html')
//     .then(response => response.text())
//     .then(data => {
//         document.getElementById('navBarColap').innerHTML = data;
//     });
