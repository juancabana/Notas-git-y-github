function* iterate(array)  {
    for(let value of array) {
        yield value;
    }
}

const it = iterate(['Juan', 'David', 'Daniel', 'Eliana']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);