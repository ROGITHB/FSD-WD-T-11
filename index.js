const express = require('express');
const {createDbconnect} = require('./db');





const app = express();
connectDB();

app.use(bodyParser.json());
app.use('/api/recipes', recipeRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
