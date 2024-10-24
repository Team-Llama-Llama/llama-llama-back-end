/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  const TABLE = "sessions";
  return knex.schema.createTable(TABLE, function (table) {
    table.string("sid").primary();
    table.json("sess").notNullable();
    table.timestamp("expire", { precision: 6 }).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable(TABLE);
};
