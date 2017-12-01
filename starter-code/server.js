'use strict';

const express = require('express');
const app = express();

app.use(express.static('./public'));

const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;

app.post('/articles', bodyParser, (request, response) => {
    console.log(request.body);
    response.send('Record posted to server!!');
});

app.get('/new', (request, response) => {
    response.sendFile('./public/new.html', {root: '.'});
});

app.get('/home', (request, response) => {
    response.sendFile('public/index.html', {root: '.'});
});

app.use((req, res, next) => {
    res.status(404).send('Error 404: NOT FOUND');
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
