const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const authroute = require('./jwt-router');
app.use('/auth', authroute)
app.listen(8000, () => {
    console.log('server listening')
});