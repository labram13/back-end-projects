const express = require('express')
const app = express();
const cookieParser = require('cookie-parser')
const apiRouter = require('./routes/api')
const pool = require('./config/db')


app.use(express())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())


app.use('/api', apiRouter);
  



app.listen('3000', () => console.log("listening on port 3000"))