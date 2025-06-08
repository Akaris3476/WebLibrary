import express from 'express';
const router = express.Router();

import db from '../../models/db_lib.js';
import axios from "axios";


router.get('/', async (request, response) => {

    response.redirect('/')

});

router.get('/:bookId', async (request, response) => {

    const { bookId } = request.params;


    try {
        //finding first available chap
        const query = await db.query('SELECT chapter_id FROM book_content WHERE book_id = $1 ORDER BY chapter_id ASC', [bookId]);

        const chapterId = query.rows[0].chapter_id;
        response.redirect(`/read/${bookId}/${chapterId}`);

    } catch (error) {

        await axios.post('http://localhost:1111/render', {
            target: 'error/404.ejs',
            data: {
                error: 'No book found. Book with this ID doesn\'t exist'
            }
        })
            .then(res => {
                response.status(404).send(res.data);
            });
    }
    

});

router.get('/:bookId/:chapterId', async (request, response) => {

    let { bookId , chapterId } = request.params;
    bookId = parseInt(bookId); //if not number -> NaN
    chapterId = parseInt(chapterId);

    try {

        if ( !Number.isInteger(parseInt(bookId)) || !Number.isInteger(parseInt(chapterId)) ) { //id must not be NaN
            throw new Error('No book found. Book and chapter ID must be a number');
        }

        //find chap content
        let query = await db.query(`SELECT * FROM book_content WHERE book_id = $1 AND chapter_id = $2`, [bookId, chapterId]);

        if(!query.rows[0]) {  //book must exist
            throw new Error('No book found. Book or chapter with this ID doesn\'t exist');
        }

        const content = query.rows[0].content;


        //find a list of chap nums
        query = await db.query('SELECT chapter_id FROM book_content WHERE book_id = $1 ORDER BY chapter_id ASC', [bookId]);
        const chapters_arr = query.rows.map(obj => obj.chapter_id); 


        await axios.post('http://localhost:1111/render', {
            target: 'read.ejs',
            data: {
                content: content,
                chapters_arr: chapters_arr
                , current_chap: chapterId
            }
        })
            .then(res => {
                response.send(res.data);
            });

    } catch (error) {

        await axios.post('http://localhost:1111/render', {
            target: 'error/404.ejs',
            data: {
                error: error.message
            }
        })
            .then(res => {
                response.status(404).send(res.data);
            });
    }

});


export default router;