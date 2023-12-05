const { Op } = require('sequelize');
const db = require('../database/models/index');

module.exports = {
    results: async (req, res) => {
        let data = await db.Product.findAll()
        console.log(data);
        res.render('results', {data});
    },

    postResults: async (req, res) => {
        let data = await db.Product.findAll()
        console.log(data);
        res.render('results', {data});
    }
};