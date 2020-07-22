const express = require('express')
const route = express.Router()
const mongoose = require('mongoose')
const bookmark = require('../model/bookmark')
const tag = require('../model/tag')
//   Create a bookmark with Tags
route.post('/bookmark/add', async (req, res) => {
    let { title, link, publisher } = req.body
    let book = await new bookmark({ title, link, publisher })
    try {
        var response = await book.save()
    } catch (err) {
        res.json(err)
    }
    if (req.body.tags) {
        req.body.tags.forEach(async (el) => {
            let result = await new tag({ title: el })
            try {
                let data = await result.save()
                let found = await bookmark.findByIdAndUpdate(response._id, { $addToSet: { 'tags': data } })
                let saved = await found.save()
                console.log(saved)
            } catch (err) {
                res.json(err)
            }
        })
    }
    res.json(response)
})
//  Create a tag 
route.post('/tags/add', async (req, res) => {
    let result = await new tag({ title: req.body.title })
    try {
        let saved = result.save()
        res.json(saved)
    } catch (err) {
        console.log(err)
    }
})
//  Display all bookmark
route.get('/bookmark/all', async (req, res) => {
    bookmark.find().populate('tags').exec(function (err, bookmarks) {
        if (err) return console.log(err)
        res.json(bookmarks)
    })
})
//  Delete a Bookmark 
route.post('/bookmark/delete', async (req, res) => {
    bookmark.deleteOne({ title: req.body.title }, function (err, result) {
        if (err) return handleError(err);
        // deleted at most one tank document
        res.json(result)
    });
})
//  Delete a Tag 
route.post('/tag/delete', async (req, res) => {
    tag.deleteOne({ title: req.body.title }, function (err, result) {
        if (err) return handleError(err)
        res.json(result)
    })
})
//  Display all tags
route.get('/tags/all', async (req, res) => {
    let result = await tag.find()
    res.json(result)
})
//  Add a tag to given bookmark
route.post('/addtag', async (req, res) => {
    let found = await bookmark.findOne({ title: req.body.bookmark })
    try {
        let ftag = await tag.findOne({ title: req.body.tag })
        found.tags.push(ftag)
        found.save()
        res.json(found)
    } catch (err) {
        console.log(err)
    }
})
// Remove a tag from a given bookmark
route.post('/rmtag', async (req, res) => {
    let ftag = await tag.findOne({ title: req.body.tag })
    console.log(ftag)
    // bookmark.findOneAndUpdate({ title: req.body.bookmark }, { $pull: { tags: req.body.tag } })
    bookmark.findOneAndUpdate(
        { title: req.body.bookmark },
        {
            $pull: { tags: ftag._id },
        },
        {
            new: true,
        },
        (err, result) => {
            if (err) {
                return res.json(err)
            }
            res.json(result)
        }
    );

})
module.exports = route