do {
  var number_1 = prompt("DIgite el número 1");
  console.log(number_1);
} while (Number.isInteger(number_1) == true);
do {
  var number_2 = prompt("Digite el número 2");
} while (Number.isInteger(number_2) == true);

number_1 === number_2
  ? console.log("Los números son iguales")
  : number_1 < number_2
  ? console.log(`${number_1} es menor que ${number_2}`)
  : console.log(`${number_1} es mayor que ${number_2}`);
