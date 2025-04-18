import express from 'express';
const app = express();

import indexRouter from '../routes/index.js';
import readRouter from '../routes/read/read.js';
import errorRouter from '../routes/404/404.js';


app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/read', readRouter);
app.use('/404', errorRouter);

app.use( (req,res) => res.redirect('/404') )

app.listen(1234);

export default app;