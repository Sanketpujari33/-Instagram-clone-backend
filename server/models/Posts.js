module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define("Posts", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postText: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    Posts.associate = (moduls) => {
        Posts.hasMany(moduls.Comments, {
            onDelete: "cascade",
        });
        Posts.hasMany(moduls.Likes, {
            onDelete: "cascade",
        });
    };
    return Posts;
};