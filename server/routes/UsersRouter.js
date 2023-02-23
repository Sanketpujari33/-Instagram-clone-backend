const express = require("express");
const UsersRouter = express.Router();
const { Singup, Login, ProtectRouter, ProfileInfo }=require('../controller/AuthController');

const { validateToken }= require('../middlewares/AuthMiddlewares');

UsersRouter.route('/singup').post(Singup);

UsersRouter.route('/login').post(Login);

UsersRouter.route('/profile/:id').get(ProfileInfo);

UsersRouter.use(validateToken)
UsersRouter.route('/auth').get(ProtectRouter);

module.exports = UsersRouter;