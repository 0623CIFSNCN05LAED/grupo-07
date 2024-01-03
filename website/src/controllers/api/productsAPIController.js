const path = require("path");
const db = require("../../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");
// const moment = require('moment')

//Llamo los modelos
const Products = db.Product;
const Artist = db.Artist;
const Technique = db.Technique;

const productsAPIController = {
  list: async (req, res) => {
    try {
      let products = await Products.findAll({
        include: ["artist"],
      });
      // res.render('productList', { products: products });
      res.send(products);
    } catch (error) {
      console.error(error);
      res.status(500).send("Error interno del servidor.");
    }
  },
  detail: async (req, res) => {
    try {
      let products = await Products.findByPk(req.params.id, {
        include: ["artist"],
      });
      console.log(products);
      res.render("productDetail", { products: products });
    } catch (error) {
      console.error(error);
      res.status(500).send("Error interno del servidor.");
    }
  },
  //HAY QUE AGREGAR DESTROY, UPDATE Y CREATE CUANDO ESTEN HECHAS
};

module.exports = productsAPIController;
