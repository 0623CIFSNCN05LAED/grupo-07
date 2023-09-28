const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  getProducts: function () {
    const productsFilePath = path.join(__dirname, "./ProductsData.json");
    const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    return products;
  },
  saveProduct: function (products) {
    const productsFilePath = path.join(__dirname, "./ProductsData.json");
    fs.writeFileSync(productsFilePath,JSON.stringify("",null,2));
  },
  findAll: function () {
    return this.getProducts();
  },
  findById: function (id) {
    const product = this.getProducts().find((product)=>product.id === id);
    return product;
  },
  create: function (product) {
    console.log ("hola")
    const productsFilePath = path.join(__dirname, "./ProductsData.json");
    const products = this.getProducts()
    const newid = uuidv4() 
    const newproduct = {id:newid,...product}
    products.push  (newproduct)
    fs.writeFileSync(productsFilePath,JSON.stringify(products,null,2));
  },
  update: function (id, product) {
    console.log(`Updating product ${product.name}`);
    //cargo todos los productos

    //busco un producto por su id

    //piso todas sus propiedades

    //guardo los productos
    
  },
  delete : function (id) {
    console.log(`Deleting product with id ${id}`);
    const products = this.getProducts();
    const nonDeletedProducts = products.filter((product) => product.id != id);
    this.saveProduct(nonDeletedProducts); 
  }
}
