function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
}

console.log('Inicio');
console.log(calc(6, 2, sum));
console.log('Fin');

// Ejemplo 2

function date(callback) {
    console.log(new Date);
    setTimeout(() => {
        let date = new Date();
        callback(date);
    }, 3000);
}

function printDate(dateNow) {
    console.log(dateNow);
}

console.log('Inicio');
date(printDate);
console.log('Fin');