const express = require('express')
const app = express();
const cookieParser = require('cookie-parser')


app.use(express())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

app.get('/', (req, res) => {
    res.status(200).json({status: "test"})
})

app.listen('3000', () => console.log("listening on port 3000"))