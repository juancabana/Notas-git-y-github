// FLat
const array = [1, 2, 3, 4, 5, [1, 2, 3, 4, 5, [1, 2, 3, 4]]];
console.log(array.flat(3)) //[1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4]

const array2 = [1, 2, 3, 4, 5];
console.log(array2.flatMap( v => [v, v * 2]))