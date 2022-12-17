const { app, BrowserWindow } = require("electron");

let ventanaPrincipal;

app.on('ready', crearVentana)

function crearVentana() {
  ventanaPrincipal = new BrowserWindow({
    width: 800,
    heigh: 600,
  });

  ventanaPrincipal.loadFile('index.html')
}
