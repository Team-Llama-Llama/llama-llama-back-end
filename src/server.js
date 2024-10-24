const express = require('express');
const knex = require('./knex');
const app = express();
const cors = require("cors");
const usersController = require("./controllers/users.controller");
const categoriesController = require("./controllers/categories.controller");
const modulesController = require("./controllers/modules.controller");

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});

app.get("/", (req, res) => {
    res.send("Server running")
    });


app.post("/login", usersController.addUser) //login page where user signs up and is added
// app.get("/users/:usersId", usersController.getIndex) //index page

app.get("/categories", categoriesController.viewCategory) //gets all categories for the user 
app.post("/categories", categoriesController.addCategory) //add a new category
app.patch("/categories/:id", categoriesController.editCategory) //edit a category name
app.delete("/categories/:id", categoriesController.deleteCategory) //delete a category

app.get("/categories/:id/modules", modulesController.viewModules) //gets all modules for that category
app.post("/categories/:id/modules", modulesController.addModule) //add a new module in category
app.patch("/modules/:id", modulesController.editModule) //edit a module content, note, or code block component
app.delete("/modules/:id", modulesController.deleteModule) //delete a module in category

