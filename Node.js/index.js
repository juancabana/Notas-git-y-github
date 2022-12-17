const obj = {
  nombre: "Juan",
  edad: 19,
  direccion: "Cr 89 #32-29",
  ciudad: "Medellín",
};

let objectCopy = JSON.parse(JSON.stringify(obj));

objectCopy.nombre = "David";

console.log(obj, objectCopy);
