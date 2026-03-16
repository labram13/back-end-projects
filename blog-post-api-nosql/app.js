const express = require('express')
const cookieParser = require('cookie-parser')
const apiRouter = require('./routes/api.js')
const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGOOSE_URI)
const app = express();

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));



app.use('/api', apiRouter)



app.listen('3000', () => console.log('localhost:3000 running'))