const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
    {
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
            enum: ["interview", "declined", "pending"],
            default: "pending",
        },
        createdBy: {
            type: mongoose.Types.ObjectId,
            ref: "User",
            required: [true, "please provide user"],
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Job", JobSchema);
