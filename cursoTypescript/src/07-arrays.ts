(() => {
  let prices = [1, 2, 2, 1, 1, 2, false, 'gratis'];
  prices.push(10);
  prices.push(true);
  prices.push('gratis');
  console.log(prices);

  let mixed: (number | string | boolean | object)[] = ['Hola', true];
  mixed.push(12);
  mixed.push(false);
  mixed.push('Holaaa');
  mixed.push({});
  console.log(mixed);

  let numbers = [1, 2, 2, 1, 1, 2];
  numbers.map((item) => {
    console.log(item * 2);
  });
})();
