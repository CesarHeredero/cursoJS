// variables
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');

// listeners
eventListeners();

function eventListeners() {
    // inicio de la app y desabilitar submits
    document.addEventListener('DOMContentLoaded', inicioApp);

    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);

}

// funciones
function inicioApp() {
    // desabilitar envio
    btnEnviar.disabled = true;
}

// valida que el campo tenga algo escrito
function validarCampo() {
    // validar longitud del texto y que no este vacio
    validarLongitud(this);

    // validar email
    if (this.type === 'email') {
        validarEmail(this);
    }

    let errores = document.querySelectorAll('.error');

    if (email.value !== '' && asunto.value !== '' && mensaje.value !== '') {
        if (errores.length === 0) {
            btnEnviar.disabled = false;
        }
    }
}

function validarLongitud(campo) {
    if (campo.value.length > 0) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove = 'error';
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add = 'error';
    }
}

function validarEmail(campo) {
    const mensaje = campo.value;
    if (mensaje.indexOf('@') !== -1) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove = 'error';
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.remove = 'error';
    }
}