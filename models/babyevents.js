module.exports = function(sequelize, DataTypes) {
    var Event = sequelize.define("Event", {
        event_type_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        created_at: DataTypes.DATE,
        baby_id: DataTypes.INTEGER,
        account_id: DataTypes.INTEGER
    });
    
    return Event;
    
    }