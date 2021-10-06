const { response } = require("express");

const usuariosGET = (req, res = response) => {
	res.status(200).json({
		msg: "get Api",
	});
};

const usuariosPUT = (req, res = response) => {
	// const {nombre='naruto' ,apellido='uzumaki' ,aldea='konoha'}=req.body;
	res.json({
		nombre,
		apellido,
		aldea
	});
};

const usuariosPOST = (req, res = response) => {
	console.log('Entrando al get');
	
	res.json({
		msg: "post Api",
	});

};

const usuariosPATCH = (req, res = response) => {

	
	res.json({
		msg: "patch Api",
	});
};


const usuariosDELETE = (req, res = response) => {
	res.json({
		msg: "delete Api",
	});
};

module.exports = {
	usuariosGET,
	usuariosDELETE,
	usuariosPATCH,
	usuariosPUT,
	usuariosPOST
};
