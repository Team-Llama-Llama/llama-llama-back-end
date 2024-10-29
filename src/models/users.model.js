const knex = require("../knex.js");
const bcrypt = require("bcrypt");

const USERS_TABLE = "users";

function hash(password) {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  return bcrypt.hashSync(password, salt);
}

class Users {
  constructor() {}

  static getUser(username) {
    return knex(USERS_TABLE).where("username", "=", username).first();
  }

  static addUser(userData) {
    return knex(USERS_TABLE)
      .insert({
        username: userData.username,
        hashed_password: hash(userData.password),
      });
  }
}

module.exports = Users;
