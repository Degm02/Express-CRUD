var express = require('express');

var router = express.Router();
const cancionesController=require("../controllers/cancionesController");

/* GET canciones page. */
router.get('/', cancionesController.index);
router.get('/crear', cancionesController.crear);
router.post('/', cancionesController.guardar);
router.post('/eliminar/:id', cancionesController.eliminar);
router.get('/editar/:id', cancionesController.editar);
router.post('/actualizar', cancionesController.actualizar);

module.exports = router;