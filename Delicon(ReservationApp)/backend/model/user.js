const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 4,
    },
    email: {
        type: String,
        required: true,
        max: 70,
        min: 4,
    },
    password: {
        type: String,
        required: true,
        min: 5,
    },
    reservation: [{ type: ObjectId, ref: "reserves" }],
});
const user = mongoose.model("user", userSchema);
module.exports = user;
