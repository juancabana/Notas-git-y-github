let myCar = {
  brand: "Toyota",
  model: "Corolla",
  year: "2020",
  detalleDelAuto: function () {
    console.log(`Auto ${this.model} ${this.year}`);
  },
};

myCar.detalleDelAuto();
