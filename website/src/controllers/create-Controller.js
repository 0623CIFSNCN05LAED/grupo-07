const {create} = require("../products/product")

const controller = {
    showForm: (req, res) => {
        res.render('createProducts');
    },
    saveProduct: (req, res) => {
        const { title, artist, description, year, price, discount, image, category, colors, dimensions, material ,technique , frame, edition  } = req.body;
       const newProduct = { 
        title,
        artist,
        description,
        year,
        price,
        discount,
        image,
        category, 
        colors,
        dimensions, 
        material, 
        technique,
        frame,
        edition
       }
       create(newProduct)
        res.redirect('/product-list');
    }
};

module.exports = controller;
