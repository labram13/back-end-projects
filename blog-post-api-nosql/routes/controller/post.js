const express = require('express')
const router = express()
const authenticateToken = require('../../middleware/authenticateToken.js')
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

router.put('/:id', authenticateToken, async (req,res) => {
    try {

        const post = await Post.findOneAndUpdate({_id:req.params.id, userID: req.userID}, req.body)
      
        
        if (!post) {
            return res.status(404).json({status: "Blog post not found"})
        }
        
        res.status(200).json({status: "success"})
    } catch (error) {
        res.status(400).json({status: "Bad request"})
    }

})

router.delete('/:id', authenticateToken, async (req, res) => {
    try {

        const post = await Post.findOneAndDelete({_id:req.params.id, userID: req.userID})

        if(!post) {
            return res.status(404).json({status: "Not Found"})
        }

        res.status(200).json({status: "successfully deleted post"})

    } catch (error) {
        res.status(400).json({status: "Bad request"})
    }
})

router.get('/', authenticateToken, async (req, res) => {

    try {
        console.log(req.userID)
        const posts = await Post.find({userID: req.userID})
        console.log(posts)

        res.status(200).json({status: "successfully getting all posts by user", posts})


    } catch (error) {
        res.status(403).json({status: "bad request"})
    }
})


module.exports = router