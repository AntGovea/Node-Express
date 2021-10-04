//CONFIGURACION DEL SISTEMA E IMPORTACIONES NEESARIAS
//AUTOR:JOSE ANTONIO GOVEA MILLAN 
//DESCRIPCION:CONFIGURACION BASICA DE SERVIDOR CON NODE Y EXPRESS 

require("dotenv").config();
//IMPORTACION DE LIBRERIA DE EXPRESS
const express = require("express");
const app = express();
//IMPORTACION DE HANDLEBEARS
const hbs = require('hbs');
//ASIGNACION DE PUERTO
const port = process.env.PORT  | 4000 ;

//ASIGNANDO LA CARPETA PUBLICA DE MANERA ESTATICA
app.use(express.static("public"));


//RUTAS DE SERVIDOR

app.get("/Home", (req, res) => {
	res.sendFile(__dirname + "/public/index.html");
	res.s;
	res.send("Respuesta de ruta Home");
	console.log("Ruta Home ");
});


//Ruta por default
app.get("*", (req, res) => {
	res.sendFile(__dirname + "/public/404.html");
	console.log("Ruta no encontrada");
});

//Informacion de Puerto
app.listen(port);
console.log("Servidor corriendo en puerto " + port); 
