const TABLE = "categories";
const USERS_TABLE = "users";
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable(TABLE, function (table) {
    table.increments();
    table.integer("user_id").unsigned();
    table
      .foreign("user_id")
      .references("id")
      .inTable(USERS_TABLE)
      .onDelete("CASCADE");
    table.string("name");
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
