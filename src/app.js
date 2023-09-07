const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "../public")));

const cartRoutes = require('./routes/cart-routes');
const listRoutes = require('./routes/list-router');
const loginRoutes = require('./routes/login-routes');
const ProductRoutes = require('./routes/Route');

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use("/cart", cartRoutes);
app.use("/productList", listRoutes);
app.use(loginRoutes);
app.use("/createproduct",ProductRoutes);

const PORT = 3000
app.listen(PORT, () => {
    console.log("server andando en puerto " + PORT)
})