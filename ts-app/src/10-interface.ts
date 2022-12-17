type Sizes = 'S' | 'M' | 'L' | 'XL';
// type Product = {
//   id: number | string;
//   title: string;
//   createdAt: Date;
//   stock: number;
//   size: Sizes;
// };

interface Product {
  id: number | string;
  title: string;
  createdAt: Date;
  stock: number;
  size: Sizes;
};

const products: Product[] = [];
products.push({
  id: 267354,
  title: 'Producto numero 1',
  createdAt: new Date(),
  stock: 36,
  size: 'S',
});
