import { Sequelize } from "sequelize";

const sequalize = new Sequelize('postgres://postgres:password@3.221.79.58:5432/bookmyshow') // Example for postgres

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
