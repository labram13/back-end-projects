var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
require('dotenv').config()

const authenticateToken = require('../../../middleware/auth.js')

const posts = [
  {
    username: 'Kyle',
    title: 'Post 1'
  },
  {
    username: 'Jim',
    title: 'Post 2'
  }
]

/* GET home page. */
router.get('/', authenticateToken, (req, res) => {
  console.log(req.user)
  res.json(posts.filter(post => post.username === req.user.name));
});



module.exports = router;
