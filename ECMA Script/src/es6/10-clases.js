// Clase
class user {
    // Metodos
    saludo(name = 'usuario') {
        return `Hola ${name}`;
    }
};

// Instancias
const juan = new user();
const anonimo = new user();
console.log(juan.saludo('Juan'));
console.log(anonimo.saludo());


class userClass {
    // constructor
    constructor(name) {
        this.name = name;
        // console.log('Nuevo usuario');
    }
    speak() {
        return 'Hello';
    }
    saludo() {
        return `${this.speak()} ${this.name}`;
    }

}

const david = new userClass('David');
console.log(david.saludo())

// setters and getters

class userSetAndGet {
    // constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // metodos
    speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;

    }

    get uAge() {
        return this.age
    }
    set uAge(n) {
        this.age = n
    }

}

const developer = new userSetAndGet('Juan', 19);
console.log(developer.age);
console.log(developer.uAge);
console.log(developer.uAge = 20);