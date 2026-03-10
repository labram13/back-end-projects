const express = require('express')
const router = express()
const postRouter = require('./controller/post')

router.use('/post', postRouter)




module.exports = router