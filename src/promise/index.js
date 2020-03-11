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