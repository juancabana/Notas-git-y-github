(() => {
  const login = (email: string, password: string) => {
    console.log(email, password);
  };

  const loginV2 = (data: { email: string; password: string }) => {
    console.log(data.email, data.password);
  };

  login('juand.cabanat@unac.edu.co', '782nk9');
  login('juandaka78@hotmail.com', '7efcew');
  loginV2({
    email: 'juandaka78@hotmail.com',
    password: 'jjuhn',
  });

  type Sizes = 'S' | 'M' | 'L' | 'XL';
  const products: any[] = [];

  const addProduct = (data: {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  }) => {
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
})();
