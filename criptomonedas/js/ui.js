class Interfaz {

    constructor() {
        this.init();
    }

    init() {
        this.construirSelect();
    }

    construirSelect() {
        cotizador.obtenerMonedasAPI()
            .then(monedas => {
                // crear un select de las opciones
                const select = document.querySelector('#criptomoneda');
                // iterar por los resultados de la api
                for (const [key, value] of Object.entries(monedas.monedas.Data)) {
                    const opcion = document.createElement('option');
                    opcion.value = value.Symbol;
                    opcion.appendChild(document.createTextNode(value.CoinName));
                    select.appendChild(opcion);
                }
            });
    }

    mostrarMensaje(mensaje, clases) {
        const div = document.createElement('div');
        div.className = clases;
        div.appendChild(document.createTextNode(mensaje));

        // Seleccionar mensajes
        const divMensajes = document.querySelector('.mensajes');
        divMensajes.appendChild(div);

        // Mostar contenido
        setTimeout(() => {
            document.querySelector('.mensajes div').remove();
        }, 3000);
    }

    // imprime el resultado de la cotización
    mostrarResultado(resultado, monedas, crypto) {
        const resultadoAnterior = document.querySelector('#resultado > div');
        if (resultadoAnterior) {
            resultadoAnterior.remove();
        }
        const datosMoneda = resultado[crypto][monedas];
        // recortar digitos de precio
        let precio = datosMoneda.PRICE.toFixed(2);
        let tipoCambio = datosMoneda.CHANGEDAY.toFixed(2);
        let actualizado = new Date(datosMoneda.LASTUPDATE * 1000).toLocaleDateString('es-ES');
        //construir el template
        let templateHTML = `
            <div class="card bg-info">
                 <div class="card-body text-light">
                    <h2 class="card-title">Resultado</h2>
                    <p>El precio de ${datosMoneda.FROMSYMBOL} en ${datosMoneda.TOSYMBOL} es de ${precio}</p>
                    <p>El valor de cambio es ${tipoCambio}</p>
                    <p>Última actualización ${actualizado}</p>
                 </div>
            </div>
            `;

        this.mostrarSpiner('block');

        setTimeout(() => {
            //insertar el resultado
            document.querySelector('#resultado').innerHTML = templateHTML;
            this.mostrarSpiner('none');
        }, 3000);

    }

    mostrarSpiner(vista) {
        const spinner = document.querySelector('.contenido-spinner');
        spinner.style.display = vista;
    }
}