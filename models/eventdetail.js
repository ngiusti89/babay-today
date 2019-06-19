// event model has
// event_type_key = Integer
// string_value = {formula, breastmilk}, {dry, wet, dirty}, {null}
// integer_value = { {#oz}, {null}}, { null }, { null }
// time_created = { time created }, {time created}, {time created}
// timer_started_bool = { {null}, {ture or false}}, {null}, {ture or false}
// time_ended = { {null, end time }}, {null}, {end time}

module.exports = function (sequelize, DataTypes) {
    var EventDetail = sequelize.define("EventDetail", {
        event_type_key: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        string_value: DataTypes.STRING,
        integer_value: DataTypes.INTEGER,
        time_created: DataTypes.DATE,
        time_started_bool: DataTypes.BOOLEAN,
        time_ended: DataTypes.DATE,
        detail_name: {
            type: DataTypes.STRING
        }
    });

    EventDetail.associate = function(models) {
        
        EventDetail.belongsTo(models.Event, {
          foreignKey: "event_type_key"
        });
      };
    return EventDetail;
}