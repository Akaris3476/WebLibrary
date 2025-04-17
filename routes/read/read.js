import express from 'express';
const router = express.Router()

import db from '../../models/db.js';


router.get('/',  async (request, response) => {

    response.redirect('/')

});


router.get('/:id',  async (request, response) => {

    const id = parseInt(request.params.id); //if not number -> id == NaN

    try {

        if (!Number.isInteger(id)) { //id must not be NaN
            throw new Error('Invalid path. Must be a number');
        }

        let query =  await db.query(`SELECT * FROM book_content WHERE book_id = $1`, [id]);

        if(!query.rows[0]) {
            throw new Error('No book found. Book with this ID doesn\'t exist');
        }

        response.render('read.ejs', { content: query.rows[0].content});

    } catch (error) {

        response.status(400).render('read.ejs', { error: error.message});

    }

});


export default router;