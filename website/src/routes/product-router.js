const { Router } = require ("express");

const productCotrollers = require("../controllers/product-controller");

const router = Router ()

router.get("/",productCotrollers.home);

module.exports = router;