const { Model, DataTypes, Sequelize } = require("sequelize");

class Traveler extends Model {}
Traveler.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
		},
		email: {
			type: DataTypes.STRING,
		},
	},
	{ sequelize, modelName: "travelers" }
);

module.exports.Traveler = Traveler;
