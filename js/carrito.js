let divItems=document.getElementById("divItems");
let hmtlCarrito="";
var mapCarrito = new Map();
let bool = false;

window.addEventListener("load",function(event) {
  event.preventDefault();
  divItems.innerHTML = "";
    hmtlCarrito="";
    if(bool == false){
      mostrar();
      bool = true;
      console.log("SI ENTRA");
    }
})
 function mostrar() {
  let carrito = JSON.parse(localStorage.getItem("jsonCarrito"))
   
  if (carrito==null) {
    hmtlCarrito = "Aún no has agregado nada a tu carrito";
    divItems.insertAdjacentHTML("afterbegin",hmtlCarrito)
  }

  divItems.innerHTML = "";
  let syntxCarrito = "";
  let cont = 1;
 

  carrito.forEach(car =>{
   if(mapCarrito.has(car.nombre)){
      cont = carrito.filter((element) => element["nombre"] === car.nombre).length;
   }
   let total = cont*car.precio;

   syntxCarrito = `<tr>
                    <td><img src="${car.imagen}"> <label> ${car.nombre}</label></td> 
                    <td id="cantidad"><i onclick="contador(${cont +1}, '${car.nombre}', '${car.imagen}', ${car.precio})" class="fa-solid fa-plus bg-success"></i><label>${cont}</label><i onclick="contador(${cont} -1 , '${car.nombre}', '${car.imagen}', ${car.precio})" class="fa-solid fa-minus bg-danger"></i></td>
                    <td><label><strong>$ ${car.precio}</strong></label></td>
                    <td><label><strong>$ ${total}</strong></label></td>
                    </tr>
                    `
  mapCarrito.set(car.nombre, syntxCarrito);
  total = 0;
  cont = 1;   
  divItems.innerHTML = "";
  divItems.insertAdjacentHTML("afterbegin",almacenamiento());
  });
 }

 function contador(contadorActual, nombreMap, imagenMap, precioMap) {
  console.log(contadorActual);
  if (contadorActual==0){
    
    let localCarrito = JSON.parse(localStorage.getItem("jsonCarrito"));
    let newlocalCarrito = localCarrito.filter(filt => filt["nombre"] !== nombreMap);
    mapCarrito.delete(nombreMap);
    localStorage.setItem("jsonCarrito",JSON.stringify(newlocalCarrito));
    mostrar();

    };

  let total = contadorActual*precioMap;

  syntxCarrito = `<tr>
  <td><img src="${imagenMap}"> <label> ${nombreMap}</label></td> 
  <td id="cantidad"><i onclick="contador(${contadorActual + 1 } , '${nombreMap}', '${imagenMap}', ${precioMap})" class="fa-solid fa-plus bg-success"></i><label>${contadorActual}</label><i onclick="contador(${contadorActual-1} , '${nombreMap}', '${imagenMap}', ${precioMap})" class="fa-solid fa-minus bg-danger"></i></td>
  <td><label><strong>$ ${precioMap}</strong></label></td>
  <td><label><strong>$ ${total}</strong></label></td>
  </tr>
  `;
 mapCarrito.set(nombreMap, syntxCarrito);
 total = 0;
 divItems.insertAdjacentHTML("afterbegin",almacenamiento());
 }

 function almacenamiento() {
  divItems.innerHTML = null;
  hmtlCarrito = "";
  mapCarrito.forEach((map,key) =>{
    hmtlCarrito += mapCarrito.get(key);
  });

  let htmlTable = `<table id="htmlTable" class="table">
  <tr>
    <th scope="col">Producto</th>
    <th scope="col">Cantidad</th>
    <th scope="col">Precio</th>
    <th scope="col">Total</th>
  </tr>
  ${hmtlCarrito}
  <tr>
  <td><label> <strong> Total del carrito $ ${totalSuma}</strong></label></td>
  </tr>
  </table>`;

  return htmlTable;
 }
