let txtNombre = document.getElementById("nombre");
let txtEmail = document.getElementById("email");
let txtTelefono = document.getElementById("telefono");
let txtSucursales = document.getElementById("sucursales");
let txtMensaje = document.getElementById("mensaje");
let btnContacto = document.getElementById("btnContacto");
let checkPolitica = document.getElementById("publicidad");
let alerta = document.getElementById("alertValidaciones");
let txtAlerta = document.getElementById("alertValidacionesTexto");
let msgError = "";

txtNombre.addEventListener("blur", function (event) {
    event.preventDefault();
    txtNombre.value.trim();

    txtEmail.addEventListener("blur", function(event){
        event.preventDefault();
        txtEmail.value = txtEmail.value.trim();});
    
    txtTelefono.addEventListener("blur", function(event){
        event.preventDefault();
        txtTelefono.value = txtTelefono.value.trim();});
    
    txtMensaje.addEventListener("blur", function(event){
        event.preventDefault();
        txtMensaje.value = txtMensaje.value.trim();});
});

const regexName = (/^[A-Za-záéíóúÁÉÍÓÚÑñ\s]{3,}$/);
const regexEmail = (/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/);
const regexTelefono = (/^[0-9\s]{10}$/);
const regexMensaje = (/^[\s\S]{5,150}$/);

// function validarNombre() 

btnContacto.addEventListener("click", function (event) {
    event.preventDefault();
let cont = 0; 

    if (validarNombre(txtNombre.value)) {


    } else {
        console.log(msgError);
        cont+= 1;
    }
    if (validarTelefono(txtTelefono.value)) {

    } else {
        console.log(msgError);
        cont+= 1;
    }

    if (validarMensaje(txtMensaje.value)) {

    } else {
        console.log(msgError);
        cont+= 1;
    }

    if (validarSucursal(txtSucursales.value)) {

    } else {
        console.log(msgError);
        cont+= 1;
    }
    if (cont > 0){
        let msgAlerta = document.getElementById("Error"); 
        let htmlAlert = `<ul class= "bg-danger text-white"> Tienes Errores En los Siguientes Campos ${msgError}</ul>`;
        msgAlerta.insertAdjacentHTML("afterBegin", htmlAlert);
    } else{
       let sugerencias = "Nombre: " + txtNombre.value  + "<br/> E-mail: " + txtEmail.value + "<br/> Teléfono: " + txtTelefono.value + "<br/> Sucursales: " + txtSucursales.value +"<br/> Mensaje: "+ txtMensaje.value; 
    Email.send({

        SecureToken : "598073ae-0fff-4b3a-bc8d-3de1756015b4",
        To : 'burgershouse2023@gmail.com',
        From : "burgershouse2023@gmail.com",
        Subject : "Buzón de Quejas y Sugerencias BurgersHouse",
        Body : sugerencias,
    }).then(
      message => alert("Mensaje Enviado")
    )}

});
function validarNombre(nombre) {
    if (regexName.test(nombre)) {
        return true;

    } else {
        msgError += "<li> Nombre No Válido </li> ";
        return false;
    }
}

function validarEmail(email) {
    if (regexEmail.test(email)) {
        return true;


    } else {
        msgError += "<li> Email No Válido </li> ";
        return false;
    }
}
function validarTelefono(telefono) {
    if (regexTelefono.test(telefono)) {
        return true;


    } else {
        msgError += "<li> Teléfono No Válido </li> ";
        return false;
    }
}
function validarMensaje(mensaje) {
    if (regexMensaje.test(mensaje)) {
        return true;


    } else {
        msgError += "<li> Mensaje No Válido </li> ";
        return false;
    }
}
function validarSucursal(sucursal) {
    if (sucursal != "value0") {
        return true;


    } else {
        msgError += "<li> Selecciona Una Sucursal Válida </li> ";
        return false;
    }
}
