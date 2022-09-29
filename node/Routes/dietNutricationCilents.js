const express = require('express')
const router = express.Router()
//modelName
const dietNutricationCilents = require('../Models/dietNutricationCilents')

router.get('/all', async function (req, res) {
    try {
        const response = await dietNutricationCilents.find()
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
            Services,
            StartDate,
            Enddate,
            CallStatus,
            Appointments,
            Traning,
            Status } = req.body
        const temp = await new dietNutricationCilents({
            Profile,
            Mobile,
            Invoice,
            AttendanceId,
            Services,
            StartDate,
            Enddate,
            CallStatus,
            Appointments,
            Traning,
            Status
        })
        const response = await temp.save();
        // const response = await dietNutricationCilents.insertMany(renewaldata)
        console.log(response);
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({ error: err })
    }
});

module.exports = router