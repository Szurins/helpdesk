const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const apiRouter = require("./router/api");
const tokenRouter = require("./router/token");
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
  credentials: true,
};
const DATABASE_URL = process.env.DATABASE_URL;

// Database Connection
mongoose.connect(DATABASE_URL);
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to database"));

// Using Middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(require("cookie-parser")());

// Handling Routes
app.use("/api", apiRouter);
app.use("/auth", tokenRouter);

// Starting Server
app.listen(8000, () => {
  console.log("Server listening on port 8000");
});
