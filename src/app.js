const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000")
});

const productsRouter = require('./routes/productsRouter');
app.use("/products",productsRouter);