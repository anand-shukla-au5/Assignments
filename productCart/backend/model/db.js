const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
        min: 3
    },
    productCategory: {
        type: String,
        required: true,
        min: 3
    },
    productQty: {
        type: Number,
        required: true,
        default: 1
    },
    productPrice: {
        type: Number,
        required: true,
    }
})
const product = mongoose.model('products', productSchema)
module.exports = product