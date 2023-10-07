const controller = {
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
    }
}

module.exports = controller;