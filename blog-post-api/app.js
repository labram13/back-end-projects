const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const app = express()
const apiRouter = require('./routes/api/api.js')

app.use(express.json())
app.use(cookieParser())

mongoose.connect('mongodb+srv://labradml_db_user:iWyc5BnM8zg0QNSN@cluster0.cqp624z.mongodb.net/blog')
console.log("connected to Mongodb")



app.use('/api', apiRouter)


app.listen('3000', () => console.log("localhost:3000 running"))