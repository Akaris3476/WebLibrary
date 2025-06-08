import express from 'express';
const app = express();
import proxy from 'express-http-proxy';


app.use('/static', proxy('http://localhost:1234'));
app.use('/render', proxy('http://localhost:1234'));
app.use('/', proxy('http://localhost:4321'));


app.listen(1111, () => {
    console.log('gateway is listening to port 1111')
});