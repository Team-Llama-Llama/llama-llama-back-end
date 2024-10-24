const authRequired = require("./authRequired");
const sessions = require("./sessions");
const { loginHandler, logoutHandler } = require("./loginHandler");

module.exports = {
  authRequired,
  sessions,
  loginHandler,
  logoutHandler,
};
