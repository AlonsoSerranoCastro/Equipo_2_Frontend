let divItems=document.getElementById("divItems");
let hmtlCarrito="";
var mapCarrito = new Map();

window.addEventListener("load",function(event) {
  divItems.innerHTML = "";
    hmtlCarrito="";
   

    divItems.insertAdjacentHTML("afterbegin",mostrar());

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
   let totalProducto = 0;

   syntxCarrito = `<tr>
                    <td><img src="${car.imagen}"> <label> ${car.nombre}</label></td> 
                    <td id="cantidad"><i onclick="contador(${cont} +1 , ${car.nombre}, ${car.imagen}, ${car.precio})" class="fa-solid fa-plus bg-success"></i><label>${cont}</label><i onclick="contador(${cont} -1 , ${car.nombre}, ${car.imagen}, ${car.precio})" class="fa-solid fa-minus bg-danger"></i></td>
                    <td><label><strong>$ ${car.precio}</strong></label></td>
                    <td><label><strong>$ ${total}</strong></label></td>
                    </tr>
                    `
  mapCarrito.set(car.nombre, syntxCarrito);
  total = 0;
  cont = 1;   
  });
 
 

  return htmlTable;
 }

 function contador(contadorActual, nombreMap, imagenMap, precioMap) {
  let total = contadorActual*precioMap;
  
  syntxCarrito = `<tr>
  <td><img src="${imagenMap}"> <label> ${nombreMap}</label></td> 
  <td id="cantidad"><i onclick="contador(${contadorActual} +1 , ${nombreMap}, ${imagenMap}, ${precioMap})" class="fa-solid fa-plus bg-success"></i><label>${contadorActual}</label><i onclick="contador(${cont} -1 , ${nombreMap}, ${imagenMap}, ${precioMap})" class="fa-solid fa-minus bg-danger"></i></td>
  <td><label><strong>$ ${precioMap}</strong></label></td>
  <td><label><strong>$ ${total}</strong></label></td>
  </tr>
  `

 mapCarrito.set(nombreMap, syntxCarrito);
 total = 0;
 }

 function almacenamiento(params) {
  mapCarrito.forEach((map,key) =>{
    hmtlCarrito += mapCarrito.get(key);
    console.log(hmtlCarrito);
  });
  let htmlTable = `<table id="htmlTable" class="table">
  <tr>
    <th scope="col">Producto</th>
    <th scope="col">Cantidad</th>
    <th scope="col">Precio</th>
    <th scope="col">Total</th>
  </tr>
  ${hmtlCarrito}
  </table>`;
 }
