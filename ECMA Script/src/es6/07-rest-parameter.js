// Rest 
const sum = (num, ...values) => {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 2, 3, 4, 5, 6); 
// console.log => [2,3,4,5,6]
// return => 1 + 2: 3