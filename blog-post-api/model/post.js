const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    userID: mongoose.Schema.Types.ObjectId,
    title: String,
    content: String,
    category: String,
    tags: [String]
})

const PostModel = new mongoose.model('Post', postSchema)

module.exports = PostModel