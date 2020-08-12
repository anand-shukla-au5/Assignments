const userValid = require('./jwt')
const express = require('express')
const reservation = require('../model/reserve')
const userModewl = require('../model/user')
const router = express.Router()
router.post('/read', userValid, async (req, res) => {
    console.log(req.body.email)
    userModewl.findOne({ email: req.body.email }).populate('reservation').exec(function (err, result) {
        if (err) return console.log(err)
        res.json(result)
    })
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
    console.log(req.body)
    const { name, food, people, floor, edit } = req.body
    let found = await reservation.findByIdAndUpdate({ _id: edit }, { name, food, people, floor })
    try {
        console.log("f", found)
        res.json(found)
    } catch (err) {
        console.log(err)
    }
})
router.delete('/delete', userValid, (req, res) => {
    reservation.findByIdAndDelete({ _id: req.body.id }, function (err, result) {
        if (err) return console.log(err)
        console.log(result)
    })
    userModewl.findOneAndUpdate(
        { email: req.body.email },
        {
            $pull: { reservation: { _id: req.body.id } },
        },
        {
            new: true,
        },
        (err, result) => {
            if (err) {
                return res.json(err)
            }
            console.log("deleted", result)
            res.json(result)
        }
    );
})
module.exports = router