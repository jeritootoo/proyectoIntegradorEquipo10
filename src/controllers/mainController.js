
const mainController = {
    
    home: (req, res) => {
        res.render('/', {})
    },
    detalle: (req, res) => {
        res.render('/detalle', {})
    },
    carrito: (req, res) => {
        res.render('/carrito', {})
    },
    registro: (req, res) => {
        res.render('registro', {})
    },
    processRegistro: (req, res) => {

    },

    login: (req, res) => {
        res.render('/login', {})
    },    
    }
    

module.exports = mainController;