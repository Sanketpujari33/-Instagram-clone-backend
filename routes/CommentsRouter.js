const express = require("express");
const CommentsRouter = express.Router();
const { getComment ,postComment, deleteComment }=require('../controller/CommentContriller')
const { validateToken }= require('../middlewares/AuthMiddlewares')

CommentsRouter.route('/:postId').get(getComment)

CommentsRouter.use(validateToken)
CommentsRouter.route('/').post(postComment);
CommentsRouter.use(validateToken)
CommentsRouter.route('/:commentId').delete(deleteComment);

module.exports = CommentsRouter;