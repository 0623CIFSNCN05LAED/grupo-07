const express = require('express');
const { Router } = require("express");

const router = Router();

const cartController = require('../controllers/users-controller')

router.get('/', cartController.cart)

module.exports = router;