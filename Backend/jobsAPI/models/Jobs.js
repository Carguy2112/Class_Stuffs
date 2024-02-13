const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide a job title"],
    },
    description: {
        type: String,
        required: [true, "Please provide a description"],
    },
    status: {
        type: String,
        default: "Pending",
    },
});

module.exports = mongoose.model("Job", JobSchema);
