const express = require("express");
const router = express.Router();
const cors = require("cors");
const usersApi = require("../../controllers/api/usersAPI");

router.use(cors());

router.get("/users", usersApi.list);

module.exports = router;
