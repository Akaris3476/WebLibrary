import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	port: 5432,
	database: 'Library'
})

try {
	pool.query('select * from books')
	console.log('Connection succesful');
} catch (err) {
	console.log('Error:', err);
} 

export default pool;


