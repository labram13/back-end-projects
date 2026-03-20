const express = require('express')
const router = express.Router();
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

router.post('/', async (req, res) => {
    try {
        const {title, content, category, tags} = req.body
        console.log(title, content, category, tags)

        const post = await pool.query(
            'INSERT INTO post (title, content, category, tags) VALUES ($1, $2, $3, $4)',
            [title, content, category, tags]
        )

        res.status(200).json({status: "success posting"})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({status: "error"})
    }
})



module.exports = router