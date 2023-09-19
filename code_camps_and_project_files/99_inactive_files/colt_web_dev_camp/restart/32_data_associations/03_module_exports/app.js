const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/32_2_1_reference', {useNewUrlParser: true});

// ---- IMPORT MODELS ---------------------- -->
const User = require('./models/user');
const Post = require('./models/post');

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
// User.findOne({email: 'nope@nada.net'}).populate('posts').exec((err, user)=>{
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });

// ---- TEST MODULE EXPORTS ---------------------- -->

// - CREATE 4TH TEST POST AND ADD TO TEST USER -
Post.create({
    title: 'cuatro',
    content: 'much more stuff goes here'
}, (err, post) => {
    User.findOne({
        email: 'nope@nada.net'
    }, (err, found_user) => {
        if (err) {
            console.log(error);
        } else {
            found_user.posts.push(post);
            found_user.save((err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(data);
                }
            });
        }
    });
});
