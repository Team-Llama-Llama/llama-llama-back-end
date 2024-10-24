const knex = require("knex");
const knexConfig = require("../knexfile");

const env = process.env.NODE_ENV;
const config = env === "development" ? knexConfig.development : knexConfig.production

module.exports = knex(config);