const knex = require("../knex.js");

const USERS_TABLE = "users";

class Users {
  constructor() {}

  static getUser(username) {
    return knex("users").where("username", "=", username).first();
  }

  static addUser(userData) {
    return knex.insert(userData).into(USERS_TABLE);
  }
}

module.exports = Users;
