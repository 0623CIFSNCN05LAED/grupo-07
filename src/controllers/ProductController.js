const products = require('../../products/product');

const controller = {
    cart: (req, res) => {
        res.render('index')
    },
    destroy: (req, res) => {
        const id = req.params.id;
        products.delete(id);
        res.redirect("/productlist");
    }
}

module.exports = controller;