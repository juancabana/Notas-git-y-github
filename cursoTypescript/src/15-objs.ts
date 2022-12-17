(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  }
  const products: Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data);
  };

  addProduct({
    title: 'Arroz',
    createdAt: new Date(),
    stock: 28,
    size: 'M',
  });
  addProduct({
    title: 'Arroz',
    createdAt: new Date(),
    stock: 28,
  });

  console.log(products);
  products.push({
    title: 'Producto 1',
    createdAt: new Date,
    stock: 16,
  })
  products.push({
    title: 'Producto 2',
    createdAt: new Date,
    stock: 23,
    size: 'M'
  })
})();
