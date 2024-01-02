const { Router } = require ("express");

const productControllers = require("../controllers/product-controller");

const router = Router ()

router.get("/",productControllers.home);
router.post("/products/create",productControllers.saveProduct)
module.exports = router;