
const express = require("express");
const productsRouter = express();
const productsController = require("../controllers/productsController")

productsRouter.get("/createProducts", productsController.create);
// Ruta de formulario para crear productos

module.exports = productsRouter;