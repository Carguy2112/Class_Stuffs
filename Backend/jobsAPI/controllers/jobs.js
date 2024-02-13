const Jobs = require("../models/Jobs");
const { StatusCodes } = require("http-status-codes");

const getAllJobs = async (req, res) => {
    res.send("get all jobs");
};
const getJob = async (req, res) => {
    res.send("get single job");
};
const createJob = async (req, res) => {
    const job = await Jobs.create(req.body);
    res.status(StatusCodes.CREATED).json({
        job: {
            title: job.title,
            description: job.description,
            status: job.status,
        },
    });
    // res.send(req.body);
};
const updateJob = async (req, res) => {
    res.send("update job");
};
const deleteJob = async (req, res) => {
    res.send("delete job");
};

module.exports = {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob,
};
