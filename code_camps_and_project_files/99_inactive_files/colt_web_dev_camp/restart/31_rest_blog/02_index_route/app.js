const express = require('express');
const app = express();
const mongoose = require('mongoose');

// APP CONFIG
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');


// MONGOOSE CONFIG
mongoose.connect('mongodb://localhost/rest_blog', {useNewUrlParser: true});

let blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    date: {type: Date, default: Date.now}
});

let Blog = mongoose.model('Blog', blogSchema);

// // CREATE DUMMY DATA
// Blog.create({
//         title: '2nd Two to Test',
//         image: 'https: //loremflickr.com/g/320/240/island?random=3',
//         body: 'this is some placeholder text'
// })

// RESTful ROUTES
app.get('/', (req, res, next)=>{
    res.redirect('/blogs');
})

app.get('/blogs', (req, res, next) => {
    Blog.find({}, (err, all_blogs) => {
        if (err) {
            console.log(err);
        } else {
            res.render('index', {blogs: all_blogs});
        }
    })
})









app.get('*', (req, res, next) => {
    res.send('nope :(');
})

// TESTING SERVER
app.listen('3000', (req, res, next)=>{
    console.log('running on 3k')
})