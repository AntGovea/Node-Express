const { Router } =require('express'); 

const { usuariosGET, usuariosDELETE, usuariosPATCH, usuariosPUT,usuariosPOST } = require('../controllers/usuarios');

const router = Router();

router.get('/', usuariosGET);

router.delete('/', usuariosDELETE);

router.put('/', usuariosPUT);

router.patch('/', usuariosPATCH);

router.post('/', usuariosPOST);

module.exports = router;
