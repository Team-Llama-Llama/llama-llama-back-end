// Imports
const express = require("express");
const knex = require("./knex");
const cors = require("cors");
const morgan = require("morgan");
const { notImplemented } = require("./utils/fn");
// Controllers
const usersController = require("./controllers/users.controller");
const categoriesController = require("./controllers/categories.controller");
const modulesController = require("./controllers/modules.controller");
const { isValidLogin } = require("./auth/isValidLogin");

const app = express();

// Variables
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Server running");
});

// Auth routes
// This route needs to return the user_id and the categories data.
app.post("/login", isValidLogin);
// Data routes
app.get("/categories", notImplemented);
app.post("/users/:userId/categories", categoriesController.addCategory); //add a new category
app.patch("/categories/:id", categoriesController.editCategory); //edit a category name
app.delete("/categories/:id", categoriesController.deleteCategory); //delete a category

app.get("/categories/:id/modules", modulesController.viewModules); //gets all modules for that category
app.post("/categories/:id/modules", modulesController.addModule); //add a new module in category
app.patch("/modules/:id", modulesController.editModule); //edit a module content, note, or code block component
app.delete("/modules/:id", modulesController.deleteModule); //delete a module in category

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
