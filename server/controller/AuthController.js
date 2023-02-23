const { Users } = require("../models");
const bcrypt = require("bcrypt")
const { sign } = require('jsonwebtoken');

module.exports.Singup = async function Singup(req, res) {
    const { username, password } = req.body;
    bcrypt.hash(password, 10).then((hash) => {
        Users.create({
            username: username,
            password: hash,
        });
        res.json("SUCCESS");
    });
};


module.exports.Login = async function Login(req, res) {
    const { username, password } = req.body;
    const user = await Users.findOne({ where: { username: username } });
    if (!user) res.json({ error: "User Doesn't Exist" });
    bcrypt.compare(password, user.password).then(async(match) => {
        if (!match) res.json({ error: "Wrong Username and Password Combination" });
        const accessToken = sign(
            { username: user.username, id: user.id },
            "importantsecret"
        );
        res.json({token:accessToken, username: username,  id: user.id})
    })
};

module.exports.ProtectRouter=function ProtectRouter(req, res){
    res.json(req.user);
};

module.exports.ProfileInfo=async function ProfileInfo(req, res){
    const id=req.params.id;
    const profileInfo= await Users.findByPk(id, {attributes: {exclude: ["password"]},
    });
    res.json(profileInfo);
}
