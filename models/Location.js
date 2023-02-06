const { Model, DataTypes, Sequelize } = require("sequelize");

class Location extends Model {}
Location.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
		},
	},
	{ sequelize, modelName: "locations" }
);

module.exports.Location = Location;
