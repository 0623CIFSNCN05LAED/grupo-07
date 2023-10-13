const { Router, urlencoded } = require("express");

const router = Router();

const multer  = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../../public/images/profile"))
    },
    filename: (req, file, cb) => {
        const newFileName = 'profile-' + Date.now() + path.extname(file.originalname);
        cb(null, newFileName)
    }
});

const upload = multer({ storage });

const mainController = require('../controllers/main-controller')
const validations = require("../validations/login-validations")
const registerValidator = require('../validations/registerValidation');
const validateForm = require("../middlewares/validate-form")
const userGuard = require('../middlewares/user-guard')

router.get("/", mainController.home)
router.get("/cart", userGuard ,mainController.cart);
router.get("/productlist",mainController.list);
router.get("/login", mainController.showLogin)
router.post("/login", urlencoded({ extended: false }), validations,validateForm, mainController.login)
router.get("/register", mainController.showRegister);
router.post("/register", upload.single('imgProfile'), registerValidator, mainController.processRegister);
router.get("/createproduct", userGuard, mainController.create);
//createProduct al ser un formulario va a necesitar una ruta get y la ruta post, también configurando su urlencoded

module.exports = router;    