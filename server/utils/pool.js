const { Pool, Client } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: "masterkey",
  database: "db_users",
  port: 5432,
});
const client = new Client({
  user: "postgres",
  host: "localhost",
  password: "masterkey",
  database: "db_users",
  port: 5432,
});

module.exports = {
  pool: pool,
  client: client,
};
