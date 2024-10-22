// Import express to create the router and the controller to handle the routes
import { Router } from "express";
const router = Router();
import { createRecipe, getAllRecipes, getRecipeById, updateRecipe, deleteRecipe } from "../controllers/recipesController";

// Define route for creating a new recipe (POST /recipes)
router.post("/createRecipes", createRecipe);

// Define route for getting all recipes (GET /recipes)
router.get("/getAllRecipes", getAllRecipes);

// Define route for getting a single recipe by ID (GET /recipes/:id)
router.get("/getRecipeById/:id", getRecipeById);

// Define route for updating a recipe by ID (PUT /recipes/:id)
router.put("/updateRecipes/:id", updateRecipe);

// Define route for deleting a recipe by ID (DELETE /recipes/:id)
router.delete("/deleteRecipes/:id", deleteRecipe);

// Export the router to be used in app.js
export default router;