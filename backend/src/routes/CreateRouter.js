

const { Router } = require('express');
const createProductController = require('../controllers/CreateProductController');

const router = Router();


router.get('/create-product', createProductController.showForm);


router.post('/create-product', createProductController.saveProduct);

module.exports = router;
