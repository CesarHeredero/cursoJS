// variables
const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.getElementById('vaciar-carrito');


// listeners
cargarEventListeners();

function cargarEventListeners() {
    // dispara cuando se presiona agragar carrito
    cursos.addEventListener('click', comprarCurso);

    // eliminar curso del carrito
    carrito.addEventListener('click', eliminarCurso);

    // vaciar todo el carro
    vaciarCarrito.addEventListener('click', vaciarCarritoBtn);

    // mostrar localStorage al cargar pagina
    document.addEventListener('DOMContentLoaded', leerLocalStorage);
}

// funciones
// funcion que añade el curso al carrito
function comprarCurso(e) {
    e.preventDefault();
    //delegation para agregar-carrito
    if (e.target.classList.contains('agregar-carrito')) {
        const curso = e.target.parentElement.parentElement;
        // enviar curso seleccionado para coger los datos
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

    insertarCarrito(infoCurso);
}
// muestra el curso seleccionado en el carrito
function insertarCarrito(curso) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${curso.imagen}" width="100" />
        </td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td>
            <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
        </td>
    `;
    listaCursos.appendChild(row);
    gurardarCursoLocalStorage(curso);

}

// elimina curso del carrito
function eliminarCurso(e) {
    e.preventDefault();

    let curso,
        cursoId;
    if (e.target.classList.contains('borrar-curso')) {
        e.target.parentElement.parentElement.remove();
        curso = e.target.parentElement.parentElement;
        cursoId = curso.querySelector('a').getAttribute('data-id');
    }

    eliminarCursoLS(cursoId);
}

function vaciarCarritoBtn() {
    while (listaCursos.firstChild) {
        listaCursos.removeChild(listaCursos.firstChild);
    }


    //vaciar localstorage
    vaciarLocalStorage();
    return false;
}

// Almacenar en Local Storage
function gurardarCursoLocalStorage(curso) {
    let cursos;

    cursos = obtenerCursosLocalStorage();

    // el curso seleccionado se añade al arreglo
    cursos.push(curso);

    localStorage.setItem('cursos', JSON.stringify(cursos));
}

// comprueba que hay elementos en localsttorage
function obtenerCursosLocalStorage() {
    let cursosLS;

    if (localStorage.getItem('cursos') === null) {
        cursosLS = [];
    } else {
        cursosLS = JSON.parse(localStorage.getItem('cursos'));
    }
    return cursosLS;
}

// imprime los cursos de localStorage en el carrito
function leerLocalStorage() {
    let cursosLS;

    cursosLS = obtenerCursosLocalStorage();

    cursosLS.forEach(function(curso) {
        // construir el template
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${curso.imagen}" width="100" />
            </td>
            <td>${curso.titulo}</td>
            <td>${curso.precio}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
            </td>
        `;
        listaCursos.appendChild(row);
    });
}

// eliminar curso de localstorage por id
function eliminarCursoLS(curso) {
    let cursosLS;

    cursosLS = obtenerCursosLocalStorage();

    cursosLS.forEach(function(cursoLS, index) {
        if (cursoLS.id === curso) {
            cursosLS.splice(index, 1);
        }
    });
    localStorage.setItem('cursos', JSON.stringify(cursosLS));
}

//elimina todos los cursos de local storage
function vaciarLocalStorage() {
    localStorage.clear();
}