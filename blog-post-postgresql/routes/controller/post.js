const express = require('express')
const router = express();
const pool = require('../../config/db')

router.get('/', async (req, res) => {
    try {

        const posts = await pool.query('select * from post')
        res.json({status: "hit /post", posts: posts.rows})
    } catch (error) {
        console.log(error)
        res.status(500).json({status: error})
    }

})



module.exports = router