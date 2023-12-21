

const controller = {
    showForm: (req, res) => {
        res.render('create-product');
    },
    saveProduct: (req, res) => {
        const { title, artist, description, year, price, discount, image } = req.body;
       
        res.redirect('/product-list');
    }
};

module.exports = controller;
