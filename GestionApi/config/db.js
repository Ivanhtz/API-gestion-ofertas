const mysql = require("mysql2");

const pool = mysql.createPool({
  host: process.env.DB_HOST || "127.0.0.1",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "Padul23700",
  port: process.env.DB_PORT || 3306,
  database: process.env.DB_NAME || "quixote",
});

global.db = pool;
