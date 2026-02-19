const jwt = require('jsonwebtoken')
require('dotenv').config()

function authenticateToken(req, res, next) {
    // const {username, password} = req.body
    // console.log(username,password)
    // console
    // console.log('inside authenticateToken')
    // console.log(req.body)

    //grab cookie
    const token = req.cookies.token
    //verify token. if not verified, send error

    jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
        if (err) return res.status(403).json({status: "invalid token"})
           
        req.userID = user.userID
    }) 


    next()
}


module.exports = authenticateToken