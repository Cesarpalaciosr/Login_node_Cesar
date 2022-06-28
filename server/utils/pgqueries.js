const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "db_users",
  password: "27137766@Pg",
  port: 5432,
});
//var numrol= null;
//'INSERT INTO persona (no_persona, ap_persona, ci_persona, sx_persona ) VALUES ($1, $2, $3,$4)'
const createPerson = (body) => {
  console.log("CREATE PERSON");
  //validar que el email no exista ya
  //const oldUser = await User.findOne({ email });
  return new Promise((resolve, reject) => {
    try {
      const { name, age, username, email, password, id_person } = body;
      pool.query(
        "INSERT INTO public.users (name, age, username, email, password, id_person) VALUES ($1, $2, $3, $4, $5, $6)",
        [name, age, username, email, password, id_person],
        (error, results) => {
          if (error) {
            console.log(error);
            return reject(error);
          }
          console.log("RESULTS", results);
          resolve(`A new person has been added added: ${name}`);
        }
      );
    } catch (error) {
      console.log("error", error);
    }
  });
};
//URl Login server-postgres
const comprobatePerson = (body) => {
  return new Promise(function (resolve, reject) {
    try {
      const { username, password } = body;
      // Poner encriptamiento de password
      //cambiar el query
      pool.query(
        "Select roles from public.users WHERE username = $1 AND password = $2",
        [username, password],
        (error, results) => {
          if (error) {
            console.error(error);
            return reject(error);
          }
          if (results.rows.length === 0) {
            reject("Credenciales Invalidas");
          } else {
            resolve(results.rows[0].roles);
          }
        }
      );
    } catch (error) {
      console.error(error);
    }
  });
};

const getPerson = () => {
  return new Promise(function (resolve, reject) {
    pool.query("SELECT * FROM users", (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results.rows);
    });
  });
};

const deletePerson = (id) => {
  return new Promise(function (resolve, reject) {
    //const id_persona  = body

    //const id = parseInt(body)
    console.log(id);
    pool.query(
      "DELETE FROM persona WHERE id_persona = $1",
      [id],
      (error, results) => {
        if (error) {
          console.log(error);
          reject(error);
        }
        resolve(`Person deleted with ID: ${id}`);
      }
    );
  });
};

const persona = {
  nombre: "Jorge",
  edad: 22,
  sexo: "desconocido",
};

module.exports = {
  getPerson,
  createPerson,
  comprobatePerson,
  deletePerson,
};

// Default.getPerson
// pgqueries.getPerson
// const pgqueries = require("./server/utils/pgqueries");
// Default --> pgqueries
