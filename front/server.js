import express from 'express';
const app = express();

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


app.set('view engine', 'ejs');
app.use( express.static(path.join(__dirname, 'public')));
app.use(express.json());


app.use('/', (req, res) => {

    res.render(
        path.join(__dirname, 'views', req.body?.target ?? 'error/404.ejs'),
        req.body?.data ?? {error: 'req.body.data is undefined'});
});

app.listen(1234, () => {
    console.log('front is listening to port 1234')
});