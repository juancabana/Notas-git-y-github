const countries = {
    COL: 'Colombia',
    CND: 'Canada',
    BRA: 'Brasil',
    ARG: 'Argentina',
}
// Object.entries
let objects = Object.entries(countries); //[['COL', 'Colombia'], ['CND', 'Canada'], ['BRA', 'Brasil'], ['ARG', 'Argentina']]
console.log(objects);
// Object.keys
let keys = Object.keys(countries); //[ 'COL', 'CND', 'BRA', 'ARG' ]
console.log(keys);

// Object.values
let values = Object.values(countries); //[ 'Colombia', 'Canada', 'Brasil', 'Argentina' ]
console.log(values);