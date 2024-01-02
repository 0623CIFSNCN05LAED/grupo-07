const { validationResult } = require('express-validator');
const db = require('../database/models/index');

const controller = {
    detail: async (req, res) => {
        try {
            let products = await db.Product.findByPk(req.params.id,
                {
                include : ['artist']
                })
                
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
        console.log(data);
        let user = await db.User.findOne({ where: { name : data.username } });
        
    
        if (user) {
            // Comprueba si la contraseña ingresada coincide con la contraseña del usuario en la base de datos.
            // Asegúrate de que estás comparando la contraseña correctamente, especialmente si estás utilizando algún tipo de hash o cifrado en la contraseña.
            if (data['user-password'] === user.password) {
                // Inicia sesión del usuario y redirige a la página de inicio
                req.session.user = user;
                res.redirect("/");
            } else {
                // Contraseña incorrecta
                console.log("error");
                res.status(401).send('Contraseña incorrecta.');
            }
        } else {
            // Usuario no encontrado
            res.status(404).send('Usuario no encontrado.');
        }
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
            
                
                const newUser = await db.User.create({
                    name: req.body.userName, 
                    address: req.body.userAdress , 
                    email: req.body.userEmail, 
                    password: req.body.userPassword, 
                    rol_id: isAdmin ? admin : usuario,
                });
            
                
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
