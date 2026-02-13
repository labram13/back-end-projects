var mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      }, 
    title: String,
    description: String
})

const TodoModel = mongoose.model('Todo', TodoSchema)

module.exports = TodoModel;