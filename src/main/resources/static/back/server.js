const express = require("express");
const cors = require("cors");
const app = express();
const data = require('./data.js')

app.use(cors());
app.get('/api/tours', (req, res) => {
    res.send(data.tours)
})
app.listen(5000, () =>{
    console.log ("Server abierto en localhost:5000")
})