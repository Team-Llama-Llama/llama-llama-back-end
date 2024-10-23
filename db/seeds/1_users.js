// 001_users.js

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        { username: "john_doe", hashed_password: "hashed_password_1" },
        { username: "jane_smith", hashed_password: "hashed_password_2" },
        { username: "alice_jones", hashed_password: "hashed_password_3" },
        { username: "bob_brown", hashed_password: "hashed_password_4" },
        { username: "charlie_white", hashed_password: "hashed_password_5" },
        { username: "david_black", hashed_password: "hashed_password_6" },
        { username: "eve_green", hashed_password: "hashed_password_7" },
        { username: "frank_yellow", hashed_password: "hashed_password_8" },
        { username: "grace_blue", hashed_password: "hashed_password_9" },
        { username: "henry_red", hashed_password: "hashed_password_10" },
      ]);
    });
};
