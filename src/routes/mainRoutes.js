const express = require('express');
const router = express.Router();
const mainController = require("../controllers/mainController");

router.get('/', mainController.home);
router.get('/detalle', mainController.detalle);
router.get('/carrito', mainController.carrito);
router.get('/registro', mainController.registro);
router.post('/registro', mainController.processRegistro);
router.get('/login', mainController.login);

module.exports = router;