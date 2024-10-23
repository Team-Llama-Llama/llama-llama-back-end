const usersModel = require("../users/users.model")

const addUser = async (req, res) => {
    try {
        const userData = await usersModel.addUser(req.body);
    res.send(userData);
    } catch(err) {
        console.error("User not able to be added.")
    } 
}

const getIndex = async (req, res) => {
    try {
        const userId = req.params.id
        const userIndex = await usersModel.getUserFromIndex(userId);
        res.send(userIndex)
    } catch(err) {
        console.error("Not able to get user data from index")
    }
}

module.exports = { addUser, getIndex }