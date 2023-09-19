const express = require('express');
const app = express();
const helmet = require('helmet');
const request = require('request');

app.use(helmet());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');

let campgrounds = [
    {name: 'salmon creek', image: 'https://loremflickr.com/g/320/240/sushi?random=1'},
    {name: 'tuna lake', image: 'https://loremflickr.com/g/320/240/sushi?random=2'},
    {name: 'yellowtail trail', image: 'https://loremflickr.com/g/320/240/sushi?random=3'},
    {name: 'albacore alley', image: 'https://loremflickr.com/g/320/240/sushi?random=4'},
    {name: 'shrimp segundo', image: 'https://loremflickr.com/g/320/240/sushi?random=5'},
    {name: 'crab hut', image: 'https://loremflickr.com/g/320/240/sushi?random=6'}
];

app.get('/', (req, res, next)=>{
    res.render('landing')
});

app.get('/campgrounds', (req, res, next)=>{
    res.render('campgrounds', {campgrounds: campgrounds})
});

app.get('/campgrounds/new', (req, res, next)=>{
    res.render('new');
});

app.post('/campgrounds', (req, res, next)=>{
    let name = req.body.name;
    let image = req.body.image;
    campgrounds.push({name: name, image: image})
    res.redirect('campgrounds', {campgrounds: campgrounds});
});

app.get('*', (req, res, next)=>{
    res.send('nope');
});

app.listen('3000', ()=>{
    console.log('running on 3000')
});