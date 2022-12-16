// Cohersion implicita (Lenguage nos ayuda)
let a = 4 + '7'; //Return string
let b = 4 * '7'; //Return number

// console.log(typeof(a))
// console.log(typeof(b))


// Cohersion explicita (Nosotros obligamos a que un tipo de valor cambie)
var c = 20;
var d = String(c);
var d = Number(c);

console.log(typeof(d));