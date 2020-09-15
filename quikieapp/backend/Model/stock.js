const mongoose = require('mongoose')
const stockSchema = mongoose.Schema({
    symbol: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    openclose: {
        type: String,
        required: true
    },
})
const stock = mongoose.model('stocks', stockSchema)
module.exports = stock