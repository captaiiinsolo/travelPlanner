const { Model, DataTypes, Sequelize } = require("sequelize");

class Trip extends Model {}
Trip.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		trip_budget: {
			type: DataTypes.DECIMAL,
		},
		traveller_ammount: {
			type: DataTypes.INTEGER,
		},
	},
	{ sequelize, modelName: "trips" }
);

module.exports.Trip = Trip;
