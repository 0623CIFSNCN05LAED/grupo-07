const express = require("express");
const router = express.Router();
const cors = require("cors");
const usersApi = require("../../controllers/api/usersAPI");

router.use(cors());

router.get("/users", usersApi.list);
router.get("/users-sales/:id", usersApi.detail);

module.exports = router;
