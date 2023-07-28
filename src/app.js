const express = require('express');
const app = express();
const path = require('path');

app.listen(3000, () => {
    console.log('Server funcionando');
})

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "views/formulario.html"))
})