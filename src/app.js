const express = require("express");
const path = require("path")

const app = express();

app.use(express.static(path.join(__dirname, "../public")))


const PORT = 3000
app.listen(PORT, () => {
    console.log("server andando en puerto " + PORT)
})

const loginRouter = require("./routers/loginRouter");


app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs'); 

app.use(loginRouter)