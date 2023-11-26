const express = require("express");
const path = require("path");
const session = require("express-session");


const app = express();

app.use(express.static(path.join(__dirname, "../public")));

const mainRouter = require('./routes/main-router')

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(session({
    secret: "secreto",
    resave: false,
    saveUninitialized: false,
}))
app.use("/", mainRouter)

//llamo a la ruta de las api
// const apiProductsRouter = require('./routes/api/products')


//creo la colección de mis recursos de products
// app.use('/api/products',apiProductsRouter);

const PORT = 3000
app.listen(PORT, () => {
    console.log("server andando en puerto " + PORT)
})