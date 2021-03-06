// variables
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const enviarFormlario = document.getElementById('enviar-mail');
const resetBtn = document.getElementById('resetBtn');

// listeners
eventListeners();

function eventListeners() {
    // inicio de la app y desabilitar submits
    document.addEventListener('DOMContentLoaded', inicioApp);

    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);

    enviarFormlario.addEventListener('submit', enviarEmail);
    resetBtn.addEventListener('click', resetearForm);

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

// cuando se envia el correo
function enviarEmail(e) {
    // enseñar spiner al enviar
    const spinerGif = document.querySelector('#spinner');
    spinerGif.style.display = 'block';

    const enviado = document.createElement('img');
    enviado.src = 'img/mail.gif';


    setTimeout(function() {
        spinerGif.style.display = 'none';

        document.querySelector('#loaders').appendChild(enviado);

        setTimeout(function() {
            enviado.remove();
            enviarFormlario.reset();
        }, 3000);
    }, 3000);

    e.preventDefault();
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

// resetea formulario
function resetearForm(e) {
    enviarFormlario.reset();
    e.preventDefault();
}