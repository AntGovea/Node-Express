// configuracione de l sistema en el archivo  :D
require("dotenv").config();
const Server = require("./models/server");
//IMPORTACION DE LIBRERIA DE EXPRESS

// RUTAS DE SERVIDOR
// app.get('/', function (req, res) {
// 	res.sendFile(__dirname + "/public/index.html");
// 	res.send("Respuesta de ruta Home");
// 	console.log("Ruta Home ");
// });
const server = new Server();

server.listen();

//Ruta por default
// app.get('*', (req, res) => {
// 	res.sendFile(__dirname + "/public/index.html");
// 	res.send("Respuesta de ruta Home");
// 	console.log("Ruta Home");
// });
