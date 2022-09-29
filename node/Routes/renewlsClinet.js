const express = require('express')
const router = express.Router()
//modelName
const renewlsClinet = require('../Models/renewlsClinet')



router.get('/all', async function (req, res) {
    try {
        const response = await renewlsClinet.find()
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({ error: err })
    }
})

router.post('/create', async (req, res) => {
    try {
        const { MemberId,
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
        const temp = await new renewlsClinet({
            MemberId,
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
        // const response = await renewlsClinet.insertMany(salesclosureData)
        console.log(response);
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({ error: err })
    }
});

module.exports = router