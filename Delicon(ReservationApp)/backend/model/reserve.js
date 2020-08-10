const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    table: {
        type: Number,
        required: true,
        max: 40,
        min: 1,
    },
});
var reservation = mongoose.model("reserves", userSchema);
module.exports = reservation;
