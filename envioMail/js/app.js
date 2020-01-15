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
}

// funciones
function inicioApp() {
    // desabilitar envio
    btnEnviar.disabled = true;
}