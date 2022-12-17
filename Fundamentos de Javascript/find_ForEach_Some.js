var articulos = [
  { nombre: "Gafas", precio: 250000 },
  { nombre: "Bicicleta", precio: 550000 },
  { nombre: "Portatil", precio: 2500000 },
  { nombre: "Teclado", precio: 200000 },
  { nombre: "Mouse", precio: 300000 },
];

// Encuentra el objeto que tenga el nombre 'Bicicleta'
var findArticle = articulos.find((article) => {
    return article.nombre === "Bicicleta"
});

console.log(findArticle)

// Imprime cada nombre de cada articulo del array 
articulos.forEach((article) => {
    console.log(article.nombre);
})

// ¿Existen articulos que son menores o iguales a 260000? return true
var articulosBaraos = articulos.some((article) => {
    return article.precio <= 260000
})
console.log(articulosBaraos)