function hola(nombre, miCallback) {
  setTimeout(() => {
    console.log("hola " + nombre);
    miCallback(nombre);
  }, 1000);
}

function adios(nombre, otroCallback) {
  setTimeout(() => {
    console.log("Adiós " + nombre);
    otroCallback();
  }, 1000);
}

function hablar(callbackHablar) {
  setTimeout(() => {
    console.log("bla bla bla...");
    callbackHablar();
  }, 1000);
}

function conversacion(nombre, times, callback) {
  if (times >= 0) {
    hablar(function () {
      conversacion(nombre, --times)
    });
  } else {
    adios(nombre, callback);
  }
}

//   --------------------------------------------

console.log("Iniciando proceso...");
hola(
  "Juan", function (nombre) {
    conversacion(nombre, 3, function () {
      console.log('Proceso terminado');
    })
  });
  


// console.log("Iniciando proceso...");
// hola("Juan", (nombre) => {
//   hablar(() => {
//     hablar(() => {
//       hablar(() => {
//         adios(nombre, () => {
//           console.log("Terminando proceso ");
//         });
//       });
//     });
//   });
// });
