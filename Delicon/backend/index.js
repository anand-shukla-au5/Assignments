const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const loginSignup = require('./route/loginSignup')
const rest = require('./route/reservations')
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
app.use(loginSignup)
app.use(rest)
app.get('/', (req, res) => {
    res.send("HELLO World")
})
app.listen(2020, console.log("Server running"))