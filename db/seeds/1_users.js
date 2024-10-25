// 001_users.js

const bcrypt = require("bcrypt");

function hash(password) {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  return bcrypt.hashSync(password, salt);
}

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        { username: "brian", hashed_password: hash("pass") },
        { username: "preston", hashed_password: hash("pass") },
        { username: "michael", hashed_password: hash("pass") },
        { username: "bob_brown", hashed_password: hash("pass") },
        { username: "charlie_white", hashed_password: hash("pass") },
        { username: "david_black", hashed_password: hash("pass") },
        { username: "eve_green", hashed_password: hash("pass") },
        { username: "frank_yellow", hashed_password: hash("pass") },
        { username: "grace_blue", hashed_password: hash("pass") },
        { username: "henry_red", hashed_password: hash("pass") },
      ]);
    });
};
