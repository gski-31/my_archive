// IMPORTS
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');

// APP CONFIG
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));


// MONGOOSE CONFIG
mongoose.connect('mongodb://localhost/rest_blog_v4', {useNewUrlParser: true});

let blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    date: {type: Date, default: Date.now()}
});

let Blog = mongoose.model('Blog', blogSchema);

// // CREATE DUMMY DATA
// Blog.create({
//         title: '3rd Test Item',
//         image: 'https://loremflickr.com/g/320/240/books?random=5',
//         body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
// })

// ----------------------------- >
// RESTFUL ROUTES
// ----------------------------- >

// INDEX REDIRECT
app.get('/', (req, res, next)=>{
    res.redirect('/blogs');
})

// INDEX ROUTE
app.get('/blogs', (req, res, next) => {
    Blog.find({}, (err, allBlogs)=>{
        if(err){
            console.log(err);
        } else {
            res.render('index', {blogs: allBlogs})
        }
    })
})

// NEW ROUTE
app.get('/blogs/new', (req, res, next) => {
    res.render('new');
})

// CREATE ROUTE
app.post('/blogs', (req, res, next) => {
    Blog.create(req.body.blog, (err, newBlog)=>{
        if(err){
            console.log(err)
        } else {
            res.redirect('/blogs')
        }
    })
})

// SHOW ROUTE
app.get('/blogs/:id', (req, res, next) => {
    Blog.findById(req.params.id, (err, foundBlog)=>{
        if(err){
            console.log(err)
        } else {
            res.render('show', {blog: foundBlog})
        }
    })
})

// EDIT ROUTE
app.get('/blogs/:id/edit', (req, res, next) => {
    Blog.findById(req.params.id, (err, foundBlog)=>{
        if(err){
            console.log(err)
        } else {
            res.render('edit', {blog: foundBlog})
        }
    })
})

// UPDATE ROUTE
app.put('/blogs/:id/', (req, res, next) => {
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, (err, foundBlog) => {
        if (err) {
            console.log(err)
        } else {
            res.redirect('/blogs/' + req.params.id);
        }
    })
})

// DELETE/DESTROY ROUTE
app.delete('/blogs/:id/', (req, res, next) => {
    Blog.findByIdAndRemove(req.params.id, (err)=>{
        if(err){
            console.log(err)
        } else {
            res.redirect('/blogs')
        }
    })
})

// ----------------------------- >
// 404 & SERVER
// ----------------------------- >

// FALL BACK
app.get('*', (req, res, next) => {
    res.send('nope :(');
})

// TESTING SERVER
app.listen('3000', (req, res, next)=>{
    console.log('running on 3k')
})