var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
require('dotenv').config()

let refreshTokens =[]

router.post('/token', (req, res) => {
    const refreshToken = req.body.token

    //check if refreshToken exists
    if (refreshToken == null) return res.sendStatus(401)

    //check if list of tokens contains sent refresh token
    if (!refreshTokens.includes(refreshToken)) {
        return res.sendStatus(403)
    }

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)

        const accessToken = generateAccessToken({name: user.name})
        res.json({accessToken: accessToken})
    })
})

router.delete('/logout', (req, res) => {
    refreshTokens = refreshTokens.filter(token => token !== req.body.token)

    res.status(204)
})

router.post('/login', (req, res) => {

  //grab user info from req.bod
  const username = req.body.username
  // console.log(username)
  //
  // create payload to be in the jwt token
  const user =  { name: username }
  // console.log(user)

  //create access token with the payload (user info)
  const accessToken = generateAccessToken(user)
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
  refreshTokens.push(refreshToken)
  res.json({accessToken: accessToken, refreshToken: refreshToken})


})


function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '15s'})
}

module.exports = router;
