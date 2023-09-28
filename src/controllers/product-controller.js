const path = require("path");

const productCotroller = {
    home: (req,res)=> {
        //res.sendFile(path.join(__dirname,"../src/productDetail.html"));
        res.render("productDetail");
    },
};
module.exports = productCotroller;