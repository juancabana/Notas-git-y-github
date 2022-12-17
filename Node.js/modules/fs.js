const fs = require('fs');

function read(ruta, callback) {
    fs.readFile(ruta, (error, data) => {
        callback(data.toString())
    })
}

function write(ruta, contenido, callback) {
    fs.writeFile(ruta, contenido, function (error) {
        if (error) {
            console.error('No he podido escribirlo', error)
        } else {
            console.log('Se ha escrito correctamente');
        }
    });
}

function remove(ruta, callback) {
    fs.unlink(ruta, callback);
}

// read(__dirname + '/archivo.txt', console.log);
// write(__dirname + '/archivo.txt', 'Soy un archivo nuevo', console.log);
// remove(__dirname + '/archivo.txt', console.log);