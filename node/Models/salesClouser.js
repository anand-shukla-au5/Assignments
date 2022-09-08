let mongoose = require('mongoose')

let saleClousers = new mongoose.Schema({
    Counseller: {
        type: String,
        unique: true,
    },
    Target: Number,
    NewSales: Number,
    Renewals: Number,
    BalanceCollection: Number,
    Collected: String,
    Achived: Number,
}, { timestamps: true })

module.exports = mongoose.model('saleClousers', saleClousers);