const express = require('express')
const rotuer = express.Router()

rotuer.post('/login', function (req, res) {
    console.log(res.body)
})
module.exports = rotuer