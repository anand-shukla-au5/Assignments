const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = 5000;
// BODY PARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Mooongose connection 
mongoose.connect('mongodb://localhost:27017/business',
    () => {
        console.log("DB connected");
    }
);
mongoose.connection.on('error', (err) => {
    console.log(err)
});

//ROUTES 
app.use('/salesclosure', require('./Routes/salesRoute'));
app.use('/clientclosure', require('./Routes/clientRoute'));
app.use('/leadtarget', require('./Routes/leadRoute'));
app.use('/renewaltarget', require('./Routes/renewalRoute'));


app.listen(5000, function () {
    console.log('listening on port', port);
})