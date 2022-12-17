// Valores por defecto
export const createProduct = (
  name: string,
  id: string | number,
  stock?: number,
  isNew?: boolean,
) => {
  return {
    name,
    id,
    // Valor por defecto en stock es 10
    stock: stock ?? 40,
    // Valor por defecto en isNew es true
    isNew: isNew ?? true,
  };
};

;


//     ||
// 0 === false
// ' === false'
// false === false

const p1 = console.log(createProduct('Producto 1', 321, 12,  true));
const p2 = console.log(createProduct('Producto 2', 832, 20,  false));
const p4 = console.log(createProduct('Producto 3', 627, 19));
const p5 = console.log(createProduct('Producto 4', 976));
const p6 = console.log(createProduct('Producto 5', 524, 27,  false));
