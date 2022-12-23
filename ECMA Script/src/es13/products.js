import fetch from "node-fetch";

// var products;
// const getting = async () => {
 const response = await fetch("https://api.escuelajs.co/api/v1/products")
//     .then((res) => {return res})
//     .catch((rej) => {return rej});
// };
// const eu = await getting();
// console.log(eu)

const products = await response.json();

export {products}
