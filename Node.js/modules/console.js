console.log('Algo');
console.info('Algo');
console.error('Algo');
console.warn('Algo');
// ------------------------------------------
var table = [
    { name: 'Candy', age: '43' },
    { name: 'Gilberto', age: '41' },
    { name: 'Juan', age: '19' },
    { name: 'Daniel', age: '17' },
    { name: 'Eliana', age: '7' },
]
console.table(table);
// -----------------------------------
console.group('Conversación:');
console.log('Hola');
console.log('Bla bla bla');
console.log('Adiós');
console.groupEnd('');

console.log('Otra cosa de otra función');

// -------------------------------------------
function function1() {
    console.group('Funcion 1');
    console.log('Esto es de la función 1');
    console.log('Esto también');
    console.log('Esto también');
    function2();
    console.log('Hemos vuelto a la 1');
    console.groupEnd('Funcion 1');
}
function function2() {
    
    console.group('Funcion 2');
    console.log('Ahora estamos en la funcion 2');
    console.groupEnd('Funcion 2');
}
console.log('Empezamos');

function1();

console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');
console.count('veces');
console.count('veces');