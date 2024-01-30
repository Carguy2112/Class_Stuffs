const express = require("express"); // import express
const {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/task.controller"); // import getAllTasks method from task controller

const router = express.Router(); // create express router

// GET ALL TASKS
router.route("/").get(getAllTasks)

// GET TASK BY ID
router.route("/:id").get(getTaskById);

// CREATE TASK
router.route("/").post(createTask);

// UPDATE TASK
router.route("/:id").patch(updateTask);

// DELETE TASK
router.route("/:id").delete(deleteTask);

module.exports = router; // export router
