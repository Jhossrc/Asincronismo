// import { XMLHttpRequest } from 'xmlhttprequest'; ↓ 
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const API = 'https://rickandmortyapi.com/api/character/';

function fetchData(url_api, callback) {
    let xhttp = new XMLHttpRequest();
    // Abrimos una conexión a la API, primer parametro es el tipo, la url-api, si queremos que sea asincrona
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
        // Enviamos la solicitud
    xhttp.send();
}

console.log('Inicio');

// Hacemos el llamado de la función
fetchData(API, function(error1, data1) {
    if (error1) return console.error(error1);

    // Concatenando el id del personaje (Recomendable leer el json)
    fetchData(API + data1.results[0].id, function(error2, data2) {
        if (error2) return console.error(error2);

        fetchData(data2.origin.url, function(error3, data3) {
            if (error3) return console.error(error3);

            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);

        })
    })
})

console.log('Fin');