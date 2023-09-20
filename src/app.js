const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "../public")));

const mainRouter = require('./routes/main-router')

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use("/", mainRouter)

const PORT = 3000
app.listen(PORT, () => {
    console.log("server andando en puerto " + PORT)
})