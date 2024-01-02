const {create} = require("../products/product")

const controller = {
    showForm: (req, res) => {
        res.render('create-product');
    },
    saveProduct: (req, res) => {
        const { title, artist, description, year, price, discount, image, } = req.body;
       const newProduct = { 
        title,
        artist,
        description,
        year,
        price,
        discount,
        image,  
       }
       create(newProduct)
        res.redirect('/product-list');
    }
};

module.exports = controller;
