const express = require('express')
const router = express.Router()
//dummydata
const leadData = require('../tempData/leadData.json')
//modelName
const leadTarget = require('../Models/leadTarget')



router.get('/all', async function (req, res) {
    try {
        const response = await leadTarget.find()
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({ error: err })
    }
})
router.get('/by-name/:name', async function (req, res) {
    try {
        const response = await leadTarget.findOne({ Counseller: { $regex: '^' + req.params.name } })
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({ error: err })
    }
})

router.post('/create', async (req, res) => {
    try {
        // const { Counseller, LeadAssin, SpotConversions, TotalLeadsConversion, TotalAmount, Achived } = req.body
        // const tempsale = await new leadTarget({ Counseller, LeadAssin, SpotConversions, TotalLeadsConversion, TotalAmount, Achived })
        // const response = await tempsale.save();
        const response = await leadTarget.insertMany(leadData)
        console.log(response);
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({ error: err })
    }
});

module.exports = router