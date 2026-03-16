const express = require('express')
const router = express()
const postRouter = require('./controller/post')

router.use('/posts', postRouter);




module.exports = router;