// Spread operator
let person = {
  name: "Juan",
  age: 19,
};
let country = 'COL';

// Combinar atributos
let data = {id: 1, ...person, country }
console.log(data);