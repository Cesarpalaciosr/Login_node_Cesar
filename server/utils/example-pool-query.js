const { pool } = require("./pool");

pool.query("SELECT NOW()", (err, res) => {
  console.log(err, res);
  pool.end();
});
