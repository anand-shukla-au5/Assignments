const mongoose = require('mongoose')
const bookmarkSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        min: 3
    },
    link: {
        type: String,
        required: true,
        unique: true,
        min: 3
    },
    publisher: {
        type: String,
        required: true,
        min: 3
    },
    tags: [
        {
            type: mongoose.Schema.Types.ObjectId, ref: "tags",
            required: false
        }
    ]
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
const bookmark = mongoose.model('bookmarks', bookmarkSchema)
module.exports = bookmark