var express = require('express');
var router = express.Router();

var indexRouter = require('./controller/index.js');
var authRouter = require('./controller/auth.js')

router.use("/index", indexRouter);
router.use("/auth", authRouter);

module.exports = router;
