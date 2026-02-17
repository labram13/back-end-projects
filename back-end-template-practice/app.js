const express = require('express')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const app = express();
const apiRouter = require('./routes/api.js')

app.use(cookieParser())
app.use(express.json())

app.use('/api', apiRouter)

app.listen('3000', () => console.log('localhost:3000 running'))