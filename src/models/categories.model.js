const knex = require("../knex.js");

const CATEGORIES_TABLE = "categories";

function timestamp() {
  return new Date().toISOString();
}

class Categories {
  constructor() {}

  static viewCategory(userId) {
    return knex(CATEGORIES_TABLE).select("*").where({ user_id: userId });
  }

  // DB includes timestamp if not given
  static addCategory(userId, title) {
    return knex(CATEGORIES_TABLE).insert({
      user_id: userId,
      name: title,
    });
  }

  static editCategory(categoryId, categoryEditted) {
    return knex(CATEGORIES_TABLE)
      .where({ id: categoryId })
      .update({ name: categoryEditted, updated_at: timestamp() });
  }

  static deleteCategory(categoryId) {
    return knex(CATEGORIES_TABLE).where({ id: categoryId }).del();
  }
}

module.exports = Categories;
