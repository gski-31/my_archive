const express = require('express');
const app = express();
const helmet= require('helmet');

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(helmet());

app.set('view engine', 'ejs');

let stuff = ['item 1', 'item 2', 'item 3', 'item 4']

app.get('/', (req, res, next)=>{
    res.send('home');
});

app.post('/new_item', (req, res, next) => {
    stuff.push(req.body.new_item);
    res.redirect('stuff');
})

app.get('/stuff', (req, res, next) => {
    res.render('stuff', {stuff: stuff});
});

app.get('*', (req, res, next)=>{
    res.send('nope');
});

app.listen('3000', ()=>{
    console.log('listening on 3000');
});