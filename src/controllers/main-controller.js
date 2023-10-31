const { validationResult } = require('express-validator');

const controller = {
    detail: (req, res) => {
        res.render('productDetail')
    },
    cart: (req, res) => {
        res.render('productCart')
    },
    list: (req, res) => {
        res.render('productList')
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
    home: (req, res) => {
        res.render("index")
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
    }
}

module.exports = controller;