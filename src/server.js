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


app.post("/users", usersController.addUser) //login page where user signs up and is added
// app.get("/users/:usersId", usersController.getIndex) //index page

app.get("users/:usersId/categories") //gets all categories for the user 
app.post("/users/:usersId/categories", categoriesController.add) //add a new category
app.delete("/users/:usersId/categories/:categoriesId", categoriesController.delete) //delete a category
app.patch("/users/:usersId/categories/:categoriesId", categoriesController.edit) //edit a category name

app.get("users/:usersId/categories/:categoriesId/modules") //gets all modules for that category
app.post("/users/:usersId/categories/:categoriesId/modules", modulesController.add) //add a new module in category
app.delete("/users/:usersId/categories/:categoriesId/modules/:modulesId", modulesController.delete) //delete a module in category
app.patch("/users/:usersId/categories/:categoriesId/modules/:modulesId", modulesController.edit) //edit a module content, note, or code block component

