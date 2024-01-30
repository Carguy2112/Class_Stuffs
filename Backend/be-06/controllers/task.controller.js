// * IMPORTS

// * METHODS
// GET ALL TASKS
const getAllTasks = (req, res) => {
	res.send('GET ALL TASKS');
};

// GET TASK BY ID
const getTaskById = (req, res) => {
	res.send('GET TASK BY ID');
};

// CREATE TASK
const createTask = (req, res) => {
	res.send('CREATE TASK');
};

// UPDATE TASK
const updateTask = (req, res) => {
	res.send('UPDATE TASK');
};

// DELETE TASK
const deleteTask = (req, res) => {
	res.send('DELETE TASK');
};

// * EXPORTS
module.exports = {
	getAllTasks,
	getTaskById,
	createTask,
	updateTask,
	deleteTask,
};