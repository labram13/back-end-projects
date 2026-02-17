const mongoose = require('mongoose')

const testSchema = new mongoose.Schema({
    test: String
})

const TestModel = new mongoose.model('Test', testSchema)

module.exports = TestModel