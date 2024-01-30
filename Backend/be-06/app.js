// * IMPORTS
const express = require('express'); // import express
const { 
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
 } = require('./controllers/task.controller.js');
const app = express(); // create express app
const connectDB = require("./db/mongoose");
require('dotenv').config(); // import dotenv and configure it

// * CONFIG
const PORT = 5000; // port number
const SERVER_URL = `http://localhost:${PORT}`; // server url

// * MIDDLEWARE
app.use(express.json()); // parse json data

// * ROUTES
app.use('/api/v1/tasks', require('./routes/task.routes.js')); // use task routes


// * LISTEN
const start = async () => {
	try {
		await connectDB(process.env.MONGODB_URL); // connect to database

		// listen to port only if database connection is successful
		app.listen(PORT, () => {
			console.log(`Server is running at: ${SERVER_URL}`);
		});
	} catch (err) {
		console.log(err); // log error
	}
};

start();