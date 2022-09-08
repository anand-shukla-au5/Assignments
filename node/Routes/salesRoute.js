const express = require('express')
const router = express.Router()
//dummydata
const salesclosureData = require('../tempData/salesdata.json')
//modelName
const saleClousers = require('../Models/salesClouser')



router.get('/all', async function (req, res) {
    try {
        const response = await saleClousers.find()
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({ error: err })
    }
})
router.get('/by-name/:name', async function (req, res) {
    try {
        const response = await saleClousers.findOne({ Counseller: { $regex: '^' + req.params.name } })
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({ error: err })
    }
})

router.post('/create', async (req, res) => {
    try {
        // const { Counseller, Target, NewSales, Renewals, BalanceCollection, Collected, Achived } = req.body
        // const tempsale = await new saleClousers({ Counseller, Target, NewSales, Renewals, BalanceCollection, Collected, Achived })
        // const response = await tempsale.save();
        const response = await saleClousers.insertMany(salesclosureData)
        console.log(response);
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({ error: err })
    }
});

module.exports = router