// Guardar datos en memoria RAM 

// let buffer = Buffer.alloc(3);
// let buffer = Buffer.from([1, 2, 3, 4]);
let buffer = Buffer.from('Hola juan');

console.log(buffer);
console.log(buffer.toString());

// -----
// Transformar números a el abecedario
let abc = Buffer.alloc(26);
console.log(abc);

for (let i = 0; i < 26; i++) {
    abc[i] = i + 97;    
}
console.log(abc.toString());