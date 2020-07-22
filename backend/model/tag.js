const mongoose = require('mongoose')
const tagSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        min: 3
    }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
const tag = mongoose.model('tags', tagSchema)
module.exports = tag