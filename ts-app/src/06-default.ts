// Valores por defecto
export const createProduct = (
  name: string,
  id: string | number,
  // El valor por defecto es 50
  stock: number = 50,
  // El valor por defecto es true
  isNew: boolean = true,
) => {
  return {
    name,
    id,
    // Valor por defecto en stock es 10
    stock,
    // Valor por defecto en isNew es true
    isNew,
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
