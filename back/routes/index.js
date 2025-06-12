import express from 'express';
const router = express.Router()
import axios from 'axios';

import serv_gateway_ip from "../models/gateway_ip.js";

import db from '../models/db_lib.js';

//debug
const users = [
    {
        id: 1,
        username: 'admin',
        password: '$2b$10$sht1vVAWUA67DaLi9Eb6K.QP/Py9eZ5FPdzD3BjvqJsRpbv3Z/jQq', // "meow"
        admin_right: true
    }
];



router.get('/',  async (request, response) => {

    let query =  await db.query("SELECT * from books;");
    await axios.post(`http://${serv_gateway_ip}:1111/render`, {
        target: 'index.ejs',
        data: {
            books: query.rows,
            // admin_right: users[0].admin_right
        }
    })
        .then(res => {
            response.send(res.data);
        });


    //fetch option
    // await fetch('http://${serv_gateway_ip}:1111/render', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         books: query.rows,
    //         admin_right: users[0].admin_right
    //     })
    // })
    //     .then(res=>res.json())
    //     .then(res=> response.send(res));

});
 
export default router;