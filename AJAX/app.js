document.getElementById('cargar').addEventListener('click', cargarDatos);


function cargarDatos(){
    // crear el objeto xmlhttprequest
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'datos.txt', true);

    xhr.onload = function() {
        // leer estatus: 200 (correcto), 403(Prohibido), 404(no encontrado)
        if(this.status === 200){
            document.getElementById('listado').innerHTML = `<h1> ${this.responseText}</h1>`;
            console.log(this.status);
        }
    }

    xhr.onreadystatechange = function() {
        /* READY STATUS
        0- No inicializado
        1- Conexión establecida
        2- Recibido
        3- Procesando
        4- Respuesta lista        
        */
       if(this.readyState === 4){
           console.log(this.responseText);
           console.log(this.readyState);
       }
    }
    // enviar request
    xhr.send();
}