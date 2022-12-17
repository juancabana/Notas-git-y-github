import { faker } from '@faker-js/faker';
import {Product} from './product.model';
import {CreateProductDto, UpdateProductDto, FindProductDto} from './product.dto';


export const products: Product[] = [];

export const addProduct = (data: CreateProductDto): Product => {
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updateAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updateAt: faker.date.recent(),
    }
  }
  // data.id = 'juabygdjhij';
  // data.createdAt = new Date(1987, 1, 4);
  products.push(newProduct);
  return newProduct;
};

// Acceder al tipado por índice
export const updateProduct = (id: Product['id'], changes: UpdateProductDto): Product => {
  const index = products.findIndex(item => item.id === id);
  const prevData = products[index];
  products[index] = {
    ...prevData,
    ...changes
  }

  return products[index]
};

export const findProducts = (dto: FindProductDto): Product[] => {
  return products
}
