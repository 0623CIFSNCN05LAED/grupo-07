const { Router } = require("express");
const deleteController = require("../controllers/DeleteController");

const router = Router();

router.post("/", deleteController.deleteProduct);

module.exports = router;
