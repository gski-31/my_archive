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

// HARD CODE RESULTS FOR TESTING
app.get('/results', (req, res, next) => {
    request(`http://www.omdbapi.com/?t=He+Never+Died&plot=full${api_key}`, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            let myData = JSON.parse(body);
            res.send(myData.Title);
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