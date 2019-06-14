module.exports = function(sequelize, DataTypes) {
    var EventDetail = sequelize.define("EventDetail", {
        event_type_key: {
            type: DataTypes.INTEGER,
            allowNull: false
            
        },
        string_value: DataTypes.STRING,
        integer_value: DataTypes.INTEGER,
        detail_name: {
             type:DataTypes.STRING
        }
    });
    
    return EventDetail;
    
    }