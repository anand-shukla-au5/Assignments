let mongoose = require('mongoose')
let referrers = new mongoose.Schema({
    Profile: String,
    Mobile: {
        type: Number,
        unique: true,
    },
    Invoice: Number,
    AttendanceId: {
        type: String,
        unique: true,
    },
    ServicesCard: String,
    StartDate: {
        type: Date,
        default: Date.now,
    },
    Enddate: {
        type: Date,
        default: new Date(+new Date() + 7 * 24 * 60 * 60 * 1000),
    },
    CallStatus: String,
}, { timestamps: true })

module.exports = mongoose.model('referrers', referrers);