const express = require("express");
const app = express();
const cors = require("cors");
const usersController = require("./controllers/users.controller");
const categoriesController = require("./controllers/categories.controller");
const modulesController = require("./controllers/modules.controller");
const { authRequired, sessions, loginHandler } = require("./auth/index");

// Config variables
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(sessions);
app.use(express.json());
app.use(cors());

// Public routes
app.post("/login", loginHandler);

// // All the routes after this middleware will be protected.
// Private routes
app.use(authRequired);

// app.post("/login", usersController.addUser); //login page where user signs up and is added

app.get("/categories", categoriesController.viewCategories); //gets all categories for the user
app.post("/categories", categoriesController.addCategory); //add a new category
app.patch("/categories/:id", categoriesController.editCategory); //edit a category name
app.delete("/categories/:id", categoriesController.deleteCategory); //delete a category

app.get("/categories/:id/modules", modulesController.viewModules); //gets all modules for that category
app.post("/categories/:id/modules", modulesController.addModule); //add a new module in category
app.patch("/modules/:id", modulesController.editModule); //edit a module content, note, or code block component
app.delete("/modules/:id", modulesController.deleteModule); //delete a module in category

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
