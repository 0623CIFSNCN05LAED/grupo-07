const { Router } = require("express");
const EditProductController = require("../controllers/EditProductController");

const router = Router();


router.get("/EditProduct", EditController.showEditProduct);

module.exports = router;
