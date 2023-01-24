
const express = require("express");
const productsRouter = express();
const productsController = require("../controllers/productsController")

productsRouter.get("/createProducts", productsController.create);
// Ruta de formulario para crear productos

productsRouter.get("/listProducts", productsController.list);

productsRouter.get("/detailProducts/:id", productsController.detail);

module.exports = productsRouter; 