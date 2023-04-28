let btnRegistro = document.getElementById("btnLogin");
let txtEmail = document.getElementById("txtEmail");
let txtContraA = document.getElementById("txtContraA");
let alerta = document.getElementById("alertValidaciones");
let txtAlerta = document.getElementById("alertValidacionesTexto");
let msgError = "";


txtEmail.addEventListener("blur", function (event) {
    event.preventDefault();
    txtEmail.value.trim();

    txtContraA.addEventListener("blur", function (event) {
        event.preventDefault();
        txtContraA.value = txtContraA.value.trim();
    });

});
//Se definen las constantes con expresiones regulares para poner parámetros de utilización sobre los campos a rellenar del formulario
const regexEmail = (/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/);

btnRegistro.addEventListener("click", function(event){
    event.preventDefault();
    let user = localStorage.getItem("usuario");
    if (validarEmail(txtEmail.value, user.email) == true && validarContra(txtContraA.value, user.contraA) == true ) {
            Swal.fire({
                icon: 'success',
                title: '¿CÓMO?',
                title: 'Iniciaste Sesión'
            });
    } else { let htmlAlert = `<ul class = listaDeErrores> Tienes errores en los siguientes campos: ${msgError}</ul>`;
         Swal.fire({
        icon: 'error',
        title: 'ORAA...',
        html: htmlAlert,
    });
    }
    //Funcionalidad para qe se reinicie el contador cada vez que se muestre un error en el envío del formulario de contacto
    cont = 0;
        htmlAlert = "";
        msgError = "";
});


function validarEmail(email, localEmail) {
    if (email == localEmail) {
        return true;

    } else {
        msgError += "<li>Email No Registrado</li>";
        return false;
    }
}

function validarContraA(contraA, localContra) {
    if (contraA == localContra) {
        return true;

    } else {
        msgError += " <li>  Contraseña incorrecta </li>";
        return false;
    }
}