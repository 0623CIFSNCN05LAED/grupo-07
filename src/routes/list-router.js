const express = require('express');
const { Router } = require("express");

const router = Router();

const listController = require('../controllers/list-controller')

router.get('/', listController.cart)

module.exports = router;