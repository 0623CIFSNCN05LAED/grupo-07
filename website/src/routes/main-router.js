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
const CreateController = require('../controllers/create-Controller')
const validations = require("../validations/login-validations")
const registerValidator = require('../validations/registerValidation');
const validateForm = require("../middlewares/validate-form")
const userGuard = require('../middlewares/user-guard')
const results = require('../controllers/results')

router.get("/", mainController.home)
// router.get("/productcart", userGuard ,mainController.cart);
router.get("/productcart",mainController.cart);
router.get("/productlist",mainController.list);
router.get("/login", mainController.showLogin)
router.post("/login" , urlencoded({ extended: false }), validations, mainController.login)
router.get("/register", mainController.showRegister);
router.post("/register", upload.single('imgProfile'), registerValidator, mainController.processRegister);
router.get("/createproduct", userGuard, mainController.create);
router.get("/productdetail/:id", mainController.detail)
router.get("/productsonsale", mainController.onSale)
router.get("/productsfeatured", mainController.featured)
router.get("/productsnew", mainController.newProducts)
router.get("/results", results.results)
router.post("/results", results.postResults)
router.get("/CreateProducts", CreateController.showForm)
//createProduct al ser un formulario va a necesitar una ruta get y la ruta post, también configurando su urlencoded

const apiRouter = require('./api/index')
router.use("/api", apiRouter)


module.exports = router;    