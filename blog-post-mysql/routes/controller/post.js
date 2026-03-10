const express = require('express')
const router = express()


router.get('/', (req, res) => {
    res.status(200).json({status: 'successful'})
})


module.exports = router