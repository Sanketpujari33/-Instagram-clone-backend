const { Comments } = require("../models");

module.exports.getComment = async function getComment(req, res) {
    const postId = req.params.postId;
    const comments = await Comments.findAll({ where: { postId: postId } });
    res.json(comments);
};

module.exports.postComment = async function postComment(req, res) {
    const comment = req.body;
    const username = req.user.username;
    comment.username = username;
    await Comments.create(comment);
    res.json(comment);
};

module.exports.deleteComment=async function deleteComment(req, res){
    const commentId = req.params.commentId;

    await Comments.destroy({
        where: {
            id: commentId,
        },
    });
    res.json("DELETED SUCCESSFULLY");
}