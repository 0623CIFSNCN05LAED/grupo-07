const { Router } = require("express");
const router = Router();

const loginController = require("../controllers/loginController");

router.get("/login", loginController.main)

module.exports = router;