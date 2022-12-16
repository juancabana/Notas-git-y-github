import {addProduct, calcStock, products} from './product.service';

addProduct({
  title: 'Camiseta polo',
  createdAt: new Date(2003, 11, 3),
  stock: 15,
  size: 'L'
});
addProduct({
  title: 'Jean Negro',
  createdAt: new Date(2005, 7, 6),
  stock: 20,
  size: 'S'
});
addProduct({
  title: 'Pantaloneta JEF',
  createdAt: new Date(2016, 1, 24),
  stock: 34,
  size: 'XL'
});
const total = calcStock();



console.log(products);
console.log(total);
