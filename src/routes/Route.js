const express = require('express');
const { Router } = require("express");

const router = Router();

const ProductController = require('../controllers/ProductController')

router.get('/', ProductController.cart)

module.exports = router;