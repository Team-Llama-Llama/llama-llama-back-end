const TABLE = "modules";
const CATEGORIES_TABLE = "categories";
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable(TABLE, function (table) {
    table.increments("id");
    table.integer("category_id").unsigned();
    table.foreign("category_id").references("id").inTable(CATEGORIES_TABLE);
    table.string("title");
    table.text("body");
    table.string("reference_url");
    table.text("solution");
    table.timestamp("created_at");
    table.timestamp("updated_at");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable(TABLE);
};
