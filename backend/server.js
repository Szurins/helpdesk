const express = require("express")
const app = express()
const mongoose = require("mongoose")
require("dotenv").config()
const apiRouter = require("./router/api")
const tokenRouter = require("./router/token")
const jwt = require("jsonwebtoken")

const DATABASE_URL = process.env.DATABASE_URL

// Database Connection
mongoose.connect(DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connected to database'))

// Using Middleware
app.use(express.json())


// Handling Routes
app.use("/api", apiRouter)
app.use("/token", tokenRouter)


// Starting Server
app.listen(3000, () => {
    console.log("Server listening on port 3000")
})