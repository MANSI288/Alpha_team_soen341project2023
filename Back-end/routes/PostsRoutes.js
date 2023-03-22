const express = require('express')
const router_Post = express.Router()

const postController = require('./../Controller/PostsController')

//routes for possible requests

router_Post
    .route('/')
    .get(postController.getAllPosts) //done
    .delete(postController.deleteAllPosts) //done

router_Post  
    .route('/:id')
    .patch(postController.applyPost) //Done

module.exports = router_Post