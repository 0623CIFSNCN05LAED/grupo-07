const { validationResult } = require('express-validator');
const db = require('../database/models/index');

const controller = {
    detail: (req, res) => {
        res.render('productDetail');
    },
    cart: (req, res) => {
        res.render('productCart');
    },
    list: async (req, res) => {
        try {
            let products = await db.Product.findAll();
            res.render('productList', { products: products });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error interno del servidor.');
        }
    },
    showLogin: (req, res) => {
        const errors = req.session.errors;
        const oldData = req.session.oldData;
        req.session.oldData = null;
        req.session.errors = null;
        res.render("login", { errors: errors ? errors : null, oldData });
    },
    login: (req, res) => {
        const data = req.body;
        req.session.userData = data;
        res.redirect("/");
    },
    create: (req, res) => {
        res.render("CreateProducts");
    },
    users: (req, res) => {
        res.render("usersData");
    },
    home: async (req, res) => {
        try {
            let products = await db.Product.findAll();
            res.render("index", { products: products });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error interno del servidor.');
        }
    },
    showRegister: (req, res) => {
        res.render("register");
    },
    processRegister: (req, res) => {
        let errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.render("register", {
                errors: errors.mapped(),
                oldData: req.body
            });
        } else {
            
            const isAdmin = req.body.email && req.body.email.toLowerCase().includes('@mercadoarte.com');


            
            const newUser = {
                userName: req.body.userName,
                userPassword: req.body.userPassword,
                

              
                role: isAdmin ? 'admin' : 'user'
            };

           
            res.redirect("/");
        }
    },
    featured: async (req, res) => {
        try {
            let products = await db.Product.findAll();
            res.render('productsFeatured', { products: products });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error interno del servidor.');
        }
    },
    onSale: async (req, res) => {
        try {
            let products = await db.Product.findAll();
            res.render('productsOnSale', { products: products });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error interno del servidor.');
        }
    },
    newProducts: async (req, res) => {
        try {
            let products = await db.Product.findAll();
            res.render('productsNew', { products: products });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error interno del servidor.');
        }
    }
};

module.exports = controller;
