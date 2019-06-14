// event_type_name = food, Bowel Movement, Sleep
// baby_id: DataTypes.INTEGER (FK)

module.exports = function(sequelize, DataTypes) {
    var Event = sequelize.define("Event", {
        event_type_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        baby_id: DataTypes.INTEGER
    });
    
    return Event;
    
    }