const express = require('express');
const router = express();
const mainController = require("../controllers/mainController");

router.get('/', mainController.home);
router.get('/detalle', mainController.detalle);
router.get('/carrito', mainController.carrito);
router.get('/registro', mainController.login);
router.get('/login', mainController.registro);

module.exports = mainController;