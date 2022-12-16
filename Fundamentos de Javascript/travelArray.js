var articulos = [
  { nombre: "Gafas", precio: 250000 },
  { nombre: "Bicicleta", precio: 550000 },
  { nombre: "Portatil", precio: 2500000 },
  { nombre: "Teclado", precio: 200000 },
  { nombre: "Mouse", precio: 300000 },
];

// 1er metodo filter NO MODIFICA EL ARREGLO ORIGINAL
var articlesFilter = articulos.filter((article) => {
  return article.precio > 250000;
});

console.log(articlesFilter);


// 2do metodo map NO MODIFICA EL ARREGLO ORIGINAL
var nameArticles = articulos.map((article) => {
  return article.nombre;
});

console.log(nameArticles);
