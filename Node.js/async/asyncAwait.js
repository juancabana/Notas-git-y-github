async function hola(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Hola " + nombre);
            resolve(nombre);
        }, 1500);
    });

}

async function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Adiós " + nombre);
            resolve();
        }, 1000);
    });

}

async function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("bla bla bla...");
            resolve(nombre);
            // reject('Se está ejecutando un reject');
        }, 1000);
    })

}

// ---------------------

async function main() {
    let nombre = await hola('Juan');
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre)
    console.log('Terminando proceso' + nombre);
}

console.log('Empezamos proceso');
main()