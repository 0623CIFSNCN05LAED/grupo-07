const { Op } = require('sequelize');
const db = require('../database/models/index');

module.exports = {
    results: async (req, res) => {
        res.render('results');
    },

    postResults: async (req, res) => {
        try {
            let inputValue = req.body.autoComplete;
            let data = await db.Product.findAll({
                where: {
                    title: {
                        [Op.like]: `%${inputValue}%`
                    }
                }
            })
            res.render('results', {data, inputValue});
        } catch(error) {
            console.log(error);
        }
    }
};