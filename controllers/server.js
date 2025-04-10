import express from 'express';
const app = express();
import indexRouter from '../routes/index.js';
import readRouter from '../routes/read/read.js';


app.use('/', indexRouter);
app.use('/read', readRouter);

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.listen(1234);

export default app;