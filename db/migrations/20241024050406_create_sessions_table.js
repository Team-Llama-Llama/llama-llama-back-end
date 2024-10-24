const TABLE = "sessions";

exports.up = function (knex) {
  return knex.schema.createTable(TABLE, function (table) {
    table.string("sid", 255).notNullable().primary(); // 'character varying(255)', primary key
    table.json("sess").notNullable(); // 'json' column for session data
    table.timestamp("expired", { useTz: true }).notNullable(); // 'timestamp with time zone'

    table.index(["expired"], "idx_sessions_expired"); // Optional: Index on 'expired' column
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(TABLE);
};
