let mongoose = require('mongoose')
let renewalTargets = new mongoose.Schema({
    Counseller: {
        type: String,
        unique: true,
    },
    Target: Number,
    NoOfRenewals: Number,
    Conversion: Number,
    TotalAmount: Number,
    Achived: Number,
}, { timestamps: true })

module.exports = mongoose.model('renewalTargets', renewalTargets);