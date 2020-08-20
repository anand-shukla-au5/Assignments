const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// BODYPARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', (req, res) => {
    res.send("Hello World")
})
app.listen(5050, console.log("Server running..."))
