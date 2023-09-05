const express = require("express");
const path = require("path")

const app = express();

app.use(express.static(path.join(__dirname, "../public")))

const cartRoutes = require('./routes/cart-routes')
const listRoutes = require('./routes/list-router')

app.set("view engine", "ejs")
app.set("views", "./src/views");

app.use("/cart", cartRoutes)
app.use("/productList", listRoutes)

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "views/login.html"))
})

const PORT = 3000
app.listen(PORT, () => {
    console.log("server andando en puerto " + PORT)
})