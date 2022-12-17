function hola(nombre, miCallback) {
  setTimeout(() => {
    console.log("hola " + nombre);
    miCallback();
  }, 1000);
}

function adios(nombre, otroCallback) {
    setTimeout(() => {
        console.log('Adiós ' + nombre);
        otroCallback()
    }, 1000)

}

console.log("Iniciando proceso");
hola('Juan', () => {
    adios('Juan', () => {
        console.log('Terminando proceso ')
    })
});


// Another example
// const soyAsincrona = (miCallback) => {
//   setTimeout(
//     function() {
//       console.log('Estoy siendo asíncrona');
//       miCallback();
//     }, 1000
//   )
//   // console.log('Hola, soy una función asíncrona');
// }

// console.log('Iniciando proceso');
// soyAsincrona(function() {
//   console.log('Terminando proceso callback')
// });
// // console.log('Terminando proceso');
