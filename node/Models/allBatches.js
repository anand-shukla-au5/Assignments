let mongoose = require('mongoose')
let allBatches = new mongoose.Schema({
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
    Services: [{
        type: String
    }],
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

module.exports = mongoose.model('allBatches', allBatches);