const { validationResult } = require('express-validator');
const db = require('../database/models/index');

const controller = {
    detail: (req, res) => {
        res.render('productDetail')
    },
    cart: (req, res) => {
        res.render('productCart')
    },
    list: async (req, res) => {
        let products = await db.Product.findAll()
        res.render('productList', {products: products})
    },
    showLogin: (req, res) => {
        const errors = req.session.errors
        const oldData = req.session.oldData
        req.session.oldData = null
        req.session.errors = null
        res.render("login", {errors: errors ? errors : null,oldData,})
    },
    login: (req, res) => {
        const data = req.body

        req.session.userData = data;

        res.redirect("/")
    },
    create: (req, res) => {
     res.render("CreateProducts")
    },
    users: (req, res) => {
        res.render("usersData")
    },
    home: async (req, res) => {
        let products = await db.Product.findAll()
        // console.log(products)
        res.render("index", {products: products})
    },
    showRegister: (req, res) => {
        res.render("register")
    },
    processRegister: (req, res) => {
        let errors = validationResult(req);

        if(!errors.isEmpty()) {
            res.render("register", {
                errors: errors.mapped(),
                old: req.body
            });
        } else {
            res.redirect("/")
        }
    },
    featured: async (req, res) => {
        let products = await db.Product.findAll()
        res.render('productsFeatured', {products: products})
    },
    onSale: async (req, res) => {
        let products = await db.Product.findAll()
        res.render('productsOnSale', {products: products})
    },
    newProducts: async (req, res) => {
        let products = await db.Product.findAll()
        res.render('productsNew', {products: products})
    }
}

module.exports = controller;