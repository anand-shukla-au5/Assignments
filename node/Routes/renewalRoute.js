const express = require('express')
const router = express.Router()
//dummydata
const renewaldata = require('../tempData/renewaldata.json')
//modelName
const renewalTarget = require('../Models/renewalTarget')



router.get('/all', async function (req, res) {
    try {
        const response = await renewalTarget.find()
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({ error: err })
    }
})
router.get('/by-name/:name', async function (req, res) {
    try {
        const response = await renewalTarget.findOne({ Counseller: { $regex: '^' + req.params.name } })
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({ error: err })
    }
})

router.post('/create', async (req, res) => {
    try {
        // const { Counseller, Target, NoOfRenewals, Conversion, TotalAmount, Achived } = req.body
        // const tempsale = await new renewalTarget({ Counseller, Target, NoOfRenewals, Conversion, TotalAmount, Achived })
        // const response = await tempsale.save();
        const response = await renewalTarget.insertMany(renewaldata)
        console.log(response);
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({ error: err })
    }
});

module.exports = router