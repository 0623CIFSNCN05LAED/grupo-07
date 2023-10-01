const { Router, urlencoded } = require("express");

const router = Router();

const mainController = require('../controllers/main-controller')
const validations = require("../validations/login-validations")
const validateForm = require("../middlewares/validate-form")
const userGuard = require('../middlewares/user-guard')

router.get("/cart", userGuard ,mainController.cart);
router.get("/productlist",mainController.list);
router.get("/login", mainController.showLogin)
router.post("/login", urlencoded({ extended: false }), validations,validateForm, mainController.login)
router.get("/createproduct", userGuard, mainController.create);
//createProduct al ser un formulario va a necesitar una ruta get y la ruta post, también configurando su urlencoded

module.exports = router;