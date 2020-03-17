    const cargarPost = document.querySelector('#cargar').addEventListener('click', cargarApi);

    function cargarApi() {
        // crear el objeto
        const xhr = new XMLHttpRequest();

        xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

        //Cargar y leer datos
        xhr.onload = function() {
            if (this.status === 200) {
                respuesta = JSON.parse(this.responseText);

                let contenido = '';
                respuesta.forEach(function(post) {
                    contenido += `
                        <h3>${post.title}</h3>
                        <p>${post.body}</p>
                    `
                });
                document.getElementById('listado').innerHTML = contenido;
            }
        }

        // enviar la conexión
        xhr.send();

    }