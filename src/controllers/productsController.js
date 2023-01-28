const fs = require("fs");
const path = require("path");
const rutaVinosListadoJSON = path.join(__dirname, '../datos/vinoslistado.json');
const vinos = JSON.parse(fs.readFileSync(rutaVinosListadoJSON, 'utf-8'));

const productsController = { 
    create: (req, res) => {
        return res.render('products/createProducts')
    // Metodo que renderiza vista de formulario de producto   
},
    processCreate: (req, res) => {
        let id = vinos[vinos.length-1].id + 1
        let nuevoVino = {id, ...req.body}
        vinos.push(nuevoVino)
        fs.writeFileSync(rutaVinosListadoJSON, JSON.stringify(vinos, null, 2))
        console.log(req.body)
        return res.redirect('/products/listProducts')
        
},
    list: (req, res) => {
        return res.render('products/listProducts', {vinos: vinos})
    // Metodo que renderiza vista del listado de productos  
},
    detail: (req, res) => {
        let product = vinos.find(row => row.id == req.params.id)
        if (product) return res.render("products/detailProducts", {product: product});
        else return res.send('Producto no encontrado')
    }
};

module.exports = productsController