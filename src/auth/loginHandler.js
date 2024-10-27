const userModel = require("../models/users.model");
const categoriesModel = require("../models/categories.model");
const bcrypt = require("bcrypt");

async function sendApiResponse(req, res) {
  const userId = req.session.user.id;
  res.send({
    userId,
  });
}

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

    // Append to request to create the session
    // Express will save this into the DB sessions
    if (isMatch) {
      req.session.user = {
        id: user.id,
        username: user.username,
      };
      return sendApiResponse(req, res);
    } else {
      res.status(401).send({ message: "Error! Password wrong." });
    }
  } catch (err) {
    return res.status(500).send({ message: "Internal server error." });
  }
}

async function logoutHandler(req, res) {
  // Session active?
  if (req.session.user) {
    // Destroy
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).send({ message: "Error while closing session" });
      }

      // Clear cookie client
      res.clearCookie("connect.sid"); // El nombre de la cookie predeterminada en express-session es 'connect.sid'

      // Confirm session closed
      return res.status(200).send({ message: "Session close!" });
    });
  } else {
    // No active sessions
    return res.send({ message: "No active session!" });
  }
}

module.exports = { loginHandler, logoutHandler };
