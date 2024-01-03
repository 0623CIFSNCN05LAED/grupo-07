const express = require("express");
const router = express.Router();
const productsAPIController = require("../../controllers/api/productsAPIController");
const cors = require("cors");

router.use(cors());
//Rutas
//Listado de Productos
router.get("/productList", productsAPIController.list);
//Detalle de Productos
router.get("/productdetail/:id", productsAPIController.detail);
//Agregar Producto
//...
//Modificar Producto
//...
//Borrar Producto
//...

module.exports = router;
