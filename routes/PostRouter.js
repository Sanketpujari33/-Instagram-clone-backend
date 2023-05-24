const express = require("express");
const PostRouter = express.Router();
const {allGetPost, getPost, postPosts, deletePost, getUsreId, UpdateTitlePost, UpdateTextPost}=require('../controller/PostController')
const { validateToken }= require('../middlewares/AuthMiddlewares');

PostRouter.route('/byUserId/:id').get(getUsreId);

PostRouter.use(validateToken)
PostRouter.route('/title').put(UpdateTitlePost);

PostRouter.use(validateToken)
PostRouter.route('/postText').put(UpdateTextPost);

PostRouter.use(validateToken)
PostRouter.route('/byId/:id').get(getPost);

PostRouter.use(validateToken)
PostRouter.route('/').post(postPosts);

PostRouter.use(validateToken)
PostRouter.route('/').get(allGetPost);

PostRouter.use(validateToken)
PostRouter.route('/:postId').delete(deletePost);

module.exports = PostRouter;