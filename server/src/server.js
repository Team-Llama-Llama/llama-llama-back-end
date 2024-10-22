const express = require('express');
const knex = require('./knex');
const app = express();
const cors = require("cors");
const usersController = require("./users/users.controller");
const pathsController = require("./paths/paths.controller");
const modulesController = require("./modules/modules.controller");

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});

app.get("/", (req, res) => {
    res.send("Server running")
    });


app.post("/users", usersController.add) //login page where user signs up and is added
app.get("/users/:id", usersController.get) //index page

app.post("/users/:id/paths", pathsController.add) //add a new path
app.delete("/users/:id/paths/:id", pathsController.delete) //delete a path
app.patch("/users/:id/paths/:id", pathsController.edit) //edit a path name

app.post("/users/:id/paths/:id/modules", modulesController.add) //add a new module in path
app.delete("/users/:id/paths/:id/modules", modulesController.delete) //delete a module in path
app.patch("/users/:id/paths/:id/modules/:id", modulesController.edit) //edit a module content, note, or code block component
