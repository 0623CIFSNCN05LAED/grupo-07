const products = require('../../products/product');

const controller = {
    cart: (req, res) => {
        res.render('index')
    },
    destroy: (req, res) => {
        const id = req.params.id;
        products.delete(id);
        res.redirect("/productlist");
    },
    create: (req, res) => {
     const {nombre,descripcion,precio}  = req.body
     
console.log (req.body)
        res.redirect("/formproduct");
    }
}

module.exports = controller;