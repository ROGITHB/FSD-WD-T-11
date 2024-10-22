// Import express, dotenv for environment variables, and other required modules
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const recipeRoutes = require("./routes/recipeRoutes");
const errorHandler = require("./middlewares/errorHandler");

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB using the connectDB function
connectDB();

// Initialize the Express application
const API_SERVER = express();

// Middleware to parse JSON request bodies
API_SERVER.use(express.json()); 

// Mount the recipe routes under the / path
API_SERVER.use("/", recipeRoutes); 

// Middleware to handle errors globally
API_SERVER.use(errorHandler); 

// Set the port from the environment variables or default to 5000
const PORT = process.env.PORT || 3000;

// Start the server and listen on the specified port
API_SERVER.listen(PORT, () => console.log(`Server Started`));
console.log(`http://localhost:3000`);