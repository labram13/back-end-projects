const mongoose = require('mongoose')

const testSchema = new mongoose.Schema({
    name: String,
    email: String
})

const TestModel = new mongoose.model('poop', testSchema)

module.exports = TestModel