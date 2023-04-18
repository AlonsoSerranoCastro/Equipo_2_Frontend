 // Cargar el archivo HTML con el footer
 fetch('footer.html')
 .then(response => response.text("Se encontro el footer"))
 .then(html => {
   // Crear un elemento temporal para contener el HTML cargado
   var temporal = document.createElement('div');
   temporal.innerHTML = html;

   // Obtener el elemento <footer> del HTML cargado
   var footer = temporal.querySelector('footer');

   // Agregar <footer> al documento
   var contenedorFooter = document.getElementById('contenedorFooter');
   contenedorFooter.appendChild(footer);
 });