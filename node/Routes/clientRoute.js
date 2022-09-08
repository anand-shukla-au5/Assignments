const express = require('express')
const router = express.Router()
//dummydata
const clientdata = require('../tempData/clientdata.json')
//modelName
const clientClouser = require('../Models/clientClouser')

router.get('/all', async function (req, res) {
    try {
        const response = await clientClouser.find()
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({ error: err })
    }
})
router.get('/by-name/:name', async function (req, res) {
    try {
        const response = await clientClouser.findOne({ Counseller: { $regex: '^' + req.params.name } })
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({ error: err })
    }
})

router.post('/create', async (req, res) => {
    try {
        // const { Counseller,
        //     Target,
        //     NewClient,
        //     RenewalsClient,
        //     NoOfClosure,
        //     Achived } = req.body
        // const tempsale = await new clientClouser({
        //     Counseller,
        //     Target,
        //     NewClient,
        //     RenewalsClient,
        //     NoOfClosure,
        //     Achived
        // })
        // const response = await tempsale.save();
        const response = await clientClouser.insertMany(clientdata)
        console.log(response);
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({ error: err })
    }
});

module.exports = router