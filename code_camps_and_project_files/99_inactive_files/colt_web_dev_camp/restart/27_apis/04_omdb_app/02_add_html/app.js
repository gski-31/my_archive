const express = require('express');
const app = express();
const request = require('request');
const helmet = require('helmet');

app.use(express.urlencoded({
    extended: true
}));
app.use(express.static('public'));
app.use(helmet());

app.set('view engine', 'ejs');

const api_key = '&apikey=thewdb';

app.get('/', (req, res, next) => {
    res.render('search')
})

app.get('/results', (req, res, next) => {
    request(`http://www.omdbapi.com/?s=star+wars${api_key}`, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            let data = JSON.parse(body);
            res.render('results', {data: data});
        } else {
            console.log(error);
        }
    })
})

app.get('*', (req, res, next) => {
    res.send('nope')
})

app.listen('3000', (req, res, next) => {
    console.log('running on 3000')
})