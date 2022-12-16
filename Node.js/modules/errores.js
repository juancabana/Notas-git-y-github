const otraFuncion = () => {
    seRompe();
}

const seRompe = () => {
    return 3 + z;
}

const seRompeAsincrona = (callback) => {
    setTimeout(function () {
        try {

            return 3 + z;
        } catch (error) {
            console.log('Error en mi función asíncrona');
            callback(error);

        }
    })
}

try {
    // otraFuncion();
    seRompeAsincrona(() => {console.log('Hay error')})
} catch (error) {
    console.error('Vaya, hubo un error: ');
    console.error(error.message);
    console.error('Pero no pasa nada, lo hemos capturado');
}
