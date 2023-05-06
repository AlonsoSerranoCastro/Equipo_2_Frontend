let divItems=document.getElementById("divItems");

window.addEventListener("load",function(event) {
    let hmtlCarrito="";
    let carrito = JSON.parse(localStorage.getItem("jsonCarrito"))
   
    if (carrito==null) {
      hmtlCarrito = "Aún no has agregado nada a tu carrito";
      divItems.insertAdjacentHTML("afterbegin",hmtlCarrito)
    }

    divItems.innerHTML = "";
    let syntxCarrito = "";
    let cont = 1;
    var mapCarrito = new Map();
    
    let arrCarrito = [];


    carrito.forEach(car =>{
      mapCarrito.forEach((map,key) =>{
        if (car.nombre == key) {
          //mapCarrito.set(key,hmtlCarrito)
          cont++;
          console.log("ola " + cont);
        }
        
        syntxCarrito = `<div class="card">
        <img src="${car.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title"><strong>${car.nombre}</strong></h5>
          <p class="card-text"><strong>$ ${car.precio}</strong></p>
        </div>
        <i  class="fa-solid fa-plus bg-success"></i>
        <label>${cont}</label>
        <i class="fa-solid fa-minus bg-danger"></i> 
      </div>`;

      mapCarrito.set(car.nombre, syntxCarrito);
      cont = 1;        
      });
     
      //mapCarrito.forEach((map,key) =>{

      //});
      divItems.insertAdjacentHTML("afterbegin",hmtlCarrito);
    });

    /*
    carrito.forEach(car =>{
      contadorCarrito.forEach(contCar => {
        if (car.nombre==contCar) {
            cont++;
        }
        let strId = contCar.replace(/ /g, '_');
        let inMenu=document.getElementById("cont_" + strId);
        console.log(inMenu);
        console.log(cont);
        console.log("cont_" + strId);
        console.log(contadorCarrito);
        //inMenu.innerText = cont;
      });
       
        contadorCarrito.push(car.nombre);
        stringNombre = car.nombre;
        var stringId = stringNombre.replace(/ /g, '_');
        hmtlCarrito += `<div class="card">
        <img src="${car.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title"><strong>${car.nombre}</strong></h5>
          <p class="card-text"><strong>$ ${car.precio}</strong></p>
        </div>
        <i  class="fa-solid fa-plus bg-success"></i>
        <input type="text" id="cont_${stringId}"> 
        <i class="fa-solid fa-minus bg-danger"></i>
      </div>`;

    }); */
   // console.log(hmtlCarrito);
})