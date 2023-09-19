// IMPORTS
const   express = require('express'),
        app = express(),
        mongoose = require('mongoose'),
        methodOverride = require('method-override'),
        expressSanitizer = require('express-sanitizer');

// APP USAGE
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));
app.use(expressSanitizer());

// MONGOOSE SETUP
mongoose.connect('mongodb://localhost/proj_9', {useNewUrlParser: true});

let thingSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    date: {type: Date, default: Date.now()}
});

let Thing = mongoose.model('Thing', thingSchema);

// CREATE DUMMY DATA
// Thing.create({
//     name: 'Stitch',
//     image: 'https://duckduckgo.com/i/c7f51db3.png',
//     description: "Stitch is a fictional character in Disney's Lilo & Stitch franchise. An illegally-made, genetically-engineered, extraterrestrial lifeform resembling a blue koala, he is one of the franchise's two title characters, alongside his adopter and best friend Lilo Pelekai, and its primary protagonist."
// });

// INDEX ROUTE       /blogs           GET         List all blogs
app.get('/things', (req, res, next)=>{
    Thing.find({}, (err, all_things) => {
        if(err){
            console.log(err)
        } else {
            res.render('index', {things: all_things});
        }
    });
});

app.get('/', (req, res, next)=>{
    res.redirect('/things');
});

// NEW ROUTE
app.get('/things/new', (req, res, next) => {
    res.render('new');
});

// CREATE ROUTE
app.post('/things', (req, res, next) => {
    Thing.create(req.body.thing, (err, new_thing)=>{
        if(err){
            console.log(err);
        } else {
           res.redirect('/things');
        }
    });
});

// SHOW ROUTE
app.get('/things/:id', (req, res, next) => {
    Thing.findById(req.params.id, (err, found_thing) => {
        if (err) {
            console.log(err);
        } else {
            res.render('show', {thing: found_thing});
        }
    });
});

// EDIT ROUTE
app.get('/things/:id/edit', (req, res, next) => {
    Thing.findById(req.params.id, (err, found_thing) => {
        if (err) {
            console.log(err);
        } else {
            res.render('edit', {thing: found_thing});
        }
    });
});

// UPDATE ROUTE
app.put('/things/:id', (req, res, next) => {
    Thing.findByIdAndUpdate(req.params.id, req.body.thing, (err, updated_thing) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/things/' + req.params.id);
        }
    });
});

// DESTROY ROUTE
app.delete('/things/:id', (req, res, next) => {
    Thing.findByIdAndRemove(req.params.id, (err, found_thing) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/things');
        }
    });
});

// 404 & SERVER
app.get('*', (req, res, next) => {
    res.send('404 - nope :(');
})

app.listen('3000', (req, res, next) => {
    console.log('running on 3k')
})