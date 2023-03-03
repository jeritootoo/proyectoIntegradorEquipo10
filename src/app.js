const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.use(express.static('public'));


app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(3000,() => {
console.log("Servidor corriendo en puerto 3000");
});

app.get('/', () => {
res.rend("Bienvenido al sitio")
});



const productsRouter = require('./routes/productsRouter');
app.use("/products",productsRouter);

const mainRoutes = require('./routes/mainRoutes');
app.use("/main", mainRoutes);