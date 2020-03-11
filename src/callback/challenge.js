// import { XMLHttpRequest } from 'xmlhttprequest'; ↓ 
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function fetchData(url_api, callback) {
    let xhttp = new XMLHttpRequest();
    // Abrimos una conexión a la API
    xhttp.open('GET', url_api, true);

    // Escuchamos los cambios de la conexión
    xhttp.onreadystatechange = function(event) {
        // Validamos si la conexión fue exitosa
        if (xhttp.readyState === 4) {
            // Validamos si el estado http es 200 = Todo esta OK
            if (xhttp.status === 200) {
                // El primer parametro es el error, el segundo tiene que ser un JSON
                callback(null, JSON.parse(xhttp.responseText))
            } else {
                const error = new Error(`Error ${url_api}`)
                callback(error, null);
            }
        }
    }
    xhttp.send();
}