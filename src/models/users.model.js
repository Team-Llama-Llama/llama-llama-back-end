//initialize below after knex file added to src directory

const knex = require("../knex.js");

class User {
    constructor() {}

    static addUser(userData) {
        return knex
            .insert(userData)
            .into("Users")
    }

}

module.exports = { User }