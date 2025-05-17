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
	pool.query('select * from books')
	console.log('Connection succesful');
} catch (err) {
	console.log('Error:', err);
} 

export default pool;


