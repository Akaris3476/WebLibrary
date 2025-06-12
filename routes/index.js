import express from 'express';
const router = express.Router()

import db from '../models/db_lib.js';

//delete
const users = [
    {
        id: 1,
        username: 'admin',
        password: '$2b$10$sht1vVAWUA67DaLi9Eb6K.QP/Py9eZ5FPdzD3BjvqJsRpbv3Z/jQq', // "meow"
        admin_right: true
    }
];



router.get('/',  async (request, response) => {

    let query =  await db.query("SELECT * from books");
    response.render('index.ejs', { books: query.rows , admin_right: users[0].admin_right})
    
});

 
export default router;