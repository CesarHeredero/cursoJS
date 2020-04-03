const cotizador = new API('f98fbc6ebf84ede13ada42eb1f1ffbf085b597aa0cc2ee93c3f59336add4381a');
const ui = new Interfaz();

cotizador.obtenerMonedasAPI();



// Leer Formulario
const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    // leer la moneda seleccionada
    const monedaSelect = document.querySelector('#moneda');
    const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;

    // leer criptomoneda
    const criptomonedaSelect = document.querySelector('#criptomoneda');
    const criptomonedaSeleccionada = monedaSelect.options[criptomonedaSelect.selectedIndex].value;

    if (monedaSeleccionada === '' || criptomonedaSeleccionada === '') {
        ui.mostrarMensaje('Ambos campos son obligatorios', 'alert bg-danger text-center');
    } else {
        cotizador.obtenerValores(monedaSeleccionada, criptomonedaSeleccionada)
            .then(data => {
                ui.mostrarResultado(data.resultado.RAW, monedaSeleccionada, criptomonedaSeleccionada);
            });
    }

});