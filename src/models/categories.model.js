const knex = require("../knex.js");

const CATEGORIES_TABLE = "categories";

function timestamp() {
    return Date.now();
}

class Categories {
    constructor() {}

    static viewCategory(userId) {
        return knex(CATEGORIES_TABLE)
            .select("*")
            .where({ user_id : userId })
    }

    static addCategory(userId, newCategory) {
        return knex(CATEGORIES_TABLE)
            .insert({
                user_id: userId,
                name: newCategory,
                created_at: timestamp(),
            })
    }

    static editCategory(categoryId, categoryEditted) {
        return knex(CATEGORIES_TABLE)
            .where({ id: categoryId })
            .update({ name: categoryEditted, updated_at: timestamp()})
    }

    static deleteCategory(categoryId) {
        return knex(CATEGORIES_TABLE)
            .where({ id: categoryId })
            .del()
    }

}

module.exports = { Categories }