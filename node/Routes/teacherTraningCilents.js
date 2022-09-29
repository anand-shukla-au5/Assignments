const express = require('express')
const router = express.Router()
//modelName
const teacherTraningCilents = require('../Models/teacherTraningCilents')

router.get('/all', async function (req, res) {
    try {
        const response = await teacherTraningCilents.find()
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
        const temp = await new teacherTraningCilents({
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
        // const response = await teacherTraningCilents.insertMany(renewaldata)
        console.log(response);
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({ error: err })
    }
});

module.exports = router