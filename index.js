// Import express, dotenv for environment variables, and other required modules
import express, { json } from "express";
import { config } from "dotenv";
import connectDB from "./config/db";
import recipeRoutes from "./routes/recipeRoutes";
import errorHandler from "./middlewares/errorHandler";

// Load environment variables from .env file
config();

// Connect to MongoDB using the connectDB function
connectDB();

// Initialize the Express application
const app = express();

// Middleware to parse JSON request bodies
app.use(json()); 

// Mount the recipe routes under the / path
app.use("/", recipeRoutes); 

// Middleware to handle errors globally
app.use(errorHandler); 

// Set the port from the environment variables or default to 5000
const PORT = process.env.PORT || 3000;

// Start the server and listen on the specified port
app.listen(PORT, () => console.log(`Server Started`));
console.log("http://localhost:3000");