let mongoose = require('mongoose')

let clientClousers = new mongoose.Schema({
    Counseller: {
        type: String,
        unique: true,
    },
    Target: Number,
    NewClient: Number,
    RenewalsClient: Number,
    NoOfClosure: Number,
    Achived: Number,
}, { timestamps: true })

module.exports = mongoose.model('clientClousers', clientClousers);