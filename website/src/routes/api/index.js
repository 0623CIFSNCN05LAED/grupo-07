const express = require("express");
const router = express.Router();
const cors = require("cors");

router.use(cors());
//Homepage
router.get("/", function (req, res, next) {
  res.render("index", { title: "MercadoArte" });
});

const productAPIRouter = require("./products");
const usersAPI = require("./users");

router.use(productAPIRouter, usersAPI);

module.exports = router;
