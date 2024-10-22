const express = require('express');
const recipes = require("./recipes.json");
const RecipesController = require("./controller/Recipes.controller");
const {createDbconnect} = require('./db');

// CREATE DB CONNECTION
createDbConnection();

// STEP 1: Create a API SERVER
const app = Express()
// PARSING INCOMING REQUEST BODY AS JSON
app.use(Express.json());

//SERVING STATIC FILES
app.use(Express.static('public'));
// INJECT ROUTERS
app.use("/recipes", RecipesController)
// ROUTE 1: /
app.get("/", function (request, response) {
  // return response.send("/ - Request received")
  return response.status(200).json({
   message: "Hello Folks",
   success: true
  });
});

// ROUTE 2: 
// PATH = /recipes
// METHOD = GET
app.get("/recipes", function (request, response) {
  let result = [];
  const { limit, page } = request.query;
  if(limit && page) {
      const start = Number(limit) * (Number(page) - 1) ;
      const end = Number(limit) * Number(page);
      result = recipes.data.slice(start, end);
  } else {
      result = products.data;
  }
  // return response.send("/ - Request received")
  return response.status(200).json({
   message: "recipes fetched successfully",
   success: true,
   data: result
  });
});

// ROUTE 2: 
// PATH = /recipes/{recipesId}
// METHOD = GET
app.get("/recipes/:recipesId", function (request, response) {
  // return response.send("/ - Request received"))
  const matchedrecipes = recipes.data.find((_recipes) => _recipes.id === Number(request.params.recipesId));
  if (!matchedProduct) {
      return response.status(404).json({
          message: "No recipes found",
          success: false
         });    
  } else {
      return response.status(200).json({
          message: "recipes fetched successfully",
          success: true,
          data: matchedrecipes
         });
  }
});


// ROUTE 4:
// PATH = /recipes
// METHOD = POST
API_SERVER.post("/recipes/create", function (request, response) {
  console.log("HERE", request.body);
  return response.json({
      message: "recipes created successfully!",
      success: true
  });
});



//step2:START AND LISTEN INCOMING REQUEST TO THIS SERVER
app.listen(process.env.PORT, process.env.HOSTNAME, function () {
    console.log("Server started");
    console.log(`http://${process.env.HOSTNAME}:${process.env.PORT}`)
});