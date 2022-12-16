function asincrona(callback) {
  setTimeout(() => {
    try {
      let a = 3 + z;
      callback(null, a);
    } catch (error) {
      callback(error);
    }
  }, 1000);
}

try {
    asincrona(function(err, dato) {
    if(err) {
        console.log('Tenemos un error');
        console.log(err);
        return false
        // throw err // NO VA A FUNCIONAR PORQUE ESTÁ DENTRO DE UNA FUNCIÓN ASÍNCRONA
    } 
    console.log('Todo ha ido bien, mi data es: ' + dato);
})
} catch (error) {
   console.error('Hemos capturado un error');
   console.error(error);
}
