module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    Users.associate = (moduls) => {
        Users.hasMany(moduls.Likes, {
            onDelete: "cascade",
        });
        Users.hasMany(moduls.Posts, {
            onDelete: "cascade",
        });
    };
    return Users;
};