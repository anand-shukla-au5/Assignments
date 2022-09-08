
let mongoose = require('mongoose')

let leadTargets = new mongoose.Schema({
    Counseller: {
        type: String,
        unique: true,
    },
    LeadAssin: String,
    SpotConversions: Number,
    TotalLeadsConversion: Number,
    TotalAmount: Number,
    Achived: Number,
}, { timestamps: true })

module.exports = mongoose.model('leadTargets', leadTargets);