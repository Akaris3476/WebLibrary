import express from 'express';
const router = express.Router()

import db from '../models/db.js';



router.get('/',  async (request, response) => {

    let query =  await db.query("SElECT * from books");
    response.render('index.ejs', { books: query.rows })
    
});
 
export default router;