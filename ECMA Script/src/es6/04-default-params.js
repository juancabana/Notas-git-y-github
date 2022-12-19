function newUSer(name, age, country) {
    var name = name || 'Juan';
    var age = age || 19;
    var country = country || 'COL';

    console.log(name, age, country);

}

newUSer();
newUSer('David', 24, 'EEUU');


const newUserECMA = (name = 'Juan', age = 19, country = 'COL') => {
    console.log(name, age, country);
}

newUserECMA();
newUserECMA('David', 26, 'MEX');