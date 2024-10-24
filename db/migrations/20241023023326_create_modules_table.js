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
    table
      .foreign("category_id")
      .references("id")
      .inTable(CATEGORIES_TABLE)
      .onDelete("CASCADE");
    table.string("title").defaultTo("");
    table.text("body").defaultTo("");
    table.string("reference_url").defaultTo("");
    table.text("solution").defaultTo("");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable(TABLE);
};
