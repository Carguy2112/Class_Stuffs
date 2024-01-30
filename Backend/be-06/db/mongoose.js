const mongoose = require('mongoose'); // import mongoose

const connectToDB = (url) => {
	const dbConnection = mongoose.connect(url); // connect to database

	if (dbConnection) {
		console.log('Connected to database successfully!'); // log success message
	}

	return dbConnection; // return database connection
};

module.exports = connectToDB; // export connectToDB method