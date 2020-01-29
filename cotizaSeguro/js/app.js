// Construcctor para seguro
function Seguro(marca, anio, tipo) {
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;
}

// Todo lo que se muestra
function Interfaz() {}

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
        console.log('faltan datos');
    } else {
        console.log('todo correcto');
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