const express = require("express");
const app = express();
const cors = require("cors");
const usersController = require("./controllers/users.controller");
const categoriesController = require("./controllers/categories.controller");
const modulesController = require("./controllers/modules.controller");
const {
  authRequired,
  sessions,
  loginHandler,
  logoutHandler,
} = require("./auth/index");
const morgan = require("morgan");

// Config variables
const PORT = process.env.PORT || 3000;

// Middlewares
// app.use(sessions);
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Public routes
app.post("/login", loginHandler);
app.post("/logout", logoutHandler);

// // All the routes after this middleware will be protected.
// Private routes
// app.use(authRequired); // [ ] Solve this! Is not working in auth

// This is for categories
app.get("/users/:userId/categories", categoriesController.getCategories);
app.post("/users/:userId/categories", categoriesController.addCategory); //add a new category
app.patch("/categories/:id", categoriesController.editCategory); //edit a category name
app.delete("/categories/:id", categoriesController.deleteCategory); //delete a category

// This is for the modules
app.get("/categories/:categoryId/modules", modulesController.viewModules); //gets all modules for that category
app.post("/categories/:categoryId/modules", modulesController.addModule); //add a new module in category
app.patch("/modules/:id", modulesController.editModule); //edit a module content, note, or code block component
app.delete("/modules/:id", modulesController.deleteModule); //delete a module in category

// const IP = "192.168.10.79";
// app.listen(PORT, () => {
//   console.log(`Server listening on port http://${IP}:${PORT}`);
// });

app.get("/", (req, res) => {
  res.send("Hello from homepage")
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
