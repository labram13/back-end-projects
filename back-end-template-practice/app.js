const express = require('express')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')

const app = express()
const apiRouter = require('./routes/api')

mongoose.connect('mongodb+srv://labradml_db_user:iWyc5BnM8zg0QNSN@cluster0.cqp624z.mongodb.net/practice')


app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended: true}))

app.use('/api', apiRouter)

app.listen('3000', () => console.log("connected to localhost:3000"))


