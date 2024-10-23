const knex = require("../knex.js");

class Categories {
    constructor() {}

    static viewCategories(userId) {
        return knex("Categories")
            .select({
                id: "user_id", 
                categoryName: "name",
                createdAt: "created_at",
                updatedAt: "updated_at",
            })
            .where({ id : userId })
    }

}

module.exports = { Categories }