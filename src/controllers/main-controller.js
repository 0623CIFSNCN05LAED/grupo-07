const controller = {
    cart: (req, res) => {
        res.render('productCart')
    },
    list: (req, res) => {
        res.render('productList')
    },
    login: ((req, res) => {
        res.render("login")
    }),
    create: (req, res) => {
        res.render('index')
    },
}

module.exports = controller;