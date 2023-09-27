const express= require('express');
const path = require("path");

const  mainrouter = require ("./routes/product-router");

const app = express();

const mainCotroller = require("./controllers/product-controller");
const productCotroller = require('./controllers/product-controller');

app.use(express.static(path.join(__dirname,"../public")));


const PORT = 3001;
app.listen(PORT,() => {
    console.log("Se"+ PORT)
});



app.use(mainrouter);


app.set("views", "./src/views");
app.set("view engine", "ejs");  
