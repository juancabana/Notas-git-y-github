// Enahced object literals 
const newUser = (user, age, country) => {
    return{
        user: user,
        age: age,
        country: country
    }
}

// Its same
const newUSer = (user, age, country) => {
    return{
        user,
        age,
        country,
        
    }
}

console.log(newUSer('Juancabana', 19, 'COL'));