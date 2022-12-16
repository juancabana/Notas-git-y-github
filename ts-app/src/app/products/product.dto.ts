import { Product } from './product.model';

// Omit para crear producto (Obviando el id y las fechas de creación y de actualización)
export interface CreateProductDto
  extends Omit<Product, 'id' | 'createdAt' | 'updateAt' | 'category'> {
  categoryId: string;
}

// Pick para agregar atributos a este prototipo
type example = Pick<Product, 'color' | 'description'>;

// Partial deja todos los atributos opcionales
export interface UpdateProductDto extends Partial<CreateProductDto> {}

// Required deja todos los atributos obligatorios
type example2 = Required<Product>;

export interface FindProductDto
  extends Readonly<Partial<Omit<Product, 'tags'>>> {
  readonly tags: ReadonlyArray<string>;
}
