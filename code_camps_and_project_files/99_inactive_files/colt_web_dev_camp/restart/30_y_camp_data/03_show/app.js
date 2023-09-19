const express = require('express');
const app = express();
const helmet = require('helmet');
const request = require('request');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/yc_redo', { useNewUrlParser: true });

app.use(helmet());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');

let campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

let Campground = mongoose.model('Campground', campgroundSchema);

// let campgrounds = [
//     {name: 'salmon creek', image: 'https://loremflickr.com/g/320/240/sushi?random=1'},
//     {name: 'tuna lake', image: 'https://loremflickr.com/g/320/240/sushi?random=2'},
//     {name: 'yellowtail trail', image: 'https://loremflickr.com/g/320/240/sushi?random=3'},
//     {name: 'albacore alley', image: 'https://loremflickr.com/g/320/240/sushi?random=4'},
//     {name: 'shrimp segundo', image: 'https://loremflickr.com/g/320/240/sushi?random=5'},
//     {name: 'crab hut', image: 'https://loremflickr.com/g/320/240/sushi?random=6'}
// ];

app.get('/', (req, res, next)=>{
    res.render('landing')
});

// INDEX // SHOW ALL CG
app.get('/campgrounds', (req, res, next)=>{
    Campground.find({}, (err, all_campgrounds)=>{
        if(err){
            console.log(err)
        } else {
            res.render('index', {campgrounds: all_campgrounds})
        }
    })
    // res.render('campgrounds', {campgrounds: campgrounds})
});

// CREATE // ADD CG
app.post('/campgrounds', (req, res, next)=>{
    let name = req.body.name;
    let image = req.body.image;
    let description = req.body.description;
    let newCampground = {name: name, image: image, description: description};
    Campground.create(newCampground, (err, newCampground)=>{
        if(err){
            console.log(err)
        } else {
            res.redirect('campgrounds');
        }
    })
    // res.redirect('campgrounds', {campgrounds: campgrounds});
});

// NEW // CG CREATION FORM
app.get('/campgrounds/new', (req, res, next) => {
    res.render('new');
});

//SHOW // INFO ABOUT SELECTED CG
app.get('/campgrounds/:id', (req, res, next) => {
    // find cg with proper ID
    Campground.findById(req.params.id, (err, foundCampground)=>{
        if(err){
            console.log(err);
        } else {
    res.render('show', {campground: foundCampground});
        }
    })
    // render show template with IDed cg
    // res.render('show');
});

app.get('*', (req, res, next)=>{
    res.send('nope');
});

app.listen('3000', ()=>{
    console.log('running on 3000')
});