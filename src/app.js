const express = require("express");
const path = require("path")

const app = express();

app.use(express.static(path.join(__dirname, "../public")))


const PORT = 3000
app.listen(PORT, () => {
    console.log("server andando en puerto " + PORT)
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views/productCart.html"))
})

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "views/login.html"))
})