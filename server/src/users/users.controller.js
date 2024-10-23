const usersModel = require("./users.model")

const getAll = async (req, res) => {
    const data = await usersModel.getAll();
    res.send(data);
}

// async index(req, res) {
//     const allTodo = await todoModel.getAll();
//     res.status(200).send(allTodo);
// },

// async add(req, res) {
//     const addTodo = await todoModel.addTodo(req.body);
//     res.status(200).send(addTodo);
// },

// async edit(req, res) {
//     const editTodo = await todoModel.editTodo(req.body.id, req.body.description, req.body.update_date)
//     res.status(200).send(editTodo)
// },

// async delete(req, res) {
//     const deleteTodo = await todoModel.deleteTodo(req.params);
//     res.status(200).send(deleteTodo)
// },