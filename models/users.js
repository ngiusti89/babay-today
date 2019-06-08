'use strict';
module.exports = function (sequelize, DataTypes) {
    var Users = sequelize.define('Users', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: DataTypes.STRING,
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // phone: DataTypes.STRING,
        email: DataTypes.STRING,
        isAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
            classMethods: {
                associate: function (models) {
                    //we can define associations here
                }
            }
        });
    return Users;
};