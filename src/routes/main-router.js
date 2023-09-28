const { Router } = require("express");

const router = Router();

const mainController = require('../controllers/main-controller')
const productController = require('../controllers/ProductController')
router.get("/cart", mainController.cart);
router.get("/productlist", mainController.list);
router.get("/login", mainController.login);
router.get("/formproduct", mainController.create);
router.post("/createproduct", productController.create)
router.get("/usersData",usersController.users);
module.exports = router;