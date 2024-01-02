const { validationResult } = require('express-validator');
const db = require('../database/models/index');

const controller = {
    detail: async (req, res) => {
        try {
            let products = await db.Product.findByPk(req.params.id,
                {
                include : ['artist']
                })
                // console.log(products)
            res.render('productDetail', { products: products });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error interno del servidor.');
        }
    },
    cart: async (req, res) => {
        try {
            let products = await db.Product.findByPk(req.params.id,
                {
                include : ['artist']
                })
                // console.log(products)
            res.render('productCart', { products: products });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error interno del servidor.');
        }
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
    login: async (req, res) => {
        const data = req.body;
        let users = await db.Users.findByPK(data);
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
            res.render("index", { products: products,});
        } catch (error) {
            console.error(error);
            res.status(500).send('Error interno del servidor.');
        }
    },
    showRegister: (req, res) => {
        res.render("register");
    },
    processRegister: async (req, res) => {
        //let users = await db.User.findAll();
        let errors = validationResult(req);
        const admin = 16;
        const usuario = 17;

            if (!errors.isEmpty()) {
                res.render("register", {
                    errors: errors.mapped(),
                    oldData: req.body
                });
            } else {
                const isAdmin = req.body.email && req.body.email.toLowerCase().includes('@mercadoarte.com');
            
                // Crear una nueva instancia del modelo de usuario
                const newUser = await db.User.create({
                    name: req.body.userName, // Asegúrate de que 'name' es el nombre correcto del campo en tu modelo
                    address: req.body.userAdress , // Asegúrate de que 'password' es el nombre correcto del campo en tu modelo
                    email: req.body.userEmail, // Asegúrate de que 'email' es el nombre correcto del campo en tu modelo
                    password: req.body.userPassword, // Asegúrate de que 'address' es el nombre correcto del campo en tu modelo
                    rol_id: isAdmin ? admin : usuario,
                });
            
                // Ahora puedes llamar a 'newUser.save()'
                console.log (newUser)
                newUser.save()
            }


           
            res.redirect("/");
        
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
