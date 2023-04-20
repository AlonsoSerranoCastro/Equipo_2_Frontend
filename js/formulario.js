let jsonMenu = [
    {
      nombre: "Burger BBQ",
      img: "/src/imgmenu/burgerBbq.jpeg",
      descripción: "Exquisita Hamburguesa de res, tocino, queso gouda.",
      precio: 226,
      categoría: "Hamburguesas",
    }
];

//Se definen las variables totales a utilizar en este JavaScript
let nombreFormulario = document.getElementById("nombreFormulario");
let imgFormulario = document.getElementById("imgFormulario");
let precioFormulario = document.getElementById("precioFormulario");
let descripcionFormulario = document.getElementById("descripcionFormulario");
let categoriaFormulario = document.getElementById("categoriaFormulario");
let btnProducto = document.getElementById("btnProducto");
let alerta = document.getElementById("alertValidaciones");
let txtAlerta = document.getElementById("alertValidacionesTexto");
let msgError = "";

//Listener acerca de los diferentes campos a rellenar en el formulario de contacto
nombreFormulario.addEventListener("blur", function (event) {
    event.preventDefault();
    nombreFormulario.value.trim();

    precioFormulario.addEventListener("blur", function (event) {
        event.preventDefault();
        precioFormulario.value = precioFormulario.value.trim();
    });

    descripcionFormulario.addEventListener("blur", function (event) {
        event.preventDefault();
        descripcionFormulario.value = descripcionFormulario.value.trim();
    });
});

//Se definen las constantes con expresiones regulares para poner parámetros de utilización sobre los campos a rellenar del formulario
const regexNombreFormulario = (/^[A-Za-záéíóúÁÉÍÓÚÑñ\s]{3,}$/);
const regexPrecioFormulario = (/^\d{1,3}(\.\d{1,2})?$/);
const regexDescripcionFormulario = (/^[\s\S]{5,150}$/);

// función para validar los diferentes errores que existen en los campos del formulario y agregarlos a la variable msgError
btnProducto.addEventListener("click", function (event) {
    event.preventDefault();
    let cont = 0;

    if (validarNombreFormulario(nombreFormulario.value)) {
    } else {
        console.log(msgError);
        cont += 1;
    }
    if (validarPrecioFormulario(precioFormulario.value)) {
    } else {
        console.log(msgError);
        cont += 1;
    }

    if (validarDescripcionFormulario(descripcionFormulario.value)) {
    } else {
        console.log(msgError);
        cont += 1;
    }

    if (validarCategoriaFormulario(categoriaFormulario.value)) {
    } else {
        console.log(msgError);
        cont += 1;
    }
    
    //Alert insertado mediante la página sweet alert2
    if (cont > 0) {
        let htmlAlert = `<ul class = listaDeErrores> Tienes errores en los siguientes campos: ${msgError}</ul>`;
        Swal.fire({
            icon: 'error',
            title: 'ORAA...',
            html: htmlAlert,
        });

        //Funcionalidad para qe se reinicie el contador cada vez que se muestre un error en el envío del formulario de contacto
        cont = 0;
        htmlAlert = "";
        msgError = "";

        //else que muestra los datos del error mediante las sugerencias
    } else {
        let nuevoProducto = {
            "nombre": nombreFormulario.value,
            "img": imgFormulario.value,
            "descripción": descripcionFormulario.value,
            "precio": precioFormulario.value,
            "categoría": categoriaFormulario.value
         }
         //let jsonNuevoProducto = JSON.stringify(nuevoProducto);
         //console.log(jsonNuevoProducto);
         /* Swal.fire("Producto Creado Correctamente");
         jsonMenu.push(nuevoProducto);
         let jsonMenu2 = JSON.stringify(jsonMenu)
         console.log(jsonMenu2); */
    }
});

//Función para validar los datos del formulario con los mensajes que muestran los errores en formato de lista desordenada
function validarNombreFormulario(nombreFormulario) {
    if (regexNombreFormulario.test(nombreFormulario)) {
        return true;
    } else {
        msgError += "<li> Nombre Del Producto No Válido </li>";
        return false;
    }
}

function validarPrecioFormulario(precioFormulario) {
    if (regexPrecioFormulario.test(precioFormulario)) {
        return true;
    } else {
        msgError += '<li> Precio No Válido </li>';
        return false;
    }
}

function validarDescripcionFormulario(descripcionFormulario) {
    if (regexDescripcionFormulario.test(descripcionFormulario)) {
        return true;
    } else {
        msgError += " <li> La Descripción No Es Válida </li>";
        return false;
    }
}

function validarCategoriaFormulario(categoriaFormulario) {
    if (categoriaFormulario != "value0") {
        return true;
    } else {
        msgError += "<li> Selecciona Una Categoría Válida </li>";
        return false;
    }
}