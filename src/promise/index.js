const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey! Funciona');
        } else {
            reject('Oops !')
        }
    })
}

somethingWillHappen()
    .then(resp => console.log(resp))
    .catch(err => console.error(err))

// Ejemplo 2

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('True');
            }, 2000);
        } else {
            const error = new Error('Oops')
            reject(error);
        }
    })
}

somethingWillHappen2()
    .then(resp => console.log(resp))
    .catch(err => console.log(err))


/*  
    Promise.all([]) 
    Resuelve todas las promesas, es decir, 
    hasta que no se resuelvan todas no se mostraran en pantalla

*/
Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log('Array of results', response);
    })
    .catch(err => {
        console.error(err);
    })