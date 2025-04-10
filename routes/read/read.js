import express from 'express';
const router = express.Router()

import db from '../../models/db.js';


router.get('/',  async (request, response) => {

    //here could be smth else
    let query =  await db.query("SElECT * FROM book_content")
    response.render('read.ejs', { book: query.rows[0], err: null });

});

router.get('/:id',  async (request, response) => {

    const id = request.params.id;
    let query =  await db.query(`SElECT * FROM book_content WHERE book_id = ${id}`);

    if(!query.rows[0]) {
        let book = {error: 'No book found. Book with this ID doesn\'t exist'};
        response.status(500).render('read.ejs', { book });
    } else {
        response.render('read.ejs', { book: query.rows[0], err: null });
    }

    

});


export default router;