const express = require("express");
const app = express();
const tasks = require("./routes/task.routes");
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");
const connectDB = require("./db/connect");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

// * MIDDLEWARE
app.use(express.static("./public"));
app.use(express.json());

// * ROUTES
app.use("/api/v1/tasks", tasks);

app.use(notFound);
app.use(errorHandler);

const start = async () => {
    try {
        await connectDB(process.env.mongo_url);
        app.listen(PORT, console.log(`Server is listening on port ${PORT}`));
    } catch (err) {
        console.log(err);
    }
};

start();
