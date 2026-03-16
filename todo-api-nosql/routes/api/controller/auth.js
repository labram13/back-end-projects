var express = require('express')
var router = express.Router()
var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')
var User = require('../../../models/user.js')
require('dotenv').config()

router.post('/register', async (req, res) => {
    try {

        //check if username exists
        const userExists = await User.findOne({username: req.body.username})

        //if user does not exist, post user in db
        //else, send error
        if (userExists === null) {

          
            const {username, email, password} = req.body
            const hashedPassword = await bcrypt.hash(password, 10)

            const newUser = await User.create({username, email, password: hashedPassword})
            const token = generateAccessToken(newUser._id.toString())

            // await newUser.save();
            //generate token and send
            // res.json({
            //     status: "success",
            //     token: token
            // })

            //send cookie with token

            res.cookie('token', token, {
                httpOnly: true,
                secure: true,
                sameSite: "Strict",
                maxAge: 60 * 60 * 1000

            }).json({status: "success"})
            
        } else {
            res.status(409).json({
                status: "error",
                error: "user already exists"
            })
        }

    } catch (err) {
        console.log(err)
        res.status(500).json({
            status: "error",
            error: err.message
        })
    }

})

router.post('/login', async (req, res) => {
    const user = await User.findOne({username: req.body.username})
    console.log("looking for user", user)

    if (user === null) {
        return res.status(400).json({status: "user does not exist"})
    }
     try {

         if (await bcrypt.compare(req.body.password, user.password)) {
            const token = generateAccessToken(user._id.toString())
            res.cookie('token', token, {
                httpOnly: true,
                secure: true,
                sameSite: true,
                maxAge: 60 * 60 * 100
            }).json({message: "correct password"})
         } else {
            res.json({message: "Incorrect password"})
         }
     } catch (err) {
        console.log(err)
        res.status(500).json({status: "error"})
     }


})

function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN)
}
module.exports = router