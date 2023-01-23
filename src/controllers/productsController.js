const fs = require("fs");
const path = require("path");
const rutaVinosListadoJSON = path.join(__dirname, '../datos/vinoslistado.json');
const vinos = JSON.parse(fs.readFileSync(rutaVinosListadoJSON, 'utf-8'));

const productsController = { 
    create: (req, res) => {
        return res.render('products/createProducts')
    // Metodo que renderiza vista de formulario de producto   
},
    list: (req, res) => {
        return res.render('products/listProducts', {vinos: vinos})
    // Metodo que renderiza vista del listado de productos  
}
};

module.exports = productsController