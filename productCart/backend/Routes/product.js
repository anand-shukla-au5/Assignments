const express = require('express')
const route = express.Router()
const mongoose = require('mongoose')
const product = require('../model/db')
route.post('/post/product', async (req, res) => {
    const { productName, productCategory, productQty, productPrice } = req.body
    let result = await new product({ productName, productCategory, productQty, productPrice })
    try {
        let productSaved = await result.save();
        res.send(productSaved);
    } catch (error) {
        console.log(error);
    }
})
route.get('/get/product', async (req, res) => {
    let all = await product.find()
    try {
        res.json(all)
    } catch (err) {
        console.log(err)
    }
})
route.post('/sold', async (req, res) => {
    console.log(req.body)
    req.body.cart.forEach(el => {
        product.findByIdAndUpdate(el._id, { $inc: { 'productQty': -1 } }, function (err, result) {
            if (err) {
                console.log(err)
            }
            else {
                console.log(result)
            }
        })
    })
})
module.exports = route