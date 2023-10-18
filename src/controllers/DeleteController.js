const productService = require("../services/productService");

const controller = {
  deleteProduct: (req, res) => {
    const productId = req.body["product-id"];
    productService.deleteProduct(productId);
    res.redirect("/products"); 
  },
};

module.exports = controller;
