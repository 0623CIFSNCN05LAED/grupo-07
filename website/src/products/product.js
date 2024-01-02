const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const db=require("../database/models/index")
module.exports = {
  getProducts: function () {
    const productsFilePath = path.join(__dirname, "./ProductsData.json");
    const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    return products;
  },
  findAll: function () {
    return this.getProducts();
  },
  findById: function (id) {
    const product = this.getProducts().find((product)=>product.id === id);
    return product;
  },
  create: async function (product) { 
   
    try{const newid = uuidv4() 
      const newproduct = {id:newid,...product}
      await db.Products.create(newproduct)
    } catch (error){
      console.log(`Error while creating a new Product ${error}`);
    }
  },
  update: async function (id,newData) {
    console.log(`Updating product ${product.name}`);
    //cargo todos los productos

    try{ const updatingProduct= await db.Products.update(newData,{
      where:{id:id},
    })
      if (updatingProduct[0]===1) { console.log("producto actulizado")

        
      }
      else {
        console.log("El producto no se actualizó");
      }
    } catch (error){
      console.log(`Error while Updating the product ${error}`);
    }

    //busco un producto por su id

    //piso todas sus propiedades

    //guardo los productos
    
  },
  deleting: async function (id) {
  
      try{ const deleteProduct= await db.Products.destroy({
        where:{id:id},
      })
        if (deleteProduct[0]===1) { console.log("Borrado")
  
          
        }
        else {
          console.log("no se pudo borrar");
        }
      } catch (error){
        console.log(`Error while deleting the product ${error}`);
      }
  
  }
}
