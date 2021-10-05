//CONFIGURACION DEL SISTEMA E IMPORTACIONES NEESARIAS
//AUTOR:JOSE ANTONIO GOVEA MILLAN
//DESCRIPCION:CONFIGURACION BASICA DE SERVIDOR CON NODE Y EXPRESS
const express =require('express'); 
const cors = require("cors");
//ASIGNANDO LA CARPETA PUBLICA DE MANERA ESTATICA

class Server {
	constructor() {
		this.app = express();
		this.port = 4000;
		this.usuariosPath = "/api/usuarios";
		// this// Middlewares
		// .this
		this.middlewares();

		// Rutas de mi aplicacion
		this.routes();
	}

	middlewares() {
		//Cors
		//  this.app.use(cors());
		 this.app.use((req, res, next) => {
			    res.header('Access-Control-Allow-Origin', '*');
			    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
			    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
			//     res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
			    next();
			});
			this.app.use(express.json())
			
		//ruta publica
		this.app.use(express.static("public"));
	}

	routes() {
		//path de la ruta
		
		this.app.use(this.usuariosPath, require("../routes/usuarios"));
		// this.app.get('/usuarios', require("../routes/usuarios"));
	}

	listen() {
		//Informacion de Puerto
		this.app.listen(this.port);
		console.log("Servidor corriendo en puerto " + this.port);
	}
}

module.exports = Server;
