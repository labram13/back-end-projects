const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
   res.json({status: 'test'})
})
module.exports = router