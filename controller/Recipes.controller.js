const RecipeModel = require('../model/Recipe.model');

const RecipesRouter = require('express').Router();

// Create a Recipe
RecipesRouter.post("/createRecipe", async function (request, response) {
    try {
        const result = await RecipeModel.create(request.body);
        return response.status(200).json({
            message: "Recipe created successfully",
            result
        })
    } catch (error) {
        return response.status(400).json({
            message: "Data is missing",
            error: error.message
        });
    }
})
// Fetches all the Recipes
RecipesRouter.get("/", async function (request, response) {
    try {
       const results = await RecipeModel.find();
       return response.status(200).json({
        message: "Recipes fetched successfully",
        data: results
       })
    } catch(error) {
        return response.status(500).json({
            message: "something went wrong",
            error: error.message
        })
    }
})

// Fetches order matches given recipeId 
RecipesRouter.get("/recipeId", function (request, response) {
    return response.status(200).json({
        message: "Recipe fetched successfully"
    })
})
 
// Update a recipe
exports.updateRecipe = async (req, res) => {
    try {
      const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!recipe) return res.status(404).json({ message: 'Recipe not found' });
      res.status(200).json(recipe);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a recipe
  exports.deleteRecipe = async (req, res) => {
    try {
      const recipe = await Recipe.findByIdAndDelete(req.params.id);
      if (!recipe) return res.status(404).json({ message: 'Recipe not found' });
      res.status(204).json();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }


module.exports = RecipesRouter;