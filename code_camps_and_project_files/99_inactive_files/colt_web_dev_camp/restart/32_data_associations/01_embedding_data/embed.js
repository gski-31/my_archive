const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/32_1_embed', {useNewUrlParser: true});

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
    // EMBED SCHEMA // embedded data must come 1st
    posts: [postSchema]
});

let User = mongoose.model('User', userSchema);

// --- CREATE NEW USER AND EMBED POSTS --- >
// let newUser = new User({
//     email: 'stitch@disney.com',
//     name: 'Stitch'
// });

// newUser.posts.push({
//     title: 'Lilo Stuff',
//     content: 'aaa bbb ccc ddd'
// });

// newUser.save((err, user)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(user);
//     }
// });

// --- FIND CREATED USER AND ADD POST --- >
User.findOne({name: 'Stitch'}, (err, user) => {
    if (err) {
        console.log(err);
    } else {
        // console.log(user);
        // Add Post
        user.posts.push({
            title: 'agent 626',
            content: 'life on the run'
        });
        user.save((err, user)=>{
            if(err){
                console.log(err);
            } else {
                console.log(user);
            }
        });
    }
});

// --- SINGLE CASE / CREATE NEW POSTS --- >
// let newPost = new Post({
//     title: 'Life',
//     content: 'lorem lorem lorem lorem lorem'
// });

// newPost.save((err, post)=>{
//     if(err){
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });