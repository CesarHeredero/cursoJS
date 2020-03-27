async function leerTodos() {
    //esperar la respuest
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos');


    const datos = await respuesta.json();
    return datos;
}

leerTodos()
    .then(usuarios => console.log(usuarios))