const express = require('express')
const router = express()

const postRouter = require('./controller/post')

// test route

// router.get('/', (req, res) => {
//     console.log("test api route")
//     res.json({status: "test1"})
// })

router.use('/post', postRouter)




module.exports = router