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

router.put('/:id', async (req, res) =>{

    try {
        const {title, content, category, tags} = req.body
        const post_id = parseInt(req.params.id)
        console.log(post_id)
        console.log(title)

        const post = await pool.query(
           `UPDATE post
            SET
            title = COALESCE($1, title),
            content = COALESCE($2, content),
            category = COALESCE($3, category),
            tags = COALESCE($4, tags),
            updated_at = NOW()
            WHERE post_id = $5
            RETURNING *`,
            [title, content, category, tags, post_id]
        )

        res.status(200).json({status: "success updating post"})
    } catch (error) {
        console.log(error)
        res.status(500).json({status: "error"})
    }
})

router.delete('/:id', async (req, res) => {
    const post_id = req.params.id

    try {

        const post = await pool.query(
            `
            DELETE FROM post
            WHERE post_id = $1
            RETURNING *
            `,
            [post_id]
        )
        if (post.rowCount === 0) {
            res.status(404).json({status: "post not found"})
        }

        res.status(200).json({status: "successfully deleted post"})

        
    } catch (error) {
        console.log(error)
        res.status(500).json({status: "error"})
    }
})



module.exports = router