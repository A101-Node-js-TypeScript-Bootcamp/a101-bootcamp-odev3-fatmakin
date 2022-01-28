const express = require('express')
let router = express.Router();
const postsEndpoint = require('./posts/posts')

router.use('/posts',postsEndpoint)  //localhost:3000/api/posts
module.exports = router;