const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'db_users',
  password: 'masterkey',
  port: 5432,
});
//'INSERT INTO persona (no_persona, ap_persona, ci_persona, sx_persona ) VALUES ($1, $2, $3,$4)'
const createPerson = (body) => {


      //validar que el email no exista ya 
      //const oldUser = await User.findOne({ email });
    return new Promise(function(resolve, reject) {
      
      const { names, age, username, email, password, id_person, role} = body
      pool.query( 'INSERT INTO public.users (name, age, username, email, password, id_person, role) VALUES ($1, $2, $3, $4, $5, $6, $7)', [names, age, username, email, password, id_person, role], (error, results) => {
        
        if (error) {
          reject(error)
        }
        resolve(`A new person has been added added: ${results.rows[0]}`)
      })
    })
  }
//URl Login server-postgres 
  const comprobatePerson = (body) => {
    return new Promise(function(resolve, reject) {
      const {username, password} = body   
      //poner encriptamiento de password
    

      //cambiar el query
      pool.query( 'Select role from public.users WHERE username = $1 AND password = $2 VALUES ($1, $2)', [username, password], (error, results) => {
        
        if (error) {
          reject(error)
        }
        resolve(`A new person has been added added: ${results.rows[0]}`)
      })
    })
  }

  

const getPerson = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM users', (error, results) => {
        if (error) {
            reject(error)
        }
        resolve(results.rows);
        })
    }) 
}

const deletePerson = (id) => {
    return new Promise(function(resolve, reject) {
     //const id_persona  = body
      
      //const id = parseInt(body)
      console.log(id)
      pool.query('DELETE FROM persona WHERE id_persona = $1', [id], (error, results) => {
        if (error) {
          console.log(error)
          reject(error)
        }
        resolve(`Person deleted with ID: ${id}`)
      })
    })
}

module.exports = {
    getPerson,
    createPerson,
    comprobatePerson,
    deletePerson,
  }