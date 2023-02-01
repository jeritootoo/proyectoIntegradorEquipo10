
const express = require("express");
const productsRouter = express();
const productsController = require("../controllers/productsController")


productsRouter.get("/listProducts", productsController.list);

productsRouter.get("/createProducts", productsController.create);

productsRouter.get("/detailProducts/:id", productsController.detail);

productsRouter.post("/createProducts", productsController.processCreate);

productsRouter.get('/editProducts',productsController.edit);

productsRouter.put('/products/:id',productsController.processEdit);

productsRouter.delete('/products/:id',productsController.delete);


module.exports = productsRouter; 

