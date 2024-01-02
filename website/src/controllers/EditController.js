const {update} = require("../products/product")
const EditProductController = {
    
    showEditProduct: (req, res) => {
      res.render('EditProduct'); 
    },
    editProduct: (req, res) => {
      const { title, artist, description, year, price, discount, image,id } = req.body;
      const newData= {title, artist, description, year, price, discount, image } 
      update (id,newData)

    }
    
}
  module.exports = EditProductController;