const { Posts, Likes } = require("../models");


module.exports.allGetPost = async function allGetPost(req, res) {
    const listOfPosts = await Posts.findAll({ include: [Likes] });
    const likedPost = await Likes.findAll({ where: { UserId: req.user.id } })

    res.json({ listOfPosts: listOfPosts, likedPost: likedPost });
};

module.exports.postPosts = async function postPosts(req, res) {
    const post = req.body;
    post.username = req.user.username;
    post.UserId = req.user.id;
    await Posts.create(post);
    res.json(post);
};

module.exports.getPost = async function getPost(req, res) {
    const id = req.params.id;
    const post = await Posts.findByPk(id);
    res.json(post);
};

module.exports.deletePost = async function deletePost(req, res) {
    const postId = req.params.postId;
    await Posts.destroy({
        where: {
            id: postId,
        },
    });
    res.json("DELETED SUCCESSFULLY");
}

module.exports.getUsreId = async function getUserId(req, res) {
    const id = req.params.id;
    const listOfPost = await Posts.findAll({
        where: { UserId: id },
        include: [Likes],
    });
    res.json(listOfPost);
};

module.exports.UpdateTitlePost=async function UpdatePost(req, res) {
    const { newTitle, id} = req.body;
    await Posts.update({title: newTitle}, {where: {id: id}});
    res.json(newTitle);
};
module.exports.UpdateTextPost=async function UpdatePost(req, res) {
    const { newPostText, id} = req.body;
    await Posts.update({postText: newPostText}, {where: {id: id}});
    res.json(newPostText);
};