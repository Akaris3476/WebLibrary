import express from 'express';
const app = express();

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import dotenv from 'dotenv';
dotenv.config({path: path.join(__dirname, '../.env')});

import indexRouter from '../routes/index.js';
import readRouter from '../routes/read/read.js';
import errorRouter from '../routes/404/404.js';
import adminRouter from '../routes/admin/admin.js';
import loginRouter from '../routes/login/login.js';


app.use('/', indexRouter);
app.use('/read', readRouter);
app.use('/admin', adminRouter);
app.use('/login', loginRouter);
app.use('/404', errorRouter);


app.use( (req,res) => {
    res.redirect('/404')
} )



app.listen(4321, () => {
    console.log('back is listening to port 4321')
});