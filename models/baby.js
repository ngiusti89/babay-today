module.exports = function(sequelize, DataTypes) {
var Baby = sequelize.define("Baby", {
    baby_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
    baby_img_url: DataTypes.STRING,
    account_id: DataTypes.STRING,
});

return Baby;

}