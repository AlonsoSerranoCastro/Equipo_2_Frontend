let divItems=document.getElementById("divItems");

window.addEventListener("load",function(event) {
    let carrito = JSON.parse(localStorage.getItem("jsonCarrito"))
    let retCarrito = [carrito];
    let hmtlCarrito="";
    //console.log(retCarrito);
    retCarrito.forEach(car =>{
        console.log(car.nombre);
        hmtlCarrito += `<div class="card">
        <img src="${car.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title"><strong>${car.nombre}</strong></h5>
          <p class="card-text"><strong>$ ${car.precio}</strong></p>
        </div>
        <button class="bg-success text-white">+</button>
        <input type="text"> 
        <button class="bg-danger text-white">-</button>
      </div>`;

    });
    
   // console.log(hmtlCarrito);
    divItems.insertAdjacentHTML("afterbegin",hmtlCarrito);
})