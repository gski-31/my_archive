const express = require('express');

const app = express();

app.get('/', (req, res) => {
        // console.log(req);
        res.send('hola');
});

app.get('/contact', (req, res) => {
        // console.log(req);
        res.send('form here');
});

app.get('/about', (req, res) => {
        // console.log(req);
        res.send('my stuff goes here');
});

app.listen(3000, () => {
        console.log('server on 3k');
});
