let navToggle = document.querySelector(".navbar-toggler");
let navMenu = document.querySelector(".navbar-nav");

let btnMenu = document.querySelector(".navMenu");
let btnAcerca = document.querySelector(".navAcerca");
let btnCarrito = document.querySelector(".bi-cart3");
let btnContacto = document.querySelector(".navContacto");
let btnLogin = document.querySelector(".bi-person-circle");
let btnNosotros = document.querySelector(".navNosotros");
let btnPromos = document.querySelector(".navPromos");
let btnSucursales = document.querySelector(".navSucursales");
let btnLogo = document.querySelector(".logoNav");



navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("navbar-nav_visible");
  
    if (navMenu.classList.contains("navbar-nav_visible")) {
      navToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
      navToggle.setAttribute("aria-label", "Abrir menú");
    }
  });
  

btnLogo.addEventListener("click", function(){
    window.location.href = "index.html";
});

btnMenu.addEventListener("click", function(){
        window.location.href = "menu.html";
    });

btnAcerca.addEventListener("click", function(){
        window.location.href = "acerca.html";
    });

btnCarrito.addEventListener("click", function(){
        window.location.href = "carritoCom.html";
    });

btnContacto.addEventListener("click", function(){
        window.location.href = "contacto.html";
    });

btnLogin.addEventListener("click", function(){
        window.location.href = "login.html";
    });

btnNosotros.addEventListener("click", function(){
        window.location.href = "nosotros.html";
    });

btnPromos.addEventListener("click", function(){
        window.location.href = "promociones.html";
    });

btnSucursales.addEventListener("click", function(){
        window.location.href = "sucursales.html";
    });

// // Cargar Navbar
// fetch('./contacto.html')
//     .then(response => response.text())
//     .then(data => {
//         document.getElementById('navBarColap').innerHTML = data;
//     });
