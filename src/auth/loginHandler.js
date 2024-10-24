const userModel = require("../models/users.model");
const categoriesModel = require("../models/categories.model");
const bcrypt = require("bcrypt");

async function loginHandler(req, res, next) {
  // Is already log in?
  if (req.session.user) {
    return sendApiResponse(req, res);
  }

  // Log in
  const { username, password } = req.body;

  if (!username || typeof username !== "string") {
    return res
      .status(400)
      .send({ message: "Bad request. Username must be provided." });
  }

  if (!password || typeof password !== "string") {
    return res
      .status(400)
      .send({ message: "Bad request. Password must be provided." });
  }

  try {
    const user = await userModel.getUser(username);

    if (!user) {
      return res.status(400).send({ message: "Username not found it." });
    }

    // Validate password
    const isMatch = await bcrypt.compare(password, user.hashed_password);

    // ? Append to request to create the session
    // Express will save this into the DB sessions
    req.session.user = {
      id: user.id,
      username: user.username,
    };

    return sendApiResponse(req, res);
  } catch (err) {
    return res.status(500).send({ message: "Internal server error." });
  }
}

async function sendApiResponse(req, res) {
  const userId = req.session.user.id;
  const data = await categoriesModel.viewCategory(userId);
  res.send({
    userId,
    data,
  });
}

module.exports = loginHandler;
