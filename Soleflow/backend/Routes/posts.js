const express = require('express')
const router = express.Router()
const posts = require("../Model/postSchema")
router.post('/create', async (req, res) => {
    let { title } = req.body
    try {
        let response = await new posts({ title })
        let saved = await response.save()
        res.json(saved)
    } catch (err) {
        console.log(err)
    }
})
router.get('/all', async (req, res) => {
    try {
        let response = await posts.find()
        res.json(response)
    } catch (err) {
        console.log(err)
    }
})
router.post('/comment', async (req, res) => {
    let { comment, id } = req.body
    try {
        let find = await posts.findByIdAndUpdate({ _id: id }, { $push: { comments: comment } }, { new: true })
        find = await find.save()
        find = await find.populate('comments')
        res.json(find)
    } catch (err) {
        console.lo(err)
    }
})
module.exports = router