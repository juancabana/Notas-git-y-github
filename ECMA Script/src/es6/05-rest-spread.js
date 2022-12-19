// Desestructuración

// Arrays destructuring
let fruits = ['Apple', 'Banana', 'Lemon'];
let [a, b] = fruits;
console.log(a, fruits[1]);

// Objects destructuring
let user = {
    username: 'juancabana',
    age: 19,
}

let {username, age} = user;
console.log(username, user.age)
