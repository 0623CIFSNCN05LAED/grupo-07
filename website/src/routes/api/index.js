const express = require("express");
const router = express.Router();
const cors = require("cors");

router.use(cors());
//Homepage
router.get("/", function (res, req, next) {
  res.render("index", { title: "MercadoArte" });
});

const productAPIRouter = require("./products");

router.use(productAPIRouter);

module.exports = router;
