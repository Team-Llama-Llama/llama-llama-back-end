/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Autoincrementers for IDS en every table
  const autoIncrementFields = [
    "modules_id_seq",
    "categories_id_seq",
    "users_id_seq",
  ];

  // Reset to every table id to 1
  for (const value of autoIncrementFields) {
    await knex.raw("ALTER SEQUENCE public." + value + " RESTART WITH 1");
  }

  // Delete data
  await knex("modules").del();
  await knex("categories").del();
  await knex("users").del();
};
