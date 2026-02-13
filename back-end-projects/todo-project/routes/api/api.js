var express = require('express')
var router = express.Router();

var authRouter = require('./controller/auth.js')
var todoRouter = require('./controller/todo.js')

router.use('/auth', authRouter) 
router.use('/todos', todoRouter)

module.exports = router