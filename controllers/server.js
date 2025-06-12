import express from 'express';
const app = express();
app.use(express.urlencoded({ extended: true })); // Needed to parse POST data

import 'dotenv/config';

import indexRouter from '../routes/index.js';
import readRouter from '../routes/read/read.js';
import errorRouter from '../routes/404/404.js';
import adminRouter from '../routes/admin/admin.js';
import loginRouter from '../routes/login/login.js';
import addRouter from '../routes/add.js';



app.set('view engine', 'ejs');
app.use(express.static('public'));


app.use('/', indexRouter);
app.use('/read', readRouter);
app.use('/admin', adminRouter);
app.use('/login', loginRouter);
app.use('/404', errorRouter);
app.use('/add', addRouter)


app.use( (req,res) => res.redirect('/404') )

app.listen(1234);

export default app;