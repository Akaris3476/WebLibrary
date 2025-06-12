import express from 'express';
const app = express();
import proxy from 'express-http-proxy';


let serv_front_ip = process.env.serv_front || "localhost";
let serv_back_ip = process.env.serv_back || "localhost";

app.use('/static', proxy(`http://${serv_front_ip}:1234`));
app.use('/render', proxy(`http://${serv_front_ip}:1234`));
app.use('/', proxy(`http://${serv_back_ip}:4321`));


app.listen(1111, () => {
    console.log('gateway is listening to port 1111')
});