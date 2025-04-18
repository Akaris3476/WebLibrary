import express from 'express';
const router = express.Router();

import db from '../../models/db.js';


router.get('/', async (request, response) => {

    response.redirect('/')

});

router.get('/:bookId', async (request, response) => {

    const { bookId } = request.params;

    //finding first available chap
    const query = await db.query('SELECT chapter_id FROM book_content WHERE book_id = $1 ORDER BY chapter_id ASC', [bookId]);

    try {

        const chapterId = query.rows[0].chapter_id;
        response.redirect(`/read/${bookId}/${chapterId}`);

    } catch (error) {
        response.status(404).render('error/404.ejs', { error: 'No book found. Book with this ID doesn\'t exist'});
    }
    

});

router.get('/:bookId/:chapterId', async (request, response, next) => {

    const { bookId, chapterId } = request.params; //if not number -> id == NaN
    console.log(bookId, chapterId)

    try {

        let query = await db.query(`SELECT * FROM book_content WHERE book_id = $1 AND chapter_id = $2`, [bookId, chapterId]);

        if(!query.rows[0]) {
            throw new Error('No book found. Book or chapter with this ID doesn\'t exist');
        }

        response.render('read.ejs', { content: query.rows[0].content });

    } catch (error) {

        response.status(404).render('error/404.ejs', { error: error.message });

    }

});


export default router;