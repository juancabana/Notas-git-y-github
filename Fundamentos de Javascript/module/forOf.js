let students = ["Maria", "Juan", "Daniel", "Fabian"];

var saludarEstudiante = function (estudiante) {
  console.log(`Hola ${estudiante}`);
};

// -----------For-----------
for (var i = 0; i < students.length; i++) {
  console.log(`Hola ${students[i]}`);
}

// -----------For Of-----------
for (var student of students) {
  console.log(`Hola ${student}`);
}
