const http = require("http");

http.createServer(router).listen(3000);

function router (req, res)  {
  console.log("Nueva petición");
  console.log(req.url);

  switch (req.url) {
    case "/":
      res.write("Hola, este es el home");
      res.end();
      break;

    case "/hola":
      res.write("Hola, que tal?");
      res.end();
      break;

    default:
        res.write("Error 404, no se lo que quieres");
      break;
  }
};









// // Creando servidor
// http.createServer(function(request, response) {
//     console.log('Nueva petición');
//     console.log(request.url);

//     switch (request.url) {
//         case '/hola':
//             response.write('Hola, que tal?');
//             response.end();
//             break;

//         default:
//             response.write('Error 404, no se lo que quieres')
//             break;
//     }

//     // // Escribir cabecera al usuario
//     // response.writeHead(201, {'Content-Type' : 'text/plain'})
//     // // Escribir respuesta al usuario
//     // response.write('Hola, ya se utilizar http de node')
//     // response.end();

// }).listen(3000);

console.log("Escuchando http en el puerto 3000");
