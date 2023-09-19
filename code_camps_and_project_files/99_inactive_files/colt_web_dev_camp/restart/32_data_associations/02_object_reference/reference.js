const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/32_2_1_reference', {useNewUrlParser: true});

// ---- SCHEMAS AND MODELS ---------------------- -->

// POST => title, content
let postSchema = new mongoose.Schema({
    title: String,
    content: String
});

let Post = mongoose.model('Post', postSchema);

// USER => email, name
let userSchema = new mongoose.Schema({
    email: String,
    name: String,
    // SETUP REFERENCE SCHEMA
    posts: [{
        type: mongoose.Schema.Types.ObjectId, // Array of Mongoose Object IDs belonging to a post
        ref: 'Post'
    }]
});

let User = mongoose.model('User', userSchema);

// ---- CREATE & TEST ---------------------- -->

// - CREATE TEST USER -
// User.create({
//     email: 'nope@nada.net',
//     name: 'Nope'
// });

// - CREATE TEST POST -
// Post.create({
//     title: 'uno',
//     content: 'stuff goes here'
// }, (err, post)=>{
//     console.log(post);
// });

// - CREATE 2ND TEST POST AND ADD TO TEST USER -
// Post.create({
//     title: 'dos',
//     content: 'more stuff goes here'
// }, (err, post)=>{
//     User.findOne({email: 'nope@nada.net'}, (err, found_user)=>{
//         if(err){
//             console.log(error);
//         } else {
//             found_user.posts.push(post);
//             found_user.save((err, data)=>{
//                 if(err){
//                     console.log(err);
//                 } else {
//                     console.log(data);
//                 }
//             });
//         }
//     });
// });

// - CREATE 3RD TEST POST AND ADD TO TEST USER -
// Post.create({
//     title: 'tres',
//     content: 'much more stuff goes here'
// }, (err, post) => {
//     User.findOne({
//         email: 'nope@nada.net'
//     }, (err, found_user) => {
//         if (err) {
//             console.log(error);
//         } else {
//             found_user.posts.push(post);
//             found_user.save((err, data) => {
//                 if (err) {
//                     console.log(err);
//                 } else {
//                     console.log(data);
//                 }
//             });
//         }
//     });
// });

// ---- FIND USER AND ALL POSTS FOR USER ---------------------- -->
User.findOne({email: 'nope@nada.net'}).populate('posts').exec((err, user)=>{
    if(err){
        console.log(err);
    } else {
        console.log(user);
    }
});