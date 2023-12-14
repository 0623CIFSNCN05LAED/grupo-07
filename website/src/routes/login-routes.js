const { Router } = require("express");
const router = Router();

const loginController = require("../controllers/login-controller");

router.get("/login", loginController.main)

module.exports = router;