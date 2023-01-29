
const express = require("express");
const productsRouter = express();
const productsController = require("../controllers/productsController")

productsRouter.get("/listProducts", productsController.list);
//Código
productsRouter.get("/createProducts", productsController.create);
//Código
productsRouter.get("/detailProducts/:id", productsController.detail);
//Código
productsRouter.post("/createProducts", productsController.processCreate);
//Código
productsRouter.get('/',productsController.edit);
//Código
productsRouter.put('/',productsController.processEdit);
//Código
productsRouter.delete('/',productsController.delete);
//Código

module.exports = productsRouter; 
