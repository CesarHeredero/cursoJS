// Variables
const carrito = document.getElementById('carrito');
const listaCursos = document.getElementById('lista-cursos');

const listaCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');


// Listeners
cargarEventoListeners();

function cargarEventoListeners() {
    // Dispara cuando se presiona "agregar carrito"
    listaCursos.addEventListener('click', comprarCurso);

    // Cuando se elimena un curso del carrito
    carrito.addEventListener('click', eliminarCurso);

    // Al vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

}


// Funciones

// Función que añade el curso al carrito
function comprarCurso(e) {
    e.preventDefault();
    // Delegation para agregar-carrito
    if (e.target.classList.contains('agregar-carrito')) {
        const curso = e.target.parentElement.parentElement;
        // enviamos el curso seleccionado para tomar sus datos
        leerDatosCurso(curso);
    }
}

// lee los datos del curso
function leerDatosCurso(curso) {
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id')
    }

    instertarCarrito(infoCurso);
}

// Muestra el curso seleccionado en el carrito
function instertarCarrito(curso) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${curso.imagen}" width=100 />
        </td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td>
            <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
        </td>
    `;
    listaCarrito.appendChild(row);
}

// Eliminar Curso del carrito en el DOM
function eliminarCurso(e) {
    e.preventDefault();

    let curso;
    if (e.target.classList.contains('borrar-curso')) {
        e.target.parentElement.parentElement.remove();
    }

}

// Elimina los cursos del carrito en el DOM
function vaciarCarrito() {
    // forma lenta
    listaCursos.innerHTML = '';

    // forma rapida (recomendada)

}