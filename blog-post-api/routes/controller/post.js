const express = require('express')
const router = express()
const authenticateToken = require('../../middleware/authenticateToken')
const Post = require('../../model/post.js')

router.post('/', authenticateToken, async (req, res) => {
    // console.log(req.userID)
    try {

        const post = req.body
        post.userID = req.userID
        
        console.log(post)
        const newPost = await Post.create({
            userID: req.body.userID,
            title: req.body.title,
            content: req.body.content,
            category: req.body.category,
            tags: req.body.tags
        })

        
        res.status(200).json({success: "success creating post"})
    } catch (err) {
        console.log(err)
        res.status(500).json({status: "error"})
    }
})



module.exports = router