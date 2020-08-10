const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    floor: {
        type: String,
        required: true,
    },
    people: {
        type: Number,
        required: true,
    },
    food: {
        type: String,
        required: true,
    }
});
var reservation = mongoose.model("reserves", userSchema);
module.exports = reservation;
