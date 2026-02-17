const express = require('express')
const router = express()

router.get('/', (req, res) => {
    res.status(200).json({succuess: "test post router"})
})



module.exports = router