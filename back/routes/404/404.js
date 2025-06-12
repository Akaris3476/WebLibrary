import express from 'express';
import axios from "axios";
const router = express.Router();
import serv_gateway_ip from "../../models/gateway_ip.js";

router.get('/', async (request,response) => {

    await axios.post(`http://${serv_gateway_ip}:1111/render`, {
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