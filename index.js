const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db');
const recipeRoutes = require('./routes/recipesRoutes');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
connectDB();

app.use(bodyParser.json());
app.use('/api/recipes', recipeRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
