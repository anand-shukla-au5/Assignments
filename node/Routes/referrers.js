const express = require('express')
const router = express.Router()
//modelName
const referrers = require('../Models/referrers')

router.get('/all', async function (req, res) {
    try {
        const response = await referrers.find()
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({ error: err })
    }
})

router.post('/create', async (req, res) => {
    try {
        const {
            Profile,
            Mobile,
            Invoice,
            AttendanceId,
            ServicesCard,
            StartDate,
            Enddate,
            CallStatus,
        } = req.body
        const temp = await new referrers({
            Profile,
            Mobile,
            Invoice,
            AttendanceId,
            ServicesCard,
            StartDate,
            Enddate,
            CallStatus,
        })
        const response = await temp.save();
        // const response = await referrers.insertMany(renewaldata)
        console.log(response);
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({ error: err })
    }
});

module.exports = router