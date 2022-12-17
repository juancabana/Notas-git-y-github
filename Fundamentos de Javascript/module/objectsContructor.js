
function auto(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.detalleDelAuto = function () {
    console.log(`Auto ${this.model} ${this.year}`);
  }
}

var autoNuevo = new auto('Tesla' , 'Model 3', 2020);

console.log(autoNuevo);
