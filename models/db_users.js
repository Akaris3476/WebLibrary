import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    port: 3476,
    database: 'Lib_users'
})

try {
    pool.query('select * from books')
    console.log('Connection succesful');
} catch (err) {
    console.log('Error:', err);
} 

export default pool;


