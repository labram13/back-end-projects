const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const User = require('./model/user')
require('dotenv').config()

app.use(express.json())
app.use(cookieParser())

try {
    mongoose.connect(process.env.MONGOOSE_URI)
    console.log('connected to db')
} catch (err) {
    console.log("error connecting to db")
}

app.post('/register', async (req, res) => {

    try {
     //check if user is in database send back invalid username if exists

     const userExist = await User.findOne({username: req.body.username})
     if (userExist !== null) return res.status(403).json({status: "invalid username"})

     //hash password using bcrypt
    const {username, password} = req.body
    const hashedPassword = await bcrypt.hash(password, 10)

    //create new user in database
    const newUser = await User.create({username, password: hashedPassword})

     //generate token
    const token = generateAccessToken({userID: newUser._id.toString(), username: username })

    
    //send token to user via cookie
    
    res.cookie('token', token, {
    httpOnly: true,
    secure: true,
        sameSite: 'strict',
        maxAge: 60 * 60 * 1000,
    }).json({status: "success"})
} catch (err) {
        console.log(err)
        res.status(500).json({status: 'error registering user'})
    }
})


//create access token use node
//require('crypto').randomBytes(60).toString('hex)
function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN)
}


app.listen('4000', () => console.log("localhost:4000 auth server running"))