const express = require('express')
const router = express.Router();

const testRouter = require('./controller/test.js')

router.use('/test', testRouter)


module.exports = router