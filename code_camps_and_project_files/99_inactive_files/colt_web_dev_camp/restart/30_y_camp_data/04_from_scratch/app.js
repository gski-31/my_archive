const express = require('express');
const app = express();
const mongoose = require('mongoose');
const helmet = require('helmet');

app.use(express.urlencoded({
    extended: true
}));
app.use(express.static('public'));

app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/04_from_scratch', {
    useNewUrlParser: true
});

// SCEHMA
let sushiSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

// MODEL
let Sushi = mongoose.model('Sushi', sushiSchema);

// LANDING
app.get('/', (req, res, next) => {
    res.render('index');
});

// INDEX
app.get('/sushi', (req, res, next) => {
    Sushi.find({}, (err, allSushi)=>{
        if(err){
            console.log(err);
        } else {
            res.render('index', {allSushi: allSushi});
        }
    })
    });

// NEW
app.get('/sushi/new', (req, res, next) => {
    res.render('new');
});

// CREATE
app.post('/sushi', (req, res, next) => {
    let name = req.body.name;
    let image = req.body.image;
    let description = req.body.description;
    let newSushi = {
        name: name,
        image: image,
        description: description
    };
    Sushi.create(newSushi, (err, newSushi) => {
        if (err) {
            console.log(err)
        } else {
            res.redirect('sushi');
        }
    })
});

// SHOW
app.get('/sushi/:id', (req, res, next) => {
    Sushi.findById(req.params.id, (err, foundSushi) => {
        if (err) {
            console.log(err)
        } else {
            res.render('show', {
                foundSushi: foundSushi
            });
        }
    })
});

app.get('*', (req, res, next) => {
    res.send('NoPe');
});

app.listen('3000', (req, res, next) => {
    console.log('all good on 3k')
})