const express = require('express');
const { Router } = require("express");

const router = Router();

const cartController = require('../controllers/cart-controller')

router.get('/', cartController.cart)

module.exports = router;