const express = require('express');
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
// const post = require('./Routes/posts')
// BODYPARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//Mooongose connection 
mongoose.connect("mongodb://localhost:27017/fbpost",
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

// app.use(post)

app.get('/', (req, res) => {
    res.send("Hello World")
})
app.listen(5080, console.log("server Running"))