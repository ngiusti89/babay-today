module.exports = function(sequelize, DataTypes) {
var Baby = sequelize.define("Baby", {
    baby_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
    baby_birthday: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            len:[1]
        }
    },
    baby_img_url: DataTypes.STRING,
    account_id: DataTypes.INTEGER,
    birthday: DataTypes.DATE,
    gender: DataTypes.STRING
    // createdAt: DataTypes.DATETIME
});

return Baby;

}