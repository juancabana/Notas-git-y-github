console.time("todo");
let sum = 0;
console.time("bucle");
for (i = 0; i < 10000000; i++) {
  sum += 1;
}
console.timeEnd("bucle");

console.log("Empieza el proceso asincrono");
console.time("Asincrono");
asincrona().then(() => console.timeEnd("Asincrono"));

let sum2 = 0;
console.time("bucle2");
for (i = 0; i < 10000000000; i++) {
  sum2 += 1;
}
console.timeEnd("bucle2");
console.timeEnd("todo");

function asincrona() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Termina el proceso asíncrono");
      resolve();
    });
  });
}
