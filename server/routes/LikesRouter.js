const express = require("express");
const LikesRouter = express.Router();
const { ProtectRouter }=require('../controller/AuthController');
const { validateToken }= require('../middlewares/AuthMiddlewares');
const { PostLike }=require('../controller/LikesController');

// LikesRouter.use(validateToken)
// LikesRouter.route('/').get(allGetPost);

LikesRouter.use(validateToken)
LikesRouter.route('/').post(PostLike);

module.exports = LikesRouter;