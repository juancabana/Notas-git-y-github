// Variables globales
global.miVariable = 'El Valor'

console.log(miVariable)


let i = 0;
let intervalo = setInterval(function () {
    console.log('Hola');
    if (i === 3) {
        clearInterval(intervalo);    }
    i++
}, 1000);

setImmediate(function () {
    console.log('Hola, soy el inmediate');
});

// console.log(process);

// __dirname te dice la ubicación del fichero
// console.log(__dirname);
// __dirname te dice la ubicación EXACTA DEL ARCHIVO
console.log(__filename);
