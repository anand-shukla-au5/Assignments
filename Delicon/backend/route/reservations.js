const userValid = require('./jwt')
const express = require('express')
const reservation = require('../model/reserve')
const userModewl = require('../model/user')
const router = express.Router()
router.post('/read', userValid, async (req, res) => {
    console.log(req.body)
    let found = await userModewl.findOne({ email: req.body.email })
    try {
        let result = found.populate('reserves')
        res.json(result)
    } catch (err) {
        console.log(err)
    }
})
router.post('/create', userValid, async (req, res) => {
    console.log(req.body)
    const { name, food, people, floor } = req.body
    let found = await userModewl.findOne({ email: req.body.email })
    try {
        let reserves = await new reservation({ name, food, people, floor })
        reserves.save()
        found.reservation.push(reserves)
        found.save()
        res.json(found)
    } catch (err) {
        console.log(err)
    }
})
router.put('/edit', userValid, async (req, res) => {
    let found = await userModewl.findOne({ email: req.body.email })
    try {
        let reserve = await reservation.findOneAndUpdate()
        found.reservation.push(reserve)
        found.save()
        res.json(found)
    } catch (err) {
        console.log(err)
    }
})
router.delete('/delete', userValid, (req, res) => {

})
module.exports = router