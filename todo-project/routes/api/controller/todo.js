var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const Todo = require('../../../models/todo.js')
require('dotenv').config()

const authenticateToken = require('../../../middleware/auth.js')

router.post('/', authenticateToken, async (req, res) => {
    console.log("inside post")

    try{
        const {title, description} = req.body
    
        
        // const newPost = new req.models.Todo({
        //     userID: req.userID,
        //     title,
        //     description
        // })
        // await newPost.save()

        const todo = await Todo.create({
            userID: req.userID,
            title,
            description

        })

        res.json({todo: todo, status: "success"})
    } catch (err) {
        res.status(500).json({status: "error"})
    }
})

router.put('/:id', authenticateToken, async (req, res) => {

    try {
        const postID = req.params.id
        console.log(postID)

        const post = await Todo.findById("698ebf3175bb271387a6da2d")

        //check if post exists
        if (!post) {
            return res.status(403).json({status: "todo item not found"})
        }

        //check if current user from token matches userID from post

        if (req.userID !== post.userID.toString()) {
            return res.status(403).json({status: "Unauthorized access"})
        }

        const updateTodo = await Todo.findByIdAndUpdate(
            postID,
            {$set: req.body},
            {returnDocument: 'after'}
        )

        res.status(201).json({updateTodo, status: "you updated successfully"})
    
    } catch (err) {
        res.status(500).json({status: "error"})
    }
   
})

router.delete('/:id', authenticateToken, async (req, res) => {
    const post = await Todo.findById(req.params.id)

    if (req.userID !== post.userID.toString()) return res.status(403).json({status: "unauthorized"})
    await post.deleteOne()

    res.json({status: "success"})

    

})



module.exports = router