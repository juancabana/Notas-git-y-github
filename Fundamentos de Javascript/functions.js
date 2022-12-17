//declarativas
// Se pueden llamar antes de la declaración de la función

miFuncion();

function miFuncion(){
    console.log(3);
}


//expresión
var iFuncion = function(a,b) {
    return a + b;
}


//ejemplo 
//1 
   function saludarEstudiantes (estudiante){
        console.log(`hola ${estudiante}`)
    }

// saludarEstudiantes("Diego Alfonso");

//2 
function sumar (a,b){
    var resultado  = a + b;
    return resultado
}

// console.log(sumar(1, 2))

