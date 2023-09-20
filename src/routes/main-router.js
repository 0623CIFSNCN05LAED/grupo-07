const { Router } = require("express");

const router = Router();

const mainController = require('../controllers/main-controller')

router.get("/cart", mainController.cart);
router.get("/productlist", mainController.list);
router.get("/login", mainController.login);
router.get("/createproduct", mainController.create);

module.exports = router;