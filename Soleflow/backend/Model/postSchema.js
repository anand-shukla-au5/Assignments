const mongoose = require('mongoose')
const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    comments: [
        {
            type: String,
            required: false
        }
    ],
    likes: {
        type: Number,
        required: false
    },
    dislikes: {
        type: Number,
        required: false
    },
    heart: {
        type: Boolean,
        required: false
    }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
const post = mongoose.model('posts', postSchema)
module.exports = post