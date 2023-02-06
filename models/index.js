const sequelize = require("sequelize");
const { Location } = require("./Location");
const { Traveller } = require("./Traveller");
const { Trip } = require("./Trip");

Location.belongsToMany(Trip, { through: "LocationTripJoins" });
Trip.belongsToMany(Location, { through: "LocationTripJoins" });

Traveller.belongsToMany(Trip, { through: "TravellerTripJoins" });
Trip.belongsToMany(Traveller, { through: "TravellerTripJoins" });

module.exports = { Location, Traveller, Trip };
