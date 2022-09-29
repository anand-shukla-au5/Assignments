const express = require('express')
const router = express.Router()
//modelName
const irregularMembers = require('../Models/irregularMembers')

router.get('/all', async function (req, res) {
    try {
        const response = await irregularMembers.find()
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
        const temp = await new irregularMembers({
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
        // const response = await irregularMembers.insertMany(renewaldata)
        console.log(response);
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({ error: err })
    }
});

module.exports = router