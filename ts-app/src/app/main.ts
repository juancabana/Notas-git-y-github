import { faker } from '@faker-js/faker';
import {
  addProduct,
  findProducts,
  products,
  updateProduct,
} from './products/product.service';

for (let i = 0; i < 8; i++) {
  addProduct({
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.vehicle.color(),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: ['Tag1', 'Tag2', 'Tag3', 'Tag4'],
    stock: faker.datatype.number({ min: 10, max: 200 }),
    size: 'M',
    categoryId: faker.datatype.uuid(),
  });
}

console.log(products);
const product1 = products[0];
updateProduct(product1.id, {
  title: 'New title',
  stock: 80,
});

findProducts({
  stock: 10,
  color: 'red',
  tags: ['tag1', 'tag3'],
});
