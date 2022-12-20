const user = {
    username: 'Juan',
    age: 19,
    country: 'COL'
};

const {username, ...values} = user;
console.log(username); //Juan
console.log(values); //{ age: 19, country: 'COL' }