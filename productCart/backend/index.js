const express = require('express');
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const product = require('./Routes/product')
const dotenv = require("dotenv");
dotenv.config();
// BODYPARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//Mooongose connection 
mongoose.connect(process.env.Mongo,
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
    () => {
        console.log("DB connected");
    }
);
mongoose.connection.on('error', (err) => {
    console.log(err)
});

//Cros Error
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.use(product)

app.get('/', (req, res) => {
    res.send("Hello World")
})
app.listen(5050, console.log("server Running"))