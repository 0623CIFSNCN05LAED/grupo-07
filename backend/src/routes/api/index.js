const express = require('express');
const router = express.Router()

//Homepage
router.get('/', function (res, req, next) {
    res.render('index', { title: 'MercadoArte' })
});

const productAPIRouter = require('./products')

router.use(productAPIRouter)

module.exports = router;