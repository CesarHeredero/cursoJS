// Variables
const presupuestoUsuaraio = prompt('Cual es tu presupuesto semanal');
const formulario = document.getElementById('agregar-gasto');
let cantidadPresuspuesto;


// Clases
class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
    }

    presupuestoRestante(cantidad = 0) {
        return this.restante -= Number(cantidad);
    }
}

class Interface {
    insertarPresupuesto(cantidad) {
        const presupuestoSpan = document.querySelector('span#total');
        const restanteSpan = document.querySelector('span#restante');

        presupuestoSpan.innerHTML = `${cantidad}`;
        restanteSpan.innerHTML = `${cantidad}`;
    }

    imprimirMensaje(mensaje, tipo) {
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');
        if (divMensaje === 'error') {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-succes');
        }

        divMensaje.appendChild(document.createTextNode(mensaje));
        //insertar en dom
        document.querySelector('.primario').insertBefore(divMensaje, formulario);
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    if (presupuestoUsuaraio === null | presupuestoUsuaraio === '') {
        window.location.reload();
    } else {
        // instanciar un presupuesto
        cantidadPresuspuesto = new Presupuesto(presupuestoUsuaraio);
        // intanciar clase interfaz
        const ui = new Interface();
        ui.insertarPresupuesto(cantidadPresuspuesto.presupuesto)
    }
})

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    // leer del formulario de gasto
    const nombreGasto = document.querySelector('#gasto').value;
    const cantidadGasto = document.querySelector('#cantidad').value;

    // instanciar la Interfaz
    const ui = new Interfaz();

    //comprobar que los campos no esten vacios
    if (nombreGasto === '' || cantidadGasto === '') {
        ui.imprimirMensaje('Hubo un error');
    } else {
        ui.imprimirMensaje('se agrego gasto');
    }
})