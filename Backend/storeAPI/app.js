require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const productsRouter = require("./routes/products");
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");

const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {
    res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>');
});

app.use("/api/v1/products", productsRouter);

// products route
app.use(notFound);
app.use(errorHandler);

const start = async () => {
    try {
        await connectDB(process.env.mongo_url);
        app.listen(PORT, console.log(`server is listening to port ${PORT}`));
    } catch (error) {
        console.log(error);
    }
};

start();
