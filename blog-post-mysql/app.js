const express = require('express')
const cookieParser = require('cookie-parser')
const apiRouter = require('./routes/api')


const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cookieParser())


// app.get('/', (req, res) => {
//     res.status(200).json({status: "success"})
// })

app.use('/api', apiRouter)



app.listen('3000', () => console.log("localhost:3000 live"))