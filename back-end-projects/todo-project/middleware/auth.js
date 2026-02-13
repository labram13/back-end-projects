const jwt = require('jsonwebtoken')
require('dotenv').config()

function authenticateToken(req, res, next) {
    const token = req.cookies.token;
    console.log(token)

    if (!token) return res.status(401).json({status: "token does not exist"})

    jwt.verify(token, process.env.ACCESS_TOKEN, (err, userID) => {
        if (err) return res.status(403).json({message: "token not valid"})

        //get userID from token and save it in backend
        req.userID = userID
        // console.log(req.userID)

        next()
    })
}

module.exports = authenticateToken