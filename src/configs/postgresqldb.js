const Sequalize = require('sequelize');


// Syntax for setting up a new connection 
// Sequalize (database_name, user_name, password, {dialect: database, host: host})

const sequalize = new Sequalize('postgres://postgres:password@3.221.79.58:5432/bookmyshow') // Example for postgres


// const sequalize = new Sequalize(
// 		'instamart', 
// 		'postgres',
// 		'password',{
// 			dialect: 'postgres',
// 			host: '3.221.79.58'
// 		});

// Check the connection to database - calling authenticate method

const connectToDB = async ()=>{
	try{
		await sequalize.authenticate();
		console.log("Successfully connected to the database.");
	}
	catch(error){
		console.log(error);
	}
}


module.exports = {sequalize, connectToDB}