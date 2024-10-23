//initialize below after knex file added to src directory

const knex = require("../knex.js");

class User {
    constructor() {}

    static getAll() {
        return knex.select();
    }
}

// export User;