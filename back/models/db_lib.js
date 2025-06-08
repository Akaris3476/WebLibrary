import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
	user: process.env.POSTGRES_USER ?? 'postgres', 
	host: process.env.psql_lib_host ?? 'localhost', 
	port: 5432,
	database: 'Library',
	password: process.env.POSTGRES_PASSWORD ?? ''
})


try {
	await pool.query('select * from books')
	console.log('Connection successful');
} catch (err) {
	console.log('Error:', err);
} 

export default pool;


