// Index       /blogs           GET         List all blogs
// New         /blogs/new       GET         Show new blog form
// Create      /blogs           POST        Create a new blog, then redirect somewhere
// Show        /blogs/:id       GET         Show info about one specific blog
// Edit        /blogs/:id/edit  GET         Show edit form for one blog
// Update      /blogs/:id       PUT         Update a particular blog, then redirect somewhere
// Destroy     /blogs/:id       DELETE      Delete a particular blog, then redirect somewhere

// IMPORTS
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const expressSanitizer = require('express-sanitizer');

// APP CONFIG
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));
app.use(expressSanitizer());

// MONGOOSE SETUP
mongoose.connect('mongodb://localhost/dummy_char', {useNewUrlParser: true});

let characterSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    date: {type: Date, default: Date.now()}
});

let Character = mongoose.model('Character', characterSchema);

// // CREATE DUMMY DATA
// Character.create({
//     name: 'Stitch',
//     image: 'https://duckduckgo.com/i/c7f51db3.png',
//     description: "Stitch is a fictional character in Disney's Lilo & Stitch franchise. An illegally-made, genetically-engineered, extraterrestrial lifeform resembling a blue koala, he is one of the franchise's two title characters, alongside his adopter and best friend Lilo Pelekai, and its primary protagonist.",
// });

// INDEX ROUTE
app.get('/characters', (req, res, next)=>{
    Character.find({}, (err, all_characters)=>{
        if(err){
            console.log(err)
        } else {
            res.render('index', {characters: all_characters})
        }
    })
})

// NEW ROUTE
app.get('/characters/new', (req, res, next)=>{
    res.render('new');
})

// CREATE ROUTE
app.post('/characters', (req, res, next)=>{
    req.body.character.description = req.sanitize(req.body.character.description);
    Character.create(req.body.character, (err, new_character)=>{
        if(err){
            console.log(err)
        } else {
            res.redirect('/characters');
        }
    })
})

// SHOW ROUTE
app.get('/characters/:id', (req, res, next) => {
    Character.findById(req.params.id, (err, found_character)=>{
        if(err){
            console.log(err)
        } else {
            res.render('show', {character: found_character})
        }
    })
})

// EDIT ROUTE
app.get('/characters/:id/edit', (req, res, next) => {
    Character.findById(req.params.id, (err, found_character)=>{
        if(err){
            console.log(err)
        } else {
            res.render('edit', {character: found_character})
        }
    })
})

// UPDATE ROUTE
app.put('/characters/:id/', (req, res, next) => {
    req.body.character.description = req.sanitize(req.body.character.description);
    Character.findByIdAndUpdate(req.params.id, req.body.character, (err, found_character) => {
        if (err) {
            console.log(err)
        } else {
            res.redirect('/characters/' + req.params.id);
        }
    })
})

// DESTROY ROUTE
app.delete('/characters/:id/', (req, res, next) => {
    Character.findByIdAndRemove(req.params.id, (err, found_character) => {
        if (err) {
            console.log(err)
        } else {
            res.redirect('/characters');
        }
    })
})

app.get('/', (req, res, next)=>{
    res.redirect('/characters');
})

// 404 & SERVER
app.get('*', (req, res, next) => {
    res.send('404 - nope :(');
})

app.listen('3000', (req, res, next)=>{
    console.log('running on 3k')
})