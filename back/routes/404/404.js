import express from 'express';
import axios from "axios";
const router = express.Router();

router.get('/', async (request,response) => {

    await axios.post('http://localhost:1111/render', {
        target: 'error/404.ejs',
        data: {
            error: 'Unknown URL'
        }
    })
        .then(res => {
            response.status(404).send(res.data);
        });

});

export default router;