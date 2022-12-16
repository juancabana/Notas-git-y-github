const prices: (number | string)[] = [1, 5, 6, 'Gratis', 8, 'Descuento'];

prices.push(9);
prices.push('5');
prices.push(6);

console.log(prices);

let user: [string, number];
user = ['username', 15];

const [username, age] = user;

console.log(`
${user}`);
console.log(username);
console.log(age);
