const express = require('express')
const router = express.Router()
const stocks = require('../Model/stock')
router.get('/all', async (req, res) => {
    try {
        let response = await stocks.find()
        res.json(response)
    } catch (err) {
        console.log(err)
    }
})
router.post('/create', async (req, res) => {
    let { symbol, name, openclose } = req.body
    try {
        let data = await new stocks({ symbol, name, openclose })
        let saved = await data.save()
        res.json(saved)
    } catch (err) {
        console.log(err)
    }
})
router.post('/delete', async (req, res) => {
    try {
        let data = await stocks.findByIdAndDelete({ _id: req.body._id })
        res.json(data)
    } catch (err) {
        console.log(err)
    }
})
module.exports = router