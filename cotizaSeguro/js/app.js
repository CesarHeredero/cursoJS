// Construcctor para seguro
function Seguro(marca, anio, tipo) {
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;
}

Seguro.prototype.cotizarSeguro = function(informacion) {
    /*
        1 = americano 1.15
        2 = asiatico 1.05
        3 = europeo 1.35
    */
    let cantidad;
    const base = 2000;

    switch (this.marca) {
        case '1':
            cantidad = base * 1.15;
            break;
        case '2':
            cantidad = base * 1.05;
            break;
        case '3':
            cantidad = base * 1.35
    }

    // leer año - cada año hay que reducir 3%
    const diferencia = new Date().getFullYear() - this.anio;

    cantidad -= ((diferencia * 3) * cantidad) / 100;

    /* 
        basico = 30% mas
        completo = 50% mas
    */
    if (this.tipo === 'basico') {
        cantidad *= 1.30;
    } else {
        cantidad *= 1.5;
    }
    return cantidad;
}

// Todo lo que se muestra
function Interfaz() {}

// Mensaje que se impreme
Interfaz.prototype.mostrarMensaje = function(mensaje, tipo) {
    const div = document.createElement('div');

    if (tipo === 'error') {
        div.classList.add('mensaje', 'error');
    } else {
        div.classList.add('mensaje', 'correcto');
    }
    div.innerHTML = `${mensaje}`;
    formulario.insertBefore(div, document.querySelector('.form-group'));

    setTimeout(function() {
        document.querySelector('.mensaje').remove();
    }, 3000);
}

// Imprime el resultado de la cotización
Interfaz.prototype.mostrarResultado = function(seguro, total) {
    const resultado = document.getElementById('resultado')
    let marca;
    switch (seguro.marca) {
        case '1':
            marca = 'Americano';
            break;
        case '2':
            marca = 'Asiatico';
            break;
        case '3':
            marca = 'Europeo';
            break;
    }

    const div = document.createElement('div');
    div.innerHTML = `
    <p class="header">Tu resumen:</p>
    <p>marca = ${marca},</p>
    <p>año = ${seguro.anio},</p>
    <p>tipo = ${seguro.tipo},</p>
    <p>Total = ${total}</p>
    `;

    const spinner = document.querySelector('#cargando img');
    spinner.style.display = 'block';

    setTimeout(function() {
        spinner.style.display = 'none';
        resultado.appendChild(div);
    }, 3000);





}

// Listeners
const formulario = document.getElementById('cotizar-seguro');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    // Leer marca seleccionada
    const marca = document.getElementById('marca');
    const marcaSeleccionada = marca.options[marca.selectedIndex].value;

    // Leer año seleccionado
    const anio = document.getElementById('anio');
    const anioSelecionado = anio.options[anio.selectedIndex].value;

    // Leer el valor del radio
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    // Crear instancia de interface
    const interfaz = new Interfaz();

    // revisamos que los campos no estan vacios
    if (marcaSeleccionada === '' || anioSelecionado === '' || tipo === '') {
        interfaz.mostrarMensaje('Faltan datos, revisa el formulario y prueba de nuevo', 'error');
    } else {
        // limpiar resultados anteriores
        resultados = document.querySelector('#resultado div');
        if (resultados != null) {
            resultados.remove();
        }

        const seguro = new Seguro(marcaSeleccionada, anioSelecionado, tipo);

        // cotizar seguro
        const cantidad = seguro.cotizarSeguro(seguro);

        // mostrar resultado
        interfaz.mostrarResultado(seguro, cantidad);
        interfaz.mostrarMensaje('Cotizando', 'exito');
    }
})

const max = new Date().getFullYear(),
    min = max - 20;

const selectAnios = document.getElementById('anio');
for (let i = max; i >= min; i--) {
    let option = document.createElement('option');
    option.value = i;
    option.innerHTML = i;
    selectAnios.appendChild(option);
}