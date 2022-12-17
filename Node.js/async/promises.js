function hola(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("hola " + nombre);
            resolve(nombre);
        }, 1500);
    });

}

function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Adiós " + nombre);
            resolve();
        }, 1000);
    });

}

function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("bla bla bla...");
            resolve(nombre);
            // reject('Se está ejecutando un reject');
        }, 1000);
    })

}

// --------------------------
console.log('Iniciando el proceso');
hola('Juan')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then(nombre => {
        console.log('Terminado el proceso');
    })
    .catch(error => {
        console.error(error);
        console.error('Ha habido un error');
    })