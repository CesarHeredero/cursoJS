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

class Interfaz {
    insertarPresupuesto(cantidad) {
        const presupuestoSpan = document.querySelector('span#total');
        const restanteSpan = document.querySelector('span#restante');

        presupuestoSpan.innerHTML = `${cantidad}`;
        restanteSpan.innerHTML = `${cantidad}`;
    }

    imprimirMensaje(mensaje, tipo) {
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');
        if (tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }

        divMensaje.appendChild(document.createTextNode(mensaje));
        //insertar en dom
        document.querySelector('.primario').insertBefore(divMensaje, formulario);

        // quitar el alert
        setTimeout(function() {
            document.querySelector('.primario .alert').remove();
            formulario.reset();
        }, 3000);
    }

    // inserta los gastos a la lista
    agregarGastoListado(nombre, cantidad) {
        const gastosListado = document.querySelector('#gastos ul');

        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        // insertar gasto
        li.innerHTML = `
        ${nombre}
        <span class="badge badge-primary badge-pill"> $ ${cantidad}</span>
        `;

        // insertar al html
        gastosListado.appendChild(li);
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
        const ui = new Interfaz();
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
        ui.imprimirMensaje('Hubo un error', 'error');
    } else {
        ui.imprimirMensaje('se agrego gasto', 'correcto');
        ui.agregarGastoListado(nombreGasto, cantidadGasto);
    }
})