
const {deleting} = require("../products/product")

const controller = {
    
    deleteProduct: (req, res) => {
        const { id } = req.body;
       
       deleting(id)
        res.redirect('/product-list');
    }
};

module.exports = controller;
