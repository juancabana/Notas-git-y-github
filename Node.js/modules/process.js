// Procces viene dentro de los módulos globales, así que no es necesario importarlo de nuevo
// const process = require('process');

process.on('beforeExit', () => {
    console.log('Juan, el proceso va a terminar');
});
 
process.on('exit', () => {
    console.log('Juan, el proceso acabó');
});

process.on('uncaughtException', (err, origen) => {
    console.log('Vaya, se nos ha olvidado caprurar un error');
    console.log(err);
});
funcionquenoexiste();
process.on('uncaughtRejection');
 

