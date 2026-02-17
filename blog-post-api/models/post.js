const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title: String,
    description, String,
})

const PostModel = new mongoose.model('Post', postSchema) 

module.exports = PostModel