const usersModel = require("../models/users.model");

const addUser = async (req, res) => {
  try {
    const userData = await usersModel.addUser(req.body);
    res.send(userData);
  } catch (err) {
    console.error("User not able to be added.");
  }
};

module.exports = { addUser };
