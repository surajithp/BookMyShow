// Import the sequelize connection from config file 
// Import datatypes from the sequelize library

const sequalize = require('../configs/postgresqldb').sequalize;
const DataTypes = require('sequelize');

// Define the model by providing name of the table, it's columns, their datatypes and constraints.

const Movie = sequalize.define('movie', {
	id: {
		type: DataTypes.BIGINT,
		autoIncrement: true,
    	primaryKey: true
	},
	name: {
		type: DataTypes.STRING(100),
		allowNull: false
	},
	language: {
		type: DataTypes.STRING,
		allowNull: false
	},
	type: {
		type: DataTypes.STRING,
		allowNull: false
	},
	startDate: {
		type: DataTypes.DATE
	},
	range: {
		type: DataTypes.INTEGER
	}
})

const ShowTime = sequalize.define('showtime', {
	id: {
		type: DataTypes.BIGINT,
		autoIncrement: true,
    	primaryKey: true
	},
	time: {
		type: DataTypes.STRING(100),
		allowNull: false
	},
})

Movie.hasMany(ShowTime)

// Execute the sync command to run migrations 
sequalize.sync()

module.exports = Movie 