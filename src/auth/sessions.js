// Auth
const knex = require("../knex");
const session = require("express-session");
const { ConnectSessionKnexStore } = require("connect-session-knex");

const store = new ConnectSessionKnexStore({
  knex: knex,
  tablename: "sessions", // Nombre de la tabla donde se almacenan las sesiones
  sidfieldname: "sid", // Campo que contiene el ID de la sesión
  createtable: false, // Crea la tabla si no existe
  clearInterval: 60000, // Intervalo para limpiar sesiones expiradas
});

module.exports = session({
  secret: "cc_llama_llama",
  resave: false,
  saveUninitialized: false,
  store: store,
  cookie: { 
    secure: process.env.NODE_ENV === "production" ? true : false, 
    httpOnly: true,
    maxAge: 3600000,
    domain: "llama-llama-lms.onrender.com"
  },
});
