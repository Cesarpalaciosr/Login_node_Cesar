const { Pool, Client } = require('pg')
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'db_users',
    password: 'masterkey',
    port: 5432,
})

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'db_users',
    password: 'masterkey',
    port: 5432,
})

function instance() {
    const pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'db_users',
        password: 'masterkey',
        port: 5432,
    })
    return pool;
}

export default pool;